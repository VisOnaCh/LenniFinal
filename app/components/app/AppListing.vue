<template>
  <section class="app-listing">
    <h3 class="app-listing__title section-title">
      {{ title }}
    </h3>

    <div :class="listClass">
      <slot :list="list" />
    </div>

    <button v-if="moreBtn" type="button" class="more-btn app-listing__more-btn">
      Показать всё

      <SvgIcon
        class="more-btn__arrow"
        name="arrow_down"
        width="62"
        height="92"
      />
    </button>

    <a href="#" v-else-if="moreLink" class="app-listing__link link">Смотреть все</a>
  </section>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: "",
      
    },
    url: {
    type: String,
    default:"",
    required:true,
  },
  moreBtn: {
    type: Boolean,
    default: false
  },
  moreLink:{
    type:Boolean,
    default: false
  },
  grid:{
    type: String,
    default: "row",
  },
  });

const listClass = computed(() => props.grid === "column" ? "app-listing__column-list": "app-listing__list" )

const list = ref([]);

const { data } = props.url ? await useAsyncData("list-$(props.url)", () => {
  return $fetch(props.url);
}) : { data: null };

if (data?.value) list.value = data.value
</script>

<style lang="less">
  .app-listing {
    box-sizing: border-box;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;

    @media @bw1340 {
      padding: 0 30px;
    }

    @media @bw768 {
      padding: 0 20px;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 58px;
      justify-content: center;
      margin-bottom: 130px;

      @media @bw1660 {
        gap: 40px;
      }

      @media @bw768 {
        gap: 30px;
        margin-bottom: 80px;
      }
    }

    &__column-list {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
  }
</style>