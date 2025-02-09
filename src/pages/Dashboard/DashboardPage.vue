<template>
  <CustomPage class="q-px-lg q-py-lg">
    <CustomSkeleton v-if="loadingCards" :skeletons="skeletons"/>
    <div class="row justify-between">
      <CustomCard
        v-for="(card, key) in cards"
        :key="key"
        :image="card.header_image"
        :title="card.name"
        class="col-lg-2 col-md-2 col-sm-6 col-xs-6"
      >
        <template v-slot:content>
          <div class="row">
            <div class="col-12">
              <strong>{{ t('devs') }}</strong> -
              {{ card.developers[0] }}
            </div>
            <div class="col-12">
              <strong>{{ t('generos') }}</strong> -
              <span v-for="(genre, key) in card.genres" :key="key">{{ genre.description + ' ' }}</span>
            </div>

            <div class="col-12">
              <strong>{{ t('numeroJogadoresAtivos') }}</strong> -
              <span>{{ card.numberOfPlayers }}</span>
            </div>
          </div>
        </template>
      </CustomCard>
    </div>

  </CustomPage>

</template>

<script setup lang="ts">
import CustomCard from '../../components/cards/CustomCard.vue';
import CustomPage from '../../components/util/CustomPage.vue';
import CustomSkeleton from '../../components/util/CustomSkeleton.vue'

import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';

import Service from '../Dashboard/util/Service';

const { t } = useI18n();

const { games } = Service('/api/games');

const data = ref<{ [key: string]: any }>({});
const cards = ref<{ [key: string]: any }>([]);
const loadingCards = ref(true)

const skeletons = ref([
  'q-mx-sm q-my-xs col-lg-2 col-md-2 col-sm-6 col-xs-6',
  'q-mx-sm q-my-xs col-lg-2 col-md-2 col-sm-6 col-xs-6',
  'q-mx-sm q-my-xs col-lg-2 col-md-2 col-sm-6 col-xs-6',
  'q-mx-sm q-my-xs col-lg-2 col-md-2 col-sm-6 col-xs-6',
  ]
)

onMounted(async () => {
  try {
    const response = await games();

    data.value = response.data;

    Object.values(response.data).forEach(record => {
      const headerImage = record['details']?.header_image;
      const name = record?.name;
      const genres = record?.details.genres;
      const developers = record?.details.developers ?? t('desconhecido');
      const numberOfPlayers = record?.numberOfPlayers;

      cards.value.push({
        header_image: headerImage,
        name: name,
        genres: genres,
        developers: developers,
        numberOfPlayers: numberOfPlayers
      });
    });

  } catch (error) {
    throw error;
  }finally {
    loadingCards.value = !loadingCards.value
  }
});
</script>
