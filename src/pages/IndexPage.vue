<template>
  <q-page class="q-pa-md">
    <k-wizard  />
  </q-page>
</template>

<script setup lang="ts">
import KWizard from 'components/KWizard';
import { ref } from 'vue';

const step = ref(1);
</script>
