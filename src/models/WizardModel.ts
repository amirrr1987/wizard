
export interface IWizardClass {
  step1: IStep;
  step2: IStep2;
  step3: IStep;
}

export interface IStep {
  schema: string[];
  data: IStep1Datum[];
}

export interface IStep1Datum {
  id: string;
  name: string;
  star: string;
  available: boolean;
}

export interface IStep2 {
  schema: string[];
  data: IStep2Datum[];
}

export interface IStep2Datum {
  id: string;
  data: IDatumDatum[];
}

export interface IDatumDatum {
  name: string;
}
