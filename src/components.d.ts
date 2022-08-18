/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { EasingType } from "easing-animation-frames";
import { ColorChangeEventPayload, EventPayload, ProgressEventPayload } from "./components/progress-ring/progress-ring";
export namespace Components {
    interface ProgressRing {
        /**
          * Color steps of the ring
         */
        "colors": string | Map<number, string>;
        /**
          * Font size of the decimal places
         */
        "decimalSize": number;
        /**
          * Hide decimal places
         */
        "disableDecimals": boolean;
        /**
          * Hide digits
         */
        "disableDigits": boolean;
        /**
          * Animation duration in miliseconds
         */
        "duration": number;
        /**
          * Easing animation function name
         */
        "easingType": EasingType;
        /**
          * Unique ID for the event listeners
         */
        "eventId"?: string;
        /**
          * Font size of the integer
         */
        "intSize": number;
        /**
          * Inverts the color scheme
         */
        "invertColors": boolean;
        /**
          * Percentage value (mandatory)
         */
        "percentage": number;
        /**
          * Radius of the ring
         */
        "radius": number;
        /**
          * Addes rounded linecap to the ring
         */
        "roundLinecap": boolean;
        /**
          * Thickness of the ring
         */
        "strokeWidth": number;
    }
}
export interface ProgressRingCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLProgressRingElement;
}
declare global {
    interface HTMLProgressRingElement extends Components.ProgressRing, HTMLStencilElement {
    }
    var HTMLProgressRingElement: {
        prototype: HTMLProgressRingElement;
        new (): HTMLProgressRingElement;
    };
    interface HTMLElementTagNameMap {
        "progress-ring": HTMLProgressRingElement;
    }
}
declare namespace LocalJSX {
    interface ProgressRing {
        /**
          * Color steps of the ring
         */
        "colors"?: string | Map<number, string>;
        /**
          * Font size of the decimal places
         */
        "decimalSize"?: number;
        /**
          * Hide decimal places
         */
        "disableDecimals"?: boolean;
        /**
          * Hide digits
         */
        "disableDigits"?: boolean;
        /**
          * Animation duration in miliseconds
         */
        "duration"?: number;
        /**
          * Easing animation function name
         */
        "easingType"?: EasingType;
        /**
          * Unique ID for the event listeners
         */
        "eventId"?: string;
        /**
          * Font size of the integer
         */
        "intSize"?: number;
        /**
          * Inverts the color scheme
         */
        "invertColors"?: boolean;
        /**
          * Color value to be emitted
         */
        "onPrcColor"?: (event: ProgressRingCustomEvent<ColorChangeEventPayload>) => void;
        /**
          * OnComplete event of the animation
         */
        "onPrcComplete"?: (event: ProgressRingCustomEvent<EventPayload>) => void;
        /**
          * Animation progress value to be emitted (from 0 to 1)
         */
        "onPrcProgress"?: (event: ProgressRingCustomEvent<ProgressEventPayload>) => void;
        /**
          * OnRestart event of the animation
         */
        "onPrcRestart"?: (event: ProgressRingCustomEvent<EventPayload>) => void;
        /**
          * OnResume event of the animation
         */
        "onPrcResume"?: (event: ProgressRingCustomEvent<EventPayload>) => void;
        /**
          * OnStart event of the animation
         */
        "onPrcStart"?: (event: ProgressRingCustomEvent<EventPayload>) => void;
        /**
          * OnStop event of the animation
         */
        "onPrcStop"?: (event: ProgressRingCustomEvent<EventPayload>) => void;
        /**
          * Percentage value (mandatory)
         */
        "percentage"?: number;
        /**
          * Radius of the ring
         */
        "radius"?: number;
        /**
          * Addes rounded linecap to the ring
         */
        "roundLinecap"?: boolean;
        /**
          * Thickness of the ring
         */
        "strokeWidth"?: number;
    }
    interface IntrinsicElements {
        "progress-ring": ProgressRing;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "progress-ring": LocalJSX.ProgressRing & JSXBase.HTMLAttributes<HTMLProgressRingElement>;
        }
    }
}
