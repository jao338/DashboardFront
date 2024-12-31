<template>
  <q-page class="row items-center justify-evenly">
    <CustomCard v-for="(card, key) in cards" :key="key" :image="card.header_image" :title="card.name">
      <template v-slot:content>
        <div>aaa</div>
      </template>
    </CustomCard>
  </q-page>
</template>

<script setup lang="ts">
import CustomCard from '../../components/cards/CustomCard.vue';

import Service from '../Dashboard/util/Service';

import { ref, onMounted } from 'vue';

const { games } = Service('/api/games');

const data = ref<{ [key: string]: any }>({});
const cards = ref<{ [key: string]: any }>([]);

onMounted(async () => {
  try {
    const response = await games();

    data.value = response.data;

    Object.values(response.data).forEach(record => {
      const headerImage = record['details']?.header_image;
      const name = record?.name;

      cards.value.push({ header_image: headerImage, name: name });
      // images.value = record['details'].header_image
    })

    console.log(cards.value)

  } catch (error) {
    throw error;
  }
});
</script>
