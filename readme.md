[![Build Status](https://travis-ci.org/taisuke-j/progress-ring-component.svg?branch=master)](https://travis-ci.org/taisuke-j/progress-ring-component)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/progress-ring-component)
![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Progress Ring Component

This is an animated web component showing progress in percentage. It internally uses [easing-animation-frames](https://github.com/taisuke-j/easing-animation-frames) library to create CPU-friendly easing animations. This component is compiled with [Stencil](https://stenciljs.com/).
1. [Demo 1](https://unpkg.com/progress-ring-component/demo/demo-01.html)
1. [Demo 2](https://unpkg.com/progress-ring-component/demo/demo-02.html)

## How to use
<!--
```
<custom-element-demo>
  <template>
    <script type="module" src="https://unpkg.com/progress-ring-component@1.0.2/dist/progressring/progressring.esm.js"></script>
    <script nomodule="" src="https://unpkg.com/progress-ring-component@1.0.2/dist/progressring/progressring.js"></script>
    <style>progress-ring { font-family: sans-serif; }</style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<progress-ring percent='30'></progress-ring>
<progress-ring percent='60'></progress-ring>
<progress-ring percent='90'></progress-ring>
```
There is only one mandatory property, `percent`, which declares the ending percentage in animation. You can also use `radius` prop to change the size of the ring, and `storkeWidth` to change the thickness of the ring. The full list of properties can be found below.

This component works reactively in a unidirectional fashion. When the `percent` changes, it stops the current animation and resumes it with new percentage. There is pre-defined color scheme (`red (< 25%)` -> `yellow (< 50%)` -> `green (< 75%)` -> `blue (>= 75%)`).
<!--
```
<custom-element-demo>
  <template>
    <script type="module" src="https://unpkg.com/progress-ring-component@1.0.2/dist/progressring/progressring.esm.js"></script>
    <script nomodule="" src="https://unpkg.com/progress-ring-component@1.0.2/dist/progressring/progressring.js"></script>
    <style>
      progress-ring { font-family: sans-serif; }
      buttons { width: 150px; text-align: center; }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<progress-ring percent='10'></progress-ring>

<div class='buttons'>
  <button id='button-1'>30%</button>
  <button id='button-2'>60%</button>
  <button id='button-3'>90%</button>
</div>

<script>
  var ring = document.querySelector('progress-ring');
  var button1 = document.querySelector('#button-1');
  var button2 = document.querySelector('#button-2');
  var button3 = document.querySelector('#button-3');
  button1.addEventListener('click', function() { ring.setAttribute('percent', 30) });
  button2.addEventListener('click', function() { ring.setAttribute('percent', 60) });
  button3.addEventListener('click', function() { ring.setAttribute('percent', 90) });
</script>
```
There are several ways to integrate this web component into your project.

### Script tag
Place two script tags `<script type="module" src="https://unpkg.com/progress-ring-component/dist/progressring/progressring.esm.js"></script>` and `<script nomodule="" src="https://unpkg.com/progress-ring-component/dist/progressring/progressring.js"></script>` in the head of your `index.html`.
```
<!DOCTYPE html>
<html lang='en'>
  <head>
    <script type="module" src="https://unpkg.com/progress-ring-component/dist/progressring/progressring.esm.js"></script>
    <script nomodule="" src="https://unpkg.com/progress-ring-component/dist/progressring/progressring.js"></script>
  </head>
  <body>
    <progress-ring percent='50'></progress-ring>
  </body>
</html>
```

### React
If you are using `create-react-app` starter, first you need to `npm i -S progress-ring-component`, and you can include `defineCustomElements(window)` in `index.js`.
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { defineCustomElements } from 'progress-ring-component/dist/loader';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
defineCustomElements(window);
```
It's essentially the same with other frameworks like `Angular` and `Vue` (using `defineCustomElements(window)`).

For more details about framework integration, please see [Stencil doc](https://stenciljs.com/docs/overview) (Progress Ring Component is compiled with Stencil).

## Properties
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| percent | number | 0 | Percentage value
| radius | number | 80 | Radius of the ring
| stroke-width | number | 10 | Thickness of the ring
| duration | number | 4000 | Animation duration in miliseconds
| easing-type | string | `quartInOut` | Easing animation function name
| int-size | number | 30 | Font size of integer
| decimal-size | number | intSize * 0.7 | Font size of decimals
| disable-digits | boolean | false | Hides digits
| invert-colors | boolean | false | Inverts the color scheme


**easingType**: `backInOut`, `backIn`, `backOut`, `bounceInOut`, `bounceIn`, `bounceOut`, `circInOut`, `circIn`, `circOut`, `cubicInOut`, `cubicIn`, `cubicOut`, `elasticInOut`, `elasticIn`, `elasticOut`, `expoInOut`, `expoIn`, `expoOut`, `linear`, `quadInOut`, `quadIn`, `quadOut`, `quartInOut`, `quartIn`, `quartOut`, `quintInOut`, `quintIn`, `quintOut`, `sineInOut`, `sineIn`, `sineOut`

## Browser Support

Internet Explorer is not supported.