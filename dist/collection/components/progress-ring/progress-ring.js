import { Component, Prop, State, Watch, h } from "@stencil/core";
import easingAnimationFrames from "easing-animation-frames";
export class ProgressRing {
  constructor() {
    /**
     * Shape
     */
    this.radius = 80;
    this.strokeWidth = 10;
    this.setShapeSettings = ({ radius = this.radius, strokeWidth = this.strokeWidth }) => {
      // Caches calculation results
      this.normalizedRadius = radius - Math.floor(strokeWidth / 2);
      this.circumference = this.normalizedRadius * 2 * Math.PI;
    };
    /**
     * Text
     */
    this.intSize = 30;
    this.decimalSize = Math.floor(this.intSize * 0.7);
    this.disableDigits = false;
    this.disableDecimals = false;
    this.parsePercentageText = (percentage) => {
      if (percentage <= 0) {
        return ["0", "0"];
      }
      return percentage.toFixed(1).split(".");
    };
    this.isZeroPercent = () => {
      return this.percentage === 0;
    };
    /**
     * Style
     */
    this.roundLinecap = false;
    this.getLinecap = () => {
      return this.roundLinecap ? "round" : "butt";
    };
    /**
     * Colors
     */
    this.invertColors = false;
    this.internalColors = [
      "#ff4f40",
      "#ffcd40",
      "#30bf7a",
      "#66a0ff" // blue
    ];
    this.internalColorsReversed = [...this.internalColors].reverse();
    this.setColorsSettings = ({ invertColors = this.invertColors }) => {
      // Caches calculation results
      this.colors = invertColors ?
        this.internalColorsReversed :
        this.internalColors;
    };
    this.setColors = (percentage) => {
      let color;
      if (percentage <= 25) {
        color = this.colors[0];
      }
      else if (percentage <= 50) {
        color = this.colors[1];
      }
      else if (percentage <= 75) {
        color = this.colors[2];
      }
      else {
        color = this.colors[3];
      }
      this.ring.style.stroke = color;
      this.ringBackground.style.stroke = color;
      this.percentageText.style.fill = color;
    };
    /**
     * Animation
     */
    this.percentage = 0;
    this.duration = 4000;
    this.easingType = "quartInOut";
    this.start = 0;
    this.progress = 0;
    this.isLoaded = false;
    this.isDisconnected = false;
    this.complete = false;
    // Called for every requestAnimationFrame
    this.setProgress = ({ progress, stopFrames, resumeFrames, restartFrames, }) => {
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
    };
    // Called every time the percentage attribute gets updated
    this.restartProgress = () => {
      if (!this.restartFrames) {
        return;
      }
      // Resets the progresss to 0 and set the start to be the previous percentage
      const currentPercentage = ((this.internalPercentage - this.start) * this.progress) + this.start;
      this.internalPercentage = this.percentage;
      this.progress = 0;
      this.start = currentPercentage;
      // Restarts the template function
      const restartSettings = {
        restartDuration: this.duration,
        restartEasingType: this.easingType,
        restartTemplate: this.setProgress,
        restartComplete: this.completeCallback
      };
      this.restartFrames(restartSettings);
    };
    this.completeCallback = () => {
      if (!this.complete) {
        this.complete = true;
      }
    };
  }
  radiusUpdated(newValue) {
    this.setShapeSettings({
      radius: newValue
    });
    this.restartProgress();
  }
  strokeWidthUpdated(newValue) {
    this.setShapeSettings({
      strokeWidth: newValue
    });
    this.restartProgress();
  }
  invertColorsUpdated(newValue) {
    this.setColorsSettings({
      invertColors: newValue
    });
    this.restartProgress();
  }
  percentageUpdated() {
    if (this.percentage < 0) {
      this.percentage = 0;
      return;
    }
    this.restartProgress();
  }
  durationtUpdated() {
    this.restartProgress();
  }
  easingTypeUpdated() {
    this.restartProgress();
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
    const animationSettings = {
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
  render() {
    return (h("div", { class: "root" },
      h("svg", { height: this.radius * 2, width: this.radius * 2 },
        h("circle", { cx: this.radius, cy: this.radius, r: this.normalizedRadius, "stroke-width": this.strokeWidth, fill: "transparent", opacity: "0.1", ref: (el) => this.ringBackground = el, class: "background-ring" }),
        h("circle", { cx: this.radius, cy: this.radius, r: this.normalizedRadius, "stroke-width": this.strokeWidth, "stroke-dasharray": `${this.circumference} ${this.circumference}`, fill: "transparent", "stroke-linecap": this.getLinecap(), ref: (el) => this.ring = el, class: "ring" }),
        h("text", { x: "50%", y: "50%", "text-anchor": "middle", dy: "0.5ex", "font-size": this.intSize, ref: (el) => this.percentageText = el, class: this.disableDigits ? "hide" : null },
          h("tspan", { "font-size": this.intSize, ref: (el) => this.intText = el, class: "intText" }),
          h("tspan", { "font-size": this.intSize, class: (this.isZeroPercent() || this.disableDecimals) ? "hide" : "decimalPointText" }, "."),
          h("tspan", { "font-size": this.decimalSize, ref: (el) => this.decimalText = el, class: (this.isZeroPercent() || this.disableDecimals) ? "hide" : "decimalText" }),
          h("tspan", { "font-size": this.decimalSize / 2 }, " "),
          h("tspan", { "font-size": this.decimalSize, class: "percentageText" }, "%"))),
      h("div", { class: "slot" },
        h("slot", null))));
  }
  static get is() { return "progress-ring"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["progress-ring.css"]
  }; }
  static get styleUrls() { return {
    "$": ["progress-ring.css"]
  }; }
  static get properties() { return {
    "radius": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Shape"
      },
      "attribute": "radius",
      "reflect": false,
      "defaultValue": "80"
    },
    "strokeWidth": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "stroke-width",
      "reflect": false,
      "defaultValue": "10"
    },
    "intSize": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Text"
      },
      "attribute": "int-size",
      "reflect": false,
      "defaultValue": "30"
    },
    "decimalSize": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "decimal-size",
      "reflect": false,
      "defaultValue": "Math.floor(this.intSize * 0.7)"
    },
    "disableDigits": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disable-digits",
      "reflect": false,
      "defaultValue": "false"
    },
    "disableDecimals": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disable-decimals",
      "reflect": false,
      "defaultValue": "false"
    },
    "roundLinecap": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Style"
      },
      "attribute": "round-linecap",
      "reflect": false,
      "defaultValue": "false"
    },
    "invertColors": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Colors"
      },
      "attribute": "invert-colors",
      "reflect": false,
      "defaultValue": "false"
    },
    "percentage": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Animation"
      },
      "attribute": "percentage",
      "reflect": true,
      "defaultValue": "0"
    },
    "duration": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "duration",
      "reflect": false,
      "defaultValue": "4000"
    },
    "easingType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "EasingType",
        "resolved": "\"backInOut\" | \"backIn\" | \"backOut\" | \"bounceInOut\" | \"bounceIn\" | \"bounceOut\" | \"circInOut\" | \"circIn\" | \"circOut\" | \"cubicInOut\" | \"cubicIn\" | \"cubicOut\" | \"elasticInOut\" | \"elasticIn\" | \"elasticOut\" | \"expoInOut\" | \"expoIn\" | \"expoOut\" | \"linear\" | \"quadInOut\" | \"quadIn\" | \"quadOut\" | \"quartInOut\" | \"quartIn\" | \"quartOut\" | \"quintInOut\" | \"quintIn\" | \"quintOut\" | \"sineInOut\" | \"sineIn\" | \"sineOut\"",
        "references": {
          "EasingType": {
            "location": "import",
            "path": "easing-animation-frames"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "easing-type",
      "reflect": false,
      "defaultValue": "\"quartInOut\""
    }
  }; }
  static get states() { return {
    "colors": {}
  }; }
  static get watchers() { return [{
      "propName": "radius",
      "methodName": "radiusUpdated"
    }, {
      "propName": "strokeWidth",
      "methodName": "strokeWidthUpdated"
    }, {
      "propName": "invertColors",
      "methodName": "invertColorsUpdated"
    }, {
      "propName": "percentage",
      "methodName": "percentageUpdated"
    }, {
      "propName": "duration",
      "methodName": "durationtUpdated"
    }, {
      "propName": "easingType",
      "methodName": "easingTypeUpdated"
    }]; }
}
