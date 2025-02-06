<template>
  <CustomLayout view='lHh Lpr lFf'>
    <CustomHeader
      :message="t('dashboard')"
    >
      <template v-slot:buttons>
        <CustomToggle />
        <CustomPrimaryButton
          icon="account_circle"
          :message="t('profile')"
          class="q-mr-sm"
          to="profile"
        />
        <CustomSecondaryButton icon="logout" />
      </template>
    </CustomHeader>
    <q-page-container>
      <router-view />
    </q-page-container>
    <CustomFooter />
  </CustomLayout>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

import CustomHeader          from 'components/header/CustomHeader.vue';
import CustomFooter          from 'components/footer/CustomFooter.vue';
import CustomPrimaryButton   from 'components/buttons/CustomPrimaryButton.vue';
import CustomSecondaryButton from 'components/buttons/CustomSecondaryButton.vue';
import CustomToggle          from 'components/util/CustomToggle.vue';
import CustomLayout          from 'components/util/CustomLayout.vue';

const { t } = useI18n();

defineOptions({
  name: 'DashboardLayout'
});
</script>
