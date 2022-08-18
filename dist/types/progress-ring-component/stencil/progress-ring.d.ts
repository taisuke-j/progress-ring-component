import { EventEmitter } from "../../stencil-public-runtime";
import { EasingType } from "easing-animation-frames";
export interface EventPayload {
  id: string;
}
export interface ProgressEventPayload {
  id: string;
  progress: number;
  percentage: number;
}
export interface ColorChangeEventPayload {
  id: string;
  color: string;
}
export declare class ProgressRing {
  /**
   * Radius of the ring
   */
  radius: number;
  /**
   * Thickness of the ring
   */
  strokeWidth: number;
  private normalizedRadius;
  private circumference;
  radiusUpdated(newValue: number): void;
  strokeWidthUpdated(newValue: number): void;
  private setShapeSettings;
  /**
   * Font size of the integer
   */
  intSize: number;
  /**
   * Font size of the decimal places
   */
  decimalSize: number;
  /**
   * Hide digits
   */
  disableDigits: boolean;
  /**
   * Hide decimal places
   */
  disableDecimals: boolean;
  private parsePercentageText;
  private isZeroPercent;
  private getDecimalSize;
  /**
   * Addes rounded linecap to the ring
   */
  roundLinecap: boolean;
  private getLinecap;
  /**
   * Color steps of the ring
   */
  colors: string | Map<number, string>;
  /**
   * Inverts the color scheme
   */
  invertColors: boolean;
  private internalColors;
  colorsUpdated(newValue: string | Map<number, string>): void;
  invertColorsUpdated(newValue: boolean): void;
  private setColorsSettings;
  private setColors;
  /**
   * Percentage value (mandatory)
   */
  percentage: number;
  /**
   * Animation duration in miliseconds
   */
  duration: number;
  /**
   * Easing animation function name
   */
  easingType: EasingType;
  private internalPercentage;
  private start;
  private progress;
  private resumeFrames;
  private restartFrames;
  private isLoaded;
  private isDisconnected;
  private complete;
  percentageUpdated(): void;
  durationtUpdated(): void;
  easingTypeUpdated(): void;
  private setProgress;
  private restartProgress;
  private completeCallback;
  /**
   * Unique ID for the event listeners
   */
  eventId?: string;
  /**
   * Animation progress value to be emitted (from 0 to 1)
   */
  prcProgress: EventEmitter<ProgressEventPayload>;
  /**
   * Color value to be emitted
   */
  prcColor: EventEmitter<ColorChangeEventPayload>;
  /**
   * OnStart event of the animation
   */
  prcStart: EventEmitter<EventPayload>;
  /**
   * OnComplete event of the animation
   */
  prcComplete: EventEmitter<EventPayload>;
  /**
   * OnStop event of the animation
   */
  prcStop: EventEmitter<EventPayload>;
  /**
   * OnResume event of the animation
   */
  prcResume: EventEmitter<EventPayload>;
  /**
   * OnRestart event of the animation
   */
  prcRestart: EventEmitter<EventPayload>;
  /**
   * Lifecycle Methods
   */
  componentWillLoad(): void;
  componentDidLoad(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /**
   * JSX
   */
  private ringBackground;
  private ring;
  private percentageText;
  private intText;
  private decimalText;
  render(): any;
}
