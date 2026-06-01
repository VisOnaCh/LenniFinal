<template>
  <ClientOnly>
    <teleport to="body">
      <div v-if="isActive" class="modal-window">
        <div class="modal-window__wrapper">
          <div class="modal-window__sticky-close">
            <button
              type="button"
              title="Закрыть"
              class="modal-window__x-btn x-btn"
              @click="close"
            >
              <SvgIcon class="x-btn__icon" name="x"/>
            </button>
          </div>

          <div class="modal-window__container">
            <h2 class="modal-window__title" v-html="title"></h2>

            <slot></slot>


<div class="block1">
                <div class="events-form__list">
      <div class="events-form__group events-form__group--w50">
        <FieldRadio 

          name="format"
          :options="[
          {
            label: 'Мастер-класс/семинар',
            value: 'seminar',
          },
          {
            label: 'Концерт/выступление',
            value: 'concert',
          },
          {
            label: 'Выставка/показ',
            value: 'show',
          },
          {
            label: 'Другое',
            value: 'other',
          },
        ]"
          :initialValue="'seminar'"
          :rules="{ required: true }"
          :submitCount="submitCount"
          :label="'Формат мероприятия:'"
          class="events-form__field"
        />
      </div>
    </div>


<div class="block1-2">
    <div class="events-form__group events-form__group--w50">
      <div class="people">
        <FieldSelect
          name="amount"
          :options="[
            {
              label: 'до 20 человек',
              value: '20',
            },
            {
              label: 'от 20 до 100 человек',
              value: '100',
            },
            {
              label: 'от 100 до 500 человек',
              value: '500',
            },
            {
              label: 'более 500 человек',
              value: '1000',
            },
          ]"
          :initialValue="'20'"
          :rules="{ required: true }"
          :submitCount="submitCount"
          label="Планируемое количество посетителей:"
          placeholder="Выберите количество"
          class="events-form__field"
        /></div>
            <div class="data">
        <FieldDate
          name="date"
          label="Дата проведения:"
          :rules="{ required: true }"
          :submitCount="submitCount"
        />
      </div>
      </div>
      </div>
      
</div>

<div class="events-form__section">
        <h3 class="events-form__section-title">
          Контакные данные:
        </h3>

        <div class="events-form__list">
          <FieldInput
            name="first_name"
            label="Имя"
            placeholder="Имя"
            :rules="{ required: true }"
            :submitCount="submitCount"
            class="events-form__field events-form__field--w50"
          />

          <FieldInput
            name="last_name"
            label="Фамилия"
            placeholder="Фамилия"
            :rules="{ required: true }"
            :submitCount="submitCount"
            class="events-form__field events-form__field--w50"
          />

          <FieldInput
            name="phone"
            label="Телефон"
            placeholder="+7 (###) ###-##-##"
            :rules="{ required: true, phone: true }"
            mask="+7 (###) ###-##-##"
            :submitCount="submitCount"
            class="events-form__field events-form__field--w50"
          />

          <FieldInput
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
            :rules="{ required: true, email: true }"
            :submitCount="submitCount"
            class="events-form__field events-form__field--w50"
          />
        </div>
      </div>

 <FieldText 
name="text" 
label="Есть пожелания? Напишите нам:"
:submitCount="submitCount"

/> 



    <FieldCheck
      name="agreement"
      :rules="{ required: true }"
      :submitCount="submitCount"
      :label="`Я соглашаюсь с <a href='#' target='_blank'>пользовательским соглашением</a> и с <a href='#' target='_blank'>политикой</a> использования персональных данных`"
      smallLabel
     
    />

  <form class="events-form" @submit="onSubmit">
    <div class="events-form__btns">
      <button type="submit" class="btn events-form__submit">Отправить</button>

      <button type="button" class="events-form__close-btn btn" @click="close">
        Закрыть
      </button>
    </div>
  </form>
          </div>
        </div>
      </div>
    </teleport>
  </ClientOnly>
</template>

<script setup>
  const props = defineProps({
    name: {
        type: String,
        required: true
    },
    title: {
      type: String,
      default: "",
    },
  });

  const store = useStore();
  const isActive = computed(() => {
    return props.name ? store.modal[props.name] : null;
  })

  const close = () => {
    if (props.name) store.closeModal(props.name);
  }
  
  import { useForm } from "vee-validate";
  const emits = defineEmits(["close"]);
  const { submitCount, handleSubmit } = useForm();
  const onSubmit = handleSubmit((submitValues) => {
    console.log(submitValues);
    alert("Отправлено");

    close();
  });
</script>

<style lang="less">
.events-form {
  max-width: 1414px;
  width: 100%;
  margin: 0 auto; /* Центрирование по горизонтали */
  padding: 0 170px; /* Отступы от краёв по 170px */
  box-sizing: border-box;
  &__section{
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  &__section-title{
    display: flex;
    margin-left: 116px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 60px;
    justify-content: center; /* Распределение пространства между элементами */
  }

  &__field {
    margin: 0;
    flex: 1 1 auto;

    &--w50 {
      width: calc(50% - 30px);
      min-width: 200px; /* Минимальная ширина для мобильных */
    }
  }

  @media @bw1340 {
    padding: 0 100px;
  }

  @media @bw1020 {
    padding: 0 50px;
  }

  @media @bw768 {
    padding: 0 20px;

    &__field {
      width: 100%;
      
      &--w50 {
        width: 100%;
      }
    }

    &__list {
      gap: 20px;
      justify-content: center;
    }
  }
}

.field-title {
  margin: 0 0 25px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.4;
  color: @black;
}

.block1 {
  display: flex;
  flex-direction: row;
  gap: 230px;
}
.block1-2 {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.people {
  margin-bottom: 30px;
}
.modal-window {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 110;
  
  /* Фон фиксированный, не двигается при скролле */
  background-color: fade(@black, 40%);
  backdrop-filter: blur(20px);
  
  /* Страница под модалкой может скроллиться */
  overflow-y: auto;
  overflow-x: hidden;
  
  &__wrapper {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 355px;
    max-width: 1210px;
    top: 100px;  
    background-color: @gray;
    background-image: url('@assets/images/noise.png');
    background-position: 0 0;
    background-size: auto;
    background-repeat: repeat;
    box-shadow: 0px 0px 30px rgba(31, 31, 30, 0.55);
    
    @media @bw1340 {
      max-width: 90%;
      margin: 40px auto;
    }
    
    @media @bw768 {
      max-width: 95%;
      margin: 20px auto;
    }
  }
  
  &__container {
    box-sizing: border-box;
    width: 100%;

    padding: 0 30px 40px;
    
    @media @bw768 {
      padding: 0 20px 30px;
    }
  }
  
  &__title {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: -40px 0 70px -85px;
    padding: 10px 85px;
    width: 595px;
    min-height: 80px;
    background-color: @black;
    text-transform: uppercase;
    font-weight: 400;
    font-family: @font2;
    font-size: 22px;
    line-height: 1.36;
    color: @white;
    letter-spacing: 0.02em;
    
    @media @bw1340 {
      width: 515px;
      margin: -40px 0 70px -45px;
      padding: 10px 45px;
    }
    @media @bw1170 {
      width: 465px;
      margin: -40px 0 70px -20px;
      padding: 10px 20px;
    }
    @media @bw768 {
      width: calc(100% - 40px);
      min-width: auto;
      min-height: 60px;
      margin: -30px 0 40px;
      padding: 10px 20px;
      font-size: 14px;
    }
  }
  
  &__sticky-close {
    position: sticky;
    top: 20px;
    align-self: flex-end;
    width: 0;
    height: 0;
    z-index: 10;
  }
  
  .x-btn__icon {
    display: block;
    width: 24px;
    height: 24px;
    color: @white;
    
    @media @bw768 {
      width: 16px;
      height: 16px;
    }
  }

    .events-form{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .events-form__btns {
  width: 401px; 
  height: 52px; 
  display: flex;
  gap: 93px; 
  background: transparent;
  position: relative;
  margin-top: 30px;
}

.events-form__submit {
  width: 149px;
  height: 52px; 
  padding: 0;
  border: none;
  background-color: transparent;
  font-family: @font1;
  color: @black;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid @black;

  &:hover {
    background-color: @black;
    color: @white;
  }

  &:active {
    background-color: @red;
  }
}

.events-form__close-btn {
  width: 149px; /* Ширина кнопки */
  height: 52px; /* Высота кнопки */
  padding: 0;
  border: none;
  background-color: transparent;
  color: @black;
    font-family: @font1;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: @red;
  }


}

/* Альтернативный вариант через justify-content, если gap не поддерживается */
.events-form__btns--alternative {
  width: 401px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  background: transparent;
  
  .events-form__submit,
  .events-form__close-btn {
    width: 149px;
    height: 52px;
  }
}

}

</style>