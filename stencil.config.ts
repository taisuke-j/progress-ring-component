import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ProgressRing',
  outputTargets:[
    { type: 'dist' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
