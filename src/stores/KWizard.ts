import { defineStore } from 'pinia';
import { ref } from 'vue';
import { IWizardClass } from 'src/models/WizardModel';

export const useWizardStore = defineStore('Wizard', () => {
  const wizard = ref<IWizardClass>({
    step1: {
      schema: ['select', 'nextButton'],
      data: [
        { id: 'r1', name: 'مرشد', star: '5', available: false },
        { id: 'r2', name: 'شیلا', star: '4', available: true },
        { id: 'r3', name: 'کترینگ غدیر', star: '2', available: true },
        { id: 'r4', name: 'مرغ سبز', star: '5', available: false },
      ],
    },
    step2: {
      schema: ['select', 'nextButton'],
      data: [
        {
          id: 'r1',
          data: [{ name: 'خوراک کباب کوبیده' }, { name: 'چلو جوجه کباب' }],
        },
        { id: 'r2', data: [{ name: 'پیتزا مخصوص' }, { name: 'زینگر' }] },
        {
          id: 'r3',
          data: [{ name: 'خوراک مرغ و سبزیجات' }, { name: 'چلو قرمه سبزی' }],
        },
        {
          id: 'r4',
          data: [{ name: 'مرغ بریان' }, { name: 'ساندویچ رست بیف' }],
        },
      ],
    },
    step3: {
      schema: ['richText', 'submitButton'],
      data: [],
    },
  });

  return { wizard };
});
