<template>
  <q-card>
    <q-card-section>
      <q-img :src="image" style="width: 300px" />
      <div class="absolute-bottom text-subtitle2 text-center">
        {{ title }}
      </div>
    </q-card-section>
    <q-card-section>
      <slot name="content"></slot>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  image: {
    type    : String,
    required: false
  },
  title: {
    type: String,
    required: false
  }
});
</script>
