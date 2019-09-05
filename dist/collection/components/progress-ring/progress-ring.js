import { h } from "@stencil/core";
import easingAnimationFrames from 'easing-animation-frames';
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
        this.parsePercentText = (percent) => {
            if (percent <= 0) {
                return ['0', '00'];
            }
            return percent.toFixed(1).split('.');
        };
        /**
         * Colors
         */
        this.invertColors = false;
        this.internalColors = [
            '#ff4f40',
            '#ffcd40',
            '#30bf7a',
            '#66a0ff' // blue
        ];
        this.internalColorsReversed = [...this.internalColors].reverse();
        this.setColorsSettings = ({ invertColors = this.invertColors }) => {
            // Caches calculation results
            this.colors = invertColors ?
                this.internalColorsReversed :
                this.internalColors;
        };
        this.setColors = (percent) => {
            let color;
            if (percent <= 25) {
                color = this.colors[0];
            }
            else if (percent <= 50) {
                color = this.colors[1];
            }
            else if (percent <= 75) {
                color = this.colors[2];
            }
            else {
                color = this.colors[3];
            }
            this.ring.style.stroke = color;
            this.ringBackground.style.stroke = color;
            this.percentText.style.fill = color;
        };
        /**
         * Animation
         */
        this.percent = 0;
        this.duration = 4000;
        this.easingType = 'quartInOut';
        this.start = 0;
        this.progress = 0;
        this.isLoaded = false;
        this.complete = false;
        // Called for every requestAnimationFrame
        this.setProgress = ({ progress, stopFrames, restartFrames }) => {
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
        };
        // Called every time the percent attribute gets updated
        this.restartProgress = () => {
            if (!this.restartFrames) {
                return;
            }
            // Resets the progresss to 0 and set the start to be the previous percent
            const currentPercent = ((this.internalPercent - this.start) * this.progress) + this.start;
            this.internalPercent = this.percent;
            this.progress = 0;
            this.start = currentPercent;
            // Restarts the template function
            const restartSettings = {
                restartDuration: this.duration,
                restartEasingType: this.easingType,
                restartTemplate: this.setProgress
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
    }
    strokeWidthUpdated(newValue) {
        this.setShapeSettings({
            strokeWidth: newValue
        });
    }
    invertColorsUpdated(newValue) {
        this.setColorsSettings({
            invertColors: newValue
        });
    }
    percentUpdated() {
        if (this.percent < 0) {
            this.percent = 0;
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
        const animationSettings = {
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
    render() {
        return (h("svg", { height: this.radius * 2, width: this.radius * 2 },
            h("circle", { cx: this.radius, cy: this.radius, r: this.normalizedRadius, "stroke-width": this.strokeWidth, fill: 'transparent', opacity: '0.1', ref: (el) => this.ringBackground = el, class: 'background-ring' }),
            h("circle", { cx: this.radius, cy: this.radius, r: this.normalizedRadius, "stroke-width": this.strokeWidth, "stroke-dasharray": `${this.circumference} ${this.circumference}`, fill: 'transparent', ref: (el) => this.ring = el, class: 'ring' }),
            h("text", { x: '50%', y: '50%', "text-anchor": 'middle', dy: '0.5ex', "font-size": this.intSize, ref: (el) => this.percentText = el, class: this.disableDigits ? 'hide' : null },
                h("tspan", { "font-size": this.intSize, ref: (el) => this.intText = el, class: 'intText' }),
                h("tspan", { class: 'decimalPointText' }, "."),
                h("tspan", { "font-size": this.decimalSize, ref: (el) => this.decimalText = el, class: 'decimalText' }),
                h("tspan", { "font-size": this.decimalSize, class: 'percentText' }, "%"))));
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
        "percent": {
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
            "attribute": "percent",
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
            "defaultValue": "'quartInOut'"
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
            "propName": "percent",
            "methodName": "percentUpdated"
        }, {
            "propName": "duration",
            "methodName": "durationtUpdated"
        }, {
            "propName": "easingType",
            "methodName": "easingTypeUpdated"
        }]; }
}
