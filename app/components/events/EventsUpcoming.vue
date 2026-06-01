<template>
  <section class="events-upcoming">
    <div class="events-upcoming__wrapper">
      <div class="events-upcoming__conainer">
        <h2 class="events-upcoming__title section-title">Мероприятия</h2>

        <TheSwiper
          :component="EventCard"
          :list="list"
          class="events-upcoming__swiper"
        />

        <a href="#" class="events-upcoming__link link">Смотреть все</a>
      </div>
    </div>
  </section>
</template>



<script setup>
import { EventCard } from "#components";
  const list = ref([]);

  const URL = "http://localhost:3000/json/events.json";

  const { data } = await useAsyncData(`events-upcoming`, () => {
    return $fetch(URL);
  });
  if (data?.value) list.value = data.value;
</script>

<style lang="less">
  .events-upcoming {
 position: relative;
    width: 100%;
    padding: 35px 0;
    overflow: hidden;
    &::before,
    &::after{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        width: 0;
        height: 0;
        border-bottom: 35px solid fade(@white, 60%);
    }
    &::before {
        left: 0;
        border-right: 34vw solid transparent;
    }
    &::after {
        right: 0;
        border-left: 66vw solid transparent;
    }
    &__wrapper {
        width: 100%;
        padding: 90px 0;
        background-color: fade(@white, 60%);
        &::before,
        &::after{
            content: "";
            display: block;
            position: absolute;
            bottom: 0;
            border-top: 35px solid fade(@white, 60%);
        }
        &::before {
            left: 0;
            border-right: 60vw solid transparent;
        }
        &::after{
            right: 0;
            border-left: 39vw solid transparent;
        }
        &__container {
            .container();
            display: flex;
            flex-direction: column;
            
        }
    }
}
</style>