(()=>{"use strict";class t{constructor(t,e,n){this.title=t,this.description=e,this.date=n}setTitle(t){this.name=t}setDescription(t){this.description=t}setDate(t){this.date=t}getTitle(){return this.title}getDescription(){return this.description}getDate(){return this.date}}function e(e,n,r,a){let i=new t(e,n,r,a);return console.log(i),i}class n{constructor(t){this.name=t,this.tasks=[]}setName(t){this.name=t}setTask(t){this.tasks.push(JSON.stringify(t))}getName(){return this.name}getTasks(){return this.tasks}addTask(t){this.tasks.push(t)}}function r(t,e,n){const r=document.getElementById("tasks"),a=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div");a.setAttribute("class","task"),a.setAttribute("id","task"),o.setAttribute("class","task-rightDiv"),i.setAttribute("class","task-leftDiv");const u=document.createElement("button");u.setAttribute("class","material-icons"),u.classList.add("status"),u.textContent="radio_button_unchecked";const s=document.createElement("div"),d=document.createElement("div");d.setAttribute("class","task-title"),d.textContent=t;const l=document.createElement("div");l.textContent=e;const c=document.createElement("div");c.textContent=n;const m=document.createElement("select");m.classList.add("more");const h=document.createElement("option");h.textContent="Edit";const f=document.createElement("option");f.textContent="Delete",m.appendChild(h),m.appendChild(f),m.textContent="more_vert",s.appendChild(d),s.appendChild(l),i.appendChild(u),i.appendChild(s),o.appendChild(c),o.appendChild(m),a.appendChild(i),a.appendChild(o),r.appendChild(a)}function a(t){!function(){const t=document.getElementById("tasks");for(;"add-tasks"!=t.lastChild.id;)t.removeChild(t.lastChild)}();let e=t.getTasks();console.log("link"),console.log(e);for(let t=0;t<e.length;t++)r(e[t].getTitle(),e[t].getDescription(),e[t].getDate())}function i(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function u(t){return i(1,arguments),t instanceof Date||"object"===o(t)&&"[object Date]"===Object.prototype.toString.call(t)}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function d(t){i(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===s(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function l(t){if(i(1,arguments),!u(t)&&"number"!=typeof t)return!1;var e=d(t);return!isNaN(Number(e))}function c(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function m(t,e){i(2,arguments);var n=d(t).getTime(),r=c(e);return new Date(n+r)}function h(t,e){i(2,arguments);var n=c(e);return m(t,-n)}var f=864e5;function g(t){i(1,arguments);var e=1,n=d(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function v(t){i(1,arguments);var e=d(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=g(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var u=g(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}function w(t){i(1,arguments);var e=v(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=g(n);return r}var b=6048e5,p={};function y(){return p}function T(t,e){var n,r,a,o,u,s,l,m;i(1,arguments);var h=y(),f=c(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e||null===(u=e.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==a?a:h.weekStartsOn)&&void 0!==r?r:null===(l=h.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=d(t),v=g.getUTCDay(),w=(v<f?7:0)+v-f;return g.setUTCDate(g.getUTCDate()-w),g.setUTCHours(0,0,0,0),g}function C(t,e){var n,r,a,o,u,s,l,m;i(1,arguments);var h=d(t),f=h.getUTCFullYear(),g=y(),v=c(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(u=e.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:g.firstWeekContainsDate)&&void 0!==r?r:null===(l=g.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(f+1,0,v),w.setUTCHours(0,0,0,0);var b=T(w,e),p=new Date(0);p.setUTCFullYear(f,0,v),p.setUTCHours(0,0,0,0);var C=T(p,e);return h.getTime()>=b.getTime()?f+1:h.getTime()>=C.getTime()?f:f-1}function k(t,e){var n,r,a,o,u,s,d,l;i(1,arguments);var m=y(),h=c(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(u=e.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:m.firstWeekContainsDate)&&void 0!==r?r:null===(d=m.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==n?n:1),f=C(t,e),g=new Date(0);g.setUTCFullYear(f,0,h),g.setUTCHours(0,0,0,0);var v=T(g,e);return v}var D=6048e5;function M(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const S=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return M("yy"===e?r%100:r,e.length)},x=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):M(n+1,2)},E=function(t,e){return M(t.getUTCDate(),e.length)},U=function(t,e){return M(t.getUTCHours()%12||12,e.length)},N=function(t,e){return M(t.getUTCHours(),e.length)},P=function(t,e){return M(t.getUTCMinutes(),e.length)},W=function(t,e){return M(t.getUTCSeconds(),e.length)},Y=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return M(Math.floor(r*Math.pow(10,n-3)),e.length)};function A(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+M(i,2)}function O(t,e){return t%60==0?(t>0?"-":"+")+M(Math.abs(t)/60,2):q(t,e)}function q(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+M(Math.floor(a/60),2)+n+M(a%60,2)}const F={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return S(t,e)},Y:function(t,e,n,r){var a=C(t,r),i=a>0?a:1-a;return"YY"===e?M(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):M(i,e.length)},R:function(t,e){return M(v(t),e.length)},u:function(t,e){return M(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return M(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return M(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return x(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return M(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){i(1,arguments);var n=d(t),r=T(n,e).getTime()-k(n,e).getTime();return Math.round(r/D)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):M(a,e.length)},I:function(t,e,n){var r=function(t){i(1,arguments);var e=d(t),n=g(e).getTime()-w(e).getTime();return Math.round(n/b)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):M(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):E(t,e)},D:function(t,e,n){var r=function(t){i(1,arguments);var e=d(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/f)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):M(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return M(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return M(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return M(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return U(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):N(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):M(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):M(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):P(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):W(t,e)},S:function(t,e){return Y(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return O(a);case"XXXX":case"XX":return q(a);default:return q(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return O(a);case"xxxx":case"xx":return q(a);default:return q(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+A(a,":");default:return"GMT"+q(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+A(a,":");default:return"GMT"+q(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return M(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return M((r._originalDate||t).getTime(),e.length)}};var L=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},H=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},j={p:H,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return L(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",L(a,e)).replace("{{time}}",H(i,e))}};const z=j;function B(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var I=["D","DD"],Q=["YY","YYYY"];function G(t){return-1!==I.indexOf(t)}function R(t){return-1!==Q.indexOf(t)}function X(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var _={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function J(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var Z,$={date:J({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:J({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:J({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},V={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function K(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function tt(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?nt(s,(function(t){return t.test(u)})):et(s,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(d):d,o=n.valueCallback?n.valueCallback(o):o;var l=e.slice(u.length);return{value:o,rest:l}}}function et(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function nt(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const rt={code:"en-US",formatDistance:function(t,e,n){var r,a=_[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:$,formatRelative:function(t,e,n,r){return V[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:K({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:K({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:K({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:K({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:K({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Z={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(Z.matchPattern);if(!n)return null;var r=n[0],a=t.match(Z.parsePattern);if(!a)return null;var i=Z.valueCallback?Z.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(r.length);return{value:i,rest:o}}),era:tt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:tt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:tt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:tt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:tt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var at=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,it=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ot=/^'([^]*?)'?$/,ut=/''/g,st=/[a-zA-Z]/;function dt(t){var e=t.match(ot);return e?e[1].replace(ut,"'"):t}Math.pow(10,8);var lt=36e5,ct={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},mt=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ht=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,ft=/^([+-])(\d{2})(?::?(\d{2}))?$/;function gt(t){var e,n={},r=t.split(ct.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?e=r[0]:(n.date=r[0],e=r[1],ct.timeZoneDelimiter.test(n.date)&&(n.date=t.split(ct.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=ct.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}function vt(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:null===i?a:100*i,restDateString:t.slice((r[1]||r[2]).length)}}function wt(t,e){if(null===e)return new Date(NaN);var n=t.match(mt);if(!n)return new Date(NaN);var r=!!n[4],a=bt(n[1]),i=bt(n[2])-1,o=bt(n[3]),u=bt(n[4]),s=bt(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,u,s)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,u,s):new Date(NaN);var d=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(Ct[e]||(kt(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(kt(t)?366:365)}(e,a)?(d.setUTCFullYear(e,i,Math.max(a,o)),d):new Date(NaN)}function bt(t){return t?parseInt(t):1}function pt(t){var e=t.match(ht);if(!e)return NaN;var n=yt(e[1]),r=yt(e[2]),a=yt(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*lt+6e4*r+1e3*a:NaN}function yt(t){return t&&parseFloat(t.replace(",","."))||0}function Tt(t){if("Z"===t)return 0;var e=t.match(ft);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*lt+6e4*a):NaN}var Ct=[31,null,31,30,31,30,31,31,30,31,30,31];function kt(t){return t%400==0||t%4==0&&t%100!=0}function Dt(t){i(1,arguments);var e=d(t);return e.setHours(0,0,0,0),e}function Mt(t,e){i(2,arguments);var n=Dt(t),r=Dt(e);return n.getTime()===r.getTime()}function St(t,e){var n,r,a,o,u,s,l,m;i(1,arguments);var h=y(),f=c(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e||null===(u=e.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==a?a:h.weekStartsOn)&&void 0!==r?r:null===(l=h.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=d(t),v=g.getDay(),w=(v<f?7:0)+v-f;return g.setDate(g.getDate()-w),g.setHours(0,0,0,0),g}function xt(t,e,n){i(2,arguments);var r=St(t,n),a=St(e,n);return r.getTime()===a.getTime()}const Et=new n("allTasks");let Ut=Et;const Nt=t=>{if("add-tasks"==t.target.id&&(console.log("added"),function(){const t=document.getElementById("tasks"),e=document.createElement("form");e.setAttribute("method","post"),e.setAttribute("action","javascript:submit()"),e.classList.add("form"),e.setAttribute("id","form");const n=document.createElement("div");n.setAttribute("id","titleDiv"),n.setAttribute("class","input-div");const r=document.createElement("label");r.setAttribute("for","task-name"),r.textContent="Title: ";const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("name","task-name"),a.setAttribute("id","task-name"),n.appendChild(r),n.appendChild(a);const i=document.createElement("div");i.setAttribute("id","descriptionDiv"),i.setAttribute("class","input-div");const o=document.createElement("label");o.setAttribute("for","task-name"),o.textContent="Description: ";const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("name","task-description"),u.setAttribute("id","task-description"),i.appendChild(o),i.appendChild(u);const s=document.createElement("div");s.setAttribute("id","dateDiv"),s.setAttribute("class","input-div");const d=document.createElement("label");d.setAttribute("for","task-name"),d.textContent="Due Date: ";const l=document.createElement("input");l.setAttribute("type","date"),l.setAttribute("name","task-date"),l.setAttribute("id","task-date"),s.appendChild(d),s.appendChild(l);const c=document.createElement("submit");c.setAttribute("value","submit"),c.setAttribute("id","task-submit-btn"),c.textContent="Submit",e.appendChild(n),e.appendChild(i),e.appendChild(s),e.appendChild(c),t.appendChild(e)}(),t.target.disabled=!0),"task-submit-btn"==t.target.id){t.preventDefault();let n=document.getElementById("task-name").value,r=document.getElementById("task-description").value,o=function(t,e,n){var r,a,o,u,s,m,f,g,v,w,b,p,T,C,k,D,M,S;i(2,arguments);var x=String(e),E=y(),U=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:E.locale)&&void 0!==r?r:rt,N=c(null!==(o=null!==(u=null!==(s=null!==(m=null==n?void 0:n.firstWeekContainsDate)&&void 0!==m?m:null==n||null===(f=n.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==s?s:E.firstWeekContainsDate)&&void 0!==u?u:null===(v=E.locale)||void 0===v||null===(w=v.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==o?o:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=c(null!==(b=null!==(p=null!==(T=null!==(C=null==n?void 0:n.weekStartsOn)&&void 0!==C?C:null==n||null===(k=n.locale)||void 0===k||null===(D=k.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==T?T:E.weekStartsOn)&&void 0!==p?p:null===(M=E.locale)||void 0===M||null===(S=M.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==b?b:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var W=d(t);if(!l(W))throw new RangeError("Invalid time value");var Y=B(W),A=h(W,Y),O={firstWeekContainsDate:N,weekStartsOn:P,locale:U,_originalDate:W},q=x.match(it).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,z[e])(t,U.formatLong):t})).join("").match(at).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return dt(r);var i=F[a];if(i)return null!=n&&n.useAdditionalWeekYearTokens||!R(r)||X(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!G(r)||X(r,e,String(t)),i(A,r,U.localize,O);if(a.match(st))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("");return q}(function(t,e){var n;i(1,arguments);var r=c(null!==(n=null==e?void 0:e.additionalDigits)&&void 0!==n?n:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var a,o=gt(t);if(o.date){var u=vt(o.date,r);a=wt(u.restDateString,u.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);var s,d=a.getTime(),l=0;if(o.time&&(l=pt(o.time),isNaN(l)))return new Date(NaN);if(!o.timezone){var m=new Date(d+l),h=new Date(0);return h.setFullYear(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()),h.setHours(m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds()),h}return s=Tt(o.timezone),isNaN(s)?new Date(NaN):new Date(d+l+s)}(document.getElementById("task-date").value),"MM/dd/yyyy");if(console.log(o),""==n)return void alert("please include a title");const u=new e(n,r,o);Ut!=Et?(Et.addTask(u),Ut.addTAsk(u)):Et.addTask(u),function(){const t=document.getElementById("tasks"),e=document.getElementById("form");t.removeChild(e),console.log("close")}(),a(Et),document.getElementById("add-tasks").disabled=!1}if("All-Task-Link"==t.target.id&&(Ut=Et,document.getElementById("add-tasks").style.visibility="visible",a(Ut)),"Today-Task-Link"==t.target.id){const t=new n("todaysTasks");Et.tasks.forEach((e=>{1==function(t){return i(1,arguments),Mt(t,Date.now())}(new Date(e.date))&&t.addTask(e)})),a(t)}if("This-Week-Task-Link"==t.target.id){const t=new n("thisWeeksTasks");Et.tasks.forEach((e=>{1==function(t,e){return i(1,arguments),xt(t,Date.now(),e)}(new Date(e.date))&&t.addTask(e)})),a(t)}t.target.classList.contains("status")&&("radio_button_unchecked"==t.target.textContent?t.target.textContent="radio_button_checked":t.target.textContent="radio_button_unchecked")};document.addEventListener("DOMContentLoaded",(()=>{document.addEventListener("click",Nt),console.log("DOM thing")}))})();