import { r as registerInstance, c as createEvent, h } from './index-e115b03a.js';

function backInOut(t) {
  var s = 1.70158 * 1.525;
  if ((t *= 2) < 1)
    return 0.5 * (t * t * ((s + 1) * t - s))
  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2)
}

function backIn(t) {
  var s = 1.70158;
  return t * t * ((s + 1) * t - s)
}

function backOut(t) {
  var s = 1.70158;
  return --t * t * ((s + 1) * t + s) + 1
}

function bounceOut(t) {
  var a = 4.0 / 11.0;
  var b = 8.0 / 11.0;
  var c = 9.0 / 10.0;

  var ca = 4356.0 / 361.0;
  var cb = 35442.0 / 1805.0;
  var cc = 16061.0 / 1805.0;

  var t2 = t * t;

  return t < a
    ? 7.5625 * t2
    : t < b
      ? 9.075 * t2 - 9.9 * t + 3.4
      : t < c
        ? ca * t2 - cb * t + cc
        : 10.8 * t * t - 20.52 * t + 10.72
}

function bounceInOut(t) {
  return t < 0.5
    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))
    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5
}

function bounceIn(t) {
  return 1.0 - bounceOut(1.0 - t)
}

function circInOut(t) {
  if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1)
  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
}

function circIn(t) {
  return 1.0 - Math.sqrt(1.0 - t * t)
}

function circOut(t) {
  return Math.sqrt(1 - ( --t * t ))
}

function cubicInOut(t) {
  return t < 0.5
    ? 4.0 * t * t * t
    : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0
}

function cubicIn(t) {
  return t * t * t
}

function cubicOut(t) {
  var f = t - 1.0;
  return f * f * f + 1.0
}

function elasticInOut(t) {
  return t < 0.5
    ? 0.5 * Math.sin(+13.0 * Math.PI/2 * 2.0 * t) * Math.pow(2.0, 10.0 * (2.0 * t - 1.0))
    : 0.5 * Math.sin(-13.0 * Math.PI/2 * ((2.0 * t - 1.0) + 1.0)) * Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0
}

function elasticIn(t) {
  return Math.sin(13.0 * t * Math.PI/2) * Math.pow(2.0, 10.0 * (t - 1.0))
}

function elasticOut(t) {
  return Math.sin(-13.0 * (t + 1.0) * Math.PI/2) * Math.pow(2.0, -10.0 * t) + 1.0
}

function expoInOut(t) {
  return (t === 0.0 || t === 1.0)
    ? t
    : t < 0.5
      ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
      : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0
}

function expoIn(t) {
  return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0))
}

function expoOut(t) {
  return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t)
}

function linear(t) {
  return t
}

function quadInOut(t) {
    t /= 0.5;
    if (t < 1) return 0.5*t*t
    t--;
    return -0.5 * (t*(t-2) - 1)
}

function quadIn(t) {
  return t * t
}

function quadOut(t) {
  return -t * (t - 2.0)
}

function quarticInOut(t) {
  return t < 0.5
    ? +8.0 * Math.pow(t, 4.0)
    : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0
}

function quarticIn(t) {
  return Math.pow(t, 4.0)
}

function quarticOut(t) {
  return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0
}

function qinticInOut(t) {
    if ( ( t *= 2 ) < 1 ) return 0.5 * t * t * t * t * t
    return 0.5 * ( ( t -= 2 ) * t * t * t * t + 2 )
}

function qinticIn(t) {
  return t * t * t * t * t
}

function qinticOut(t) {
  return --t * t * t * t * t + 1
}

function sineInOut(t) {
  return -0.5 * (Math.cos(Math.PI*t) - 1)
}

function sineIn (t) {
  var v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14) return 1
  else return 1 - v
}

function sineOut(t) {
  return Math.sin(t * Math.PI/2)
}

const eases = /*#__PURE__*/Object.freeze({
  __proto__: null,
  backInOut: backInOut,
  backIn: backIn,
  backOut: backOut,
  bounceInOut: bounceInOut,
  bounceIn: bounceIn,
  bounceOut: bounceOut,
  circInOut: circInOut,
  circIn: circIn,
  circOut: circOut,
  cubicInOut: cubicInOut,
  cubicIn: cubicIn,
  cubicOut: cubicOut,
  elasticInOut: elasticInOut,
  elasticIn: elasticIn,
  elasticOut: elasticOut,
  expoInOut: expoInOut,
  expoIn: expoIn,
  expoOut: expoOut,
  linear: linear,
  quadInOut: quadInOut,
  quadIn: quadIn,
  quadOut: quadOut,
  quartInOut: quarticInOut,
  quartIn: quarticIn,
  quartOut: quarticOut,
  quintInOut: qinticInOut,
  quintIn: qinticIn,
  quintOut: qinticOut,
  sineInOut: sineInOut,
  sineIn: sineIn,
  sineOut: sineOut
});

// Polyfills
const raf =
  typeof window !== "undefined" && window.requestAnimationFrame
    ? window.requestAnimationFrame
    : (callback) => setTimeout(callback, 1000 / 60);
const caf =
  typeof window !== "undefined" && window.cancelAnimationFrame
    ? window.cancelAnimationFrame
    : (id) => clearTimeout(id);

/**
 * EASING ANIMATION FRAMES
 * easingType - Easing function name of `eases` module
 * duration - Transition duration in milliseconds
 * template (required) - Receives the current progress, stop, resume and restart functions
 * complete - Called after the transition completes
 */

const defaultOptions = {
  duration: 4000,
  easingType: "cubicInOut",
};

const easingAnimationFrames = ({
  easingType = defaultOptions.easingType,
  duration = defaultOptions.duration,
  template,
  complete = null,
} = {}) => {
  // template is the only required parameter
  if (!template) {
    return;
  }

  // Transition settings
  let easingFunc = eases[easingType];
  let framesDuration = duration;
  let templateFunc = template;
  let completeFunc = complete;

  // Managing progress
  let requestId = null;
  let currentTime = null;
  let startTime = null;
  let passedTime = 0;
  let progress = 0;

  // Stop, resume and restart
  let framesComplete = false;
  let framesCancelled = false;
  let framesResumed = false;
  let framesRestarted = false;

  let stopFrames = null;
  let resumeFrames = null;
  let restartFrames = null;

  // Callback function for every requestAnimationFrame
  const frame = (timestamp) => {
    // The latter fallback is for setTimeout and unit tests
    currentTime = timestamp || new Date().getTime();
    if (framesResumed) {
      startTime = currentTime - passedTime;
      framesResumed = false;
    } else {
      startTime = startTime || currentTime;
      passedTime = currentTime - startTime;
    }

    // Continue until the time is up unless the cancel function is called
    if (passedTime < framesDuration && !framesCancelled) {
      // Dispatch a new request for the next frame
      requestId = raf(frame);

      // Progress value (from 0 to 1) based on the time passed
      progress = easingFunc(passedTime / framesDuration);

      templateFunc({
        progress,
        stopFrames,
        resumeFrames,
        restartFrames,
      });

      return;
    }

    // After `restartFrames` is called, the next frame that has been requested will be cancelled,
    // and it will restart transition with new settings
    if (framesRestarted) {
      // Resets settings
      framesCancelled = false;
      framesRestarted = false;

      // Restart
      raf(frame);

      return;
    }

    // Transition complete
    if (passedTime >= framesDuration) {
      templateFunc({
        progress: 1,
        stopFrames: null,
        resumeFrames: null,
        restartFrames,
      });

      framesComplete = true;
      requestId = null;

      if (completeFunc) {
        completeFunc();
      }
    }
  };

  // Function to stop the transition
  stopFrames = () => {
    framesCancelled = true;
  };

  // Function to resume the transition if it's been stopped by `stopFrames`
  resumeFrames = () => {
    if (!framesCancelled) {
      return;
    }
    framesCancelled = false;
    framesResumed = true;
    requestId = raf(frame);
  };

  // Function to restart transition with new settings
  restartFrames = ({
    restartEasingType = defaultOptions.easingType,
    restartDuration = defaultOptions.duration,
    restartTemplate,
    restartComplete = null,
  } = {}) => {
    if (!restartTemplate) {
      return;
    }

    // Update settings
    easingFunc = eases[restartEasingType];
    framesDuration = restartDuration;
    templateFunc = restartTemplate;
    completeFunc = restartComplete;

    startTime = null;
    passedTime = 0;
    progress = 0;

    // If there is transition already running
    if (!framesComplete && !framesCancelled) {
      stopFrames();
      framesRestarted = true;
    }

    // If the transition has been stopped
    if (framesCancelled) {
      framesCancelled = false;
      requestId = raf(frame);
    }

    // If the previous transition is already complete
    if (framesComplete) {
      framesComplete = false;
      requestId = raf(frame);
    }
  };

  try {
    // Start the transtion
    requestId = raf(frame);
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
    caf(requestId);
  }
};

const progressRingCss = ".root{display:inline-block;position:relative}circle{transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke 0.4s ease 0s}text{transition:fill 0.6s ease 0s}slot{display:flex;align-items:center;justify-content:center;position:absolute;left:0;top:0;width:100%;height:100%;text-align:center}.hide{display:none}";

const ProgressRing = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.prcProgress = createEvent(this, "prcProgress", 7);
    this.prcColor = createEvent(this, "prcColor", 7);
    this.prcStart = createEvent(this, "prcStart", 7);
    this.prcComplete = createEvent(this, "prcComplete", 7);
    this.prcStop = createEvent(this, "prcStop", 7);
    this.prcResume = createEvent(this, "prcResume", 7);
    this.prcRestart = createEvent(this, "prcRestart", 7);
    // SHAPE
    /**
     * Radius of the ring
     */
    this.radius = 80;
    /**
     * Thickness of the ring
     */
    this.strokeWidth = 10;
    this.setShapeSettings = ({ radius = this.radius, strokeWidth = this.strokeWidth, }) => {
      // Caches calculation results
      this.normalizedRadius = radius - Math.floor(strokeWidth / 2);
      this.circumference = this.normalizedRadius * 2 * Math.PI;
    };
    // TEXT
    /**
     * Font size of the integer
     */
    this.intSize = 30;
    /**
     * Hide digits
     */
    this.disableDigits = false;
    /**
     * Hide decimal places
     */
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
    this.getDecimalSize = () => {
      return this.decimalSize === undefined
        ? Math.floor(this.intSize * 0.7)
        : this.decimalSize;
    };
    // STYLE
    /**
     * Addes rounded linecap to the ring
     */
    this.roundLinecap = false;
    this.getLinecap = () => {
      return this.roundLinecap ? "round" : "butt";
    };
    // COLORS
    /**
     * Color steps of the ring
     */
    this.colors = new Map([
      [0, "#ff4f40"],
      [25, "#ffcd40"],
      [50, "#66a0ff"],
      [75, "#30bf7a"], // green
    ]);
    /**
     * Inverts the color scheme
     */
    this.invertColors = false;
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
    // ANIMATION
    /**
     * Percentage value (mandatory)
     */
    this.percentage = 0;
    /**
     * Animation duration in miliseconds
     */
    this.duration = 4000;
    /**
     * Easing animation function name
     */
    this.easingType = "quartInOut";
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
    return (h("div", { class: "root" }, h("svg", { height: this.radius * 2, width: this.radius * 2 }, h("circle", { cx: this.radius, cy: this.radius, r: this.normalizedRadius, "stroke-width": this.strokeWidth, fill: "transparent", opacity: "0.1", ref: (el) => (this.ringBackground = el), class: "background-ring" }), h("circle", { cx: this.radius, cy: this.radius, r: this.normalizedRadius, "stroke-width": this.strokeWidth, "stroke-dasharray": `${this.circumference} ${this.circumference}`, fill: "transparent", "stroke-linecap": this.getLinecap(), ref: (el) => (this.ring = el), class: "ring" }), h("text", { x: "50%", y: "50%", "text-anchor": "middle", dy: "0.5ex", "font-size": this.intSize, ref: (el) => (this.percentageText = el), class: this.disableDigits ? "hide" : null }, h("tspan", { "font-size": this.intSize, ref: (el) => (this.intText = el), class: "intText" }), h("tspan", { "font-size": this.intSize, class: this.isZeroPercent() || this.disableDecimals
        ? "hide"
        : "decimalPointText" }, "."), h("tspan", { "font-size": this.getDecimalSize(), ref: (el) => (this.decimalText = el), class: this.isZeroPercent() || this.disableDecimals
        ? "hide"
        : "decimalText" }), h("tspan", { "font-size": this.getDecimalSize(), dx: "0.5ex", class: "percentageText" }, "%"))), h("slot", null)));
  }
  static get watchers() { return {
    "radius": ["radiusUpdated"],
    "strokeWidth": ["strokeWidthUpdated"],
    "colors": ["colorsUpdated"],
    "invertColors": ["invertColorsUpdated"],
    "percentage": ["percentageUpdated"],
    "duration": ["durationtUpdated"],
    "easingType": ["easingTypeUpdated"]
  }; }
};
ProgressRing.style = progressRingCss;

export { ProgressRing as progress_ring };
