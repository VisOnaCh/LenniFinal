<template>
  <article class="event-card">
    <NuxtLink :to="`/events/${data.slug}`" class="event-card__link">
      <picture class="event-card__picture">
        <source type="image/webp" :srcset="data.img_webp" />

        <img :src="data.img" :alt="data.alt" class="event-card__img" />
      </picture>

      <h3 class="event-card__title">{{ data.title }}</h3>

      <p class="event-card__description">{{ data.description }}</p>

      <time v-if="date" :datetime="data.date" class="event-card__time">
        {{ date }}
      </time>
    </NuxtLink>
  </article>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: Object,
      default: () => ({}),
    },
  });

  const date = computed(() => {
    try {
      const date = new Date(props.data.date);
      return `${date.toLocaleDateString()} | начало ${date.toLocaleTimeString(
        "ru-RU",
        {
          hour: "2-digit",
          minute: "2-digit",
        },
      )}`;
    } catch {
      return null;
    }
  });
</script>

<style lang="less">
  .event-card {
    display: flex;
    flex-direction: row;

    width: 406px;
    max-width: 100%;
    min-width: 280px;
        
    &__link {
        display: flex;
        flex-direction: column;
        width: 100%;
        color: #1f1e1e;
        

        &:hover{
            .event-card__title{
                color: #bc3324;
                text-decoration-color: #bc3324;
                text-decoration: underline ; 
            }
        }
    }

    
    &__title{
        margin: 0 0 15px;
        min-height: 65px ;
        font-weight: 600;
        font-size: 24px;
        line-height: 1.375;
        transition: color 0.2s, text-decoration-color 0.2s;
        text-decoration: none;
    }

    &__picture{
        display: block;
        position: relative;
        margin: 0 0 25px;
        font-size: 0;
        overflow: hidden;

    }





    &__description{
        margin: 0 0 15px;
        text-decoration: none;
    }

  }
</style>