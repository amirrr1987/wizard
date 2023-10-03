<template>
  <q-page class="row items-center justify-evenly">
    <k-wizard v-model="step" />
  </q-page>
</template>

<script setup lang="ts">
import KWizard from 'components/KWizard';
import { ref } from 'vue';

const step = ref(1)
</script>
