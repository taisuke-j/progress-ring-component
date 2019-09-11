import { r as registerInstance, h } from './core-ae3b61b0.js';
function backInOut(t) {
    var s = 1.70158 * 1.525;
    if ((t *= 2) < 1)
        return 0.5 * (t * t * ((s + 1) * t - s));
    return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
}
function backIn(t) {
    var s = 1.70158;
    return t * t * ((s + 1) * t - s);
}
function backOut(t) {
    var s = 1.70158;
    return --t * t * ((s + 1) * t + s) + 1;
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
                : 10.8 * t * t - 20.52 * t + 10.72;
}
function bounceInOut(t) {
    return t < 0.5
        ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))
        : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;
}
function bounceIn(t) {
    return 1.0 - bounceOut(1.0 - t);
}
function circInOut(t) {
    if ((t *= 2) < 1)
        return -0.5 * (Math.sqrt(1 - t * t) - 1);
    return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}
function circIn(t) {
    return 1.0 - Math.sqrt(1.0 - t * t);
}
function circOut(t) {
    return Math.sqrt(1 - (--t * t));
}
function cubicInOut(t) {
    return t < 0.5
        ? 4.0 * t * t * t
        : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
}
function cubicIn(t) {
    return t * t * t;
}
function cubicOut(t) {
    var f = t - 1.0;
    return f * f * f + 1.0;
}
function elasticInOut(t) {
    return t < 0.5
        ? 0.5 * Math.sin(+13.0 * Math.PI / 2 * 2.0 * t) * Math.pow(2.0, 10.0 * (2.0 * t - 1.0))
        : 0.5 * Math.sin(-13.0 * Math.PI / 2 * ((2.0 * t - 1.0) + 1.0)) * Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0;
}
function elasticIn(t) {
    return Math.sin(13.0 * t * Math.PI / 2) * Math.pow(2.0, 10.0 * (t - 1.0));
}
function elasticOut(t) {
    return Math.sin(-13.0 * (t + 1.0) * Math.PI / 2) * Math.pow(2.0, -10.0 * t) + 1.0;
}
function expoInOut(t) {
    return (t === 0.0 || t === 1.0)
        ? t
        : t < 0.5
            ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
            : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0;
}
function expoIn(t) {
    return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
}
function expoOut(t) {
    return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
}
function linear(t) {
    return t;
}
function quadInOut(t) {
    t /= 0.5;
    if (t < 1)
        return 0.5 * t * t;
    t--;
    return -0.5 * (t * (t - 2) - 1);
}
function quadIn(t) {
    return t * t;
}
function quadOut(t) {
    return -t * (t - 2.0);
}
function quarticInOut(t) {
    return t < 0.5
        ? +8.0 * Math.pow(t, 4.0)
        : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0;
}
function quarticIn(t) {
    return Math.pow(t, 4.0);
}
function quarticOut(t) {
    return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
}
function qinticInOut(t) {
    if ((t *= 2) < 1)
        return 0.5 * t * t * t * t * t;
    return 0.5 * ((t -= 2) * t * t * t * t + 2);
}
function qinticIn(t) {
    return t * t * t * t * t;
}
function qinticOut(t) {
    return --t * t * t * t * t + 1;
}
function sineInOut(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
}
function sineIn(t) {
    var v = Math.cos(t * Math.PI * 0.5);
    if (Math.abs(v) < 1e-14)
        return 1;
    else
        return 1 - v;
}
function sineOut(t) {
    return Math.sin(t * Math.PI / 2);
}
var eases = /*#__PURE__*/ Object.freeze({
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
var raf = (typeof window !== 'undefined' && window.requestAnimationFrame)
    ? window.requestAnimationFrame : (function (callback) { return setTimeout(callback, 1000 / 60); });
var caf = (typeof window !== 'undefined' && window.cancelAnimationFrame)
    ? window.cancelAnimationFrame : (function (id) { return clearTimeout(id); });
/**
 * EASING ANIMATION FRAMES
 * easingType - Easing function name of `eases` module
 * duration - Transition duration in milliseconds
 * template (required) - Receives the current progress, stop, resume and restart functions
 * complete - Called after the transition completes
 */
var defaultOptions = {
    duration: 4000,
    easingType: 'cubicInOut',
};
function easingAnimationFrames(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.easingType, easingType = _c === void 0 ? defaultOptions.easingType : _c, _d = _b.duration, duration = _d === void 0 ? defaultOptions.duration : _d, template = _b.template, _e = _b.complete, complete = _e === void 0 ? null : _e;
    if (!template) {
        return;
    }
    // Transition settings
    var easingFunc = eases[easingType];
    var framesDuration = duration;
    var templateFunc = template;
    var completeFunc = complete;
    // Managing progress
    var requestId = null;
    var startTime = null;
    var passedTime = 0;
    var progress = 0;
    var stopFrames = null;
    var resumeFrames = null;
    var restartFrames = null;
    // Stop, resume and restart
    var framesComplete = false;
    var framesCancelled = false;
    var framesResumed = false;
    var framesRestarted = false;
    // Callback function for every requestAnimationFrame
    var frame = function (timestamp) {
        // The latter fallback is for setTimeout and unit tests
        var currentTime = timestamp || new Date().getTime();
        if (framesResumed) {
            startTime = currentTime - passedTime;
            framesResumed = false;
        }
        else {
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
                    progress: progress,
                    stopFrames: stopFrames,
                    resumeFrames: resumeFrames,
                    restartFrames: restartFrames,
                });
            }
            catch (e) {
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
                restartFrames: restartFrames,
            });
            framesComplete = true;
            requestId = null;
            if (completeFunc) {
                completeFunc();
            }
        }
    };
    // Function to stop the transition
    stopFrames = function () {
        framesCancelled = true;
    };
    // Function to resume the transition if it's been stopped by `stopFrames`
    resumeFrames = function () {
        if (!framesCancelled) {
            return;
        }
        framesCancelled = false;
        framesResumed = true;
        requestId = raf(frame);
    };
    // Function to restart transition with new settings
    restartFrames = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.restartEasingType, restartEasingType = _c === void 0 ? defaultOptions.easingType : _c, _d = _b.restartDuration, restartDuration = _d === void 0 ? defaultOptions.duration : _d, restartTemplate = _b.restartTemplate, _e = _b.restartComplete, restartComplete = _e === void 0 ? null : _e;
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
var ProgressRing = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /**
         * Shape
         */
        this.radius = 80;
        this.strokeWidth = 10;
        this.setShapeSettings = function (_a) {
            var _b = _a.radius, radius = _b === void 0 ? _this.radius : _b, _c = _a.strokeWidth, strokeWidth = _c === void 0 ? _this.strokeWidth : _c;
            // Caches calculation results
            _this.normalizedRadius = radius - Math.floor(strokeWidth / 2);
            _this.circumference = _this.normalizedRadius * 2 * Math.PI;
        };
        /**
         * Text
         */
        this.intSize = 30;
        this.decimalSize = Math.floor(this.intSize * 0.7);
        this.disableDigits = false;
        this.parsePercentText = function (percent) {
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
        this.internalColorsReversed = this.internalColors.slice().reverse();
        this.setColorsSettings = function (_a) {
            var _b = _a.invertColors, invertColors = _b === void 0 ? _this.invertColors : _b;
            // Caches calculation results
            _this.colors = invertColors ?
                _this.internalColorsReversed :
                _this.internalColors;
        };
        this.setColors = function (percent) {
            var color;
            if (percent <= 25) {
                color = _this.colors[0];
            }
            else if (percent <= 50) {
                color = _this.colors[1];
            }
            else if (percent <= 75) {
                color = _this.colors[2];
            }
            else {
                color = _this.colors[3];
            }
            _this.ring.style.stroke = color;
            _this.ringBackground.style.stroke = color;
            _this.percentText.style.fill = color;
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
        this.setProgress = function (_a) {
            var progress = _a.progress, stopFrames = _a.stopFrames, restartFrames = _a.restartFrames;
            // Stops the animation if the component
            if (!_this.isLoaded && stopFrames) {
                stopFrames();
                return;
            }
            _this.progress = progress;
            _this.restartFrames = restartFrames;
            // Shape
            var currentPercent = ((_this.internalPercent - _this.start) * progress) + _this.start;
            var offset = currentPercent >= 100 ?
                0 :
                _this.circumference - (currentPercent / 100 * _this.circumference);
            _this.ring.style.strokeDashoffset = String(offset); // strokeDashoffset value type is string
            // Text
            var parsedPercentText = _this.parsePercentText(currentPercent);
            _this.intText.innerHTML = parsedPercentText[0];
            _this.decimalText.innerHTML = parsedPercentText[1];
            // Colors
            if (_this.complete) {
                // No color transitions for the initial animation
                _this.setColors(currentPercent);
            }
        };
        // Called every time the percent attribute gets updated
        this.restartProgress = function () {
            if (!_this.restartFrames) {
                return;
            }
            // Resets the progresss to 0 and set the start to be the previous percent
            var currentPercent = ((_this.internalPercent - _this.start) * _this.progress) + _this.start;
            _this.internalPercent = _this.percent;
            _this.progress = 0;
            _this.start = currentPercent;
            // Restarts the template function
            var restartSettings = {
                restartDuration: _this.duration,
                restartEasingType: _this.easingType,
                restartTemplate: _this.setProgress,
                restartComplete: _this.completeCallback
            };
            _this.restartFrames(restartSettings);
        };
        this.completeCallback = function () {
            if (!_this.complete) {
                _this.complete = true;
            }
        };
    }
    class_1.prototype.radiusUpdated = function (newValue) {
        this.setShapeSettings({
            radius: newValue
        });
    };
    class_1.prototype.strokeWidthUpdated = function (newValue) {
        this.setShapeSettings({
            strokeWidth: newValue
        });
    };
    class_1.prototype.invertColorsUpdated = function (newValue) {
        this.setColorsSettings({
            invertColors: newValue
        });
    };
    class_1.prototype.percentUpdated = function () {
        if (this.percent < 0) {
            this.percent = 0;
            return;
        }
        this.restartProgress();
    };
    class_1.prototype.durationtUpdated = function () {
        this.restartProgress();
    };
    class_1.prototype.easingTypeUpdated = function () {
        this.restartProgress();
    };
    /**
     * Lifecycle Methods
     */
    class_1.prototype.componentWillLoad = function () {
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
    };
    class_1.prototype.componentDidLoad = function () {
        this.isLoaded = true;
        this.setColors(this.percent);
        var animationSettings = {
            duration: this.duration,
            easingType: this.easingType,
            template: this.setProgress,
            complete: this.completeCallback
        };
        easingAnimationFrames(animationSettings);
    };
    class_1.prototype.componentDidUnload = function () {
        this.isLoaded = false;
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h("svg", { height: this.radius * 2, width: this.radius * 2 }, h("circle", { cx: this.radius, cy: this.radius, r: this.normalizedRadius, "stroke-width": this.strokeWidth, fill: 'transparent', opacity: '0.1', ref: function (el) { return _this.ringBackground = el; }, class: 'background-ring' }), h("circle", { cx: this.radius, cy: this.radius, r: this.normalizedRadius, "stroke-width": this.strokeWidth, "stroke-dasharray": this.circumference + " " + this.circumference, fill: 'transparent', ref: function (el) { return _this.ring = el; }, class: 'ring' }), h("text", { x: '50%', y: '50%', "text-anchor": 'middle', dy: '0.5ex', "font-size": this.intSize, ref: function (el) { return _this.percentText = el; }, class: this.disableDigits ? 'hide' : null }, h("tspan", { "font-size": this.intSize, ref: function (el) { return _this.intText = el; }, class: 'intText' }), h("tspan", { class: 'decimalPointText' }, "."), h("tspan", { "font-size": this.decimalSize, ref: function (el) { return _this.decimalText = el; }, class: 'decimalText' }), h("tspan", { "font-size": this.decimalSize, class: 'percentText' }, "%"))));
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "radius": ["radiusUpdated"],
                "strokeWidth": ["strokeWidthUpdated"],
                "invertColors": ["invertColorsUpdated"],
                "percent": ["percentUpdated"],
                "duration": ["durationtUpdated"],
                "easingType": ["easingTypeUpdated"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "circle{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:stroke .4s ease 0s;transition:stroke .4s ease 0s}text{-webkit-transition:fill .6s ease 0s;transition:fill .6s ease 0s}.hide{display:none}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { ProgressRing as progress_ring };
