<template>
  <q-card v-for="(skeleton, index) in skeletons" :class="skeleton" :key="index" style="min-height: 30vh">
    <q-card-section class="q-px-none q-pt-none">
      <q-skeleton type="rect" style="height: 10vh" />
      <div class="q-px-md q-mt-md text-subtitle2">
        <q-skeleton type="text"/>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-md q-px-md">
      <q-skeleton type="text" />
      <q-skeleton type="text" />
      <q-skeleton type="text" />
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  skeletons: {
    type: Array as PropType<string[]>,
    required: true
  }
});

</script>
