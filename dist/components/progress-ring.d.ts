import type { Components, JSX } from "../types/components";

interface ProgressRing extends Components.ProgressRing, HTMLElement {}
export const ProgressRing: {
  prototype: ProgressRing;
  new (): ProgressRing;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
