<template>
  <article v-if="data" class="event">
    <header class="event__header">
      <h1 class="event__title title">{{ data.title }}</h1>

      <div class="event__about">
        <div class="event__info">
          <div class="event__border"></div>

          <time v-if="datetime" :datetime="data.date" class="event__time">
            {{ datetime.date }}
          </time>
          <div class="event__info-text">{{ data.location }}</div>
          
          <div class="event__border"></div>
        </div>

        <picture class="event__picture">
          <source v-if="data.img_webp" type="image/webp" :srcset="data.img_webp" />

          <img :src="data.img" :alt="data.alt || data.title" class="event__image" />
        </picture>

        <div class="event__info">
          <div class="event__border-after"></div>
          <span v-if="datetime" class="event__time" data-caption="начало">
            {{ datetime.time }}
          </span>
          <div class="event__info-text">{{ data.address }}</div>
          <div class="event__border-after"></div>
        </div>
      </div>
    </header>

    <div class="event__container">
      <div class="content event__content" v-html="data.content"></div>

      <EventReserve></EventReserve>

    </div>
  </article>

  <div v-else-if="error" class="event-error">
    <h2>Мероприятие не найдено</h2>
    <p>{{ error.message }}</p>
    <NuxtLink to="/">Вернуться на главную</NuxtLink>
  </div>

  <div v-else class="event-loading">
    <p>Загрузка...</p>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = computed(() => route.params.event);

// ИСПРАВЛЕНО: используем относительный путь вместо абсолютного
const URL = computed(() => `/json/events/${slug.value}.json`);

const { data, error } = await useFetch(URL);

// ИСПРАВЛЕНО: добавлена проверка существования data.value
const datetime = computed(() => {
  if (!data.value?.date) return null;
  
  try {
    const date = new Date(data.value.date);
    return {
      date: date.toLocaleDateString('ru-RU'),
      time: date.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  } catch {
    return null;
  }
});
</script>

<style lang="less">
.event {
  padding: 40px 0 150px;
  padding-left: 80px;
  
  @media @bw768 {
    padding: 40px 0 150px;
    padding-left: 20px;
    padding-right: 20px;
  }

  &__header {
    display: flex;
    flex-direction: column;
  }

  &__about {
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin-top: 50px;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-family: Lora;
    font-size: 50px;
    
    @media @bw768 {
      font-size: 30px;
      gap: 20px;
      flex-wrap: wrap;
    }
  }

  &__title {
    margin-left: 490px;
    width: 819px;
    height: 90px;
    display: flex;
    justify-content: center;
    font: 70px Lora;
    
    @media @bw768 {
      margin-left: 0;
      width: auto;
      height: auto;
      padding-left: 0;
      font: 40px Lora;
      text-align: center;
    }
  }

  &__border {
    display: flex;
    margin-bottom: 60px;
    margin-top: 60px;
    
    &::before {
      content: "";
      flex-grow: 1;
      width: 2px;
      height: 2px;
      margin-right: 50px;
      background: linear-gradient(
        270deg,
        #1c1b1b 0%,
        rgba(255, 255, 255, 0) 82.86%
      );
      
      @media @bw1660 {
        margin-right: 45px;
      }
      @media @bw1340 {
        margin-right: 25px;
      }
      @media @bw768 {
        margin-right: 10px;
      }
    }
  }

  &__border-after {
    display: flex;
    margin-bottom: 60px;
    margin-top: 60px;
    
    &::after {
      content: "";
      flex-grow: 1;
      width: 2px;
      height: 2px;
      margin-left: 50px;
      background: linear-gradient(
        90deg,
        #1c1b1b 0%,
        rgba(255, 255, 255, 0) 82.86%
      );
      
      @media @bw1660 {
        margin-left: 45px;
      }
      @media @bw1340 {
        margin-left: 25px;
      }
      @media @bw768 {
        margin-left: 10px;
      }
    }
  }

  &__image {
    max-width: 100%;
    height: auto;
  }

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__content {
    margin-top: 50px;
  }
}

.event-error,
.event-loading {
  text-align: center;
  padding: 100px 20px;
  
  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  a {
    color: #1c1b1b;
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
    }
  }
}
</style>