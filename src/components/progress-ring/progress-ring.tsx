import { Component, Prop, State, Watch, h } from "@stencil/core";
import easingAnimationFrames, {
  EasingType,
  restartFramesFunction,
  easingAnimationFramesOptions,
  templateOptions,
  resumeFramesFunction,
  restartFramesOptions,
} from "easing-animation-frames";

@Component({
  tag: "progress-ring",
  styleUrl: "progress-ring.css",
  shadow: true
})
export class ProgressRing {
  /**
   * Shape
   */
  @Prop() radius = 80;
  @Prop() strokeWidth = 10;
  private normalizedRadius: number;
  private circumference: number;

  @Watch("radius")
  radiusUpdated(newValue: number) {
    this.setShapeSettings({
      radius: newValue
    })
    this.restartProgress()
  }

  @Watch("strokeWidth")
  strokeWidthUpdated(newValue: number) {
    this.setShapeSettings({
      strokeWidth: newValue
    })
    this.restartProgress()
  }

  private setShapeSettings = ({
    radius = this.radius,
    strokeWidth = this.strokeWidth
  }) => {
    // Caches calculation results
    this.normalizedRadius = radius - Math.floor(strokeWidth / 2);
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  /**
   * Text
   */
  @Prop() intSize = 30;
  @Prop() decimalSize: number = Math.floor(this.intSize * 0.7);
  @Prop() disableDigits = false;
  @Prop() disableDecimals = false;

  private parsePercentageText = (percentage: number) => {
    if (percentage <= 0) {
      return ["0", "0"];
    }
    return percentage.toFixed(1).split(".");
  }

  private isZeroPercent = () => {
    return this.percentage === 0;
  }

  /**
   * Style
   */
  @Prop() roundLinecap = false;

  private getLinecap = () => {
    return this.roundLinecap ? "round" : "butt";
  }

  /**
   * Colors
   */
  @Prop() invertColors = false;
  @State() colors: string[];
  private internalColors = [
    "#ff4f40", // red
    "#ffcd40", // yellow
    "#30bf7a", // green
    "#66a0ff"  // blue
  ];
  private internalColorsReversed = [...this.internalColors].reverse();

  @Watch("invertColors")
  invertColorsUpdated(newValue: boolean) {
    this.setColorsSettings({
      invertColors: newValue
    })
    this.restartProgress()
  }

  private setColorsSettings = ({
    invertColors = this.invertColors
  }) => {
    // Caches calculation results
    this.colors = invertColors ? 
      this.internalColorsReversed :
      this.internalColors;
  }

  private setColors = (percentage: number) => {
    let color: string;
    if (percentage <= 25) {
      color = this.colors[0];
    } else if (percentage <= 50) {
      color = this.colors[1];
    } else if (percentage <= 75) {
      color = this.colors[2];
    } else {
      color = this.colors[3];
    }
    this.ring.style.stroke = color;
    this.ringBackground.style.stroke = color;
    this.percentageText.style.fill = color;
  }

  /**
   * Animation
   */
  @Prop({ reflect: true, mutable: true }) percentage = 0;
  @Prop() duration = 4000;
  @Prop() easingType: EasingType = "quartInOut";
  private internalPercentage: number;
  private start = 0;
  private progress = 0;
  private resumeFrames: resumeFramesFunction;
  private restartFrames: restartFramesFunction;
  private isLoaded = false;
  private isDisconnected = false;
  private complete = false;

  @Watch("percentage")
  percentageUpdated() {
    if (this.percentage < 0) {
      this.percentage = 0;
      return;
    }
    this.restartProgress()
  }

  @Watch("duration")
  durationtUpdated() {
    this.restartProgress()
  }

  @Watch("easingType")
  easingTypeUpdated() {
    this.restartProgress()
  }

  // Called for every requestAnimationFrame
  private setProgress = ({
    progress,
    stopFrames,
    resumeFrames,
    restartFrames,
  }: templateOptions) => {
    // Stops the animation if the component is disconnected from the DOM
    if (this.isDisconnected && stopFrames) {
      stopFrames();
      return;
    }
    this.progress = progress;
    this.resumeFrames = resumeFrames;
    this.restartFrames = restartFrames;

    // Shape
    const currentPercentage = ((this.internalPercentage - this.start) * progress) + this.start;
    const offset = currentPercentage >= 100 ?
      0 :
      this.circumference - (currentPercentage / 100 * this.circumference);
    this.ring.style.strokeDashoffset = String(offset); // strokeDashoffset value type is string

    // Text
    const parsedPercentageText = this.parsePercentageText(currentPercentage);
    this.intText.innerHTML = parsedPercentageText[0];
    this.decimalText.innerHTML = parsedPercentageText[1];

    // Colors
    if (this.complete) {
      // No color transitions for the initial animation
      this.setColors(currentPercentage);
    }
  }

  // Called every time the percentage attribute gets updated
  private restartProgress = () => {
    if (!this.restartFrames) {
      return;
    }

    // Resets the progresss to 0 and set the start to be the previous percentage
    const currentPercentage = ((this.internalPercentage - this.start) * this.progress) + this.start;
    this.internalPercentage = this.percentage;
    this.progress = 0;
    this.start = currentPercentage;

    // Restarts the template function
    const restartSettings: restartFramesOptions = {
      restartDuration: this.duration,
      restartEasingType: this.easingType,
      restartTemplate: this.setProgress,
      restartComplete: this.completeCallback
    };
    this.restartFrames(restartSettings);
  }

  private completeCallback = () => {
    if (!this.complete) {
      this.complete = true
    }
  }

  /**
   * Lifecycle Methods
   */
  componentWillLoad() {
    if (this.percentage < 0) {
      this.percentage = 0;
      return;
    }

    // We need internal percentage, which is not reactive to prop changes
    this.internalPercentage = this.percentage;

    this.setShapeSettings({
      radius: this.radius,
      strokeWidth: this.strokeWidth
    });

    this.setColorsSettings({
      invertColors: this.invertColors
    });
  }

  componentDidLoad() {
    this.isLoaded = true;
    this.setColors(this.percentage);

    const animationSettings: easingAnimationFramesOptions = {
      duration: this.duration,
      easingType: this.easingType,
      template: this.setProgress,
      complete: this.completeCallback
    };

    easingAnimationFrames(animationSettings);
  }

  connectedCallback() {
    if (this.isLoaded) {
      // If the component is already loaded, that means it was loaded but
      // disconnected from the DOM and then connected to the DOM again
      this.isDisconnected = false;

      // Resumes animation that is still in progress
      this.resumeFrames();
    }
  }
 
  disconnectedCallback() {
    this.isDisconnected = true;
  }

  /**
   * JSX
   */
  private ringBackground: SVGCircleElement;
  private ring: SVGCircleElement;
  private percentageText: SVGTextElement;
  private intText: SVGTSpanElement;
  private decimalText: SVGTSpanElement;
    
  render() {
    return (
      <div class="root">
        <svg
          height={this.radius * 2}
          width={this.radius * 2}
        >
          <circle
            cx={this.radius}
            cy={this.radius}
            r={this.normalizedRadius}
            stroke-width={this.strokeWidth}
            fill="transparent"
            opacity="0.1"
            ref={(el: SVGCircleElement)=> this.ringBackground = el}
            class="background-ring"
          />
          <circle
            cx={this.radius}
            cy={this.radius}
            r={this.normalizedRadius}
            stroke-width={this.strokeWidth}
            stroke-dasharray={`${this.circumference} ${this.circumference}`}
            fill="transparent"
            stroke-linecap={this.getLinecap()}
            ref={(el: SVGCircleElement)=> this.ring = el}
            class="ring"
          />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dy="0.5ex"
            font-size={this.intSize}
            ref={(el: SVGTextElement)=> this.percentageText = el}
            class={this.disableDigits ? "hide" : null}
          >
            <tspan font-size={this.intSize} ref={(el: SVGTSpanElement) => this.intText = el} class="intText"></tspan>
            <tspan font-size={this.intSize} class={(this.isZeroPercent() || this.disableDecimals) ? "hide" : "decimalPointText"}>.</tspan>
            <tspan font-size={this.decimalSize} ref={(el: SVGTSpanElement) => this.decimalText = el} class={(this.isZeroPercent() || this.disableDecimals) ? "hide" : "decimalText"}></tspan>
            <tspan font-size={this.decimalSize / 2}> </tspan>
            <tspan font-size={this.decimalSize} class="percentageText">%</tspan>
          </text>
        </svg>
        <div class="slot">
          <slot />
        </div>
      </div> 
    )
  }
}
