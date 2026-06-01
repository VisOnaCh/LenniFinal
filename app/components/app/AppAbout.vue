<template>
<section class="app--about">
			<h2 class="section-title">О нас</h2>
			<div class="app--about__container"></div>
				<div class="app--about__block1">
					<h3 class="app--about__title about__title-mill">Проект «Millennials»</h3>
					<p class="app--about__text">Вдохновлен молодыми идейными людьми, увлеченными творчеством, эмоциями и желанием<br> сделать мир лучше, проявить себя. У них есть талант и стремление, у нас возможность помочь<br> им воплотить их мечту в реальность.</p>
				</div>
				<div class="app--about__block2">
				<picture class="app--about__picture">
					<img src="assets/images/about/about_1.jpg" class="app--about__img" alt="pic">
				</picture>
				<h3 class="app--about__title">Мы предоставляем площади для вашего мероприятия </h3>
				<picture class="app--about__picture2">
					<img src="assets/images/about/about_2.jpg" class="app--about__img" alt="pic2">
				</picture>
				<p class="app--about__text">И оказываем помощь с организацией, если вам это нужно.
Наша цель: вовлечь в культурную жизнь города как можно больше людей, помочь молодым ребятам сделать первые шаги к своей мечте и рассказать всем о том, что их волнует.</p>
				</div>


				<div class="pic4">

					<div class="pi4__img">
					<img src="assets/images/about/pic4.png" class="pic4__img-png" alt="pic4">
					</div> 

					<div class="pic4__text">
						<p class="app--about__text-4">Мы уже успешно организовали и<br> провели более 100 проектов.<br> Посмотрите, как это было классно.</p>
						<div class="pic4__btn">
						<a href="#" class="pic4__btn-text">
							Смотреть 
							<img src="assets/images/link.png" alt="Ссылка" class="pic4__btn-icon">
						</a>
						
						</div>
					</div>

				</div>


</section>
</template>

<script setup>

</script>

<style lang="less">
.app--about {
    max-width: 1334px;
    margin: 0 auto 100px;
    &__container { 
        box-sizing: border-box;
        justify-content:space-between;
        display: flex;
        align-items: center;  
        width: 100%; 
        max-width: 1414px; 
        margin: 0 auto; 
        padding-left: 40px;
        padding-right: 40px;
    }

    &__block1 {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    &__block2{
        display: grid;
        grid-template-columns: 1fr 406px;
        gap: 90px 65px;
        grid-template-areas: 
        "pic pic2"
        "title pic2"
        "text text";
    }

    &__picture{
        grid-area: pic;
    

    }

    &__title{
        margin: 10px 0 0;
        grid-area: title;
        font-size: 44px;
        font-weight: 700;
    }

    &__picture2{
        grid-area: pic2;
        align-self: flex-end;

    }

    &__text{
        grid-area: text;
        max-width: 870px;
        width: 100%;
        margin: 0 80px 0 auto;
        margin-bottom: 74px;
    }

    
}

.pic4 {
    display: flex;
    flex-direction: row;
    gap: 64px;
    
    &__img {
        width: 100%;
    }
   
    &__text {
        display: flex;
        flex-direction: column;
        gap: 90px;
        padding-top: 120px;
    }
    
    &__btn-text {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    &__btn-icon {
        padding-left: 128px;
    }
}
</style>