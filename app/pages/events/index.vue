<template >
  <div class="events">
    <div class="back__link">
      <a href="/" class="back__link-main">
        <p>Главная</p>
      </a>
      <p class="back__link-events" >/ Мероприятия</p>
    </div>
    
    <AppListing 
    v-slot="{list}" 
    title="Мероприятия" 
    class="events__listing"
    :moreBtn="true"
    :url="'http://localhost:3000/json/events.json'"
    >
      <EventCard
        v-for="(card, index) in list"
        :key="index"
        :data="card"
        class="app-listing__card"
      />
    </AppListing>

    <AppServices class="events__services"/>
    <AppOffers class="home__offers"/>
    <AppContacts class="home__contacts cont__events"/>
  </div>
</template>

<script setup>

</script>

<style lang="less">
.cont__events{
  margin-top: 180px;
}
  .back__link {
    display: flex;
    flex-direction: row;
    margin-left: 287px;
    margin-bottom: 138px;
    margin-top: 20px;
    
    &-main {
      text-decoration: none;
      margin-right: 5px;
      font-family: @font1;
      &:hover {
      color: @red;  /* ← красный цвет при наведении */
    }
      
    }
    &-events{
      font-family: @font1;
    }
  }
</style>