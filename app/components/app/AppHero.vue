<template>
  <header class="app-hero">
    <h1 class="app-hero__title">Арт - пространство</h1>

    <TheLogo class="app-hero__logo"/>

    <p class="app-hero__description">
      для людей, горящих сердец&nbsp;и&nbsp;делом
      <br/>
      место для настоящего
    </p>
  </header>   
</template>

<script setup>

</script>

<style lang="less">
.app-hero {
  &__title,
  &__description{
    .container;
    max-width: 1070px;
    font-family: @font2;
    font-weight: 400;
    font-size: 45px;
    line-height: 1.28;
    text-align: center;
    text-transform: uppercase;
    @media @bw1660 {
      font-size: 35px;
    } 
    @media @bw1340 {
      font-size: 30px;
    }
    @media @bw768 {
      font-size: 20px;
    }
    @media @bw500 {
      font-size: 13px;
    } 
  }
  &__title{
    margin: 0 auto 70px;
    @media @bw1340 {
      font-size: 50px;
    }
    @media @bw768 {
      font-size: 30px;
    }
  }
  &__description {
    margin: 0 auto;
  }
  &__logo {
    margin: 0 0 70px;
    @media @bw1340 {
      margin-bottom: 50px;
    }
    @media @bw768 {
      margin-bottom: 30px;
    }
    
  }
}
</style>