import{r as t,c as i,h as s}from"./p-04eda2fb.js";function e(t){var i=t*t;return t<4/11?7.5625*i:t<8/11?9.075*i-9.9*t+3.4:t<.9?4356/361*i-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72}const n=Object.freeze({__proto__:null,backInOut:function(t){var i=2.5949095;return(t*=2)<1?t*t*((i+1)*t-i)*.5:.5*((t-=2)*t*((i+1)*t+i)+2)},backIn:function(t){var i=1.70158;return t*t*((i+1)*t-i)},backOut:function(t){var i=1.70158;return--t*t*((i+1)*t+i)+1},bounceInOut:function(t){return t<.5?.5*(1-e(1-2*t)):.5*e(2*t-1)+.5},bounceIn:function(t){return 1-e(1-t)},bounceOut:e,circInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},circIn:function(t){return 1-Math.sqrt(1-t*t)},circOut:function(t){return Math.sqrt(1- --t*t)},cubicInOut:function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1},cubicIn:function(t){return t*t*t},cubicOut:function(t){var i=t-1;return i*i*i+1},elasticInOut:function(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1},elasticIn:function(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))},elasticOut:function(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1},expoInOut:function(t){return 0===t||1===t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1},expoIn:function(t){return 0===t?t:Math.pow(2,10*(t-1))},expoOut:function(t){return 1===t?t:1-Math.pow(2,-10*t)},linear:function(t){return t},quadInOut:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},quadIn:function(t){return t*t},quadOut:function(t){return-t*(t-2)},quartInOut:function(t){return t<.5?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1},quartIn:function(t){return Math.pow(t,4)},quartOut:function(t){return Math.pow(t-1,3)*(1-t)+1},quintInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},quintIn:function(t){return t*t*t*t*t},quintOut:function(t){return--t*t*t*t*t+1},sineInOut:function(t){return-.5*(Math.cos(Math.PI*t)-1)},sineIn:function(t){var i=Math.cos(t*Math.PI*.5);return Math.abs(i)<1e-14?1:1-i},sineOut:function(t){return Math.sin(t*Math.PI/2)}}),r="undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:t=>setTimeout(t,1e3/60),h="undefined"!=typeof window&&window.cancelAnimationFrame?window.cancelAnimationFrame:t=>clearTimeout(t),a=class{constructor(s){t(this,s),this.prcProgress=i(this,"prcProgress",7),this.prcStart=i(this,"prcStart",7),this.prcComplete=i(this,"prcComplete",7),this.prcStop=i(this,"prcStop",7),this.prcResume=i(this,"prcResume",7),this.prcRestart=i(this,"prcRestart",7),this.radius=80,this.strokeWidth=10,this.setShapeSettings=({radius:t=this.radius,strokeWidth:i=this.strokeWidth})=>{this.normalizedRadius=t-Math.floor(i/2),this.circumference=2*this.normalizedRadius*Math.PI},this.intSize=30,this.disableDigits=!1,this.disableDecimals=!1,this.parsePercentageText=t=>t<=0?["0","0"]:t.toFixed(1).split("."),this.isZeroPercent=()=>0===this.percentage,this.getDecimalSize=()=>void 0===this.decimalSize?Math.floor(.7*this.intSize):this.decimalSize,this.roundLinecap=!1,this.getLinecap=()=>this.roundLinecap?"round":"butt",this.colors=new Map([[0,"#ff4f40"],[25,"#ffcd40"],[50,"#66a0ff"],[75,"#30bf7a"]]),this.invertColors=!1,this.setColorsSettings=({colors:t=this.colors,invertColors:i=this.invertColors})=>{const s=t instanceof Map?t:new Map(JSON.parse(t));if(!i)return void(this.internalColors=s);const e=[...s],n=[...e].reverse();this.internalColors=new Map(e.map(((t,i)=>[t[0],n[i][1]])))},this.setColors=t=>{let i;const s=[...this.internalColors];for(let e=0;e<s.length;e++){if(e===s.length-1){i=s[e][1];break}if(t<s[e+1][0]){i=s[e][1];break}}this.ring.style.stroke=i,this.ringBackground.style.stroke=i,this.percentageText.style.fill=i},this.percentage=0,this.duration=4e3,this.easingType="quartInOut",this.start=0,this.progress=0,this.isLoaded=!1,this.isDisconnected=!1,this.complete=!1,this.setProgress=({progress:t,stopFrames:i,resumeFrames:s,restartFrames:e})=>{if(this.isDisconnected&&"function"==typeof i)return i(),void(void 0!==this.eventId&&this.prcStop.emit({id:this.eventId}));this.progress=t,this.resumeFrames=s,this.restartFrames=e;const n=(this.internalPercentage-this.start)*t+this.start;this.ring.style.strokeDashoffset=String(n>=100?0:this.circumference-n/100*this.circumference);const r=this.parsePercentageText(n);this.intText.innerHTML=r[0],this.decimalText.innerHTML=r[1],void 0!==this.eventId&&this.prcProgress.emit({id:this.eventId,progress:t,percentage:n})},this.restartProgress=()=>{if("function"!=typeof this.restartFrames)return;void 0!==this.eventId&&this.prcRestart.emit({id:this.eventId});const t=(this.internalPercentage-this.start)*this.progress+this.start;this.internalPercentage=this.percentage,this.progress=0,this.start=t,this.complete=!1;const i={restartDuration:this.duration,restartEasingType:this.easingType,restartTemplate:this.setProgress,restartComplete:this.completeCallback};this.setColors(this.percentage),this.restartFrames(i)},this.completeCallback=()=>{this.complete||(this.complete=!0,void 0!==this.eventId&&this.prcComplete.emit({id:this.eventId}))}}radiusUpdated(t){this.setShapeSettings({radius:t}),this.restartProgress()}strokeWidthUpdated(t){this.setShapeSettings({strokeWidth:t}),this.restartProgress()}colorsUpdated(t){this.setColorsSettings({colors:t}),this.restartProgress()}invertColorsUpdated(t){this.setColorsSettings({invertColors:t}),this.restartProgress()}percentageUpdated(){this.percentage<0?this.percentage=0:this.restartProgress()}durationtUpdated(){this.restartProgress()}easingTypeUpdated(){this.restartProgress()}componentWillLoad(){this.percentage<0?this.percentage=0:(this.internalPercentage=this.percentage,this.setShapeSettings({radius:this.radius,strokeWidth:this.strokeWidth}),this.setColorsSettings({invertColors:this.invertColors,colors:this.colors}))}componentDidLoad(){this.isLoaded=!0,this.setColors(this.percentage),void 0!==this.eventId&&this.prcStart.emit({id:this.eventId}),(({easingType:t="cubicInOut",duration:i=4e3,template:s,complete:e=null}={})=>{if(!s)return;let a=n[t],o=i,u=s,c=e,d=null,l=null,p=null,f=0,M=0,m=!1,g=!1,v=!1,O=!1,I=null,b=null,y=null;const w=t=>(l=t||(new Date).getTime(),v?(p=l-f,v=!1):(p=p||l,f=l-p),f<o&&!g?(d=r(w),M=a(f/o),void u({progress:M,stopFrames:I,resumeFrames:b,restartFrames:y})):O?(g=!1,O=!1,void r(w)):void(f>=o&&(u({progress:1,stopFrames:null,resumeFrames:null,restartFrames:y}),m=!0,d=null,c&&c())));I=()=>{g=!0},b=()=>{g&&(g=!1,v=!0,d=r(w))},y=({restartEasingType:t="cubicInOut",restartDuration:i=4e3,restartTemplate:s,restartComplete:e=null}={})=>{s&&(a=n[t],o=i,u=s,c=e,p=null,f=0,M=0,m||g||(I(),O=!0),g&&(g=!1,d=r(w)),m&&(m=!1,d=r(w)))};try{d=r(w)}catch(t){console.error(t),h(d)}})({duration:this.duration,easingType:this.easingType,template:this.setProgress,complete:this.completeCallback})}connectedCallback(){this.isLoaded&&(this.isDisconnected=!1,void 0!==this.eventId&&this.prcResume.emit({id:this.eventId}),this.resumeFrames())}disconnectedCallback(){this.isDisconnected=!0}render(){return s("div",{class:"root"},s("svg",{height:2*this.radius,width:2*this.radius},s("circle",{cx:this.radius,cy:this.radius,r:this.normalizedRadius,"stroke-width":this.strokeWidth,fill:"transparent",opacity:"0.1",ref:t=>this.ringBackground=t,class:"background-ring"}),s("circle",{cx:this.radius,cy:this.radius,r:this.normalizedRadius,"stroke-width":this.strokeWidth,"stroke-dasharray":`${this.circumference} ${this.circumference}`,fill:"transparent","stroke-linecap":this.getLinecap(),ref:t=>this.ring=t,class:"ring"}),s("text",{x:"50%",y:"50%","text-anchor":"middle",dy:"0.5ex","font-size":this.intSize,ref:t=>this.percentageText=t,class:this.disableDigits?"hide":null},s("tspan",{"font-size":this.intSize,ref:t=>this.intText=t,class:"intText"}),s("tspan",{"font-size":this.intSize,class:this.isZeroPercent()||this.disableDecimals?"hide":"decimalPointText"},"."),s("tspan",{"font-size":this.getDecimalSize(),ref:t=>this.decimalText=t,class:this.isZeroPercent()||this.disableDecimals?"hide":"decimalText"}),s("tspan",{"font-size":this.getDecimalSize(),dx:"0.5ex",class:"percentageText"},"%"))),s("slot",null))}static get watchers(){return{radius:["radiusUpdated"],strokeWidth:["strokeWidthUpdated"],colors:["colorsUpdated"],invertColors:["invertColorsUpdated"],percentage:["percentageUpdated"],duration:["durationtUpdated"],easingType:["easingTypeUpdated"]}}};a.style=".root{display:inline-block;position:relative}circle{transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke 0.4s ease 0s}text{transition:fill 0.6s ease 0s}slot{display:flex;align-items:center;justify-content:center;position:absolute;left:0;top:0;width:100%;height:100%;text-align:center}.hide{display:none}";export{a as progress_ring}