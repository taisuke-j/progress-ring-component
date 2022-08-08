import { Config } from "@stencil/core";
import { reactOutputTarget as react } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "ProgressRing",
  outputTargets: [
    react({
      componentCorePackage: "progress-ring-component",
      proxiesFile:
        "../progress-ring-component-react/src/components/stencil-generated/index.ts",
      includeDefineCustomElements: true,
    }),
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
};
