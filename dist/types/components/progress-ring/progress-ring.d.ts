import '../../stencil.core';
import { EasingType } from 'easing-animation-frames';
export declare class ProgressRing {
    /**
     * Shape
     */
    radius: number;
    strokeWidth: number;
    private normalizedRadius;
    private circumference;
    radiusUpdated(newValue: number): void;
    strokeWidthUpdated(newValue: number): void;
    private setShapeSettings;
    /**
     * Text
     */
    intSize: number;
    decimalSize: number;
    disableDigits: boolean;
    private textOffset;
    intSizeUpdated(newValue: number): void;
    decimalSizeUpdated(newValue: number): void;
    private setTextSettings;
    private parsePercentText;
    /**
     * Colors
     */
    invertColors: boolean;
    private colors;
    invertColorsUpdated(newValue: boolean): void;
    private setColorsSettings;
    private setColors;
    /**
     * Animation
     */
    percent: number;
    duration: number;
    easingType: EasingType;
    private internalPercent;
    private start;
    private progress;
    private restartFrames;
    private isLoaded;
    percentUpdated(): void;
    durationtUpdated(): void;
    easingTypeUpdated(): void;
    private setProgress;
    restartProgress(): void;
    /**
     * Lifecycle Methods
     */
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    componentDidUnload(): void;
    /**
     * JSX
     */
    private ringBackground;
    private ring;
    private percentText;
    private intText;
    private decimalText;
    render(): JSX.Element;
}
