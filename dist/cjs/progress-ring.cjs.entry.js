'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0f38156b.js');

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
const raf = (typeof window !== 'undefined' && window.requestAnimationFrame)
  ? window.requestAnimationFrame : (callback => setTimeout(callback, 1000 / 60));
const caf = (typeof window !== 'undefined' && window.cancelAnimationFrame)
  ? window.cancelAnimationFrame : (id => clearTimeout(id));

/**
 * EASING ANIMATION FRAMES
 * easingType - Easing function name of `eases` module
 * duration - Transition duration in milliseconds
 * template (required) - Receives the current progress, stop, resume and restart functions
 * complete - Called after the transition completes
 */

const defaultOptions = {
  duration: 4000,
  easingType: 'cubicInOut',
};

function easingAnimationFrames ({
  easingType = defaultOptions.easingType,
  duration = defaultOptions.duration,
  template,
  complete = null,
} = {}) {
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
  let startTime = null;
  let passedTime = 0;
  let progress = 0;
  let stopFrames = null;
  let resumeFrames = null;
  let restartFrames = null;

  // Stop, resume and restart
  let framesComplete = false;
  let framesCancelled = false;
  let framesResumed = false;
  let framesRestarted = false;

  // Callback function for every requestAnimationFrame
  const frame = (timestamp) => {
    // The latter fallback is for setTimeout and unit tests
    const currentTime = timestamp || new Date().getTime();
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

      try {
        // Render the frame
        templateFunc({
          progress,
          stopFrames,
          resumeFrames,
          restartFrames,
        });
      } catch (e) {
        console.error(e); // eslint-disable-line no-console
        caf(requestId);
      }
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

  // Start the transtion
  requestId = raf(frame);
}

const progressRingCss = "circle{transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke 0.4s ease 0s}text{transition:fill 0.6s ease 0s}.hide{display:none}";

let ProgressRing = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
        return ['0', '0'];
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
    return (index.h("svg", { height: this.radius * 2, width: this.radius * 2 }, index.h("circle", { cx: this.radius, cy: this.radius, r: this.normalizedRadius, "stroke-width": this.strokeWidth, fill: 'transparent', opacity: '0.1', ref: (el) => this.ringBackground = el, class: 'background-ring' }), index.h("circle", { cx: this.radius, cy: this.radius, r: this.normalizedRadius, "stroke-width": this.strokeWidth, "stroke-dasharray": `${this.circumference} ${this.circumference}`, fill: 'transparent', ref: (el) => this.ring = el, class: 'ring' }), index.h("text", { x: '50%', y: '50%', "text-anchor": 'middle', dy: '0.5ex', "font-size": this.intSize, ref: (el) => this.percentText = el, class: this.disableDigits ? 'hide' : null }, index.h("tspan", { "font-size": this.intSize, ref: (el) => this.intText = el, class: 'intText' }), index.h("tspan", { class: 'decimalPointText' }, "."), index.h("tspan", { "font-size": this.decimalSize, ref: (el) => this.decimalText = el, class: 'decimalText' }), index.h("tspan", { "font-size": this.decimalSize, class: 'percentText' }, "%"))));
  }
  static get watchers() { return {
    "radius": ["radiusUpdated"],
    "strokeWidth": ["strokeWidthUpdated"],
    "invertColors": ["invertColorsUpdated"],
    "percent": ["percentUpdated"],
    "duration": ["durationtUpdated"],
    "easingType": ["easingTypeUpdated"]
  }; }
};
ProgressRing.style = progressRingCss;

exports.progress_ring = ProgressRing;
