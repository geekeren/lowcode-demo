(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.zen-logger"],{"./node_modules/zen-logger/lib/index.js":function(e,n,t){"use strict";var r=function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},o={debug:-1,log:0,info:0,warn:1,error:2},a=function(e,n,t,r){return function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];if(n&&o[n]<=o[e]&&console[e].apply&&("*"===r||t.startsWith(r)))return console[e].apply(console,i(a,t))}};function i(e,n){return"*"!==n&&("string"==typeof e[0]?e[0]="["+n+"] "+e[0]:e=["["+n+"]"].concat(e)),e}function l(e,n){if(!e)return{targetLevel:n.level,targetBizName:n.bizName};if(~e.indexOf(":")){var t=e.split(":");return{targetLevel:t[0],targetBizName:t[1]}}return{targetLevel:e,targetBizName:"*"}}var c={level:"warn",bizName:"*"},u=function(){function e(e){e=r(r({},c),e);var n=location||{},t,i=l((/__(?:logConf|logLevel)__=([^#/&]*)/.exec(n.href)||[])[1],e),u=i.targetLevel,f=i.targetBizName;for(var g in o)this[g]=a(g,u,e.bizName,f)}return e}();n.a=u}}]);