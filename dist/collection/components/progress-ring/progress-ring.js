/* eslint-disable @stencil/decorators-style */
import { h } from "@stencil/core";
import easingAnimationFrames from "easing-animation-frames";
export class ProgressRing {
    constructor() {
        this.setShapeSettings = ({ radius = this.radius, strokeWidth = this.strokeWidth, }) => {
            // Caches calculation results
            this.normalizedRadius = radius - Math.floor(strokeWidth / 2);
            this.circumference = this.normalizedRadius * 2 * Math.PI;
        };
        this.parsePercentageText = (percentage) => {
            if (percentage <= 0) {
                return ["0", "0"];
            }
            return percentage.toFixed(1).split(".");
        };
        this.isZeroPercent = () => {
            return this.percentage === 0;
        };
        this.getDecimalSize = () => {
            return this.decimalSize === undefined
                ? Math.floor(this.intSize * 0.7)
                : this.decimalSize;
        };
        this.getLinecap = () => {
            return this.roundLinecap ? "round" : "butt";
        };
        this.setColorsSettings = ({ colors = this.colors, invertColors = this.invertColors, }) => {
            const colorsMap = colors instanceof Map ? colors : new Map(JSON.parse(colors));
            if (!invertColors) {
                this.internalColors = colorsMap;
                return;
            }
            // If inverseColors prop is set to true
            const colorsArray = [...colorsMap];
            const colorsArrayReversed = [...colorsArray].reverse();
            this.internalColors = new Map(colorsArray.map((color, i) => [color[0], colorsArrayReversed[i][1]]));
        };
        this.setColors = (percentage) => {
            let color;
            const colorsArray = [...this.internalColors];
            for (let i = 0; i < colorsArray.length; i++) {
                if (i === colorsArray.length - 1) {
                    color = colorsArray[i][1];
                    break;
                }
                if (percentage < colorsArray[i + 1][0]) {
                    color = colorsArray[i][1];
                    break;
                }
            }
            // Emits color change event
            if (this.eventId !== undefined) {
                this.prcColor.emit({
                    id: this.eventId,
                    color,
                });
            }
            this.ring.style.stroke = color;
            this.ringBackground.style.stroke = color;
            this.percentageText.style.fill = color;
        };
        this.start = 0;
        this.progress = 0;
        this.isLoaded = false;
        this.isDisconnected = false;
        this.complete = false;
        // Called for every requestAnimationFrame
        this.setProgress = ({ progress, stopFrames, resumeFrames, restartFrames, }) => {
            // Stops the animation if the component is disconnected from the DOM
            if (this.isDisconnected && typeof stopFrames === "function") {
                stopFrames();
                // Emits stop event
                if (this.eventId !== undefined) {
                    this.prcStop.emit({ id: this.eventId });
                }
                return;
            }
            this.progress = progress;
            this.resumeFrames = resumeFrames;
            this.restartFrames = restartFrames;
            // Shape
            const currentPercentage = (this.internalPercentage - this.start) * progress + this.start;
            const offset = currentPercentage >= 100
                ? 0
                : this.circumference - (currentPercentage / 100) * this.circumference;
            this.ring.style.strokeDashoffset = String(offset); // strokeDashoffset value type is string
            // Text
            const parsedPercentageText = this.parsePercentageText(currentPercentage);
            this.intText.innerHTML = parsedPercentageText[0];
            this.decimalText.innerHTML = parsedPercentageText[1];
            // Emits progress change event
            if (this.eventId !== undefined) {
                this.prcProgress.emit({
                    id: this.eventId,
                    progress,
                    percentage: currentPercentage,
                });
            }
        };
        // Called every time the percentage attribute gets updated
        this.restartProgress = () => {
            if (typeof this.restartFrames !== "function") {
                return;
            }
            // Emits restart event
            if (this.eventId !== undefined) {
                this.prcRestart.emit({ id: this.eventId });
            }
            // Resets the progresss to 0 and set the start to be the previous percentage
            const currentPercentage = (this.internalPercentage - this.start) * this.progress + this.start;
            this.internalPercentage = this.percentage;
            this.progress = 0;
            this.start = currentPercentage;
            // Reset the complete state
            this.complete = false;
            // Restarts the template function
            const restartSettings = {
                restartDuration: this.duration,
                restartEasingType: this.easingType,
                restartTemplate: this.setProgress,
                restartComplete: this.completeCallback,
            };
            this.setColors(this.percentage);
            this.restartFrames(restartSettings);
        };
        this.completeCallback = () => {
            if (!this.complete) {
                this.complete = true;
                // Emits complete event
                if (this.eventId !== undefined) {
                    this.prcComplete.emit({ id: this.eventId });
                }
            }
        };
        this.radius = 80;
        this.strokeWidth = 10;
        this.intSize = 30;
        this.decimalSize = undefined;
        this.disableDigits = false;
        this.disableDecimals = false;
        this.roundLinecap = false;
        this.colors = new Map([
            [0, "#ff4f40"], // red
            [25, "#ffcd40"], // yellow
            [50, "#66a0ff"], // blue
            [75, "#30bf7a"], // green
        ]);
        this.invertColors = false;
        this.percentage = 0;
        this.duration = 4000;
        this.easingType = "quartInOut";
        this.eventId = undefined;
    }
    radiusUpdated(newValue) {
        this.setShapeSettings({
            radius: newValue,
        });
        this.restartProgress();
    }
    strokeWidthUpdated(newValue) {
        this.setShapeSettings({
            strokeWidth: newValue,
        });
        this.restartProgress();
    }
    colorsUpdated(newValue) {
        this.setColorsSettings({
            colors: newValue,
        });
        this.restartProgress();
    }
    invertColorsUpdated(newValue) {
        this.setColorsSettings({
            invertColors: newValue,
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
            strokeWidth: this.strokeWidth,
        });
        this.setColorsSettings({
            invertColors: this.invertColors,
            colors: this.colors,
        });
    }
    componentDidLoad() {
        this.isLoaded = true;
        this.setColors(this.percentage);
        // Emits restart event
        if (this.eventId !== undefined) {
            this.prcStart.emit({ id: this.eventId });
        }
        const animationSettings = {
            duration: this.duration,
            easingType: this.easingType,
            template: this.setProgress,
            complete: this.completeCallback,
        };
        easingAnimationFrames(animationSettings);
    }
    connectedCallback() {
        if (this.isLoaded) {
            // If the component is already loaded, that means it was loaded but
            // disconnected from the DOM and then connected to the DOM again
            this.isDisconnected = false;
            // Emits complete event
            if (this.eventId !== undefined) {
                this.prcResume.emit({ id: this.eventId });
            }
            // Resumes animation that is still in progress
            this.resumeFrames();
        }
    }
    disconnectedCallback() {
        this.isDisconnected = true;
    }
    render() {
        return (h("div", { key: 'dc6fa79b9d0c0691e1c3bf71dd3fb6f014587504', class: "root" }, h("svg", { key: '221dd3d20387ff7b0fa52c70ee38b98baa7907fc', height: this.radius * 2, width: this.radius * 2 }, h("circle", { key: '7f67d59118398f5b01ed0f821e7282c9e3611c20', cx: this.radius, cy: this.radius, r: this.normalizedRadius, "stroke-width": this.strokeWidth, fill: "transparent", opacity: "0.1", ref: (el) => (this.ringBackground = el), class: "background-ring" }), h("circle", { key: 'ffc7caf286a723a9324f22055570ec361498b5b2', cx: this.radius, cy: this.radius, r: this.normalizedRadius, "stroke-width": this.strokeWidth, "stroke-dasharray": `${this.circumference} ${this.circumference}`, fill: "transparent", "stroke-linecap": this.getLinecap(), ref: (el) => (this.ring = el), class: "ring" }), h("text", { key: '4300647b46d344d2ea9ba908b9222721db355a3e', x: "50%", y: "50%", "text-anchor": "middle", dy: "0.5ex", "font-size": this.intSize, ref: (el) => (this.percentageText = el), class: this.disableDigits ? "hide" : null }, h("tspan", { key: '0229a043a68cbf9d58f43604354722eccecacdde', "font-size": this.intSize, ref: (el) => (this.intText = el), class: "intText" }), h("tspan", { key: '50f340a8a97f3f04409055f358a03cf5e7130475', "font-size": this.intSize, class: this.isZeroPercent() || this.disableDecimals
                ? "hide"
                : "decimalPointText" }, "."), h("tspan", { key: 'a782c10ad6d4b427d3df46db36e2b0059a591619', "font-size": this.getDecimalSize(), ref: (el) => (this.decimalText = el), class: this.isZeroPercent() || this.disableDecimals
                ? "hide"
                : "decimalText" }), h("tspan", { key: 'c377354751cda0ef46c2193cec00a67c271f79ca', "font-size": this.getDecimalSize(), dx: "0.5ex", class: "percentageText" }, "%"))), h("slot", { key: 'd4e372d7ca7c6fd5053c34e1163b97878678abbf' })));
    }
    static get is() { return "progress-ring"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["progress-ring.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["progress-ring.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Radius of the ring"
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
                    "text": "Thickness of the ring"
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
                    "text": "Font size of the integer"
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
                    "text": "Font size of the decimal places"
                },
                "attribute": "decimal-size",
                "reflect": false
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
                    "text": "Hide digits"
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
                    "text": "Hide decimal places"
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
                    "text": "Addes rounded linecap to the ring"
                },
                "attribute": "round-linecap",
                "reflect": false,
                "defaultValue": "false"
            },
            "colors": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | Map<number, string>",
                    "resolved": "Map<number, string> | string",
                    "references": {
                        "Map": {
                            "location": "global",
                            "id": "global::Map"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Color steps of the ring"
                },
                "attribute": "colors",
                "reflect": false,
                "defaultValue": "new Map([\n    [0, \"#ff4f40\"], // red\n    [25, \"#ffcd40\"], // yellow\n    [50, \"#66a0ff\"], // blue\n    [75, \"#30bf7a\"], // green\n  ])"
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
                    "text": "Inverts the color scheme"
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
                    "text": "Percentage value (mandatory)"
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
                    "text": "Animation duration in miliseconds"
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
                            "path": "easing-animation-frames",
                            "id": ""
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Easing animation function name"
                },
                "attribute": "easing-type",
                "reflect": false,
                "defaultValue": "\"quartInOut\""
            },
            "eventId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Unique ID for the event listeners"
                },
                "attribute": "event-id",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "prcProgress",
                "name": "prcProgress",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Animation progress value to be emitted (from 0 to 1)"
                },
                "complexType": {
                    "original": "ProgressEventPayload",
                    "resolved": "ProgressEventPayload",
                    "references": {
                        "ProgressEventPayload": {
                            "location": "local",
                            "path": "/Users/taisuke/Code/progress-ring-component/src/components/progress-ring/progress-ring.tsx",
                            "id": "src/components/progress-ring/progress-ring.tsx::ProgressEventPayload"
                        }
                    }
                }
            }, {
                "method": "prcColor",
                "name": "prcColor",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Color value to be emitted"
                },
                "complexType": {
                    "original": "ColorChangeEventPayload",
                    "resolved": "ColorChangeEventPayload",
                    "references": {
                        "ColorChangeEventPayload": {
                            "location": "local",
                            "path": "/Users/taisuke/Code/progress-ring-component/src/components/progress-ring/progress-ring.tsx",
                            "id": "src/components/progress-ring/progress-ring.tsx::ColorChangeEventPayload"
                        }
                    }
                }
            }, {
                "method": "prcStart",
                "name": "prcStart",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "OnStart event of the animation"
                },
                "complexType": {
                    "original": "EventPayload",
                    "resolved": "EventPayload",
                    "references": {
                        "EventPayload": {
                            "location": "local",
                            "path": "/Users/taisuke/Code/progress-ring-component/src/components/progress-ring/progress-ring.tsx",
                            "id": "src/components/progress-ring/progress-ring.tsx::EventPayload"
                        }
                    }
                }
            }, {
                "method": "prcComplete",
                "name": "prcComplete",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "OnComplete event of the animation"
                },
                "complexType": {
                    "original": "EventPayload",
                    "resolved": "EventPayload",
                    "references": {
                        "EventPayload": {
                            "location": "local",
                            "path": "/Users/taisuke/Code/progress-ring-component/src/components/progress-ring/progress-ring.tsx",
                            "id": "src/components/progress-ring/progress-ring.tsx::EventPayload"
                        }
                    }
                }
            }, {
                "method": "prcStop",
                "name": "prcStop",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "OnStop event of the animation"
                },
                "complexType": {
                    "original": "EventPayload",
                    "resolved": "EventPayload",
                    "references": {
                        "EventPayload": {
                            "location": "local",
                            "path": "/Users/taisuke/Code/progress-ring-component/src/components/progress-ring/progress-ring.tsx",
                            "id": "src/components/progress-ring/progress-ring.tsx::EventPayload"
                        }
                    }
                }
            }, {
                "method": "prcResume",
                "name": "prcResume",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "OnResume event of the animation"
                },
                "complexType": {
                    "original": "EventPayload",
                    "resolved": "EventPayload",
                    "references": {
                        "EventPayload": {
                            "location": "local",
                            "path": "/Users/taisuke/Code/progress-ring-component/src/components/progress-ring/progress-ring.tsx",
                            "id": "src/components/progress-ring/progress-ring.tsx::EventPayload"
                        }
                    }
                }
            }, {
                "method": "prcRestart",
                "name": "prcRestart",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "OnRestart event of the animation"
                },
                "complexType": {
                    "original": "EventPayload",
                    "resolved": "EventPayload",
                    "references": {
                        "EventPayload": {
                            "location": "local",
                            "path": "/Users/taisuke/Code/progress-ring-component/src/components/progress-ring/progress-ring.tsx",
                            "id": "src/components/progress-ring/progress-ring.tsx::EventPayload"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "radius",
                "methodName": "radiusUpdated"
            }, {
                "propName": "strokeWidth",
                "methodName": "strokeWidthUpdated"
            }, {
                "propName": "colors",
                "methodName": "colorsUpdated"
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
            }];
    }
}
//# sourceMappingURL=progress-ring.js.map
