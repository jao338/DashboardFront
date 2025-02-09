<template>
  <q-carousel
    v-model="currentSlide"
    swipeable
    animated
    :arrows="arrows"
    :navigation="navigation"
    :height="carouselHeight"
    class="bg-purple text-white rounded-borders"
  >
    <q-carousel-slide
      v-for="(group, index) in groupedItems"
      :key="index"
      :name="`slide-${index}`"
      class="row items-center justify-center q-pa-md"
    >
      <slot :items="group"></slot>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

defineProps({
  itens: {
    type: Array,
    required: true
  },
  itemsPerSlide: {
    type: Number,
    default: 5,
  },
  arrows: {
    type: Boolean,
    default: true,
  },
  navigation: {
    type: Boolean,
    default: true,
  },
  carouselHeight: {
    type: String,
    default: '400px',
  },
});

const currentSlide = ref(0);

const groupedItems = computed(() => {
  const groups = [];
  for (let i = 0; i < items.length; i += itemsPerSlide) {
    groups.push(items.slice(i, i + itemsPerSlide));
  }
  return groups;
});
</script>
