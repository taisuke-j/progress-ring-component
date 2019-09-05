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
    private parsePercentText;
    /**
     * Colors
     */
    invertColors: boolean;
    colors: string[];
    private internalColors;
    private internalColorsReversed;
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
    private complete;
    percentUpdated(): void;
    durationtUpdated(): void;
    easingTypeUpdated(): void;
    private setProgress;
    private restartProgress;
    private completeCallback;
    /**
     * Lifecycle Methods
     */
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    /**
     * JSX
     */
    private ringBackground;
    private ring;
    private percentText;
    private intText;
    private decimalText;
    render(): any;
}
