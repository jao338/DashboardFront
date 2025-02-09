<template>
  <q-card style="min-height: 30vh">
    <q-card-section class="q-px-none q-pt-none">
      <q-img :src="image" />
      <div class="q-pl-md q-pt-md text-subtitle2">
        {{ title }}
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <slot name="content"></slot>
    </q-card-section>
  </q-card>
</template>

<script setup>

defineProps({
  image: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  }
});
</script>
