import { Component, Prop, State, Watch, h } from '@stencil/core';
import easingAnimationFrames, {
  EasingType,
  restartFramesFunction,
  easingAnimationFramesOptions,
  restartFramesOptions,
} from 'easing-animation-frames';

@Component({
  tag: 'progress-ring',
  styleUrl: 'progress-ring.css',
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

  @Watch('radius')
  radiusUpdated(newValue: number) {
    this.setShapeSettings({
      radius: newValue
    })
  }

  @Watch('strokeWidth')
  strokeWidthUpdated(newValue: number) {
    this.setShapeSettings({
      strokeWidth: newValue
    })
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

  private parsePercentText = (percent: number) => {
    if (percent <= 0) {
      return ['0', '00'];
    }
    return percent.toFixed(1).split('.');
  }

  /**
   * Colors
   */
  @Prop() invertColors = false;
  @State() colors: string[];
  private internalColors = [
    '#ff4f40', // red
    '#ffcd40', // yellow
    '#30bf7a', // green
    '#66a0ff'  // blue
  ];
  private internalColorsReversed = [...this.internalColors].reverse();

  @Watch('invertColors')
  invertColorsUpdated(newValue: boolean) {
    this.setColorsSettings({
      invertColors: newValue
    })
  }

  private setColorsSettings = ({
    invertColors = this.invertColors
  }) => {
    // Caches calculation results
    this.colors = invertColors ? 
      this.internalColorsReversed :
      this.internalColors;
  }

  private setColors = (percent: number) => {
    let color: string;
    if (percent <= 25) {
      color = this.colors[0];
    } else if (percent <= 50) {
      color = this.colors[1];
    } else if (percent <= 75) {
      color = this.colors[2];
    } else {
      color = this.colors[3];
    }
    this.ring.style.stroke = color;
    this.ringBackground.style.stroke = color;
    this.percentText.style.fill = color;
  }

  /**
   * Animation
   */
  @Prop({ reflectToAttr: true, mutable: true }) percent = 0;
  @Prop() duration = 4000;
  @Prop() easingType: EasingType = 'quartInOut';
  private internalPercent: number;
  private start = 0;
  private progress = 0;
  private restartFrames: restartFramesFunction;
  private isLoaded = false;
  private complete = false;

  @Watch('percent')
  percentUpdated() {
    if (this.percent < 0) {
      this.percent = 0;
      return;
    }
    this.restartProgress()
  }

  @Watch('duration')
  durationtUpdated() {
    this.restartProgress()
  }

  @Watch('easingType')
  easingTypeUpdated() {
    this.restartProgress()
  }

  // Called for every requestAnimationFrame
  private setProgress = ({
    progress,
    stopFrames,
    restartFrames
  }) => {
    // Stops the animation if the component
    if (!this.isLoaded && stopFrames) {
      stopFrames();
      return;
    }
    this.progress = progress;
    this.restartFrames = restartFrames;

    // Shape
    const currentPercent = ((this.internalPercent - this.start) * progress) + this.start;
    const offset = currentPercent >= 100 ?
      0 :
      this.circumference - (currentPercent / 100 * this.circumference);
    this.ring.style.strokeDashoffset = String(offset); // strokeDashoffset value type is string

    // Text
    const parsedPercentText = this.parsePercentText(currentPercent);
    this.intText.innerHTML = parsedPercentText[0];
    this.decimalText.innerHTML = parsedPercentText[1];

    // Colors
    if (this.complete) {
      // No color transitions for the initial animation
      this.setColors(currentPercent);
    }
  }

  // Called every time the percent attribute gets updated
  private restartProgress = () => {
    if (!this.restartFrames) {
      return;
    }

    // Resets the progresss to 0 and set the start to be the previous percent
    const currentPercent = ((this.internalPercent - this.start) * this.progress) + this.start;
    this.internalPercent = this.percent;
    this.progress = 0;
    this.start = currentPercent;

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
    if (this.percent < 0) {
      this.percent = 0;
      return;
    }

    // We need internal percent, which is not reactive to prop changes
    this.internalPercent = this.percent;

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
    this.setColors(this.percent);

    const animationSettings: easingAnimationFramesOptions = {
      duration: this.duration,
      easingType: this.easingType,
      template: this.setProgress,
      complete: this.completeCallback
    };

    easingAnimationFrames(animationSettings);
  }
 
  componentDidUnload() {
    this.isLoaded = false;
  }

  /**
   * JSX
   */
  private ringBackground: SVGCircleElement;
  private ring: SVGCircleElement;
  private percentText: SVGTextElement;
  private intText: SVGTSpanElement;
  private decimalText: SVGTSpanElement;
    
  render() {
    return (
      <svg
        height={this.radius * 2}
        width={this.radius * 2}
      >
        <circle
          cx={this.radius}
          cy={this.radius}
          r={this.normalizedRadius}
          stroke-width={this.strokeWidth}
          fill='transparent'
          opacity='0.1'
          ref={(el: SVGCircleElement)=> this.ringBackground = el}
          class='background-ring'
        />
        <circle
          cx={this.radius}
          cy={this.radius}
          r={this.normalizedRadius}
          stroke-width={this.strokeWidth}
          stroke-dasharray={`${this.circumference} ${this.circumference}`}
          fill='transparent'
          ref={(el: SVGCircleElement)=> this.ring = el}
          class='ring'
        />
        <text
          x='50%'
          y='50%'
          text-anchor='middle'
          dy='0.5ex'
          font-size={this.intSize}
          ref={(el: SVGTextElement)=> this.percentText = el}
          class={this.disableDigits ? 'hide' : null}
        >
          <tspan font-size={this.intSize} ref={(el: SVGTSpanElement) => this.intText = el} class='intText'></tspan>
          <tspan class='decimalPointText'>.</tspan>
          <tspan font-size={this.decimalSize} ref={(el: SVGTSpanElement) => this.decimalText = el} class='decimalText'></tspan>
          <tspan font-size={this.decimalSize} class='percentText'>%</tspan>
        </text>
      </svg>
    )
  }
}
