import{r as t,h as i}from"./p-1b293676.js";function s(t){var i=t*t;return t<4/11?7.5625*i:t<8/11?9.075*i-9.9*t+3.4:t<.9?4356/361*i-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72}const n=Object.freeze({__proto__:null,backInOut:function(t){var i=2.5949095;return(t*=2)<1?t*t*((i+1)*t-i)*.5:.5*((t-=2)*t*((i+1)*t+i)+2)},backIn:function(t){var i=1.70158;return t*t*((i+1)*t-i)},backOut:function(t){var i=1.70158;return--t*t*((i+1)*t+i)+1},bounceInOut:function(t){return t<.5?.5*(1-s(1-2*t)):.5*s(2*t-1)+.5},bounceIn:function(t){return 1-s(1-t)},bounceOut:s,circInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},circIn:function(t){return 1-Math.sqrt(1-t*t)},circOut:function(t){return Math.sqrt(1- --t*t)},cubicInOut:function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1},cubicIn:function(t){return t*t*t},cubicOut:function(t){var i=t-1;return i*i*i+1},elasticInOut:function(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1},elasticIn:function(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))},elasticOut:function(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1},expoInOut:function(t){return 0===t||1===t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1},expoIn:function(t){return 0===t?t:Math.pow(2,10*(t-1))},expoOut:function(t){return 1===t?t:1-Math.pow(2,-10*t)},linear:function(t){return t},quadInOut:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},quadIn:function(t){return t*t},quadOut:function(t){return-t*(t-2)},quartInOut:function(t){return t<.5?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1},quartIn:function(t){return Math.pow(t,4)},quartOut:function(t){return Math.pow(t-1,3)*(1-t)+1},quintInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},quintIn:function(t){return t*t*t*t*t},quintOut:function(t){return--t*t*t*t*t+1},sineInOut:function(t){return-.5*(Math.cos(Math.PI*t)-1)},sineIn:function(t){var i=Math.cos(t*Math.PI*.5);return Math.abs(i)<1e-14?1:1-i},sineOut:function(t){return Math.sin(t*Math.PI/2)}}),r="undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:t=>setTimeout(t,1e3/60),e="undefined"!=typeof window&&window.cancelAnimationFrame?window.cancelAnimationFrame:t=>clearTimeout(t),h=class{constructor(i){t(this,i),this.radius=80,this.strokeWidth=10,this.setShapeSettings=({radius:t=this.radius,strokeWidth:i=this.strokeWidth})=>{this.normalizedRadius=t-Math.floor(i/2),this.circumference=2*this.normalizedRadius*Math.PI},this.intSize=30,this.decimalSize=Math.floor(.7*this.intSize),this.disableDigits=!1,this.parsePercentText=t=>t<=0?["0","0"]:t.toFixed(1).split("."),this.invertColors=!1,this.internalColors=["#ff4f40","#ffcd40","#30bf7a","#66a0ff"],this.internalColorsReversed=[...this.internalColors].reverse(),this.setColorsSettings=({invertColors:t=this.invertColors})=>{this.colors=t?this.internalColorsReversed:this.internalColors},this.setColors=t=>{let i;i=t<=25?this.colors[0]:t<=50?this.colors[1]:t<=75?this.colors[2]:this.colors[3],this.ring.style.stroke=i,this.ringBackground.style.stroke=i,this.percentText.style.fill=i},this.percent=0,this.duration=4e3,this.easingType="quartInOut",this.start=0,this.progress=0,this.isLoaded=!1,this.complete=!1,this.setProgress=({progress:t,stopFrames:i,restartFrames:s})=>{if(!this.isLoaded&&i)return void i();this.progress=t,this.restartFrames=s;const n=(this.internalPercent-this.start)*t+this.start;this.ring.style.strokeDashoffset=String(n>=100?0:this.circumference-n/100*this.circumference);const r=this.parsePercentText(n);this.intText.innerHTML=r[0],this.decimalText.innerHTML=r[1],this.complete&&this.setColors(n)},this.restartProgress=()=>{if(!this.restartFrames)return;const t=(this.internalPercent-this.start)*this.progress+this.start;this.internalPercent=this.percent,this.progress=0,this.start=t,this.restartFrames({restartDuration:this.duration,restartEasingType:this.easingType,restartTemplate:this.setProgress,restartComplete:this.completeCallback})},this.completeCallback=()=>{this.complete||(this.complete=!0)}}radiusUpdated(t){this.setShapeSettings({radius:t}),this.restartProgress()}strokeWidthUpdated(t){this.setShapeSettings({strokeWidth:t}),this.restartProgress()}invertColorsUpdated(t){this.setColorsSettings({invertColors:t}),this.restartProgress()}percentUpdated(){this.percent<0?this.percent=0:this.restartProgress()}durationtUpdated(){this.restartProgress()}easingTypeUpdated(){this.restartProgress()}componentWillLoad(){this.percent<0?this.percent=0:(this.internalPercent=this.percent,this.setShapeSettings({radius:this.radius,strokeWidth:this.strokeWidth}),this.setColorsSettings({invertColors:this.invertColors}))}componentDidLoad(){this.isLoaded=!0,this.setColors(this.percent),function({easingType:t="cubicInOut",duration:i=4e3,template:s,complete:h=null}={}){if(!s)return;let a=n[t],u=i,o=s,c=h,d=null,l=null,f=0,p=0,M=null,m=null,O=null,I=!1,g=!1,w=!1,y=!1;const b=t=>{const i=t||(new Date).getTime();if(w?(l=i-f,w=!1):(l=l||i,f=i-l),f<u&&!g){d=r(b),p=a(f/u);try{o({progress:p,stopFrames:M,resumeFrames:m,restartFrames:O})}catch(t){console.error(t),e(d)}}else{if(y)return g=!1,y=!1,void r(b);f>=u&&(o({progress:1,stopFrames:null,resumeFrames:null,restartFrames:O}),I=!0,d=null,c&&c())}};M=()=>{g=!0},m=()=>{g&&(g=!1,w=!0,d=r(b))},O=({restartEasingType:t="cubicInOut",restartDuration:i=4e3,restartTemplate:s,restartComplete:e=null}={})=>{s&&(a=n[t],u=i,o=s,c=e,l=null,f=0,p=0,I||g||(M(),y=!0),g&&(g=!1,d=r(b)),I&&(I=!1,d=r(b)))},d=r(b)}({duration:this.duration,easingType:this.easingType,template:this.setProgress,complete:this.completeCallback})}disconnectedCallback(){this.isLoaded=!1}render(){return i("svg",{height:2*this.radius,width:2*this.radius},i("circle",{cx:this.radius,cy:this.radius,r:this.normalizedRadius,"stroke-width":this.strokeWidth,fill:"transparent",opacity:"0.1",ref:t=>this.ringBackground=t,class:"background-ring"}),i("circle",{cx:this.radius,cy:this.radius,r:this.normalizedRadius,"stroke-width":this.strokeWidth,"stroke-dasharray":`${this.circumference} ${this.circumference}`,fill:"transparent",ref:t=>this.ring=t,class:"ring"}),i("text",{x:"50%",y:"50%","text-anchor":"middle",dy:"0.5ex","font-size":this.intSize,ref:t=>this.percentText=t,class:this.disableDigits?"hide":null},i("tspan",{"font-size":this.intSize,ref:t=>this.intText=t,class:"intText"}),i("tspan",{class:"decimalPointText"},"."),i("tspan",{"font-size":this.decimalSize,ref:t=>this.decimalText=t,class:"decimalText"}),i("tspan",{"font-size":this.decimalSize,class:"percentText"},"%")))}static get watchers(){return{radius:["radiusUpdated"],strokeWidth:["strokeWidthUpdated"],invertColors:["invertColorsUpdated"],percent:["percentUpdated"],duration:["durationtUpdated"],easingType:["easingTypeUpdated"]}}};h.style="circle{transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke 0.4s ease 0s}text{transition:fill 0.6s ease 0s}.hide{display:none}";export{h as progress_ring}