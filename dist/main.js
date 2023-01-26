(()=>{"use strict";class t{constructor(t,e,n){this.title=t,this.description=e,this.date=n}setTitle(t){this.name=t}setDescription(t){this.description=t}setDate(t){this.date=t}getTitle(){return this.title}getDescription(){return this.description}getDate(){return this.date}}function e(e,n,a,r){let i=new t(e,n,a,r);return console.log(i),i}function n(t,e,n){const a=document.getElementById("tasks"),r=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div");r.setAttribute("class","task"),r.setAttribute("id","task"),o.setAttribute("class","task-rightDiv"),i.setAttribute("class","task-leftDiv");const u=document.createElement("button");u.setAttribute("class","material-icons"),u.classList.add("status"),u.textContent="radio_button_unchecked";const s=document.createElement("div"),d=document.createElement("div");d.setAttribute("class","task-title"),d.textContent=t;const l=document.createElement("div");l.textContent=e;const c=document.createElement("div");c.textContent=n;const m=document.createElement("select");m.classList.add("more");const h=document.createElement("option");h.textContent="Edit";const f=document.createElement("option");f.textContent="Delete",m.appendChild(h),m.appendChild(f),m.textContent="more_vert",s.appendChild(d),s.appendChild(l),i.appendChild(u),i.appendChild(s),o.appendChild(c),o.appendChild(m),r.appendChild(i),r.appendChild(o),a.appendChild(r)}function a(){document.getElementById("add-tasks").style.visibility="hidden"}function r(t){!function(){const t=document.getElementById("tasks");for(;"add-tasks"!=t.lastChild.id;)t.removeChild(t.lastChild)}();let e=t.getTasks();console.log("link"),console.log(e);for(let t=0;t<e.length;t++)n(e[t].getTitle(),e[t].getDescription(),e[t].getDate())}function i(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function u(t){return i(1,arguments),t instanceof Date||"object"===o(t)&&"[object Date]"===Object.prototype.toString.call(t)}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function d(t){i(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===s(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function l(t){if(i(1,arguments),!u(t)&&"number"!=typeof t)return!1;var e=d(t);return!isNaN(Number(e))}function c(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function m(t,e){i(2,arguments);var n=d(t).getTime(),a=c(e);return new Date(n+a)}function h(t,e){i(2,arguments);var n=c(e);return m(t,-n)}var f=864e5;function g(t){i(1,arguments);var e=1,n=d(t),a=n.getUTCDay(),r=(a<e?7:0)+a-e;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function v(t){i(1,arguments);var e=d(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=g(a),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var u=g(o);return e.getTime()>=r.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}function b(t){i(1,arguments);var e=v(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=g(n);return a}var w=6048e5,p={};function y(){return p}function C(t,e){var n,a,r,o,u,s,l,m;i(1,arguments);var h=y(),f=c(null!==(n=null!==(a=null!==(r=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e||null===(u=e.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==r?r:h.weekStartsOn)&&void 0!==a?a:null===(l=h.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=d(t),v=g.getUTCDay(),b=(v<f?7:0)+v-f;return g.setUTCDate(g.getUTCDate()-b),g.setUTCHours(0,0,0,0),g}function T(t,e){var n,a,r,o,u,s,l,m;i(1,arguments);var h=d(t),f=h.getUTCFullYear(),g=y(),v=c(null!==(n=null!==(a=null!==(r=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(u=e.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==r?r:g.firstWeekContainsDate)&&void 0!==a?a:null===(l=g.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(f+1,0,v),b.setUTCHours(0,0,0,0);var w=C(b,e),p=new Date(0);p.setUTCFullYear(f,0,v),p.setUTCHours(0,0,0,0);var T=C(p,e);return h.getTime()>=w.getTime()?f+1:h.getTime()>=T.getTime()?f:f-1}function k(t,e){var n,a,r,o,u,s,d,l;i(1,arguments);var m=y(),h=c(null!==(n=null!==(a=null!==(r=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(u=e.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==r?r:m.firstWeekContainsDate)&&void 0!==a?a:null===(d=m.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==n?n:1),f=T(t,e),g=new Date(0);g.setUTCFullYear(f,0,h),g.setUTCHours(0,0,0,0);var v=C(g,e);return v}var D=6048e5;function M(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const x=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return M("yy"===e?a%100:a,e.length)},E=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):M(n+1,2)},S=function(t,e){return M(t.getUTCDate(),e.length)},U=function(t,e){return M(t.getUTCHours()%12||12,e.length)},P=function(t,e){return M(t.getUTCHours(),e.length)},W=function(t,e){return M(t.getUTCMinutes(),e.length)},A=function(t,e){return M(t.getUTCSeconds(),e.length)},Y=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return M(Math.floor(a*Math.pow(10,n-3)),e.length)};function O(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+M(i,2)}function N(t,e){return t%60==0?(t>0?"-":"+")+M(Math.abs(t)/60,2):q(t,e)}function q(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+M(Math.floor(r/60),2)+n+M(r%60,2)}const L={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return x(t,e)},Y:function(t,e,n,a){var r=T(t,a),i=r>0?r:1-r;return"YY"===e?M(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):M(i,e.length)},R:function(t,e){return M(v(t),e.length)},u:function(t,e){return M(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return M(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return M(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return E(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return M(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var r=function(t,e){i(1,arguments);var n=d(t),a=C(n,e).getTime()-k(n,e).getTime();return Math.round(a/D)+1}(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):M(r,e.length)},I:function(t,e,n){var a=function(t){i(1,arguments);var e=d(t),n=g(e).getTime()-b(e).getTime();return Math.round(n/w)+1}(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):M(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):S(t,e)},D:function(t,e,n){var a=function(t){i(1,arguments);var e=d(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),r=n-a;return Math.floor(r/f)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):M(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return M(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return M(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return M(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return U(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):P(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):M(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):M(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):W(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):A(t,e)},S:function(t,e){return Y(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return N(r);case"XXXX":case"XX":return q(r);default:return q(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return N(r);case"xxxx":case"xx":return q(r);default:return q(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+O(r,":");default:return"GMT"+q(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+O(r,":");default:return"GMT"+q(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return M(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return M((a._originalDate||t).getTime(),e.length)}};var B=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},F=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},j={p:F,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],r=a[1],i=a[2];if(!i)return B(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",B(r,e)).replace("{{time}}",F(i,e))}};const H=j;function z(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var Q=["D","DD"],G=["YY","YYYY"];function I(t){return-1!==Q.indexOf(t)}function X(t){return-1!==G.indexOf(t)}function _(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var R={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function J(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var V,K={date:J({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:J({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:J({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},$={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Z(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):r;a=t.formattingValues[i]||t.formattingValues[r]}else{var o=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[u]||t.values[o]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function tt(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o,u=i[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?nt(s,(function(t){return t.test(u)})):et(s,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(d):d,o=n.valueCallback?n.valueCallback(o):o;var l=e.slice(u.length);return{value:o,rest:l}}}function et(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function nt(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const at={code:"en-US",formatDistance:function(t,e,n){var a,r=R[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:K,formatRelative:function(t,e,n,a){return $[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Z({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Z({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Z({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Z({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Z({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(V={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(V.matchPattern);if(!n)return null;var a=n[0],r=t.match(V.parsePattern);if(!r)return null;var i=V.valueCallback?V.valueCallback(r[0]):r[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(a.length);return{value:i,rest:o}}),era:tt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:tt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:tt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:tt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:tt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var rt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,it=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ot=/^'([^]*?)'?$/,ut=/''/g,st=/[a-zA-Z]/;function dt(t){var e=t.match(ot);return e?e[1].replace(ut,"'"):t}const lt=new class{constructor(t){this.name=t,this.tasks=[]}setName(t){this.name=t}setTask(t){this.tasks.push(JSON.stringify(t))}getName(){return this.name}getTasks(){return this.tasks}addTask(t){this.tasks.push(t)}}("allTasks");let ct;const mt=t=>{if("add-tasks"==t.target.id&&(console.log("added"),function(){const t=document.getElementById("tasks"),e=document.createElement("form");e.setAttribute("method","post"),e.setAttribute("action","javascript:submit()"),e.classList.add("form"),e.setAttribute("id","form");const n=document.createElement("div");n.setAttribute("id","titleDiv"),n.setAttribute("class","input-div");const a=document.createElement("label");a.setAttribute("for","task-name"),a.textContent="Title: ";const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","task-name"),r.setAttribute("id","task-name"),n.appendChild(a),n.appendChild(r);const i=document.createElement("div");i.setAttribute("id","descriptionDiv"),i.setAttribute("class","input-div");const o=document.createElement("label");o.setAttribute("for","task-name"),o.textContent="Description: ";const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("name","task-description"),u.setAttribute("id","task-description"),i.appendChild(o),i.appendChild(u);const s=document.createElement("div");s.setAttribute("id","dateDiv"),s.setAttribute("class","input-div");const d=document.createElement("label");d.setAttribute("for","task-name"),d.textContent="Due Date: ";const l=document.createElement("input");l.setAttribute("type","date"),l.setAttribute("name","task-date"),l.setAttribute("id","task-date"),s.appendChild(d),s.appendChild(l);const c=document.createElement("submit");c.setAttribute("value","submit"),c.setAttribute("id","task-submit-btn"),c.textContent="Submit",e.appendChild(n),e.appendChild(i),e.appendChild(s),e.appendChild(c),t.appendChild(e)}(),t.target.disabled=!0),"task-submit-btn"==t.target.id){t.preventDefault();let n=document.getElementById("task-name").value,a=document.getElementById("task-description").value,o=document.getElementById("task-date"),u=new Date(o.value);console.log(u.getTimezoneOffset());let s=function(t,e,n){var a,r,o,u,s,m,f,g,v,b,w,p,C,T,k,D,M,x;i(2,arguments);var E=String(e),S=y(),U=null!==(a=null!==(r=null==n?void 0:n.locale)&&void 0!==r?r:S.locale)&&void 0!==a?a:at,P=c(null!==(o=null!==(u=null!==(s=null!==(m=null==n?void 0:n.firstWeekContainsDate)&&void 0!==m?m:null==n||null===(f=n.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==s?s:S.firstWeekContainsDate)&&void 0!==u?u:null===(v=S.locale)||void 0===v||null===(b=v.options)||void 0===b?void 0:b.firstWeekContainsDate)&&void 0!==o?o:1);if(!(P>=1&&P<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=c(null!==(w=null!==(p=null!==(C=null!==(T=null==n?void 0:n.weekStartsOn)&&void 0!==T?T:null==n||null===(k=n.locale)||void 0===k||null===(D=k.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==C?C:S.weekStartsOn)&&void 0!==p?p:null===(M=S.locale)||void 0===M||null===(x=M.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==w?w:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var A=d(t);if(!l(A))throw new RangeError("Invalid time value");var Y=z(A),O=h(A,Y),N={firstWeekContainsDate:P,weekStartsOn:W,locale:U,_originalDate:A},q=E.match(it).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,H[e])(t,U.formatLong):t})).join("").match(rt).map((function(a){if("''"===a)return"'";var r=a[0];if("'"===r)return dt(a);var i=L[r];if(i)return null!=n&&n.useAdditionalWeekYearTokens||!X(a)||_(a,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!I(a)||_(a,e,String(t)),i(O,a,U.localize,N);if(r.match(st))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return a})).join("");return q}(new Date(u+u.getTimezoneOffset()),"MM/dd/yyyy");if(""==n)return void alert("please include a title");const m=new e(n,a,s);lt.addTask(m),function(){const t=document.getElementById("tasks"),e=document.getElementById("form");t.removeChild(e),console.log("close")}(),r(lt),document.getElementById("add-tasks").disabled=!1}"All-Task-Link"==t.target.id&&(ct=lt,document.getElementById("add-tasks").style.visibility="visible",r(ct)),"Today-Task-Link"==t.target.id&&(a(),r()),"This-Week-Task-Link"==t.target.id&&(a(),r()),t.target.classList.contains("status")&&("radio_button_unchecked"==t.target.textContent?t.target.textContent="radio_button_checked":t.target.textContent="radio_button_unchecked")};document.addEventListener("DOMContentLoaded",(()=>{document.addEventListener("click",mt),console.log("DOM thing")}))})();