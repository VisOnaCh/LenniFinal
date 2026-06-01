<template>
<section class="app-upcoming">
    <div class="app-upcoming__wrapper">
        <div class="app-upcoming__container">
            <h2 class="app-upcoming__title section-title">Мероприятия</h2>
            <div class="app-upcoming__swipper">

                <TheSwiper :component="EventCard" :list="list" class="app-upcoming__swiper" />                
            </div>
            <a href="#" class="app-upcoming__link link">Смотреть все</a>
        </div>
    </div>
</section>
</template>

<script setup>
import { EventCard } from "#components";

 const list = ref([]);

  const URL = "http://localhost:3000/json/events.json";

  const { data } = await useAsyncData(`upcoming`, () => {
    return $fetch(URL);
  });
  if (data?.value) list.value = data.value;
</script>

<style lang="less">
.app-upcoming{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-left: 40px;
    padding-right: 40px;
    width: 100%; 
    max-width: 1414px; 

    &__events-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 120px 58px;
    margin-bottom: 130px;
    @media @bw1660{
       gap: 90px 40px; 
    }

    }
    &__event-card{
    width: calc(33.333% - 58px);

    
    }

    &__event-card{
        margin: 58px;
    }
    
    &__link {
    display: block;
        padding-left: 1478px;
        padding-right: 0;
        padding-top: 0;
        margin-top: 0;
        margin-bottom: 150px;


        
}
}

</style>