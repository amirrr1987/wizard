<template>
  <div class="q-pa-md">
    <!-- <template v-for="(step, stepIndex) in wizardStore.wizard" :key="stepIndex">
      <div class="">
        {{ step }}
      </div>
      <hr />
    </template> -->
    <q-stepper v-model="step" ref="stepper" color="primary" animated>
      <template
        v-for="(stepper, stepperIndex) in wizardStore.wizard"
        :key="stepperIndex"
      >
        <q-step
          :name="stepperIndex"
          title="Select campaign settings"
          icon="settings"
          :done="step > +stepperIndex"
        >
          <template v-for="item in stepper.data" :key="item.id">
            {{ item.name }}
            <q-radio v-model="shape" :val="item.id" :label="item.name" />
          </template>
        </q-step>
      </template>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="nextCLick"
            color="primary"
            :label="step === size(wizardStore.wizard) ? 'Finish' : 'Continue'"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
    {{ step }}
    {{ step === size(wizardStore.wizard) }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useWizardStore } from 'src/stores/KWizard';
import { size } from 'lodash-es';
const wizardStore = useWizardStore();
const step = ref(1);
const stepper = ref();

const nextCLick = () => {
  if (step.value < size(wizardStore.wizard)) {
    step.value += 1;
    stepper.value.next();
  }
};
const shape = ref()
</script>
