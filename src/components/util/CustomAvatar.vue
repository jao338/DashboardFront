<template>
  <q-avatar size="100px">
    <img :src="props.src" :alt="t('nao_encontrado')"/>
    <q-input
      @update:model-value="val => { file = val[0] }"
      filled
      type="file"
      hint="Native file"
    />
  </q-avatar>

</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  src: {
    type: String,
    required: false,
  },
});

</script>
