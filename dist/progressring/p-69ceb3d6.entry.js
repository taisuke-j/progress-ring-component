import{r as t,c as i,h as e}from"./p-647e6990.js";function s(t){var i=1.70158*1.525;if((t*=2)<1)return.5*(t*t*((i+1)*t-i));return.5*((t-=2)*t*((i+1)*t+i)+2)}function n(t){var i=1.70158;return t*t*((i+1)*t-i)}function r(t){var i=1.70158;return--t*t*((i+1)*t+i)+1}function a(t){var i=4/11;var e=8/11;var s=9/10;var n=4356/361;var r=35442/1805;var a=16061/1805;var h=t*t;return t<i?7.5625*h:t<e?9.075*h-9.9*t+3.4:t<s?n*h-r*t+a:10.8*t*t-20.52*t+10.72}function h(t){return t<.5?.5*(1-a(1-t*2)):.5*a(t*2-1)+.5}function o(t){return 1-a(1-t)}function u(t){if((t*=2)<1)return-.5*(Math.sqrt(1-t*t)-1);return.5*(Math.sqrt(1-(t-=2)*t)+1)}function c(t){return 1-Math.sqrt(1-t*t)}function f(t){return Math.sqrt(1- --t*t)}function d(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function l(t){return t*t*t}function p(t){var i=t-1;return i*i*i+1}function b(t){return t<.5?.5*Math.sin(+13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1}function M(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))}function m(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}function y(t){return t===0||t===1?t:t<.5?+.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-t*20)+1}function g(t){return t===0?t:Math.pow(2,10*(t-1))}function k(t){return t===1?t:1-Math.pow(2,-10*t)}function O(t){return t}function I(t){t/=.5;if(t<1)return.5*t*t;t--;return-.5*(t*(t-2)-1)}function v(t){return t*t}function w(t){return-t*(t-2)}function x(t){return t<.5?+8*Math.pow(t,4):-8*Math.pow(t-1,4)+1}function T(t){return Math.pow(t,4)}function U(t){return Math.pow(t-1,3)*(1-t)+1}function C(t){if((t*=2)<1)return.5*t*t*t*t*t;return.5*((t-=2)*t*t*t*t+2)}function q(t){return t*t*t*t*t}function F(t){return--t*t*t*t*t+1}function W(t){return-.5*(Math.cos(Math.PI*t)-1)}function z(t){var i=Math.cos(t*Math.PI*.5);if(Math.abs(i)<1e-14)return 1;else return 1-i}function _(t){return Math.sin(t*Math.PI/2)}const D=Object.freeze({__proto__:null,backInOut:s,backIn:n,backOut:r,bounceInOut:h,bounceIn:o,bounceOut:a,circInOut:u,circIn:c,circOut:f,cubicInOut:d,cubicIn:l,cubicOut:p,elasticInOut:b,elasticIn:M,elasticOut:m,expoInOut:y,expoIn:g,expoOut:k,linear:O,quadInOut:I,quadIn:v,quadOut:w,quartInOut:x,quartIn:T,quartOut:U,quintInOut:C,quintIn:q,quintOut:F,sineInOut:W,sineIn:z,sineOut:_});const S=typeof window!=="undefined"&&window.requestAnimationFrame?window.requestAnimationFrame:t=>setTimeout(t,1e3/60);const j=typeof window!=="undefined"&&window.cancelAnimationFrame?window.cancelAnimationFrame:t=>clearTimeout(t);const E={duration:4e3,easingType:"cubicInOut"};const L=({easingType:t=E.easingType,duration:i=E.duration,template:e,complete:s=null}={})=>{if(!e){return}let n=D[t];let r=i;let a=e;let h=s;let o=null;let u=null;let c=null;let f=0;let d=0;let l=false;let p=false;let b=false;let M=false;let m=null;let y=null;let g=null;const k=t=>{u=t||(new Date).getTime();if(b){c=u-f;b=false}else{c=c||u;f=u-c}if(f<r&&!p){o=S(k);d=n(f/r);a({progress:d,stopFrames:m,resumeFrames:y,restartFrames:g});return}if(M){p=false;M=false;S(k);return}if(f>=r){a({progress:1,stopFrames:null,resumeFrames:null,restartFrames:g});l=true;o=null;if(h){h()}}};m=()=>{p=true};y=()=>{if(!p){return}p=false;b=true;o=S(k)};g=({restartEasingType:t=E.easingType,restartDuration:i=E.duration,restartTemplate:e,restartComplete:s=null}={})=>{if(!e){return}n=D[t];r=i;a=e;h=s;c=null;f=0;d=0;if(!l&&!p){m();M=true}if(p){p=false;o=S(k)}if(l){l=false;o=S(k)}};try{o=S(k)}catch(t){console.error(t);j(o)}};const P=".root{display:inline-block;position:relative}circle{transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke 0.4s ease 0s}text{transition:fill 0.6s ease 0s}slot{display:flex;align-items:center;justify-content:center;position:absolute;left:0;top:0;width:100%;height:100%;text-align:center}.hide{display:none}";const R=P;const $=class{constructor(e){t(this,e);this.prcProgress=i(this,"prcProgress",7);this.prcColor=i(this,"prcColor",7);this.prcStart=i(this,"prcStart",7);this.prcComplete=i(this,"prcComplete",7);this.prcStop=i(this,"prcStop",7);this.prcResume=i(this,"prcResume",7);this.prcRestart=i(this,"prcRestart",7);this.setShapeSettings=({radius:t=this.radius,strokeWidth:i=this.strokeWidth})=>{this.normalizedRadius=t-Math.floor(i/2);this.circumference=this.normalizedRadius*2*Math.PI};this.parsePercentageText=t=>{if(t<=0){return["0","0"]}return t.toFixed(1).split(".")};this.isZeroPercent=()=>this.percentage===0;this.getDecimalSize=()=>this.decimalSize===undefined?Math.floor(this.intSize*.7):this.decimalSize;this.getLinecap=()=>this.roundLinecap?"round":"butt";this.setColorsSettings=({colors:t=this.colors,invertColors:i=this.invertColors})=>{const e=t instanceof Map?t:new Map(JSON.parse(t));if(!i){this.internalColors=e;return}const s=[...e];const n=[...s].reverse();this.internalColors=new Map(s.map(((t,i)=>[t[0],n[i][1]])))};this.setColors=t=>{let i;const e=[...this.internalColors];for(let s=0;s<e.length;s++){if(s===e.length-1){i=e[s][1];break}if(t<e[s+1][0]){i=e[s][1];break}}if(this.eventId!==undefined){this.prcColor.emit({id:this.eventId,color:i})}this.ring.style.stroke=i;this.ringBackground.style.stroke=i;this.percentageText.style.fill=i};this.start=0;this.progress=0;this.isLoaded=false;this.isDisconnected=false;this.complete=false;this.setProgress=({progress:t,stopFrames:i,resumeFrames:e,restartFrames:s})=>{if(this.isDisconnected&&typeof i==="function"){i();if(this.eventId!==undefined){this.prcStop.emit({id:this.eventId})}return}this.progress=t;this.resumeFrames=e;this.restartFrames=s;const n=(this.internalPercentage-this.start)*t+this.start;const r=n>=100?0:this.circumference-n/100*this.circumference;this.ring.style.strokeDashoffset=String(r);const a=this.parsePercentageText(n);this.intText.innerHTML=a[0];this.decimalText.innerHTML=a[1];if(this.eventId!==undefined){this.prcProgress.emit({id:this.eventId,progress:t,percentage:n})}};this.restartProgress=()=>{if(typeof this.restartFrames!=="function"){return}if(this.eventId!==undefined){this.prcRestart.emit({id:this.eventId})}const t=(this.internalPercentage-this.start)*this.progress+this.start;this.internalPercentage=this.percentage;this.progress=0;this.start=t;this.complete=false;const i={restartDuration:this.duration,restartEasingType:this.easingType,restartTemplate:this.setProgress,restartComplete:this.completeCallback};this.setColors(this.percentage);this.restartFrames(i)};this.completeCallback=()=>{if(!this.complete){this.complete=true;if(this.eventId!==undefined){this.prcComplete.emit({id:this.eventId})}}};this.radius=80;this.strokeWidth=10;this.intSize=30;this.decimalSize=undefined;this.disableDigits=false;this.disableDecimals=false;this.roundLinecap=false;this.colors=new Map([[0,"#ff4f40"],[25,"#ffcd40"],[50,"#66a0ff"],[75,"#30bf7a"]]);this.invertColors=false;this.percentage=0;this.duration=4e3;this.easingType="quartInOut";this.eventId=undefined}radiusUpdated(t){this.setShapeSettings({radius:t});this.restartProgress()}strokeWidthUpdated(t){this.setShapeSettings({strokeWidth:t});this.restartProgress()}colorsUpdated(t){this.setColorsSettings({colors:t});this.restartProgress()}invertColorsUpdated(t){this.setColorsSettings({invertColors:t});this.restartProgress()}percentageUpdated(){if(this.percentage<0){this.percentage=0;return}this.restartProgress()}durationtUpdated(){this.restartProgress()}easingTypeUpdated(){this.restartProgress()}componentWillLoad(){if(this.percentage<0){this.percentage=0;return}this.internalPercentage=this.percentage;this.setShapeSettings({radius:this.radius,strokeWidth:this.strokeWidth});this.setColorsSettings({invertColors:this.invertColors,colors:this.colors})}componentDidLoad(){this.isLoaded=true;this.setColors(this.percentage);if(this.eventId!==undefined){this.prcStart.emit({id:this.eventId})}const t={duration:this.duration,easingType:this.easingType,template:this.setProgress,complete:this.completeCallback};L(t)}connectedCallback(){if(this.isLoaded){this.isDisconnected=false;if(this.eventId!==undefined){this.prcResume.emit({id:this.eventId})}this.resumeFrames()}}disconnectedCallback(){this.isDisconnected=true}render(){return e("div",{key:"dc6fa79b9d0c0691e1c3bf71dd3fb6f014587504",class:"root"},e("svg",{key:"221dd3d20387ff7b0fa52c70ee38b98baa7907fc",height:this.radius*2,width:this.radius*2},e("circle",{key:"7f67d59118398f5b01ed0f821e7282c9e3611c20",cx:this.radius,cy:this.radius,r:this.normalizedRadius,"stroke-width":this.strokeWidth,fill:"transparent",opacity:"0.1",ref:t=>this.ringBackground=t,class:"background-ring"}),e("circle",{key:"ffc7caf286a723a9324f22055570ec361498b5b2",cx:this.radius,cy:this.radius,r:this.normalizedRadius,"stroke-width":this.strokeWidth,"stroke-dasharray":`${this.circumference} ${this.circumference}`,fill:"transparent","stroke-linecap":this.getLinecap(),ref:t=>this.ring=t,class:"ring"}),e("text",{key:"4300647b46d344d2ea9ba908b9222721db355a3e",x:"50%",y:"50%","text-anchor":"middle",dy:"0.5ex","font-size":this.intSize,ref:t=>this.percentageText=t,class:this.disableDigits?"hide":null},e("tspan",{key:"0229a043a68cbf9d58f43604354722eccecacdde","font-size":this.intSize,ref:t=>this.intText=t,class:"intText"}),e("tspan",{key:"50f340a8a97f3f04409055f358a03cf5e7130475","font-size":this.intSize,class:this.isZeroPercent()||this.disableDecimals?"hide":"decimalPointText"},"."),e("tspan",{key:"a782c10ad6d4b427d3df46db36e2b0059a591619","font-size":this.getDecimalSize(),ref:t=>this.decimalText=t,class:this.isZeroPercent()||this.disableDecimals?"hide":"decimalText"}),e("tspan",{key:"c377354751cda0ef46c2193cec00a67c271f79ca","font-size":this.getDecimalSize(),dx:"0.5ex",class:"percentageText"},"%"))),e("slot",{key:"d4e372d7ca7c6fd5053c34e1163b97878678abbf"}))}static get watchers(){return{radius:["radiusUpdated"],strokeWidth:["strokeWidthUpdated"],colors:["colorsUpdated"],invertColors:["invertColorsUpdated"],percentage:["percentageUpdated"],duration:["durationtUpdated"],easingType:["easingTypeUpdated"]}}};$.style=R;export{$ as progress_ring};
//# sourceMappingURL=p-69ceb3d6.entry.js.map