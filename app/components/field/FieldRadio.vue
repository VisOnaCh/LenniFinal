<template>
  <div class="field">
    <fieldset class="field__fieldset">
      <legend v-if="label" class="field__title field-title">{{ label }}</legend>

      <label
        v-for="option in options"
        :key="option.value"
        class="radio field__radio"
      >
        <input
          type="radio"
          class="radio__input"
          :name="name"
          :value="option.value"
          :checked="value === option.value"
          @change="handleChange(option.value)"
        />
        <span class="radio__mark"></span>

        <span class="radio__caption" v-html="option.label"></span>
      </label>
    </fieldset>

    <span v-if="errorMessage && submitCount" class="field__error field-error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup>
  import { useField } from "vee-validate";

  const props = defineProps({
    initialValue: {
      default: undefined,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    submitCount: {
      type: Number,
      default: 0,
    },
  });

  const initialValue = computed(
    () =>
      ((props.initialValue || props.initialValue === 0) &&
        props.options.find((option) => option.value === props.initialValue)
          ?.value) ||
      undefined,
  );

  const { errorMessage, handleChange, value } = useField(
    props.name,
    props.rules,
    {
      initialValue: initialValue.value,
      type: "radio",
    },
  );
</script>

<style lang="less">
// Стили для поля
.field {
  margin-bottom: 20px;
  
  &__fieldset {
    border: none;
    padding: 0;
    margin-left: 170px;

  }
  
  &__title {
    display: block;
    margin-bottom: 15px;
    font-family: @font1;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.2;
    color: @black;
    
    @media @bw500 {
      font-size: 14px;
      margin-bottom: 12px;
    }
  }
  
  &__error {
    display: block;
    margin-top: 8px;
    font-size: 12px;
    line-height: 1.2;
    color: @red;
  }
}

// Основные стили для радио-кнопок
.field__radio {
  display: flex;
flex-direction: row;
  gap: 12px;
  cursor: pointer;
  margin-bottom: 15px; // Отступ между вариантами 15px
  
  &:last-child {
    margin-bottom: 0;
  }
}

.radio {
  &__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    
    &:checked {
      & ~ .radio__mark {
        background-color: @black;
        border-color: @black;
      }
    }
    
    &:focus {
      & ~ .radio__mark {
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
      }
    }
    
    &:disabled {
      & ~ .radio__mark {
        opacity: 0.5;
        cursor: not-allowed;
      }
      
      & ~ .radio__caption {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
  
  &__mark {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid @black;
    background-color: transparent;
    background-clip: content-box;
    padding: 3px;
    transition: all 0.2s ease;
  }
  
  &__caption {
    flex: 1;
    font-family: @font1;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.375;
    color: @black;
    transition: color 0.2s ease;
    
    @media @bw500 {
      font-size: 14px;
      line-height: 1.3;
    }
  }
  
  // Эффект при наведении
  &:hover {
    .radio__mark {
      border-color: @red;
      transform: scale(1.05);
    }
    
    .radio__caption {
      color: @red;
    }
  }
}

// Адаптив для мобильных устройств
@media @bw500 {
  .field__radio {
    gap: 10px;
    margin-bottom: 12px;
  }
  
  .radio {
    &__mark {
      width: 18px;
      height: 18px;
      padding: 2px;
    }
  }
}

// Анимация при выборе
.radio {
  &__mark {
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: @black;
      transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }
  
  &__input:checked ~ &__mark::before {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>