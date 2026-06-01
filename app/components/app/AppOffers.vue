<template>
<section class="app-offers">
    <h2 class="app-offers_btn">Я хочу:</h2>

    <div class="app-offers_btns">
        <button type="button" class="app-offers__btn btn app-offers__btn--red" @click="openPopup">
            Провести мероприятие
        </button>
        <button type="button" class="app-offers__btn btn">
            Стать арендатором
        </button>
    </div>

    <ModalWindow :name="'getOffer'" :title="'Заполните форму<br />и мы подберем вам площадку'" />
</section>
</template>

<script setup>
  const store = useStore();


  const openPopup = () => {
    store.openModal("getOffer");
  }
</script>

<style lang="less">
.app-offers {
    .container;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &__title {
        margin: 0 auto 45px;
        font-weight: 400;
        font-family: @font2;
        font-size: 22px;
        line-height: 1.36;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        @media @bw1340 {
            font-size: 16px;
        }
        @media @bw600 {
            margin: 0 auto;
        }
        @media @bw500 {
            font-size: 13px;
        }
    }

    &__btns {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 100px;
 
        @media @bw600 {
            flex-direction: column;
            align-items: stretch;
        }
    }

    &__btn{
        gap: 100px;
        @media @bw600 {
            width: 100%;
            margin-top: 25px;
        }
    }
}
</style>