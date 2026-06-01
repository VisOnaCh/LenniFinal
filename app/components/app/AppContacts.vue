<template>
<section class="app-contacts home__contacts">
	<h2 class="section-title section-title__contacts" >Контакты</h2>
	<div class="app-contacts__block">
		<div class="app-contacts__content">
			<div class="app-contacts__icons">
				<img src="assets/images/contacts/loc.png"  alt="loc"  class="app-contacts__loc">
				<div><br><b>Томск, Красноармейская 146</b><br>2 этаж<br> оф. 206</div>
			</div>
			<div class="app-contacts__icons">
				<img src="assets/images/contacts/home.png"  alt="home"  class="app-contacts__loc">
				<div><br><b>Отдел аренды </b><br>8 (3822) 90-72-56<br>idat@tusur.ru</div>
			</div>
			<div class="app-contacts__icons">
				<img src="assets/images/contacts/asd.png"  alt="star"  class="app-contacts__loc">
				<div><br><b>Отдел мероприятий </b><br>8 (3822) 90-72-56<br>idat@tusur.ru</div>
			</div>
		</div>
        <div class="app-contacts__map">
          <ClientOnly>
            <TheMapClient />
          </ClientOnly>
        </div>
	</div>

</section>
</template>

<script setup>
import TheMapClient from '~/components/the/TheMap.client.vue';
</script>

<style lang="less">
.app-contacts {
&__block{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 293px;
    margin-right: 290px;
    gap:115px;
}
    &__content {
        display: flex;
        flex-direction: column;
        gap: 67px;
        &:last-child {
            gap: 0;
        }
    }
    &__icons {
        display: flex;
        flex-direction: row;
        gap: 67px;

    }
    &__map {
    flex: 1;
    min-width: 0;
    width: 100%;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;

    @media @bw1020 {
      height: 350px;
    }

    @media @bw768 {
      height: 300px;
    }
  }
}
</style>