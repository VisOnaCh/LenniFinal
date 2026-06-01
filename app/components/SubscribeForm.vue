<template>
  <form class="subscribe-form" novalidate @submit.prevent="onSubmit">
    <h3 class="subscribe-form__title">
      Подпишись и будь в курсе происходящего
    </h3>

    <div class="subscribe-form__wrapper">
      <div class="subscribe-form__field-wrapper">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="subscribe-form__input"
          required
        />
      </div>

      <button type="submit" class="subscribe-form__submit">Подписаться</button>

      <span
          v-if="submitCount && (!email || !emailIsValid)"
          class="subscribe-form__error field-error"
        >
          {{
            email && !emailIsValid
              ? "Email указан неверно"
              : "Это поле обязательно"
          }}
        </span>
    </div>

    <label class="subscribe-form__check check">
      <input
        v-model="agreement"
        :true-value="1"
        :false-value="0"
        type="checkbox"
        class="check__input"
        required
      />
      <span class="check__mark"></span>
      <span class="check__caption check__caption--s">
        Согласен на обработку персональных данных
      </span>
      <span
      v-if="submitCount && !agreement"
      class="subscribe-form__error field-error"
    >
      Это поле обязательно
    </span>
    </label>
  </form>
</template>

<script setup>
const email = ref("");
  const agreement = ref(0);
    const submitCount = ref(0);

    const emailIsValid = computed(() => {
    return /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,6}$/.test(email.value);
  });

  const onSubmit = () => {
    submitCount.value += 1;
    if (!email.value || !emailIsValid.value || !agreement.value) return;


    console.log({ email: email.value, agreement: agreement.value });
    alert("Подписка оформлена");
  };
</script>

<style lang="less">
.subscribe-form {
  width: 405px;
  max-width: 100%;

  &__title {
    margin: 0 0 25px;
    font-size: 16px;
    line-height: 22px;
    @media @bw500 {
      margin: 0 0 15px;
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
    }
  }

  &__wrapper {
    width: 100%;
    height: 49px;
    display: flex;
    background: transparent;
    position: relative;
    margin-bottom: 30px; 
  }

  &__field-wrapper {
    flex: 1;
    position: relative;
    top: 0;
    left: 0;
  }

  &__input {
    width: 100%;
    height: 100%;
    padding: 0 16px;
    border: 1px solid #e0e0e0;
    font-size: 14px;
    background-color: #ffffff;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: @black;
    }

    &.error {
      border-color: @red;
    }
  }

  &__submit {
    height: 100%;
    padding: 0 20px;
    border: none;
    background-color: @black;
    color: #ffffff;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    white-space: nowrap;

    &:hover {
      background-color: @red;
    }

    &:active {
      background-color: @red;
    }
  }

  &__error {
    position: absolute;
    bottom: -25px;
    left: 0;
    font-size: 12px;
    color: @red;
    line-height: 1.2;
    white-space: nowrap;
    
    @media @bw500 {
      font-size: 11px;
      bottom: -20px;
      white-space: normal;
    }
  }
}

.check {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;

  &__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  





  /* Ошибка для checkbox снизу */
  .subscribe-form__error {
    position: absolute;
    bottom: -20px;
    white-space: nowrap;
    
    @media @bw500 {
      white-space: normal;
      bottom: -18px;
    }
  }
}

/* Если нужно подсвечивать поле с ошибкой */
.subscribe-form__input.error {
  border-color: @red;
}
</style>