<template>
  <div class="field">
    <label class="field__input-label">
      <span v-if="label" class="field__label">
        {{ label }}<template v-if="rules?.required">*</template>
      </span>

      <input
        class="field__input"
        :type="type"
        :placeholder="placeholder"
        v-model="value"
        v-maska="mask"
      />
    </label>

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
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    mask: {
      type: [Object, String],
      default: "",
    },
    submitCount: {
      type: Number,
      default: 0,
    },
  });

  const { errorMessage, value } = useField(props.name, props.rules, {
    initialValue: props.initialValue,
  });
</script>

<style lang="less">
.field {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 418px; /* Максимальная ширина 405px */
  
  &__input-label {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  &__label {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.375;
    color: @black;
  }
  
  &__input {
    box-sizing: border-box;
    width: 100%;
    height: 55px;
    padding: 17px 20px 16px;
    border: none;
    border-radius: 5px;
    background-color: @white;
    font-family: @font1;
    font-size: 16px;
    line-height: 20px;
    color: @black;
    transition: box-shadow 0.2s;
    
    &::placeholder {
      color: fade(@black, 40%);
    }
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px fade(@red, 30%);
    }
  }
  
  &__error {
    margin-top: 8px;
    font-size: 14px;
    line-height: 1.3;
    color: @red;
  }
}

.field-error {
  display: block;
}
</style>