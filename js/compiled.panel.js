!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,t;function n(){return e.apply(null,arguments)}function s(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function i(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function r(e){return void 0===e}function a(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function o(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function u(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function d(e,t){for(var n in t)l(t,n)&&(e[n]=t[n]);return l(t,"toString")&&(e.toString=t.toString),l(t,"valueOf")&&(e.valueOf=t.valueOf),e}function h(e,t,n,s){return Ot(e,t,n,s,!0).utc()}function c(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function f(e){if(null==e._isValid){var n=c(e),s=t.call(n.parsedDateParts,function(e){return null!=e}),i=!isNaN(e._d.getTime())&&n.overflow<0&&!n.empty&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&s);if(e._strict&&(i=i&&0===n.charsLeftOver&&0===n.unusedTokens.length&&void 0===n.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return i;e._isValid=i}return e._isValid}function m(e){var t=h(NaN);return null!=e?d(c(t),e):c(t).userInvalidated=!0,t}t=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var _=n.momentProperties=[];function y(e,t){var n,s,i;if(r(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),r(t._i)||(e._i=t._i),r(t._f)||(e._f=t._f),r(t._l)||(e._l=t._l),r(t._strict)||(e._strict=t._strict),r(t._tzm)||(e._tzm=t._tzm),r(t._isUTC)||(e._isUTC=t._isUTC),r(t._offset)||(e._offset=t._offset),r(t._pf)||(e._pf=c(t)),r(t._locale)||(e._locale=t._locale),_.length>0)for(n=0;n<_.length;n++)r(i=t[s=_[n]])||(e[s]=i);return e}var g=!1;function p(e){y(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===g&&(g=!0,n.updateOffset(this),g=!1)}function v(e){return e instanceof p||null!=e&&null!=e._isAMomentObject}function w(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function M(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=w(t)),n}function S(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&M(e[s])!==M(t[s]))&&a++;return a+r}function D(e){!1===n.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function k(e,t){var s=!0;return d(function(){if(null!=n.deprecationHandler&&n.deprecationHandler(null,e),s){for(var i,r=[],a=0;a<arguments.length;a++){if(i="","object"==typeof arguments[a]){for(var o in i+="\n["+a+"] ",arguments[0])i+=o+": "+arguments[0][o]+", ";i=i.slice(0,-2)}else i=arguments[a];r.push(i)}D(e+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),s=!1}return t.apply(this,arguments)},t)}var Y,O={};function T(e,t){null!=n.deprecationHandler&&n.deprecationHandler(e,t),O[e]||(D(t),O[e]=!0)}function x(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function b(e,t){var n,s=d({},e);for(n in t)l(t,n)&&(i(e[n])&&i(t[n])?(s[n]={},d(s[n],e[n]),d(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)l(e,n)&&!l(t,n)&&i(e[n])&&(s[n]=d({},s[n]));return s}function P(e){null!=e&&this.set(e)}n.suppressDeprecationWarnings=!1,n.deprecationHandler=null,Y=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)l(e,t)&&n.push(t);return n};var W={};function H(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function R(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function C(e){var t,n,s={};for(n in e)l(e,n)&&(t=R(n))&&(s[t]=e[n]);return s}var F={};function L(e,t){F[e]=t}function U(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(e>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return U(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(e){var t,n,s,i=e.match(N);for(t=0,n=i.length;t<n;t++)E[i[t]]?i[t]=E[i[t]]:i[t]=(s=i[t]).match(/\[[\s\S]/)?s.replace(/^\[|\]$/g,""):s.replace(/\\/g,"");return function(t){var s,r="";for(s=0;s<n;s++)r+=x(i[s])?i[s].call(t,e):i[s];return r}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;n>=0&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,t,n){oe[e]=x(t)?t:function(e,s){return e&&n?n:t}}function le(e,t){return l(oe,e)?oe[e](t._strict,t._locale):new RegExp(de(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function de(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var he={};function ce(e,t){var n,s=t;for("string"==typeof e&&(e=[e]),a(t)&&(s=function(e,n){n[t]=M(e)}),n=0;n<e.length;n++)he[e[n]]=s}function fe(e,t){ce(e,function(e,n,s,i){s._w=s._w||{},t(e,s._w,s,i)})}var me=0,_e=1,ye=2,ge=3,pe=4,ve=5,we=6,Me=7,Se=8;function De(e){return ke(e)?366:365}function ke(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),H("year","y"),L("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?n.parseTwoDigitYear(e):M(e)}),ce("YY",function(e,t){t[me]=n.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),n.parseTwoDigitYear=function(e){return M(e)+(M(e)>68?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(e,t){return function(s){return null!=s?(be(this,e,s),n.updateOffset(this,t),this):xe(this,e)}}function xe(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function be(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&ke(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?ke(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),H("month","M"),L("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=M(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:c(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,He="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Re="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Ce(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=M(t);else if(!a(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Fe(e){return null!=e?(Ce(this,e),n.updateOffset(this,!0),this):xe(this,"Month")}var Le=ae;var Ue=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=h([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=de(s[t]),i[t]=de(i[t]);for(t=0;t<24;t++)r[t]=de(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return o<=0?a=De(r=e-1)+o:o>De(e)?(r=e+1,a=o-De(e)):(r=e,a=o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(De(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),H("week","w"),H("isoWeek","W"),L("week",5),L("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=M(e)});I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),H("day","d"),H("weekday","e"),H("isoWeekday","E"),L("day",11),L("weekday",11),L("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:c(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=M(e)});var je="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var ze="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var $e=ae;var qe=ae;var Je=ae;function Be(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=h([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=de(o[t]),u[t]=de(u[t]),l[t]=de(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Qe(){return this.hours()%12||12}function Xe(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function Ke(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Qe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),Xe("a",!0),Xe("A",!1),H("hour","h"),L("hour",13),ue("a",Ke),ue("A",Ke),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=M(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=M(e),c(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=M(e.substr(0,s)),t[pe]=M(e.substr(s)),c(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=M(e.substr(0,s)),t[pe]=M(e.substr(s,2)),t[ve]=M(e.substr(i)),c(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=M(e.substr(0,s)),t[pe]=M(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=M(e.substr(0,s)),t[pe]=M(e.substr(s,2)),t[ve]=M(e.substr(i))});var et,tt=Te("Hours",!0),nt={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:He,monthsShort:Re,week:{dow:0,doy:6},weekdays:je,weekdaysMin:ze,weekdaysShort:Ze,meridiemParse:/[ap]\.?m?\.?/i},st={},it={};function rt(e){return e?e.toLowerCase().replace("_","-"):e}function at(e){var t=null;if(!st[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=et._abbr,require("./locale/"+e),ot(t)}catch(e){}return st[e]}function ot(e,t){var n;return e&&((n=r(t)?lt(e):ut(e,t))?et=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),et._abbr}function ut(e,t){if(null!==t){var n,s=nt;if(t.abbr=e,null!=st[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=st[e]._config;else if(null!=t.parentLocale)if(null!=st[t.parentLocale])s=st[t.parentLocale]._config;else{if(null==(n=at(t.parentLocale)))return it[t.parentLocale]||(it[t.parentLocale]=[]),it[t.parentLocale].push({name:e,config:t}),null;s=n._config}return st[e]=new P(b(s,t)),it[e]&&it[e].forEach(function(e){ut(e.name,e.config)}),ot(e),st[e]}return delete st[e],null}function lt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return et;if(!s(e)){if(t=at(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=rt(e[r]).split("-")).length,n=(n=rt(e[r+1]))?n.split("-"):null;t>0;){if(s=at(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&S(i,n,!0)>=t-1)break;t--}r++}return et}(e)}function dt(e){var t,n=e._a;return n&&-2===c(e).overflow&&(t=n[_e]<0||n[_e]>11?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||n[ge]>24||24===n[ge]&&(0!==n[pe]||0!==n[ve]||0!==n[we])?ge:n[pe]<0||n[pe]>59?pe:n[ve]<0||n[ve]>59?ve:n[we]<0||n[we]>999?we:-1,c(e)._overflowDayOfYear&&(t<me||t>ye)&&(t=ye),c(e)._overflowWeeks&&-1===t&&(t=Me),c(e)._overflowWeekday&&-1===t&&(t=Se),c(e).overflow=t),e}function ht(e,t,n){return null!=e?e:null!=t?t:n}function ct(e){var t,s,i,r,a,o=[];if(!e._d){var u,l;for(u=e,l=new Date(n.now()),i=u._useUTC?[l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()]:[l.getFullYear(),l.getMonth(),l.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ht(t.GG,e._a[me],Ie(Tt(),1,4).year),s=ht(t.W,1),((i=ht(t.E,1))<1||i>7)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(Tt(),r,a);n=ht(t.gg,e._a[me],l.year),s=ht(t.w,l.week),null!=t.d?((i=t.d)<0||i>6)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||t.e>6)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?c(e)._overflowWeeks=!0:null!=u?c(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(a=ht(e._a[me],i[me]),(e._dayOfYear>De(a)||0===e._dayOfYear)&&(c(e)._overflowDayOfYear=!0),s=Ge(a,0,e._dayOfYear),e._a[_e]=s.getUTCMonth(),e._a[ye]=s.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=i[t];for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[pe]&&0===e._a[ve]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o=new Date(e,t,n,s,i,r,a);return e<100&&e>=0&&isFinite(o.getFullYear())&&o.setFullYear(e),o}).apply(null,o),r=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==r&&(c(e).weekdayMismatch=!0)}}var ft=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,mt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/Z|[+-]\d\d(?::?\d\d)?/,yt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],gt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function vt(e){var t,n,s,i,r,a,o=e._i,u=ft.exec(o)||mt.exec(o);if(u){for(c(e).iso=!0,t=0,n=yt.length;t<n;t++)if(yt[t][1].exec(u[1])){i=yt[t][0],s=!1!==yt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[3])){r=(u[2]||" ")+gt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!_t.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),kt(e)}else e._isValid=!1}var wt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function Mt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),Re.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim());if(i){var r=Mt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&Ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(c(s).weekdayMismatch=!0,s._isValid=!1,1))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),c(e).rfc2822=!0}else e._isValid=!1}function kt(e){if(e._f!==n.ISO_8601)if(e._f!==n.RFC_2822){e._a=[],c(e).empty=!0;var t,s,i,r,a,o,u,d,h=""+e._i,f=h.length,m=0;for(i=j(e._f,e._locale).match(N)||[],t=0;t<i.length;t++)r=i[t],(s=(h.match(le(r,e))||[])[0])&&((a=h.substr(0,h.indexOf(s))).length>0&&c(e).unusedInput.push(a),h=h.slice(h.indexOf(s)+s.length),m+=s.length),E[r]?(s?c(e).empty=!1:c(e).unusedTokens.push(r),o=r,d=e,null!=(u=s)&&l(he,o)&&he[o](u,d._a,d,o)):e._strict&&!s&&c(e).unusedTokens.push(r);c(e).charsLeftOver=f-m,h.length>0&&c(e).unusedInput.push(h),e._a[ge]<=12&&!0===c(e).bigHour&&e._a[ge]>0&&(c(e).bigHour=void 0),c(e).parsedDateParts=e._a.slice(0),c(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0),t):t}(e._locale,e._a[ge],e._meridiem),ct(e),dt(e)}else Dt(e);else vt(e)}function Yt(e){var t,l,h,_,g=e._i,w=e._f;return e._locale=e._locale||lt(e._l),null===g||void 0===w&&""===g?m({nullInput:!0}):("string"==typeof g&&(e._i=g=e._locale.preparse(g)),v(g)?new p(dt(g)):(o(g)?e._d=g:s(w)?function(e){var t,n,s,i,r;if(0===e._f.length)return c(e).invalidFormat=!0,void(e._d=new Date(NaN));for(i=0;i<e._f.length;i++)r=0,t=y({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],kt(t),f(t)&&(r+=c(t).charsLeftOver,r+=10*c(t).unusedTokens.length,c(t).score=r,(null==s||r<s)&&(s=r,n=t));d(e,n||t)}(e):w?kt(e):r(l=(t=e)._i)?t._d=new Date(n.now()):o(l)?t._d=new Date(l.valueOf()):"string"==typeof l?(h=t,null===(_=pt.exec(h._i))?(vt(h),!1===h._isValid&&(delete h._isValid,Dt(h),!1===h._isValid&&(delete h._isValid,n.createFromInputFallback(h)))):h._d=new Date(+_[1])):s(l)?(t._a=u(l.slice(0),function(e){return parseInt(e,10)}),ct(t)):i(l)?function(e){if(!e._d){var t=C(e._i);e._a=u([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ct(e)}}(t):a(l)?t._d=new Date(l):n.createFromInputFallback(t),f(e)||(e._d=null),e))}function Ot(e,t,n,r,a){var o,u={};return!0!==n&&!1!==n||(r=n,n=void 0),(i(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||s(e)&&0===e.length)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=a,u._l=n,u._i=e,u._f=t,u._strict=r,(o=new p(dt(Yt(u))))._nextDay&&(o.add(1,"d"),o._nextDay=void 0),o}function Tt(e,t,n,s){return Ot(e,t,n,s,!1)}n.createFromInputFallback=k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),n.ISO_8601=function(){},n.RFC_2822=function(){};var xt=k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:m()}),bt=k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:m()});function Pt(e,t){var n,i;if(1===t.length&&s(t[0])&&(t=t[0]),!t.length)return Tt();for(n=t[0],i=1;i<t.length;++i)t[i].isValid()&&!t[i][e](n)||(n=t[i]);return n}var Wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=C(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Wt,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Wt.length;++s)if(e[Wt[s]]){if(n)return!1;parseFloat(e[Wt[s]])!==M(e[Wt[s]])&&(n=!0)}return!0}(t),this._milliseconds=+d+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=lt(),this._bubble()}function Rt(e){return e instanceof Ht}function Ct(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,t){I(e,0,0,function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+U(~~(e/60),2)+t+U(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Ut(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Ut(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+M(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Nt(e,t){var s,i;return t._isUTC?(s=t.clone(),i=(v(e)||o(e)?e.valueOf():Tt(e).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+i),n.updateOffset(s,!1),s):Tt(e).local()}function Gt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Vt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}n.updateOffset=function(){};var Et=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,It=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function At(e,t){var n,s,i,r=e,o=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:a(e)?(r={},t?r[t]=e:r.milliseconds=e):(o=Et.exec(e))?(n="-"===o[1]?-1:1,r={y:0,d:M(o[ye])*n,h:M(o[ge])*n,m:M(o[pe])*n,s:M(o[ve])*n,ms:M(Ct(1e3*o[we]))*n}):(o=It.exec(e))?(n="-"===o[1]?-1:(o[1],1),r={y:jt(o[2],n),M:jt(o[3],n),w:jt(o[4],n),d:jt(o[5],n),h:jt(o[6],n),m:jt(o[7],n),s:jt(o[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Nt(t,e),e.isBefore(t)?n=Zt(e,t):((n=Zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(Tt(r.from),Tt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&l(e,"_locale")&&(s._locale=e._locale),s}function jt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Zt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function zt(e,t){return function(n,s){var i;return null===s||isNaN(+s)||(T(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=n,n=s,s=i),$t(this,At(n="string"==typeof n?+n:n,s),e),this}}function $t(e,t,s,i){var r=t._milliseconds,a=Ct(t._days),o=Ct(t._months);e.isValid()&&(i=null==i||i,o&&Ce(e,xe(e,"Month")+o*s),a&&be(e,"Date",xe(e,"Date")+a*s),r&&e._d.setTime(e._d.valueOf()+r*s),i&&n.updateOffset(e,a||o))}At.fn=Ht.prototype,At.invalid=function(){return At(NaN)};var qt=zt(1,"add"),Jt=zt(-1,"subtract");function Bt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Qt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=lt(e))&&(this._locale=t),this)}n.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",n.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xt=k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function Kt(){return this._locale}function en(e,t){I(0,[e,e.length],0,t)}function tn(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:(t>(r=Ae(e,s,i))&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),en("gggg","weekYear"),en("ggggg","weekYear"),en("GGGG","isoWeekYear"),en("GGGGG","isoWeekYear"),H("weekYear","gg"),H("isoWeekYear","GG"),L("weekYear",1),L("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=M(e)}),fe(["gg","GG"],function(e,t,s,i){t[i]=n.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),H("quarter","Q"),L("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(M(e)-1)}),I("D",["DD",2],"Do","date"),H("date","D"),L("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=M(e.match(B)[0])});var nn=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),H("dayOfYear","DDD"),L("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=M(e)}),I("m",["mm",2],0,"minute"),H("minute","m"),L("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],pe);var sn=Te("Minutes",!1);I("s",["ss",2],0,"second"),H("second","s"),L("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],ve);var rn,an=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),H("millisecond","ms"),L("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),rn="SSSS";rn.length<=9;rn+="S")ue(rn,ne);function on(e,t){t[we]=M(1e3*("0."+e))}for(rn="S";rn.length<=9;rn+="S")ce(rn,on);var un=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var ln=p.prototype;function dn(e){return e}ln.add=qt,ln.calendar=function(e,t){var s=e||Tt(),i=Nt(s,this).startOf("day"),r=n.calendarFormat(this,i)||"sameElse",a=t&&(x(t[r])?t[r].call(this,s):t[r]);return this.format(a||this.localeData().calendar(r,this,Tt(s)))},ln.clone=function(){return new p(this)},ln.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Nt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=R(t)){case"year":r=Bt(this,s)/12;break;case"month":r=Bt(this,s);break;case"quarter":r=Bt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:w(r)},ln.endOf=function(e){return void 0===(e=R(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},ln.format=function(e){e||(e=this.isUtc()?n.defaultFormatUtc:n.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},ln.from=function(e,t){return this.isValid()&&(v(e)&&e.isValid()||Tt(e).isValid())?At({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.fromNow=function(e){return this.from(Tt(),e)},ln.to=function(e,t){return this.isValid()&&(v(e)&&e.isValid()||Tt(e).isValid())?At({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.toNow=function(e){return this.to(Tt(),e)},ln.get=function(e){return x(this[e=R(e)])?this[e]():this},ln.invalidAt=function(){return c(this).overflow},ln.isAfter=function(e,t){var n=v(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(r(t)?"millisecond":t))?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},ln.isBefore=function(e,t){var n=v(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(r(t)?"millisecond":t))?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},ln.isBetween=function(e,t,n,s){return("("===(s=s||"()")[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n))},ln.isSame=function(e,t){var n,s=v(e)?e:Tt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=R(t||"millisecond"))?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},ln.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},ln.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},ln.isValid=function(){return f(this)},ln.lang=Xt,ln.locale=Qt,ln.localeData=Kt,ln.max=bt,ln.min=xt,ln.parsingFlags=function(){return d({},c(this))},ln.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:F[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=C(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(x(this[e=R(e)]))return this[e](t);return this},ln.startOf=function(e){switch(e=R(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},ln.subtract=Jt,ln.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},ln.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},ln.toDate=function(){return new Date(this.valueOf())},ln.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):x(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},ln.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},ln.toJSON=function(){return this.isValid()?this.toISOString():null},ln.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},ln.unix=function(){return Math.floor(this.valueOf()/1e3)},ln.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},ln.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},ln.year=Oe,ln.isLeapYear=function(){return ke(this.year())},ln.weekYear=function(e){return tn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},ln.isoWeekYear=function(e){return tn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},ln.quarter=ln.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},ln.month=Fe,ln.daysInMonth=function(){return Pe(this.year(),this.month())},ln.week=ln.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},ln.isoWeek=ln.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},ln.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},ln.isoWeeksInYear=function(){return Ae(this.year(),1,4)},ln.date=nn,ln.day=ln.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},ln.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},ln.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=(n=e,s=this.localeData(),"string"==typeof n?s.weekdaysParse(n)%7||7:isNaN(n)?null:n);return this.day(this.day()%7?t:t-7)}return this.day()||7;var n,s},ln.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},ln.hour=ln.hours=tt,ln.minute=ln.minutes=sn,ln.second=ln.seconds=an,ln.millisecond=ln.milliseconds=un,ln.utcOffset=function(e,t,s){var i,r=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=Ut(re,e)))return this}else Math.abs(e)<16&&!s&&(e*=60);return!this._isUTC&&t&&(i=Gt(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?$t(this,At(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,n.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:Gt(this)},ln.utc=function(e){return this.utcOffset(0,e)},ln.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Gt(this),"m")),this},ln.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Ut(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},ln.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Tt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},ln.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},ln.isLocal=function(){return!!this.isValid()&&!this._isUTC},ln.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},ln.isUtc=Vt,ln.isUTC=Vt,ln.zoneAbbr=function(){return this._isUTC?"UTC":""},ln.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},ln.dates=k("dates accessor is deprecated. Use date instead.",nn),ln.months=k("months accessor is deprecated. Use month instead",Fe),ln.years=k("years accessor is deprecated. Use year instead",Oe),ln.zone=k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),ln.isDSTShifted=k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!r(this._isDSTShifted))return this._isDSTShifted;var e={};if(y(e,this),(e=Yt(e))._a){var t=e._isUTC?h(e._a):Tt(e._a);this._isDSTShifted=this.isValid()&&S(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted});var hn=P.prototype;function cn(e,t,n,s){var i=lt(),r=h().set(s,t);return i[n](r,e)}function fn(e,t,n){if(a(e)&&(t=e,e=void 0),e=e||"",null!=t)return cn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=cn(e,s,n,"month");return i}function mn(e,t,n,s){"boolean"==typeof e?(a(t)&&(n=t,t=void 0),t=t||""):(n=t=e,e=!1,a(t)&&(n=t,t=void 0),t=t||"");var i,r=lt(),o=e?r._week.dow:0;if(null!=n)return cn(t,(n+o)%7,s,"day");var u=[];for(i=0;i<7;i++)u[i]=cn(t,(i+o)%7,s,"day");return u}hn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return x(s)?s.call(t,n):s},hn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},hn.invalidDate=function(){return this._invalidDate},hn.ordinal=function(e){return this._ordinal.replace("%d",e)},hn.preparse=dn,hn.postformat=dn,hn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return x(i)?i(e,t,n,s):i.replace(/%d/i,e)},hn.pastFuture=function(e,t){var n=this._relativeTime[e>0?"future":"past"];return x(n)?n(t):n.replace(/%s/i,t)},hn.set=function(e){var t,n;for(n in e)x(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},hn.months=function(e,t){return e?s(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:s(this._months)?this._months:this._months.standalone},hn.monthsShort=function(e,t){return e?s(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},hn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=h([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=h([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},hn.monthsRegex=function(e){return this._monthsParseExact?(l(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(l(this,"_monthsRegex")||(this._monthsRegex=Ue),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},hn.monthsShortRegex=function(e){return this._monthsParseExact?(l(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(l(this,"_monthsShortRegex")||(this._monthsShortRegex=Le),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},hn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},hn.firstDayOfYear=function(){return this._week.doy},hn.firstDayOfWeek=function(){return this._week.dow},hn.weekdays=function(e,t){return e?s(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:s(this._weekdays)?this._weekdays:this._weekdays.standalone},hn.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},hn.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},hn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=h([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=h([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".",".?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},hn.weekdaysRegex=function(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(l(this,"_weekdaysRegex")||(this._weekdaysRegex=$e),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},hn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(l(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},hn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(l(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Je),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},hn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},hn.meridiem=function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},ot("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===M(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),n.lang=k("moment.lang is deprecated. Use moment.locale instead.",ot),n.langData=k("moment.langData is deprecated. Use moment.localeData instead.",lt);var _n=Math.abs;function yn(e,t,n,s){var i=At(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function gn(e){return e<0?Math.floor(e):Math.ceil(e)}function pn(e){return 4800*e/146097}function vn(e){return 146097*e/4800}function wn(e){return function(){return this.as(e)}}var Mn=wn("ms"),Sn=wn("s"),Dn=wn("m"),kn=wn("h"),Yn=wn("d"),On=wn("w"),Tn=wn("M"),xn=wn("y");function bn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Pn=bn("milliseconds"),Wn=bn("seconds"),Hn=bn("minutes"),Rn=bn("hours"),Cn=bn("days"),Fn=bn("months"),Ln=bn("years");var Un=Math.round,Nn={ss:44,s:45,m:45,h:22,d:26,M:11};var Gn=Math.abs;function Vn(e){return(e>0)-(e<0)||+e}function En(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Gn(this._milliseconds)/1e3,s=Gn(this._days),i=Gn(this._months);t=w((e=w(n/60))/60),n%=60,e%=60;var r=w(i/12),a=i%=12,o=s,u=t,l=e,d=n?n.toFixed(3).replace(/\.?0+$/,""):"",h=this.asSeconds();if(!h)return"P0D";var c=h<0?"-":"",f=Vn(this._months)!==Vn(h)?"-":"",m=Vn(this._days)!==Vn(h)?"-":"",_=Vn(this._milliseconds)!==Vn(h)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||d?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(d?_+d+"S":"")}var In=Ht.prototype;return In.isValid=function(){return this._isValid},In.abs=function(){var e=this._data;return this._milliseconds=_n(this._milliseconds),this._days=_n(this._days),this._months=_n(this._months),e.milliseconds=_n(e.milliseconds),e.seconds=_n(e.seconds),e.minutes=_n(e.minutes),e.hours=_n(e.hours),e.months=_n(e.months),e.years=_n(e.years),this},In.add=function(e,t){return yn(this,e,t,1)},In.subtract=function(e,t){return yn(this,e,t,-1)},In.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=R(e))||"year"===e)return t=this._days+s/864e5,n=this._months+pn(t),"month"===e?n:n/12;switch(t=this._days+Math.round(vn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},In.asMilliseconds=Mn,In.asSeconds=Sn,In.asMinutes=Dn,In.asHours=kn,In.asDays=Yn,In.asWeeks=On,In.asMonths=Tn,In.asYears=xn,In.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*M(this._months/12):NaN},In._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return r>=0&&a>=0&&o>=0||r<=0&&a<=0&&o<=0||(r+=864e5*gn(vn(o)+a),a=0,o=0),u.milliseconds=r%1e3,e=w(r/1e3),u.seconds=e%60,t=w(e/60),u.minutes=t%60,n=w(t/60),u.hours=n%24,o+=i=w(pn(a+=w(n/24))),a-=gn(vn(i)),s=w(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},In.clone=function(){return At(this)},In.get=function(e){return e=R(e),this.isValid()?this[e+"s"]():NaN},In.milliseconds=Pn,In.seconds=Wn,In.minutes=Hn,In.hours=Rn,In.days=Cn,In.weeks=function(){return w(this.days()/7)},In.months=Fn,In.years=Ln,In.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,d,h,c=this.localeData(),f=(n=!e,s=c,i=At(t=this).abs(),r=Un(i.as("s")),a=Un(i.as("m")),o=Un(i.as("h")),u=Un(i.as("d")),l=Un(i.as("M")),d=Un(i.as("y")),(h=r<=Nn.ss&&["s",r]||r<Nn.s&&["ss",r]||a<=1&&["m"]||a<Nn.m&&["mm",a]||o<=1&&["h"]||o<Nn.h&&["hh",o]||u<=1&&["d"]||u<Nn.d&&["dd",u]||l<=1&&["M"]||l<Nn.M&&["MM",l]||d<=1&&["y"]||["yy",d])[2]=n,h[3]=+t>0,h[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,h));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},In.toISOString=En,In.toString=En,In.toJSON=En,In.locale=Qt,In.localeData=Kt,In.toIsoString=k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",En),In.lang=Xt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(M(e))}),n.version="2.21.0",e=Tt,n.fn=ln,n.min=function(){return Pt("isBefore",[].slice.call(arguments,0))},n.max=function(){return Pt("isAfter",[].slice.call(arguments,0))},n.now=function(){return Date.now?Date.now():+new Date},n.utc=h,n.unix=function(e){return Tt(1e3*e)},n.months=function(e,t){return fn(e,t,"months")},n.isDate=o,n.locale=ot,n.invalid=m,n.duration=At,n.isMoment=v,n.weekdays=function(e,t,n){return mn(e,t,n,"weekdays")},n.parseZone=function(){return Tt.apply(null,arguments).parseZone()},n.localeData=lt,n.isDuration=Rt,n.monthsShort=function(e,t){return fn(e,t,"monthsShort")},n.weekdaysMin=function(e,t,n){return mn(e,t,n,"weekdaysMin")},n.defineLocale=ut,n.updateLocale=function(e,t){if(null!=t){var n,s,i=nt;null!=(s=at(e))&&(i=s._config),(n=new P(t=b(i,t))).parentLocale=st[e],st[e]=n,ot(e)}else null!=st[e]&&(null!=st[e].parentLocale?st[e]=st[e].parentLocale:null!=st[e]&&delete st[e]);return st[e]},n.locales=function(){return Y(st)},n.weekdaysShort=function(e,t,n){return mn(e,t,n,"weekdaysShort")},n.normalizeUnits=R,n.relativeTimeRounding=function(e){return void 0===e?Un:"function"==typeof e&&(Un=e,!0)},n.relativeTimeThreshold=function(e,t){return void 0!==Nn[e]&&(void 0===t?Nn[e]:(Nn[e]=t,"s"===e&&(Nn.ss=t-1),!0))},n.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},n.prototype=ln,n.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"YYYY-[W]WW",MONTH:"YYYY-MM"},n});
/**
* @version: 2.1.25
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2017 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: http://www.daterangepicker.com/
*/
// Follow the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Make globaly available as well
        define(['moment', 'jquery'], function (moment, jquery) {
            if (!jquery.fn) jquery.fn = {}; // webpack server rendering
            return (root.daterangepicker = factory(moment, jquery));
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node / Browserify
        //isomorphic issue
        var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined;
        if (!jQuery) {
            jQuery = require('jquery');
            if (!jQuery.fn) jQuery.fn = {};
        }
        var moment = (typeof window != 'undefined' && typeof window.moment != 'undefined') ? window.moment : require('moment');
        module.exports = factory(moment, jQuery);
    } else {
        // Browser globals
        root.daterangepicker = factory(root.moment, root.jQuery);
    }
}(this, function(moment, $) {
    var DateRangePicker = function(element, options, cb) {

        //default settings for options
        this.parentEl = 'body';
        this.element = $(element);
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.dateLimit = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.showCustomRangeLabel = true;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};

        this.opens = 'right';
        if (this.element.hasClass('pull-right'))
            this.opens = 'left';

        this.drops = 'down';
        if (this.element.hasClass('dropup'))
            this.drops = 'up';

        this.buttonClasses = 'btn btn-sm';
        this.applyClass = 'btn-success';
        this.cancelClass = 'btn-default';

        this.locale = {
            direction: 'ltr',
            format: moment.localeData().longDateFormat('L'),
            separator: ' - ',
            applyLabel: 'Apply',
            startLabel: 'Start date:',
            endLabel: 'End date:',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };

        this.callback = function() { };

        //some state information
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};

        //custom options from user
        if (typeof options !== 'object' || options === null)
            options = {};

        //allow setting options with data attributes
        //data-api options will be overwritten with custom javascript options
        options = $.extend(this.element.data(), options);

        //html template for the picker UI
        if (typeof options.template !== 'string' && !(options.template instanceof $))
            options.template = '<div class="daterangepicker dropdown-menu">' +
                '<div class="calendars">' +
                    '<div class="calendar left">' +
                        '<div class="calendar-table"></div>' +
                        '<div class="daterangepicker_input">' +
                            '<div class="calendar-time">' +
                                '<div></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +

                    '<div class="calendar right">' +
                        '<div class="calendar-table"></div>' +
                        '<div class="daterangepicker_input">' +
                            '<div class="calendar-time">' +
                                '<div></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                '<div class="ranges">' +
                    '<div class="daterangepicker-inputs">' +
                        '<div class="daterangepicker_input">' +
                            '<span class="start-date-label"></span>' +
                            '<input class="form-control" type="text" name="daterangepicker_start" value="" />' +
                            '<i class="icon-calendar3"></i>' +
                        '</div>' +
                        '<div class="daterangepicker_input">' +
                            '<span class="end-date-label"></span>' +
                            '<input class="form-control" type="text" name="daterangepicker_end" value="" />' +
                            '<i class="icon-calendar3"></i>' +
                        '</div>' +
                    '</div>' +
                    '<div class="range_inputs">' +
                        '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
                        '<button class="cancelBtn" type="button"></button>' +
                    '</div>' +
                '</div>' +
            '</div>';

        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);

        //
        // handle all the possible options overriding defaults
        //

        if (typeof options.locale === 'object') {

            if (typeof options.locale.direction === 'string')
                this.locale.direction = options.locale.direction;

            if (typeof options.locale.format === 'string')
                this.locale.format = options.locale.format;

            if (typeof options.locale.separator === 'string')
                this.locale.separator = options.locale.separator;

            if (typeof options.locale.daysOfWeek === 'object')
                this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

            if (typeof options.locale.monthNames === 'object')
              this.locale.monthNames = options.locale.monthNames.slice();

            if (typeof options.locale.firstDay === 'number')
              this.locale.firstDay = options.locale.firstDay;

            if (typeof options.locale.applyLabel === 'string')
              this.locale.applyLabel = options.locale.applyLabel;

            if (typeof options.locale.startLabel === 'string')
              this.locale.startLabel = options.locale.startLabel;

            if (typeof options.locale.endLabel === 'string')
              this.locale.endLabel = options.locale.endLabel;

            if (typeof options.locale.cancelLabel === 'string')
              this.locale.cancelLabel = options.locale.cancelLabel;

            if (typeof options.locale.weekLabel === 'string')
              this.locale.weekLabel = options.locale.weekLabel;

            if (typeof options.locale.customRangeLabel === 'string'){
                //Support unicode chars in the custom range name.
                var elem = document.createElement('textarea');
                elem.innerHTML = options.locale.customRangeLabel;
                var rangeHtml = elem.value;
                this.locale.customRangeLabel = rangeHtml;
            }
        }
        this.container.addClass(this.locale.direction);

        if (typeof options.startDate === 'string')
            this.startDate = moment(options.startDate, this.locale.format);

        if (typeof options.endDate === 'string')
            this.endDate = moment(options.endDate, this.locale.format);

        if (typeof options.minDate === 'string')
            this.minDate = moment(options.minDate, this.locale.format);

        if (typeof options.maxDate === 'string')
            this.maxDate = moment(options.maxDate, this.locale.format);

        if (typeof options.startDate === 'object')
            this.startDate = moment(options.startDate);

        if (typeof options.endDate === 'object')
            this.endDate = moment(options.endDate);

        if (typeof options.minDate === 'object')
            this.minDate = moment(options.minDate);

        if (typeof options.maxDate === 'object')
            this.maxDate = moment(options.maxDate);

        // sanity check for bad options
        if (this.minDate && this.startDate.isBefore(this.minDate))
            this.startDate = this.minDate.clone();

        // sanity check for bad options
        if (this.maxDate && this.endDate.isAfter(this.maxDate))
            this.endDate = this.maxDate.clone();

        if (typeof options.applyClass === 'string')
            this.applyClass = options.applyClass;

        if (typeof options.cancelClass === 'string')
            this.cancelClass = options.cancelClass;

        if (typeof options.dateLimit === 'object')
            this.dateLimit = options.dateLimit;

        if (typeof options.opens === 'string')
            this.opens = options.opens;

        if (typeof options.drops === 'string')
            this.drops = options.drops;

        if (typeof options.showWeekNumbers === 'boolean')
            this.showWeekNumbers = options.showWeekNumbers;

        if (typeof options.showISOWeekNumbers === 'boolean')
            this.showISOWeekNumbers = options.showISOWeekNumbers;

        if (typeof options.buttonClasses === 'string')
            this.buttonClasses = options.buttonClasses;

        if (typeof options.buttonClasses === 'object')
            this.buttonClasses = options.buttonClasses.join(' ');

        if (typeof options.showDropdowns === 'boolean')
            this.showDropdowns = options.showDropdowns;

        if (typeof options.showCustomRangeLabel === 'boolean')
            this.showCustomRangeLabel = options.showCustomRangeLabel;

        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker)
                this.endDate = this.startDate.clone();
        }

        if (typeof options.timePicker === 'boolean')
            this.timePicker = options.timePicker;

        if (typeof options.timePickerSeconds === 'boolean')
            this.timePickerSeconds = options.timePickerSeconds;

        if (typeof options.timePickerIncrement === 'number')
            this.timePickerIncrement = options.timePickerIncrement;

        if (typeof options.timePicker24Hour === 'boolean')
            this.timePicker24Hour = options.timePicker24Hour;

        if (typeof options.autoApply === 'boolean')
            this.autoApply = options.autoApply;

        if (typeof options.autoUpdateInput === 'boolean')
            this.autoUpdateInput = options.autoUpdateInput;

        if (typeof options.linkedCalendars === 'boolean')
            this.linkedCalendars = options.linkedCalendars;

        if (typeof options.isInvalidDate === 'function')
            this.isInvalidDate = options.isInvalidDate;

        if (typeof options.isCustomDate === 'function')
            this.isCustomDate = options.isCustomDate;

        if (typeof options.alwaysShowCalendars === 'boolean')
            this.alwaysShowCalendars = options.alwaysShowCalendars;

        // update day names order to firstDay
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }

        var start, end, range;

        //if no start/end dates set, check if an input element contains initial values
        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
            if ($(this.element).is('input[type=text]')) {
                var val = $(this.element).val(),
                    split = val.split(this.locale.separator);

                start = end = null;

                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }

        if (typeof options.ranges === 'object') {
            for (range in options.ranges) {

                if (typeof options.ranges[range][0] === 'string')
                    start = moment(options.ranges[range][0], this.locale.format);
                else
                    start = moment(options.ranges[range][0]);

                if (typeof options.ranges[range][1] === 'string')
                    end = moment(options.ranges[range][1], this.locale.format);
                else
                    end = moment(options.ranges[range][1]);

                // If the start or end date exceed those allowed by the minDate or dateLimit
                // options, shorten the range to the allowable period.
                if (this.minDate && start.isBefore(this.minDate))
                    start = this.minDate.clone();

                var maxDate = this.maxDate;
                if (this.dateLimit && maxDate && start.clone().add(this.dateLimit).isAfter(maxDate))
                    maxDate = start.clone().add(this.dateLimit);
                if (maxDate && end.isAfter(maxDate))
                    end = maxDate.clone();

                // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.
                if ((this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute' : 'day')) 
                  || (maxDate && start.isAfter(maxDate, this.timepicker ? 'minute' : 'day')))
                    continue;

                //Support unicode chars in the range names.
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;

                this.ranges[rangeHtml] = [start, end];
            }

            var list = '<ul>';
            for (range in this.ranges) {
                list += '<li data-range-key="' + range + '">' + range + '</li>';
            }
            if (this.showCustomRangeLabel) {
                list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + '</li>';
            }
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }

        if (typeof cb === 'function') {
            this.callback = cb;
        }

        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.endOf('day');
            this.container.find('.calendar-time').hide();
        }

        //can't be used together for now
        if (this.timePicker && this.autoApply)
            this.autoApply = false;

        if (this.autoApply && typeof options.ranges !== 'object') {
            this.container.find('.ranges').hide();
        } else if (this.autoApply) {
            this.container.find('.applyBtn, .cancelBtn').addClass('hide');
        }

        if (this.singleDatePicker) {
            this.container.addClass('single');
            this.container.find('.calendar.left').addClass('single');
            this.container.find('.calendar.left').show();
            this.container.find('.calendar.right').hide();
            this.container.find('.daterangepicker_input input, .daterangepicker_input > i').hide();
            if (this.timePicker) {
                this.container.find('.ranges ul').hide();
            } else {
                this.container.find('.ranges').hide();
            }
        }

        if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) {
            this.container.addClass('show-calendar');
        }

        this.container.addClass('opens' + this.opens);

        //swap the position of the predefined ranges if opens right
        if (typeof options.ranges !== 'undefined' && this.opens == 'right') {
            this.container.find('.ranges').appendTo( this.container.find('.calendar.left').parent().parent() );
        }

        //apply CSS classes and labels to buttons
        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
        if (this.applyClass.length)
            this.container.find('.applyBtn').addClass(this.applyClass);
        if (this.cancelClass.length)
            this.container.find('.cancelBtn').addClass(this.cancelClass);
        this.container.find('.applyBtn').html(this.locale.applyLabel);
        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

        //apply CSS classes and labels to text labels
        this.container.find('.start-date-label').html(this.locale.startLabel);
        this.container.find('.end-date-label').html(this.locale.endLabel);

        //
        // event listeners
        //

        this.container.find('.calendar')
            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
            .on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
            .on('mouseleave.daterangepicker', 'td.available', $.proxy(this.updateFormInputs, this))
            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this))

        this.container.find('.ranges')
            .on('click.daterangepicker', '.daterangepicker_input input', $.proxy(this.showCalendars, this))
            .on('focus.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsFocused, this))
            .on('blur.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsBlurred, this))
            .on('change.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this))
            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))
            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))
            .on('mouseenter.daterangepicker', 'li', $.proxy(this.hoverRange, this))
            .on('mouseleave.daterangepicker', 'li', $.proxy(this.updateFormInputs, this));

        if (this.element.is('input') || this.element.is('button')) {
            this.element.on({
                'click.daterangepicker': $.proxy(this.show, this),
                'focus.daterangepicker': $.proxy(this.show, this),
                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
                'keydown.daterangepicker': $.proxy(this.keydown, this)
            });
        } else {
            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
        }

        //
        // if attached to a text input, set the initial value
        //

        if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.element.trigger('change');
        } else if (this.element.is('input') && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format));
            this.element.trigger('change');
        }

    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        setStartDate: function(startDate) {
            if (typeof startDate === 'string')
                this.startDate = moment(startDate, this.locale.format);

            if (typeof startDate === 'object')
                this.startDate = moment(startDate);

            if (!this.timePicker)
                this.startDate = this.startDate.startOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.minDate && this.startDate.isBefore(this.minDate)) {
                this.startDate = this.minDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
                this.startDate = this.maxDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        setEndDate: function(endDate) {
            if (typeof endDate === 'string')
                this.endDate = moment(endDate, this.locale.format);

            if (typeof endDate === 'object')
                this.endDate = moment(endDate);

            if (!this.timePicker)
                this.endDate = this.endDate.endOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.endDate.isBefore(this.startDate))
                this.endDate = this.startDate.clone();

            if (this.maxDate && this.endDate.isAfter(this.maxDate))
                this.endDate = this.maxDate.clone();

            if (this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate))
                this.endDate = this.startDate.clone().add(this.dateLimit);

            this.previousRightTime = this.endDate.clone();

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        isInvalidDate: function() {
            return false;
        },

        isCustomDate: function() {
            return false;
        },

        updateView: function() {
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
                if (!this.endDate) {
                    this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
                } else {
                    this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
                }
            }
            if (this.endDate) {
                this.container.find('input[name="daterangepicker_end"]').removeClass('active');
                this.container.find('input[name="daterangepicker_start"]').addClass('active');
            } else {
                this.container.find('input[name="daterangepicker_end"]').addClass('active');
                this.container.find('input[name="daterangepicker_start"]').removeClass('active');
            }
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },

        updateMonthsInView: function() {
            if (this.endDate) {

                //if both dates are visible already, do nothing
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
                    (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    &&
                    (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    ) {
                    return;
                }

                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }

            } else {
                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
            if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
              this.rightCalendar.month = this.maxDate.clone().date(2);
              this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
            }
        },

        updateCalendars: function() {

            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }

            this.renderCalendar('left');
            this.renderCalendar('right');

            //highlight any predefined range matching the current start and end dates
            this.container.find('.ranges li').removeClass('active');
            if (this.endDate == null) return;

            this.calculateChosenLabel();
        },

        renderCalendar: function(side) {

            //
            // Build the matrix of dates that will populate the calendar
            //

            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;

            if (dayOfWeek == this.locale.firstDay)
                startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);

                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
                    calendar[row][col] = this.minDate.clone();
                }

                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
                    calendar[row][col] = this.maxDate.clone();
                }

            }

            //make the calendar object available to hoverDate/clickDate
            if (side == 'left') {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }

            //
            // Display the calendar
            //

            var minDate = side == 'left' ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == 'left' ? this.startDate : this.endDate;
            var arrow = this.locale.direction == 'ltr' ? {left: 'arrow-left32', right: 'arrow-right32'} : {left: 'arrow-right32', right: 'arrow-left32'};

            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th></th>';

            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
                html += '<th class="prev available"><i class="icon-' + arrow.left + '"></i></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
                var minYear = (minDate && minDate.year()) || (currentYear - 50);
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;

                var monthHtml = '<select class="monthselect form-control input-sm">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";

                var yearHtml = '<select class="yearselect form-control input-sm">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' +
                        (y === currentYear ? ' selected="selected"' : '') +
                        '>' + y + '</option>';
                }
                yearHtml += '</select>';

                dateHtml = monthHtml + yearHtml;
            }

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
                html += '<th class="next available"><i class="icon-' + arrow.right + '"></i></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            //adjust maxDate to reflect the dateLimit setting in order to
            //grey out end dates beyond the dateLimit
            if (this.endDate == null && this.dateLimit) {
                var maxLimit = this.startDate.clone().add(this.dateLimit).endOf('day');
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].week() + '</td>';
                else if (this.showISOWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

                for (var col = 0; col < 7; col++) {

                    var classes = [];

                    //highlight today's date
                    if (calendar[row][col].isSame(new Date(), "day"))
                        classes.push('today');

                    //highlight weekends
                    if (calendar[row][col].isoWeekday() > 5)
                        classes.push('weekend');

                    //grey out the dates in other months displayed at beginning and end of this calendar
                    if (calendar[row][col].month() != calendar[1][1].month())
                        classes.push('off');

                    //don't allow selection of dates before the minimum date
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of dates after the maximum date
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of date if a custom function decides it's invalid
                    if (this.isInvalidDate(calendar[row][col]))
                        classes.push('off', 'disabled');

                    //highlight the currently selected start date
                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
                        classes.push('active', 'start-date');

                    //highlight the currently selected end date
                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
                        classes.push('active', 'end-date');

                    //highlight dates in-between the selected dates
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
                        classes.push('in-range');

                    //apply custom classes for this date
                    var isCustom = this.isCustomDate(calendar[row][col]);
                    if (isCustom !== false) {
                        if (typeof isCustom === 'string')
                            classes.push(isCustom);
                        else
                            Array.prototype.push.apply(classes, isCustom);
                    }

                    var cname = '', disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled')
                            disabled = true;
                    }
                    if (!disabled)
                        cname += 'available';

                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';

            this.container.find('.calendar.' + side + ' .calendar-table').html(html);

        },

        renderTimePicker: function(side) {

            // Don't bother updating the time picker if it's currently disabled
            // because an end date hasn't been clicked yet
            if (side == 'right' && !this.endDate) return;

            var html, selected, minDate, maxDate = this.maxDate;

            if (this.dateLimit && (!this.maxDate || this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate)))
                maxDate = this.startDate.clone().add(this.dateLimit);

            if (side == 'left') {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == 'right') {
                selected = this.endDate.clone();
                minDate = this.startDate;

                //Preserve the time already selected
                var timeSelector = this.container.find('.calendar.right .calendar-time div');
                if (timeSelector.html() != '') {

                    selected.hour(timeSelector.find('.hourselect option:selected').val() || selected.hour());
                    selected.minute(timeSelector.find('.minuteselect option:selected').val() || selected.minute());
                    selected.second(timeSelector.find('.secondselect option:selected').val() || selected.second());

                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find('.ampmselect option:selected').val();
                        if (ampm === 'PM' && selected.hour() < 12)
                            selected.hour(selected.hour() + 12);
                        if (ampm === 'AM' && selected.hour() === 12)
                            selected.hour(0);
                    }

                }

                if (selected.isBefore(this.startDate))
                    selected = this.startDate.clone();

                if (maxDate && selected.isAfter(maxDate))
                    selected = maxDate.clone();

            }

            //
            // hours
            //

            html = '<select class="hourselect form-control input-sm">';

            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;

            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour)
                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate))
                    disabled = true;

                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
                } else {
                    html += '<option value="' + i + '">' + i + '</option>';
                }
            }

            html += '</select> ';

            //
            // minutes
            //

            html += ': <select class="minuteselect form-control input-sm">';

            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().minute(i);

                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate))
                    disabled = true;

                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                } else {
                    html += '<option value="' + i + '">' + padded + '</option>';
                }
            }

            html += '</select> ';

            //
            // seconds
            //

            if (this.timePickerSeconds) {
                html += ': <select class="secondselect form-control input-sm">';

                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? '0' + i : i;
                    var time = selected.clone().second(i);

                    var disabled = false;
                    if (minDate && time.isBefore(minDate))
                        disabled = true;
                    if (maxDate && time.isAfter(maxDate))
                        disabled = true;

                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + padded + '</option>';
                    }
                }

                html += '</select> ';
            }

            //
            // AM/PM
            //

            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect form-control input-sm">';

                var am_html = '';
                var pm_html = '';

                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
                    am_html = ' disabled="disabled" class="disabled"';

                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
                    pm_html = ' disabled="disabled" class="disabled"';

                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
                }

                html += '</select>';
            }

            this.container.find('.calendar.' + side + ' .calendar-time div').html(html);

        },

        updateFormInputs: function() {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            this.container.find('input[name=daterangepicker_start]').val(this.startDate.format(this.locale.format));
            if (this.endDate)
                this.container.find('input[name=daterangepicker_end]').val(this.endDate.format(this.locale.format));

            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
                this.container.find('button.applyBtn').removeAttr('disabled');
            } else {
                this.container.find('button.applyBtn').attr('disabled', 'disabled');
            }

        },

        move: function() {
            var parentOffset = { top: 0, left: 0 },
                containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }

            if (this.drops == 'up')
                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
            else
                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
            this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('dropup');

            if (this.opens == 'left') {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else if (this.opens == 'center') {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2
                            - this.container.outerWidth() / 2,
                    right: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left,
                    right: 'auto'
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: 'auto',
                        right: 0
                    });
                }
            }
        },

        show: function(e) {
            if (this.isShowing) return;

            // Create a click proxy that is private to this instance of datepicker, for unbinding
            this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);

            // Bind global datepicker mousedown for hiding and
            $(document)
              .on('mousedown.daterangepicker', this._outsideClickProxy)
              // also support mobile devices
              .on('touchend.daterangepicker', this._outsideClickProxy)
              // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
              .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
              // and also close when focus changes to outside the picker (eg. tabbing between controls)
              .on('focusin.daterangepicker', this._outsideClickProxy);

            // Reposition the picker if the window is resized while it's open
            $(window).on('resize.daterangepicker', $.proxy(function(e) { this.move(e); }, this));

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();

            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger('show.daterangepicker', this);
            this.isShowing = true;
        },

        hide: function(e) {
            if (!this.isShowing) return;

            //incomplete date selection, revert to last values
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }

            //if a new date range was selected, invoke the user callback function
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.callback(this.startDate, this.endDate, this.chosenLabel);

            //if picker is attached to a text input, update it
            this.updateElement();

            $(document).off('.daterangepicker');
            $(window).off('.daterangepicker');
            this.container.hide();
            this.element.trigger('hide.daterangepicker', this);
            this.isShowing = false;
        },

        toggle: function(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },

        outsideClick: function(e) {
            var target = $(e.target);
            // if the page is clicked anywhere except within the daterangerpicker/button
            // itself then call this.hide()
            if (
                // ie modal dialog fix
                e.type == "focusin" ||
                target.closest(this.element).length ||
                target.closest(this.container).length ||
                target.closest('.calendar-table').length
                ) return;
            this.hide();
            this.element.trigger('outsideClick.daterangepicker', this);
        },

        showCalendars: function() {
            this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this);
        },

        hideCalendars: function() {
            this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this);
        },

        hoverRange: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            var label = e.target.getAttribute('data-range-key');

            if (label == this.locale.customRangeLabel) {
                this.updateView();
            } else {
                var dates = this.ranges[label];
                this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.locale.format));
                this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.locale.format));
            }

        },

        clickRange: function(e) {
            var label = e.target.getAttribute('data-range-key');
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.endOf('day');
                }

                if (!this.alwaysShowCalendars)
                    this.hideCalendars();
                this.clickApply();
            }
        },

        clickPrev: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
                if (this.linkedCalendars)
                    this.rightCalendar.month.subtract(1, 'month');
            } else {
                this.rightCalendar.month.subtract(1, 'month');
            }
            this.updateCalendars();
        },

        clickNext: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add(1, 'month');
            } else {
                this.rightCalendar.month.add(1, 'month');
                if (this.linkedCalendars)
                    this.leftCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },

        hoverDate: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            //if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
            //    return;

            //ignore dates that can't be selected
            if (!$(e.target).hasClass('available')) return;

            //have the text inputs above calendars reflect the date being hovered over
            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            if (this.endDate && !this.container.find('input[name=daterangepicker_start]').is(":focus")) {
                this.container.find('input[name=daterangepicker_start]').val(date.format(this.locale.format));
            } else if (!this.endDate && !this.container.find('input[name=daterangepicker_end]').is(":focus")) {
                this.container.find('input[name=daterangepicker_end]').val(date.format(this.locale.format));
            }

            //highlight the dates between the start date and the date being hovered as a potential end date
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find('.calendar tbody td').each(function(index, el) {

                    //skip week numbers, only look at dates
                    if ($(el).hasClass('week')) return;

                    var title = $(el).attr('data-title');
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents('.calendar');
                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

                    if ((dt.isAfter(startDate) && dt.isBefore(date)) || dt.isSame(date, 'day')) {
                        $(el).addClass('in-range');
                    } else {
                        $(el).removeClass('in-range');
                    }

                });
            }

        },

        clickDate: function(e) {

            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //
            // this function needs to do a few things:
            // * alternate between selecting a start and end date for the range,
            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
            // * if autoapply is enabled, and an end date was chosen, apply the selection
            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
            // * if one of the inputs above the calendars was focused, cancel that manual input
            //

            if (this.endDate || date.isBefore(this.startDate, 'day')) { //picking start
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                //special case: clicking the same date for start/end,
                //but the time of the end date is before the start date
                this.setEndDate(this.startDate.clone());
            } else { // picking end
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                  this.calculateChosenLabel();
                  this.clickApply();
                }
            }

            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker)
                    this.clickApply();
            }

            this.updateView();

            //This is to cancel the blur event handler if the mouse was in one of the inputs
            e.stopPropagation();

        },

        calculateChosenLabel: function () {
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
                if (this.timePicker) {
                    if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                        break;
                    }
                } else {
                    //ignore times when comparing dates if time picker is not enabled
                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                        break;
                    }
                }
                i++;
            }
            if (customRange) {
                if (this.showCustomRangeLabel) {
                    this.chosenLabel = this.container.find('.ranges li:last').addClass('active').html();
                } else {
                    this.chosenLabel = null;
                }
                this.showCalendars();
            }
        },

        clickApply: function(e) {
            this.hide();
            this.element.trigger('apply.daterangepicker', this);
        },

        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger('cancel.daterangepicker', this);
        },

        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest('.calendar').hasClass('left'),
                leftOrRight = isLeft ? 'left' : 'right',
                cal = this.container.find('.calendar.'+leftOrRight);

            // Month must be Number for new moment versions
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();

            if (!isLeft) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }

            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }

            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }

            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
            this.updateCalendars();
        },

        timeChanged: function(e) {

            var cal = $(e.target).closest('.calendar'),
                isLeft = cal.hasClass('left');

            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

            if (!this.timePicker24Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12)
                    hour += 12;
                if (ampm === 'AM' && hour === 12)
                    hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }

            //update the calendars so all clickable dates reflect the new time component
            this.updateCalendars();

            //update the form inputs above the calendars with the new time
            this.updateFormInputs();

            //re-render the time pickers because changing one selection can affect what's enabled in another
            this.renderTimePicker('left');
            this.renderTimePicker('right');

        },

        formInputsChanged: function(e) {
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            var start = moment(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format);
            var end = moment(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);

            if (start.isValid() && end.isValid()) {

                if (isRight && end.isBefore(start))
                    start = end.clone();

                this.setStartDate(start);
                this.setEndDate(end);

                if (isRight) {
                    this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format));
                } else {
                    this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format));
                }

            }

            this.updateView();
        },

        formInputsFocused: function(e) {

            // Highlight the focused input
            this.container.find('input[name="daterangepicker_start"], input[name="daterangepicker_end"]').removeClass('active');
            $(e.target).addClass('active');

            // Set the state such that if the user goes back to using a mouse, 
            // the calendars are aware we're selecting the end of the range, not
            // the start. This allows someone to edit the end of a date range without
            // re-selecting the beginning, by clicking on the end date input then
            // using the calendar.
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            if (isRight) {
                this.endDate = null;
                this.setStartDate(this.startDate.clone());
                this.updateView();
            }

        },

        formInputsBlurred: function(e) {

            // this function has one purpose right now: if you tab from the first
            // text input to the second in the UI, the endDate is nulled so that
            // you can click another, but if you tab out without clicking anything
            // or changing the input value, the old endDate should be retained

            if (!this.endDate) {
                var val = this.container.find('input[name="daterangepicker_end"]').val();
                var end = moment(val, this.locale.format);
                if (end.isValid()) {
                    this.setEndDate(end);
                    this.updateView();
                }
            }

        },

        elementChanged: function() {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;
            if (this.element.val().length < this.locale.format.length) return;

            var dateString = this.element.val().split(this.locale.separator),
                start = null,
                end = null;

            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }

            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }

            if (!start.isValid() || !end.isValid()) return;

            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },

        keydown: function(e) {
            //hide on tab or enter
            if ((e.keyCode === 9) || (e.keyCode === 13)) {
                this.hide();
            }
        },

        updateElement: function() {
            if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
                this.element.trigger('change');
            } else if (this.element.is('input') && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format));
                this.element.trigger('change');
            }
        },

        remove: function() {
            this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData();
        }

    };

    $.fn.daterangepicker = function(options, callback) {
        this.each(function() {
            var el = $(this);
            if (el.data('daterangepicker'))
                el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, options, callback));
        });
        return this;
    };

    return DateRangePicker;

}));
/* anytime.5.2.0.min.js
Copyright Andrew M. Andrews III and other contributors.
License: MIT-Style (see uncompressed anytime.js source) */
var AnyTime={version:"5.2.0",pad:function(a,b){for(var c=String(Math.abs(a));c.length<b;)c="0"+c;return 0>a&&(c="-"+c),c}};!function(a){var b=[31,28,31,30,31,30,31,31,30,31,30,31],c=!1,d=[];a.fn.AnyTime_picker=function(a){return this.each(function(){AnyTime.picker(this.id,a)})},a.fn.AnyTime_noPicker=function(){return this.each(function(){AnyTime.noPicker(this.id)})},a.fn.AnyTime_setCurrent=function(a){return this.each(function(){AnyTime.setCurrent(this.id,a)})},a.fn.AnyTime_setEarliest=function(a){return this.each(function(){AnyTime.setEarliest(this.id,a)})},a.fn.AnyTime_setLatest=function(a){return this.each(function(){AnyTime.setLatest(this.id,a)})},a.fn.AnyTime_current=function(a,b){a?(this.removeClass("AnyTime-out-btn ui-state-default ui-state-disabled ui-state-active"),this.addClass("AnyTime-cur-btn ui-state-default ui-state-active")):(this.removeClass("AnyTime-cur-btn ui-state-active"),b?this.removeClass("AnyTime-out-btn ui-state-disabled"):this.addClass("AnyTime-out-btn ui-state-disabled"))},a.fn.AnyTime_clickCurrent=function(){this.find(".AnyTime-cur-btn").triggerHandler("click")},a(document).ready(function(){for(var a in d)Array.prototype[a]||d[a].onReady();c=!0}),AnyTime.Converter=function(b){var c=0,d=9,e=9,f=6,g=3,h=Number.MIN_VALUE,i=Number.MIN_VALUE,j=Number.MIN_VALUE,k=-1,l=Number.MIN_VALUE,m=-1,n=!1;this.fmt="%Y-%m-%d %T",this.dAbbr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],this.dNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],this.eAbbr=["BCE","CE"],this.mAbbr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.mNames=["January","February","March","April","May","June","July","August","September","October","November","December"],this.baseYear=null,this.dAt=function(a,b){return a.charCodeAt(b)>="0".charCodeAt(0)&&a.charCodeAt(b)<="9".charCodeAt(0)},this.format=function(a){var b=new Date(a.getTime());h==Number.MIN_VALUE&&j!=Number.MIN_VALUE&&b.setTime(b.getTime()+6e4*b.getTimezoneOffset()+6e4*j);for(var d,e="",f=0;c>f;f++)if("%"!=this.fmt.charAt(f))e+=this.fmt.charAt(f);else{var g=this.fmt.charAt(f+1);switch(g){case"a":e+=this.dAbbr[b.getDay()];break;case"B":b.getFullYear()<0&&(e+=this.eAbbr[0]);break;case"b":e+=this.mAbbr[b.getMonth()];break;case"C":b.getFullYear()>0&&(e+=this.eAbbr[1]);break;case"c":e+=b.getMonth()+1;break;case"d":d=b.getDate(),10>d&&(e+="0"),e+=String(d);break;case"D":if(d=String(b.getDate()),e+=d,2==d.length&&"1"==d.charAt(0))e+="th";else switch(d.charAt(d.length-1)){case"1":e+="st";break;case"2":e+="nd";break;case"3":e+="rd";break;default:e+="th"}break;case"E":e+=this.eAbbr[b.getFullYear()<0?0:1];break;case"e":e+=b.getDate();break;case"H":d=b.getHours(),10>d&&(e+="0"),e+=String(d);break;case"h":case"I":d=b.getHours()%12,0==d?e+="12":(10>d&&(e+="0"),e+=String(d));break;case"i":d=b.getMinutes(),10>d&&(e+="0"),e+=String(d);break;case"k":e+=b.getHours();break;case"l":d=b.getHours()%12,e+=0==d?"12":String(d);break;case"M":e+=this.mNames[b.getMonth()];break;case"m":d=b.getMonth()+1,10>d&&(e+="0"),e+=String(d);break;case"p":e+=b.getHours()<12?"AM":"PM";break;case"r":d=b.getHours()%12,0==d?e+="12:":(10>d&&(e+="0"),e+=String(d)+":"),d=b.getMinutes(),10>d&&(e+="0"),e+=String(d)+":",d=b.getSeconds(),10>d&&(e+="0"),e+=String(d),e+=b.getHours()<12?"AM":"PM";break;case"S":case"s":d=b.getSeconds(),10>d&&(e+="0"),e+=String(d);break;case"T":d=b.getHours(),10>d&&(e+="0"),e+=String(d)+":",d=b.getMinutes(),10>d&&(e+="0"),e+=String(d)+":",d=b.getSeconds(),10>d&&(e+="0"),e+=String(d);break;case"W":e+=this.dNames[b.getDay()];break;case"w":e+=b.getDay();break;case"Y":e+=AnyTime.pad(b.getFullYear(),4);break;case"y":d=b.getFullYear()%100,e+=AnyTime.pad(d,2);break;case"Z":e+=AnyTime.pad(Math.abs(b.getFullYear()),4);break;case"z":e+=Math.abs(b.getFullYear());break;case"%":e+="%";break;case"#":d=h!=Number.MIN_VALUE?h:j==Number.MIN_VALUE?0-b.getTimezoneOffset():j,d>=0&&(e+="+"),e+=d;break;case"@":if(d=h!=Number.MIN_VALUE?h:j==Number.MIN_VALUE?0-b.getTimezoneOffset():j,AnyTime.utcLabel&&AnyTime.utcLabel[d]){e+=k>0&&k<AnyTime.utcLabel[d].length?AnyTime.utcLabel[d][k]:AnyTime.utcLabel[d][0];break}e+="UTC",g=":";case"+":case"-":case":":case";":d=h!=Number.MIN_VALUE?h:j==Number.MIN_VALUE?0-b.getTimezoneOffset():j,e+=0>d?"-":"+",d=Math.abs(d),e+="+"==g||":"==g?AnyTime.pad(Math.floor(d/60),2):Math.floor(d/60),(":"==g||";"==g)&&(e+=":"),e+=AnyTime.pad(d%60,2);break;case"f":case"j":case"U":case"u":case"V":case"v":case"X":case"x":throw"%"+g+" not implemented by AnyTime.Converter";default:e+=this.fmt.substr(f,2)}f++}return e},this.getUtcParseOffsetCaptured=function(){return i},this.getUtcParseOffsetSubIndex=function(){return m},this.parse=function(a){i=l,m=-1;for(var b,h,j,k,o,p=1,q=new Date(4,0,1,0,0,0,0),r=a.length,s=0,t=1,u=l,v=0;c>v;v++)if("%"==this.fmt.charAt(v)){var w=this.fmt.charAt(v+1);switch(w){case"a":for(h=!1,k=0;r>s+k;k++){for(j=a.substr(s,k),b=0;12>b;b++)if(this.dAbbr[b]==j){h=!0,s+=k;break}if(h)break}if(!h)throw"unknown weekday: "+a.substr(s);break;case"B":k=this.eAbbr[0].length,r>=s+k&&a.substr(s,k)==this.eAbbr[0]&&(p=-1,s+=k);break;case"b":for(h=!1,k=0;r>s+k;k++){for(j=a.substr(s,k),b=0;12>b;b++)if(this.mAbbr[b]==j){q.setMonth(b),h=!0,s+=k;break}if(h)break}if(!h)throw"unknown month: "+a.substr(s);break;case"C":k=this.eAbbr[1].length,r>=s+k&&a.substr(s,k)==this.eAbbr[1]&&(s+=k);break;case"c":r>s+1&&this.dAt(a,s+1)?(q.setMonth((Number(a.substr(s,2))-1)%12),s+=2):(q.setMonth((Number(a.substr(s,1))-1)%12),s++);break;case"D":r>s+1&&this.dAt(a,s+1)?(q.setDate(Number(a.substr(s,2))),s+=4):(q.setDate(Number(a.substr(s,1))),s+=3);break;case"d":q.setDate(Number(a.substr(s,2))),s+=2;break;case"E":if(k=this.eAbbr[0].length,r>=s+k&&a.substr(s,k)==this.eAbbr[0])p=-1,s+=k;else{if(!(s+(k=this.eAbbr[1].length)<=r&&a.substr(s,k)==this.eAbbr[1]))throw"unknown era: "+a.substr(s);s+=k}break;case"e":r>s+1&&this.dAt(a,s+1)?(q.setDate(Number(a.substr(s,2))),s+=2):(q.setDate(Number(a.substr(s,1))),s++);break;case"f":s+=6;break;case"H":q.setHours(Number(a.substr(s,2))),s+=2;break;case"h":case"I":q.setHours(Number(a.substr(s,2))),s+=2;break;case"i":q.setMinutes(Number(a.substr(s,2))),s+=2;break;case"k":r>s+1&&this.dAt(a,s+1)?(q.setHours(Number(a.substr(s,2))),s+=2):(q.setHours(Number(a.substr(s,1))),s++);break;case"l":r>s+1&&this.dAt(a,s+1)?(q.setHours(Number(a.substr(s,2))),s+=2):(q.setHours(Number(a.substr(s,1))),s++);break;case"M":for(h=!1,k=g;r>=s+k&&!(k>e);k++){for(j=a.substr(s,k),b=0;12>b;b++)if(this.mNames[b]==j){q.setMonth(b),h=!0,s+=k;break}if(h)break}break;case"m":q.setMonth((Number(a.substr(s,2))-1)%12),s+=2;break;case"p":12==q.getHours()?"A"==a.charAt(s)&&q.setHours(0):"P"==a.charAt(s)&&q.setHours(q.getHours()+12),s+=2;break;case"r":q.setHours(Number(a.substr(s,2))),q.setMinutes(Number(a.substr(s+3,2))),q.setSeconds(Number(a.substr(s+6,2))),12==q.getHours()?"A"==a.charAt(s+8)&&q.setHours(0):"P"==a.charAt(s+8)&&q.setHours(q.getHours()+12),s+=10;break;case"S":case"s":q.setSeconds(Number(a.substr(s,2))),s+=2;break;case"T":q.setHours(Number(a.substr(s,2))),q.setMinutes(Number(a.substr(s+3,2))),q.setSeconds(Number(a.substr(s+6,2))),s+=8;break;case"W":for(h=!1,k=f;r>=s+k&&!(k>d);k++){for(j=a.substr(s,k),b=0;7>b;b++)if(this.dNames[b]==j){h=!0,s+=k;break}if(h)break}break;case"w":s+=1;break;case"Y":b=4,"-"==a.substr(s,1)&&b++,q.setFullYear(Number(a.substr(s,b))),s+=b;break;case"y":b=2,"-"==a.substr(s,1)&&b++,o=Number(a.substr(s,b)),o+="number"==typeof this.baseYear?this.baseYear:70>o?2e3:1900,q.setFullYear(o),s+=b;break;case"Z":q.setFullYear(Number(a.substr(s,4))),s+=4;break;case"z":for(b=0;r>s&&this.dAt(a,s);)b=10*b+Number(a.charAt(s++));q.setFullYear(b);break;case"#":for("-"==a.charAt(s++)&&(t=-1),u=0;r>s&&String(b=Number(a.charAt(s)))==a.charAt(s);s++)u=10*u+b;u*=t;break;case"@":if(m=-1,AnyTime.utcLabel){h=!1;for(u in AnyTime.utcLabel)if(!Array.prototype[u]){for(b=0;b<AnyTime.utcLabel[u].length;b++)if(j=AnyTime.utcLabel[u][b],k=j.length,r>=s+k&&a.substr(s,k)==j){s+=k,h=!0;break}if(h)break}if(h){m=b,u=Number(u);break}}if(r>s+9||"UTC"!=a.substr(s,3))throw"unknown time zone: "+a.substr(s);s+=3,w=":";case"-":case"+":case":":case";":"-"==a.charAt(s++)&&(t=-1),u=Number(a.charAt(s)),("+"==w||":"==w||r>s+3&&String(Number(a.charAt(s+3)))!==a.charAt(s+3))&&(u=10*u+Number(a.charAt(++s))),u*=60,(":"==w||";"==w)&&s++,u=(u+Number(a.substr(++s,2)))*t,s+=2;break;case"j":case"U":case"u":case"V":case"v":case"X":case"x":throw"%"+this.fmt.charAt(v+1)+" not implemented by AnyTime.Converter";case"%":default:throw"%"+this.fmt.charAt(v+1)+" reserved for future use"}v++}else{if(this.fmt.charAt(v)!=a.charAt(s))throw a+' is not in "'+this.fmt+'" format';s++}return 0>p&&q.setFullYear(0-q.getFullYear()),u!=Number.MIN_VALUE&&(n?i=u:q.setTime(q.getTime()-6e4*u-6e4*q.getTimezoneOffset())),q},this.setUtcFormatOffsetAlleged=function(a){var b=h;return h=a,b},this.setUtcFormatOffsetSubIndex=function(a){var b=k;return k=a,b},function(h){var i,k;if(b=jQuery.extend(!0,{},b||{}),b.baseYear&&(h.baseYear=Number(b.baseYear)),b.format&&(h.fmt=b.format),c=h.fmt.length,b.dayAbbreviations&&(h.dAbbr=a.makeArray(b.dayAbbreviations)),b.dayNames)for(h.dNames=a.makeArray(b.dayNames),d=1,f=1e3,i=0;7>i;i++)k=h.dNames[i].length,k>d&&(d=k),f>k&&(f=k);if(b.eraAbbreviations&&(h.eAbbr=a.makeArray(b.eraAbbreviations)),b.monthAbbreviations&&(h.mAbbr=a.makeArray(b.monthAbbreviations)),b.monthNames)for(h.mNames=a.makeArray(b.monthNames),e=1,g=1e3,i=0;12>i;i++)k=h.mNames[i].length,k>e&&(e=k),g>k&&(g=k);"undefined"!=typeof b.utcFormatOffsetImposed&&(j=b.utcFormatOffsetImposed),"undefined"!=typeof b.utcParseOffsetAssumed&&(l=b.utcParseOffsetAssumed),b.utcParseOffsetCapture&&(n=!0)}(this)},AnyTime.noPicker=function(a){d[a]&&(d[a].cleanup(),delete d[a])},AnyTime.picker=function(e,f){if(d[e])throw'Cannot create another AnyTime.picker for "'+e+'"';var g=null;d[e]={twelveHr:!1,ajaxOpts:null,denyTab:!0,askEra:!1,cloak:null,conv:null,div:null,dB:null,dD:null,dY:null,dMo:null,dDoM:null,hDoM:null,hMo:null,hTitle:null,hY:null,dT:null,dH:null,dM:null,dS:null,dO:null,earliest:null,fBtn:null,fDOW:0,hBlur:null,hClick:null,hFocus:null,hKeydown:null,hResize:null,id:null,inp:null,latest:null,lastAjax:null,lostFocus:!1,lX:"X",lY:"Year",lO:"Time Zone",oBody:null,oConv:null,oCur:null,oDiv:null,oLab:null,oList:null,oSel:null,offMin:Number.MIN_VALUE,offSI:-1,offStr:"",pop:!0,ro:!1,time:null,url:null,yAhead:null,y0XXX:null,yCur:null,yDiv:null,yLab:null,yNext:null,yPast:null,yPrior:null,initialize:function(d){if(g=this,this.id="AnyTime--"+d.replace(/[^-_.A-Za-z0-9]/g,"--AnyTime--"),f=jQuery.extend(!0,{},f||{}),f.utcParseOffsetCapture=!0,this.conv=new AnyTime.Converter(f),f.placement)if("inline"==f.placement)this.pop=!1;else if("popup"!=f.placement)throw"unknown placement: "+f.placement;if(f.ajaxOptions&&(this.ajaxOpts=jQuery.extend({},f.ajaxOptions),this.ajaxOpts.success||(this.ajaxOpts.success=function(a){g.updVal(a)})),f.earliest&&(this.earliest=this.makeDate(f.earliest)),f.firstDOW){if(f.firstDOW<0||f.firstDOW>6)throw"illegal firstDOW: "+f.firstDOW;this.fDOW=f.firstDOW}f.latest&&(this.latest=this.makeDate(f.latest)),this.lX=f.labelDismiss||"X",this.lY=f.labelYear||"Year",this.lO=f.labelTimeZone||"Time Zone";var e,h,i,j=0,k=this.conv.fmt;this.askEra="undefined"!=typeof f.askEra?f.askEra:k.indexOf("%B")>=0||k.indexOf("%C")>=0||k.indexOf("%E")>=0;var l=k.indexOf("%Y")>=0||k.indexOf("%y")>=0||k.indexOf("%Z")>=0||k.indexOf("%z")>=0,m=k.indexOf("%b")>=0||k.indexOf("%c")>=0||k.indexOf("%M")>=0||k.indexOf("%m")>=0,n=k.indexOf("%D")>=0||k.indexOf("%d")>=0||k.indexOf("%e")>=0,o=l||m||n;this.twelveHr=k.indexOf("%h")>=0||k.indexOf("%I")>=0||k.indexOf("%l")>=0||k.indexOf("%r")>=0;var p=this.twelveHr||k.indexOf("%H")>=0||k.indexOf("%k")>=0||k.indexOf("%T")>=0,q=k.indexOf("%i")>=0||k.indexOf("%r")>=0||k.indexOf("%T")>=0,r=k.indexOf("%r")>=0||k.indexOf("%S")>=0||k.indexOf("%s")>=0||k.indexOf("%T")>=0;r&&"undefined"!=typeof f.askSecond&&(r=f.askSecond);var s=k.indexOf("%#")>=0||k.indexOf("%+")>=0||k.indexOf("%-")>=0||k.indexOf("%:")>=0||k.indexOf("%;")>=0||k.indexOf("%<")>=0||k.indexOf("%>")>=0||k.indexOf("%@")>=0,t=p||q||r||s;s&&(this.oConv=new AnyTime.Converter({format:f.formatUtcOffset||k.match(/\S*%[-+:;<>#@]\S*/g).join(" ")})),this.inp=a(document.getElementById(d)),this.ro=this.inp.prop("readonly"),this.inp.prop("readonly",!0),this.div=a('<div class="AnyTime-win AnyTime-pkr ui-widget ui-widget-content ui-corner-all" id="'+this.id+'" aria-live="off"></div>'),this.inp.after(this.div),this.hTitle=a('<h5 class="AnyTime-hdr ui-widget-header ui-corner-top"/>'),this.div.append(this.hTitle),this.dB=a('<div class="AnyTime-body"></div>'),this.div.append(this.dB),f.hideInput&&this.inp.css({border:0,height:"1px",margin:0,padding:0,width:"1px"}),h=null;var u=null;if(this.pop&&(u=a('<div class="AnyTime-x-btn ui-state-default">'+this.lX+"</div>"),this.hTitle.append(u),u.click(function(a){g.dismiss(a)})),i="",o){if(this.dD=a('<div class="AnyTime-date"></div>'),this.dB.append(this.dD),l&&(this.yLab=a('<h6 class="AnyTime-lbl AnyTime-lbl-yr">'+this.lY+"</h6>"),this.dD.append(this.yLab),this.dY=a('<ul class="AnyTime-yrs ui-helper-reset" />'),this.dD.append(this.dY),this.yPast=this.btn(this.dY,"&lt;",this.newYear,["yrs-past"],"- "+this.lY),this.yPrior=this.btn(this.dY,"1",this.newYear,["yr-prior"],"-1 "+this.lY),this.yCur=this.btn(this.dY,"2",this.newYear,["yr-cur"],this.lY),this.yCur.removeClass("ui-state-default"),this.yCur.addClass("AnyTime-cur-btn ui-state-default ui-state-active"),this.yNext=this.btn(this.dY,"3",this.newYear,["yr-next"],"+1 "+this.lY),this.yAhead=this.btn(this.dY,"&gt;",this.newYear,["yrs-ahead"],"+ "+this.lY),j++),m){for(i=f.labelMonth||"Month",this.hMo=a('<h6 class="AnyTime-lbl AnyTime-lbl-month">'+i+"</h6>"),this.dD.append(this.hMo),this.dMo=a('<ul class="AnyTime-mons" />'),this.dD.append(this.dMo),e=0;12>e;e++){var v=this.btn(this.dMo,this.conv.mAbbr[e],function(c){var d=a(c.target);if(!d.hasClass("AnyTime-out-btn")){var e=c.target.AnyTime_month,f=new Date(this.time.getTime());f.getDate()>b[e]&&f.setDate(b[e]),f.setMonth(e),this.set(f),this.upd(d)}},["mon","mon"+String(e+1)],i+" "+this.conv.mNames[e]);v[0].AnyTime_month=e}j++}if(n){i=f.labelDayOfMonth||"Day of Month",this.hDoM=a('<h6 class="AnyTime-lbl AnyTime-lbl-dom">'+i+"</h6>"),this.dD.append(this.hDoM),this.dDoM=a('<table border="0" cellpadding="0" cellspacing="0" class="AnyTime-dom-table"/>'),this.dD.append(this.dDoM),h=a('<thead class="AnyTime-dom-head"/>'),this.dDoM.append(h);var w=a('<tr class="AnyTime-dow"/>');for(h.append(w),e=0;7>e;e++)w.append('<th class="AnyTime-dow AnyTime-dow'+String(e+1)+'">'+this.conv.dAbbr[(this.fDOW+e)%7]+"</th>");var x=a('<tbody class="AnyTime-dom-body" />');this.dDoM.append(x);for(var y=0;6>y;y++)for(w=a('<tr class="AnyTime-wk AnyTime-wk'+String(y+1)+'"/>'),x.append(w),e=0;7>e;e++)this.btn(w,"x",function(b){var c=a(b.target);if(!c.hasClass("AnyTime-out-btn")){var d=Number(c.html());if(d){var e=new Date(this.time.getTime());e.setDate(d),this.set(e),this.upd(c)}}},["dom"],i);j++}}if(t){var z,A;if(this.dT=a('<div class="AnyTime-time"></div>'),this.dB.append(this.dT),p){this.dH=a('<div class="AnyTime-hrs"></div>'),this.dT.append(this.dH),i=f.labelHour||"Hour",this.dH.append(a('<h6 class="AnyTime-lbl AnyTime-lbl-hr">'+i+"</h6>"));var B=a('<ul class="AnyTime-hrs-am"/>');this.dH.append(B);var C=a('<ul class="AnyTime-hrs-pm"/>');for(this.dH.append(C),e=0;12>e;e++)h=this.twelveHr?0==e?"12am":String(e)+"am":AnyTime.pad(e,2),this.btn(B,h,this.newHour,["hr","hr"+String(e)],i+" "+h),h=this.twelveHr?0==e?"12pm":String(e)+"pm":e+12,this.btn(C,h,this.newHour,["hr","hr"+String(e+12)],i+" "+h);j++}if(q){for(this.dM=a('<div class="AnyTime-mins"></div>'),this.dT.append(this.dM),i=f.labelMinute||"Minute",this.dM.append(a('<h6 class="AnyTime-lbl AnyTime-lbl-min">'+i+"</h6>")),z=a('<ul class="AnyTime-mins-tens"/>'),this.dM.append(z),e=0;6>e;e++)this.btn(z,e,function(b){var c=a(b.target);if(!c.hasClass("AnyTime-out-btn")){var d=new Date(this.time.getTime());d.setMinutes(10*Number(c.text())+this.time.getMinutes()%10),this.set(d),this.upd(c)}},["min-ten","min"+e+"0"],i+" "+e+"0");for(;12>e;e++)this.btn(z,"&#160;",a.noop,["min-ten","min"+e+"0"],i+" "+e+"0").addClass("AnyTime-min-ten-btn-empty ui-state-default ui-state-disabled");for(A=a('<ul class="AnyTime-mins-ones"/>'),this.dM.append(A),e=0;10>e;e++)this.btn(A,e,function(b){var c=a(b.target);if(!c.hasClass("AnyTime-out-btn")){var d=new Date(this.time.getTime());d.setMinutes(10*Math.floor(this.time.getMinutes()/10)+Number(c.text())),this.set(d),this.upd(c)}},["min-one","min"+e],i+" "+e);for(;12>e;e++)this.btn(A,"&#160;",a.noop,["min-one","min"+e+"0"],i+" "+e).addClass("AnyTime-min-one-btn-empty ui-state-default ui-state-disabled");j++}if(r){for(this.dS=a('<div class="AnyTime-secs"></div>'),this.dT.append(this.dS),i=f.labelSecond||"Second",this.dS.append(a('<h6 class="AnyTime-lbl AnyTime-lbl-sec">'+i+"</h6>")),z=a('<ul class="AnyTime-secs-tens"/>'),this.dS.append(z),e=0;6>e;e++)this.btn(z,e,function(b){var c=a(b.target);if(!c.hasClass("AnyTime-out-btn")){var d=new Date(this.time.getTime());d.setSeconds(10*Number(c.text())+this.time.getSeconds()%10),this.set(d),this.upd(c)}},["sec-ten","sec"+e+"0"],i+" "+e+"0");for(;12>e;e++)this.btn(z,"&#160;",a.noop,["sec-ten","sec"+e+"0"],i+" "+e+"0").addClass("AnyTime-sec-ten-btn-empty ui-state-default ui-state-disabled");for(A=a('<ul class="AnyTime-secs-ones"/>'),this.dS.append(A),e=0;10>e;e++)this.btn(A,e,function(b){var c=a(b.target);if(!c.hasClass("AnyTime-out-btn")){var d=new Date(this.time.getTime());d.setSeconds(10*Math.floor(this.time.getSeconds()/10)+Number(c.text())),this.set(d),this.upd(c)}},["sec-one","sec"+e],i+" "+e);for(;12>e;e++)this.btn(A,"&#160;",a.noop,["sec-one","sec"+e+"0"],i+" "+e).addClass("AnyTime-sec-one-btn-empty ui-state-default ui-state-disabled");j++}s&&(this.dO=a('<div class="AnyTime-offs" ></div>'),this.dT.append("<br />"),this.dT.append(this.dO),this.oList=a('<ul class="AnyTime-off-list ui-helper-reset" />'),this.dO.append(this.oList),this.oCur=this.btn(this.oList,"",this.newOffset,["off","off-cur"],i),this.oCur.removeClass("ui-state-default"),this.oCur.addClass("AnyTime-cur-btn ui-state-default ui-state-active"),this.oSel=this.btn(this.oList,"&#177;",this.newOffset,["off","off-select"],"+/- "+this.lO),this.oMinW=this.dO.outerWidth(!0),this.oLab=a('<h6 class="AnyTime-lbl AnyTime-lbl-off">'+this.lO+"</h6>"),this.dO.prepend(this.oLab),j++)}f.labelTitle?this.hTitle.append(f.labelTitle):j>1?this.hTitle.append("Select a "+(o?t?"Date and Time":"Date":"Time")):this.hTitle.append("Select");try{this.time=this.conv.parse(this.inp.val()),this.offMin=this.conv.getUtcParseOffsetCaptured(),this.offSI=this.conv.getUtcParseOffsetSubIndex(),"init"in f&&(this.time=this.makeDate(f.init))}catch(D){this.time=new Date}this.lastAjax=this.time,this.pop&&(this.div.hide(),this.div.css("position","absolute")),this.inp.blur(this.hBlur=function(a){g.inpBlur(a)}),this.inp.click(this.hClick=function(a){g.showPkr(a)}),this.inp.focus(this.hFocus=function(a){g.lostFocus&&g.showPkr(a),g.lostFocus=!1}),this.inp.keydown(this.hKeydown=function(a){g.key(a)}),this.div.click(function(){g.lostFocus=!1,g.inp.focus()}),a(window).resize(this.hResize=function(a){g.pos(a)}),c&&this.onReady()},ajax:function(){if(this.ajaxOpts&&this.time.getTime()!=this.lastAjax.getTime())try{var b=jQuery.extend({},this.ajaxOpts);if("object"==typeof b.data)b.data[this.inp[0].name||this.inp[0].id]=this.inp.val();else{var c=(this.inp[0].name||this.inp[0].id)+"="+encodeURI(this.inp.val());b.data?b.data+="&"+c:b.data=c}a.ajax(b),this.lastAjax=this.time}catch(d){}},askOffset:function(b){if(this.oDiv)this.cloak.show(),this.oDiv.show();else{this.makeCloak(),this.oDiv=a('<div class="AnyTime-win AnyTime-off-selector ui-widget ui-widget-content ui-corner-all"></div>'),this.div.append(this.oDiv);var c=a('<h5 class="AnyTime-hdr AnyTime-hdr-off-selector ui-widget-header ui-corner-top" />');this.oDiv.append(c),this.oBody=a('<div class="AnyTime-body AnyTime-body-off-selector"></div>'),this.oDiv.append(this.oBody);var d=a('<div class="AnyTime-x-btn ui-state-default">'+this.lX+"</div>");c.append(d),d.click(function(a){g.dismissODiv(a)}),c.append(this.lO);var e=a('<ul class="AnyTime-off-off" />'),f=null;this.oBody.append(e);var h=this.oConv.fmt.indexOf("%@")>=0;if(AnyTime.utcLabel)for(var i=-720;840>=i;i++)if(AnyTime.utcLabel[i]){this.oConv.setUtcFormatOffsetAlleged(i);for(var j=0;j<AnyTime.utcLabel[i].length&&(this.oConv.setUtcFormatOffsetSubIndex(j),f=this.btn(e,this.oConv.format(this.time),this.newOPos,["off-off"],i),f[0].AnyTime_offMin=i,f[0].AnyTime_offSI=j,h);j++);}if(f&&f.addClass("AnyTime-off-off-last-btn"),this.oDiv.outerHeight(!0)>this.div.height()){var k=this.oBody.width();this.oBody.css("height","0"),this.oBody.css({height:String(this.div.height()-(this.oDiv.outerHeight(!0)+this.oBody.outerHeight(!1)))+"px",width:String(k+20)+"px"})}this.oDiv.outerWidth(!0)>this.div.width()&&(this.oBody.css("width","0"),this.oBody.css("width",String(this.div.width()-(this.oDiv.outerWidth(!0)+this.oBody.outerWidth(!1)))+"px"))}this.pos(b),this.updODiv(null);var l=this.oDiv.find(".AnyTime-off-off-btn.AnyTime-cur-btn:first");l.length||(l=this.oDiv.find(".AnyTime-off-off-btn:first")),this.setFocus(l)},askYear:function(b){if(this.yDiv)this.cloak.show(),this.yDiv.show();else{this.makeCloak(),this.yDiv=a('<div class="AnyTime-win AnyTime-yr-selector ui-widget ui-widget-content ui-corner-all"></div>'),this.div.append(this.yDiv);var c=a('<h5 class="AnyTime-hdr AnyTime-hdr-yr-selector ui-widget-header ui-corner-top" />');this.yDiv.append(c);var d=a('<div class="AnyTime-x-btn ui-state-default">'+this.lX+"</div>");c.append(d),d.click(function(a){g.dismissYDiv(a)}),c.append(this.lY);var e=a('<div class="AnyTime-body AnyTime-body-yr-selector" ></div>');for(this.yDiv.append(e),cont=a('<ul class="AnyTime-yr-mil" />'),e.append(cont),this.y0XXX=this.btn(cont,0,this.newYPos,["mil","mil0"],this.lY+" 0000"),i=1;10>i;i++)this.btn(cont,i,this.newYPos,["mil","mil"+i],this.lY+" "+i+"000");for(cont=a('<ul class="AnyTime-yr-cent" />'),e.append(cont),i=0;10>i;i++)this.btn(cont,i,this.newYPos,["cent","cent"+i],this.lY+" "+i+"00");for(cont=a('<ul class="AnyTime-yr-dec" />'),e.append(cont),i=0;10>i;i++)this.btn(cont,i,this.newYPos,["dec","dec"+i],this.lY+" "+i+"0");for(cont=a('<ul class="AnyTime-yr-yr" />'),e.append(cont),i=0;10>i;i++)this.btn(cont,i,this.newYPos,["yr","yr"+i],this.lY+" "+i);this.askEra&&(cont=a('<ul class="AnyTime-yr-era" />'),e.append(cont),this.btn(cont,this.conv.eAbbr[0],function(b){var c=new Date(this.time.getTime()),d=c.getFullYear();d>0&&c.setFullYear(0-d),this.set(c),this.updYDiv(a(b.target))},["era","bce"],this.conv.eAbbr[0]),this.btn(cont,this.conv.eAbbr[1],function(b){var c=new Date(this.time.getTime()),d=c.getFullYear();0>d&&c.setFullYear(0-d),this.set(c),this.updYDiv(a(b.target))},["era","ce"],this.conv.eAbbr[1]))}this.pos(b),this.updYDiv(null),this.setFocus(this.yDiv.find(".AnyTime-yr-btn.AnyTime-cur-btn:first"))},inpBlur:function(a){return this.oDiv&&this.oDiv.is(":visible")?(g.inp.focus(),void 0):(this.lostFocus=!0,setTimeout(function(){g.lostFocus&&(g.div.find(".AnyTime-focus-btn").removeClass("AnyTime-focus-btn ui-state-focus"),g.pop?g.dismiss(a):g.ajax())},334),void 0)},btn:function(b,c,d,e,f){for(var h="ul"==b[0].nodeName.toLowerCase()?"li":"td",i="<"+h+' class="AnyTime-btn',j=0;j<e.length;j++)i+=" AnyTime-"+e[j]+"-btn";var k=a(i+' ui-state-default">'+c+"</"+h+">");return b.append(k),k.AnyTime_title=f,k.click(function(a){g.tempFunc=d,g.tempFunc(a)}),k.dblclick(function(b){var c=a(this);c.is(".AnyTime-off-off-btn")?g.dismissODiv(b):c.is(".AnyTime-mil-btn")||c.is(".AnyTime-cent-btn")||c.is(".AnyTime-dec-btn")||c.is(".AnyTime-yr-btn")||c.is(".AnyTime-era-btn")?g.dismissYDiv(b):g.pop&&g.dismiss(b)}),k},cleanup:function(){this.inp.prop("readonly",this.ro).off("blur",this.hBlur).off("click",this.hClick).off("focus",this.hFocus).off("keydown",this.hKeydown),a(window).off("resize",this.hResize),this.div.remove()},dismiss:function(){this.ajax(),this.yDiv&&this.dismissYDiv(),this.oDiv&&this.dismissODiv(),this.div.hide(),this.lostFocus=!0},dismissODiv:function(){this.oDiv.hide(),this.cloak.hide(),this.setFocus(this.oCur)},dismissYDiv:function(){this.yDiv.hide(),this.cloak.hide(),this.setFocus(this.yCur)},setFocus:function(a){if(a.hasClass("AnyTime-focus-btn")||(this.div.find(".AnyTime-focus-btn").removeClass("AnyTime-focus-btn ui-state-focus"),this.fBtn=a,a.removeClass("ui-state-default ui-state-active"),a.addClass("AnyTime-focus-btn ui-state-default ui-state-active ui-state-focus")),a.hasClass("AnyTime-off-off-btn")){var b=this.oBody.offset().top,c=a.offset().top,d=a.outerHeight(!0);b>c-d?this.oBody.scrollTop(c+this.oBody.scrollTop()-(this.oBody.innerHeight()+b)+2*d):c+d>b+this.oBody.innerHeight()&&this.oBody.scrollTop(c+this.oBody.scrollTop()-(b+d))}},key:function(a){var c,d=null,e=this,f=(this.div.find(".AnyTime-focus-btn"),a.keyCode||a.which);if(this.denyTab=!0,16==f);else if(10==f||13==f||27==f)this.oDiv&&this.oDiv.is(":visible")?this.dismissODiv(a):this.yDiv&&this.yDiv.is(":visible")?this.dismissYDiv(a):this.pop&&this.dismiss(a);else if(33==f||9==f&&a.shiftKey){if(this.fBtn.hasClass("AnyTime-off-off-btn"))9==f&&this.dismissODiv(a);else if(this.fBtn.hasClass("AnyTime-mil-btn"))9==f&&this.dismissYDiv(a);else if(this.fBtn.hasClass("AnyTime-cent-btn"))this.yDiv.find(".AnyTime-mil-btn.AnyTime-cur-btn").triggerHandler("click");else if(this.fBtn.hasClass("AnyTime-dec-btn"))this.yDiv.find(".AnyTime-cent-btn.AnyTime-cur-btn").triggerHandler("click");else if(this.fBtn.hasClass("AnyTime-yr-btn"))this.yDiv.find(".AnyTime-dec-btn.AnyTime-cur-btn").triggerHandler("click");else if(this.fBtn.hasClass("AnyTime-era-btn"))this.yDiv.find(".AnyTime-yr-btn.AnyTime-cur-btn").triggerHandler("click");else if(this.fBtn.parents(".AnyTime-yrs").length){if(9==f)return this.denyTab=!1,void 0}else if(this.fBtn.hasClass("AnyTime-mon-btn")){if(this.dY)this.yCur.triggerHandler("click");else if(9==f)return this.denyTab=!1,void 0}else if(this.fBtn.hasClass("AnyTime-dom-btn")){if(9==f&&a.shiftKey)return this.denyTab=!1,void 0;d=new Date(this.time.getTime()),a.shiftKey?d.setFullYear(d.getFullYear()-1):(c=d.getMonth()-1,d.getDate()>b[c]&&d.setDate(b[c]),d.setMonth(c)),this.keyDateChange(d)}else if(this.fBtn.hasClass("AnyTime-hr-btn")){if(d=this.dDoM||this.dMo)d.AnyTime_clickCurrent();else if(this.dY)this.yCur.triggerHandler("click");else if(9==f)return this.denyTab=!1,void 0}else if(this.fBtn.hasClass("AnyTime-min-ten-btn")){if(d=this.dH||this.dDoM||this.dMo)d.AnyTime_clickCurrent();else if(this.dY)this.yCur.triggerHandler("click");else if(9==f)return this.denyTab=!1,void 0}else if(this.fBtn.hasClass("AnyTime-min-one-btn"))this.dM.AnyTime_clickCurrent();else if(this.fBtn.hasClass("AnyTime-sec-ten-btn")){if(d=this.dM?this.dM.find(".AnyTime-mins-ones"):this.dH||this.dDoM||this.dMo)d.AnyTime_clickCurrent();else if(this.dY)this.yCur.triggerHandler("click");else if(9==f)return this.denyTab=!1,void 0}else if(this.fBtn.hasClass("AnyTime-sec-one-btn"))this.dS.AnyTime_clickCurrent();else if(this.fBtn.hasClass("AnyTime-off-btn"))if(d=this.dS?this.dS.find(".AnyTime-secs-ones"):this.dM?this.dM.find(".AnyTime-mins-ones"):this.dH||this.dDoM||this.dMo)d.AnyTime_clickCurrent();else if(this.dY)this.yCur.triggerHandler("click");else if(9==f)return this.denyTab=!1,void 0}else if(34==f||9==f){if(this.fBtn.hasClass("AnyTime-mil-btn"))this.yDiv.find(".AnyTime-cent-btn.AnyTime-cur-btn").triggerHandler("click");else if(this.fBtn.hasClass("AnyTime-cent-btn"))this.yDiv.find(".AnyTime-dec-btn.AnyTime-cur-btn").triggerHandler("click");else if(this.fBtn.hasClass("AnyTime-dec-btn"))this.yDiv.find(".AnyTime-yr-btn.AnyTime-cur-btn").triggerHandler("click");else if(this.fBtn.hasClass("AnyTime-yr-btn"))d=this.yDiv.find(".AnyTime-era-btn.AnyTime-cur-btn"),d.length?d.triggerHandler("click"):9==f&&this.dismissYDiv(a);else if(this.fBtn.hasClass("AnyTime-era-btn"))9==f&&this.dismissYDiv(a);else if(this.fBtn.hasClass("AnyTime-off-off-btn"))9==f&&this.dismissODiv(a);else if(this.fBtn.parents(".AnyTime-yrs").length){if(d=this.dDoM||this.dMo||this.dH||this.dM||this.dS||this.dO)d.AnyTime_clickCurrent();else if(9==f)return this.denyTab=!1,void 0}else if(this.fBtn.hasClass("AnyTime-mon-btn")){if(d=this.dDoM||this.dH||this.dM||this.dS||this.dO)d.AnyTime_clickCurrent();else if(9==f)return this.denyTab=!1,void 0}else if(this.fBtn.hasClass("AnyTime-dom-btn"))if(9==f){if(d=this.dH||this.dM||this.dS||this.dO,!d)return this.denyTab=!1,void 0;d.AnyTime_clickCurrent()}else d=new Date(this.time.getTime()),a.shiftKey?d.setFullYear(d.getFullYear()+1):(c=d.getMonth()+1,d.getDate()>b[c]&&d.setDate(b[c]),d.setMonth(c)),this.keyDateChange(d);else if(this.fBtn.hasClass("AnyTime-hr-btn")){if(d=this.dM||this.dS||this.dO)d.AnyTime_clickCurrent();else if(9==f)return this.denyTab=!1,void 0}else if(this.fBtn.hasClass("AnyTime-min-ten-btn"))this.dM.find(".AnyTime-mins-ones .AnyTime-cur-btn").triggerHandler("click");else if(this.fBtn.hasClass("AnyTime-min-one-btn")){if(d=this.dS||this.dO)d.AnyTime_clickCurrent();else if(9==f)return this.denyTab=!1,void 0}else if(this.fBtn.hasClass("AnyTime-sec-ten-btn"))this.dS.find(".AnyTime-secs-ones .AnyTime-cur-btn").triggerHandler("click");else if(this.fBtn.hasClass("AnyTime-sec-one-btn")){if(this.dO)this.dO.AnyTime_clickCurrent();else if(9==f)return this.denyTab=!1,void 0}else if(this.fBtn.hasClass("AnyTime-off-btn")&&9==f)return this.denyTab=!1,void 0}else if(35==f)this.fBtn.hasClass("AnyTime-mil-btn")||this.fBtn.hasClass("AnyTime-cent-btn")||this.fBtn.hasClass("AnyTime-dec-btn")||this.fBtn.hasClass("AnyTime-yr-btn")||this.fBtn.hasClass("AnyTime-era-btn")?(d=this.yDiv.find(".AnyTime-ce-btn"),d.length||(d=this.yDiv.find(".AnyTime-yr9-btn")),d.triggerHandler("click")):this.fBtn.hasClass("AnyTime-dom-btn")?(d=new Date(this.time.getTime()),d.setDate(1),d.setMonth(d.getMonth()+1),d.setDate(d.getDate()-1),a.ctrlKey&&d.setMonth(11),this.keyDateChange(d)):this.dS?this.dS.find(".AnyTime-sec9-btn").triggerHandler("click"):this.dM?this.dM.find(".AnyTime-min9-btn").triggerHandler("click"):this.dH?this.dH.find(".AnyTime-hr23-btn").triggerHandler("click"):this.dDoM?this.dDoM.find(".AnyTime-dom-btn-filled:last").triggerHandler("click"):this.dMo?this.dMo.find(".AnyTime-mon12-btn").triggerHandler("click"):this.dY&&this.yAhead.triggerHandler("click");else if(36==f)this.fBtn.hasClass("AnyTime-mil-btn")||this.fBtn.hasClass("AnyTime-cent-btn")||this.fBtn.hasClass("AnyTime-dec-btn")||this.fBtn.hasClass("AnyTime-yr-btn")||this.fBtn.hasClass("AnyTime-era-btn")?this.yDiv.find(".AnyTime-mil0-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-dom-btn")?(d=new Date(this.time.getTime()),d.setDate(1),a.ctrlKey&&d.setMonth(0),this.keyDateChange(d)):this.dY?this.yCur.triggerHandler("click"):this.dMo?this.dMo.find(".AnyTime-mon1-btn").triggerHandler("click"):this.dDoM?this.dDoM.find(".AnyTime-dom-btn-filled:first").triggerHandler("click"):this.dH?this.dH.find(".AnyTime-hr0-btn").triggerHandler("click"):this.dM?this.dM.find(".AnyTime-min00-btn").triggerHandler("click"):this.dS&&this.dS.find(".AnyTime-sec00-btn").triggerHandler("click");else if(37==f)this.fBtn.hasClass("AnyTime-dom-btn")?(d=new Date(this.time.getTime()),d.setDate(d.getDate()-1),this.keyDateChange(d)):this.keyBack();else if(38==f)this.fBtn.hasClass("AnyTime-dom-btn")?(d=new Date(this.time.getTime()),d.setDate(d.getDate()-7),this.keyDateChange(d)):this.keyBack();else if(39==f)this.fBtn.hasClass("AnyTime-dom-btn")?(d=new Date(this.time.getTime()),d.setDate(d.getDate()+1),this.keyDateChange(d)):this.keyAhead();else if(40==f)this.fBtn.hasClass("AnyTime-dom-btn")?(d=new Date(this.time.getTime()),d.setDate(d.getDate()+7),this.keyDateChange(d)):this.keyAhead();else{if((86==f||118==f)&&a.ctrlKey)return this.updVal(""),setTimeout(function(){e.showPkr(null)},100),void 0;this.showPkr(null)}a.preventDefault()},keyAhead:function(){this.fBtn.hasClass("AnyTime-mil9-btn")?this.yDiv.find(".AnyTime-cent0-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-cent9-btn")?this.yDiv.find(".AnyTime-dec0-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-dec9-btn")?this.yDiv.find(".AnyTime-yr0-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-yr9-btn")?this.yDiv.find(".AnyTime-bce-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-sec9-btn")||(this.fBtn.hasClass("AnyTime-sec50-btn")?this.dS.find(".AnyTime-sec0-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-min9-btn")?this.dS&&this.dS.find(".AnyTime-sec00-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-min50-btn")?this.dM.find(".AnyTime-min0-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-hr23-btn")?this.dM?this.dM.find(".AnyTime-min00-btn").triggerHandler("click"):this.dS&&this.dS.find(".AnyTime-sec00-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-hr11-btn")?this.dH.find(".AnyTime-hr12-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-mon12-btn")?this.dDoM?this.dDoM.AnyTime_clickCurrent():this.dH?this.dH.find(".AnyTime-hr0-btn").triggerHandler("click"):this.dM?this.dM.find(".AnyTime-min00-btn").triggerHandler("click"):this.dS&&this.dS.find(".AnyTime-sec00-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-yrs-ahead-btn")?this.dMo?this.dMo.find(".AnyTime-mon1-btn").triggerHandler("click"):this.dH?this.dH.find(".AnyTime-hr0-btn").triggerHandler("click"):this.dM?this.dM.find(".AnyTime-min00-btn").triggerHandler("click"):this.dS&&this.dS.find(".AnyTime-sec00-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-yr-cur-btn")?this.yNext.triggerHandler("click"):this.fBtn.next().triggerHandler("click"))
},keyBack:function(){this.fBtn.hasClass("AnyTime-cent0-btn")?this.yDiv.find(".AnyTime-mil9-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-dec0-btn")?this.yDiv.find(".AnyTime-cent9-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-yr0-btn")?this.yDiv.find(".AnyTime-dec9-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-bce-btn")?this.yDiv.find(".AnyTime-yr9-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-yr-cur-btn")?this.yPrior.triggerHandler("click"):this.fBtn.hasClass("AnyTime-mon1-btn")?this.dY&&this.yCur.triggerHandler("click"):this.fBtn.hasClass("AnyTime-hr0-btn")?this.dDoM?this.dDoM.AnyTime_clickCurrent():this.dMo?this.dMo.find(".AnyTime-mon12-btn").triggerHandler("click"):this.dY&&this.yNext.triggerHandler("click"):this.fBtn.hasClass("AnyTime-hr12-btn")?this.dH.find(".AnyTime-hr11-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-min00-btn")?this.dH?this.dH.find(".AnyTime-hr23-btn").triggerHandler("click"):this.dDoM?this.dDoM.AnyTime_clickCurrent():this.dMo?this.dMo.find(".AnyTime-mon12-btn").triggerHandler("click"):this.dY&&this.yNext.triggerHandler("click"):this.fBtn.hasClass("AnyTime-min0-btn")?this.dM.find(".AnyTime-min50-btn").triggerHandler("click"):this.fBtn.hasClass("AnyTime-sec00-btn")?this.dM?this.dM.find(".AnyTime-min9-btn").triggerHandler("click"):this.dH?this.dH.find(".AnyTime-hr23-btn").triggerHandler("click"):this.dDoM?this.dDoM.AnyTime_clickCurrent():this.dMo?this.dMo.find(".AnyTime-mon12-btn").triggerHandler("click"):this.dY&&this.yNext.triggerHandler("click"):this.fBtn.hasClass("AnyTime-sec0-btn")?this.dS.find(".AnyTime-sec50-btn").triggerHandler("click"):this.fBtn.prev().triggerHandler("click")},keyDateChange:function(a){this.fBtn.hasClass("AnyTime-dom-btn")&&(this.set(a),this.upd(null),this.setFocus(this.dDoM.find(".AnyTime-cur-btn")))},makeCloak:function(){this.cloak?this.cloak.show():(this.cloak=a('<div class="AnyTime-cloak"></div>'),this.div.append(this.cloak),this.cloak.click(function(a){g.oDiv&&g.oDiv.is(":visible")?g.dismissODiv(a):g.dismissYDiv(a)}))},makeDate:function(a){if("number"==typeof a?a=new Date(a):"string"==typeof a&&(a=this.conv.parse(a)),"getTime"in a)return a;throw new Exception("cannot make a Date from "+a)},newHour:function(b){var c,d,e=a(b.target);if(!e.hasClass("AnyTime-out-btn")){if(this.twelveHr){var f=e.text();d=f.indexOf("a"),0>d?(d=Number(f.substr(0,f.indexOf("p"))),c=12==d?12:d+12):(d=Number(f.substr(0,d)),c=12==d?0:d)}else c=Number(e.text());d=new Date(this.time.getTime()),d.setHours(c),this.set(d),this.upd(e)}},newOffset:function(a){a.target==this.oSel[0]?this.askOffset(a):this.upd(this.oCur)},newOPos:function(b){var c=a(b.target);this.offMin=c[0].AnyTime_offMin,this.offSI=c[0].AnyTime_offSI;var d=new Date(this.time.getTime());this.set(d),this.updODiv(c)},newYear:function(b){var c=a(b.target);if(!c.hasClass("AnyTime-out-btn")){var d=c.text();if("<"==d||"&lt;"==d)this.askYear(b);else if(">"==d||"&gt;"==d)this.askYear(b);else{var e=new Date(this.time.getTime());e.setFullYear(Number(d)),this.set(e),this.upd(this.yCur)}}},newYPos:function(b){var c=a(b.target);if(!c.hasClass("AnyTime-out-btn")){var d=1,e=this.time.getFullYear();0>e&&(d=-1,e=0-e),e=AnyTime.pad(e,4),e=c.hasClass("AnyTime-mil-btn")?c.html()+e.substring(1,4):c.hasClass("AnyTime-cent-btn")?e.substring(0,1)+c.html()+e.substring(2,4):c.hasClass("AnyTime-dec-btn")?e.substring(0,2)+c.html()+e.substring(3,4):e.substring(0,3)+c.html(),"0000"==e&&(e=1);var f=new Date(this.time.getTime());f.setFullYear(d*e),this.set(f),this.updYDiv(c)}},onReady:function(){this.lostFocus=!0,this.pop?this.div.parent()!=document.body&&this.div.appendTo(document.body):this.upd(null)},pos:function(){if(this.pop){var b=this.inp.offset(),c=a(document.body).outerWidth(!0),d=this.div.outerWidth(!0),e=b.left;e+d>c-20&&(e=c-(d+20));var f=b.top-this.div.outerHeight(!0);0>f&&(f=b.top+this.inp.outerHeight(!0)),this.div.css({top:String(f)+"px",left:String(0>e?0:e)+"px"})}var g=this.div.offset();if(this.oDiv&&this.oDiv.is(":visible")){var h=this.oLab.offset();"absolute"==this.div.css("position")&&(h.top-=g.top,h.left=h.left-g.left,g={top:0,left:0});var i=this.oDiv.outerWidth(!0),j=this.div.outerWidth(!0);h.left+i>g.left+j&&(h.left=g.left+j-i,h.left<2&&(h.left=2));var k=this.oDiv.outerHeight(!0),l=this.div.outerHeight(!0);h.top+=this.oLab.outerHeight(!0),h.top+k>g.top+l&&(h.top=h.top-k),h.top<g.top&&(h.top=g.top),this.oDiv.css({top:h.top+"px",left:h.left+"px"})}else if(this.yDiv&&this.yDiv.is(":visible")){var m=this.yLab.offset();"absolute"==this.div.css("position")&&(m.top-=g.top,m.left=m.left-g.left,g={top:0,left:0}),m.left+=(this.yLab.outerWidth(!0)-this.yDiv.outerWidth(!0))/2,this.yDiv.css({top:m.top+"px",left:m.left+"px"})}this.cloak&&this.cloak.css({top:g.top+"px",left:g.left+"px",height:String(this.div.outerHeight(!0)-2)+"px",width:String(this.div.outerWidth(!0)-2)+"px"})},set:function(a){var b=a.getTime();this.time=this.earliest&&b<this.earliest.getTime()?new Date(this.earliest.getTime()):this.latest&&b>this.latest.getTime()?new Date(this.latest.getTime()):a},setCurrent:function(a){this.set(this.makeDate(a)),this.upd(null)},setEarliest:function(a){this.earliest=this.makeDate(a),this.set(this.time),this.upd(null)},setLatest:function(a){this.latest=this.makeDate(a),this.set(this.time),this.upd(null)},showPkr:function(a){try{this.time=this.conv.parse(this.inp.val()),this.offMin=this.conv.getUtcParseOffsetCaptured(),this.offSI=this.conv.getUtcParseOffsetSubIndex()}catch(b){this.time=new Date}this.set(this.time),this.upd(null),fBtn=null;var c=".AnyTime-cur-btn:first";this.dDoM?fBtn=this.dDoM.find(c):this.yCur?fBtn=this.yCur:this.dMo?fBtn=this.dMo.find(c):this.dH?fBtn=this.dH.find(c):this.dM?fBtn=this.dM.find(c):this.dS&&(fBtn=this.dS.find(c)),this.setFocus(fBtn),this.pos(a)},upd:function(b){var c=new Date(this.time.getTime());c.setMonth(0,1),c.setHours(0,0,0,0);var d=new Date(this.time.getTime());d.setMonth(11,31),d.setHours(23,59,59,999);var e=this.earliest&&this.earliest.getTime(),f=this.latest&&this.latest.getTime(),h=this.time.getFullYear();this.earliest&&this.yPast&&(d.setFullYear(h-2),d.getTime()<this.earliestTime?this.yPast.addClass("AnyTime-out-btn ui-state-disabled"):this.yPast.removeClass("AnyTime-out-btn ui-state-disabled")),this.yPrior&&(this.yPrior.text(AnyTime.pad(1==h?-1:h-1,4)),this.earliest&&(d.setFullYear(h-1),d.getTime()<this.earliestTime?this.yPrior.addClass("AnyTime-out-btn ui-state-disabled"):this.yPrior.removeClass("AnyTime-out-btn ui-state-disabled"))),this.yCur&&this.yCur.text(AnyTime.pad(h,4)),this.yNext&&(this.yNext.text(AnyTime.pad(-1==h?1:h+1,4)),this.latest&&(c.setFullYear(h+1),c.getTime()>this.latestTime?this.yNext.addClass("AnyTime-out-btn ui-state-disabled"):this.yNext.removeClass("AnyTime-out-btn ui-state-disabled"))),this.latest&&this.yAhead&&(c.setFullYear(h+2),c.getTime()>this.latestTime?this.yAhead.addClass("AnyTime-out-btn ui-state-disabled"):this.yAhead.removeClass("AnyTime-out-btn ui-state-disabled")),c.setFullYear(this.time.getFullYear()),d.setFullYear(this.time.getFullYear());var i=0;h=this.time.getMonth(),a("#"+this.id+" .AnyTime-mon-btn").each(function(){c.setMonth(i),d.setDate(1),d.setMonth(i+1),d.setDate(0),a(this).AnyTime_current(i==h,(!g.earliest||d.getTime()>=e)&&(!g.latest||c.getTime()<=f)),i++}),c.setFullYear(this.time.getFullYear()),d.setFullYear(this.time.getFullYear()),c.setMonth(this.time.getMonth()),d.setMonth(this.time.getMonth(),1),h=this.time.getDate();var j=this.time.getMonth(),k=-1,l=c.getDay();this.fDOW>l&&(l+=7);var m=0,n=0;a("#"+this.id+" .AnyTime-wk").each(function(){n=g.fDOW,a(this).children().each(function(){if(n-g.fDOW<7){var b=a(this);0==m&&l>n||c.getMonth()!=j?(b.html("&#160;"),b.removeClass("AnyTime-dom-btn-filled AnyTime-cur-btn ui-state-default ui-state-active"),b.addClass("AnyTime-dom-btn-empty"),m?(1==c.getDate()&&0!=n?b.addClass("AnyTime-dom-btn-empty-after-filled"):b.removeClass("AnyTime-dom-btn-empty-after-filled"),c.getDate()<=7?b.addClass("AnyTime-dom-btn-empty-below-filled"):b.removeClass("AnyTime-dom-btn-empty-below-filled"),c.setDate(c.getDate()+1),d.setDate(d.getDate()+1)):(b.addClass("AnyTime-dom-btn-empty-above-filled"),n==l-1?b.addClass("AnyTime-dom-btn-empty-before-filled"):b.removeClass("AnyTime-dom-btn-empty-before-filled")),b.addClass("ui-state-default ui-state-disabled")):((i=c.getDate())==k&&c.setDate(++i),k=i,b.text(i),b.removeClass("AnyTime-dom-btn-empty AnyTime-dom-btn-empty-above-filled AnyTime-dom-btn-empty-before-filled AnyTime-dom-btn-empty-after-filled AnyTime-dom-btn-empty-below-filled ui-state-default ui-state-disabled"),b.addClass("AnyTime-dom-btn-filled ui-state-default"),b.AnyTime_current(i==h,(!g.earliest||d.getTime()>=e)&&(!g.latest||c.getTime()<=f)),c.setDate(i+1),d.setDate(i+1))}n++}),m++}),c.setFullYear(this.time.getFullYear()),d.setFullYear(this.time.getFullYear()),c.setMonth(this.time.getMonth(),this.time.getDate()),d.setMonth(this.time.getMonth(),this.time.getDate());var o=!this.twelveHr,p=this.time.getHours();a("#"+this.id+" .AnyTime-hr-btn").each(function(){var b,h=this.innerHTML;o?b=Number(h):(b=Number(h.substring(0,h.length-2)),"a"==h.charAt(h.length-2)?12==b&&(b=0):12>b&&(b+=12)),c.setHours(b),d.setHours(b),a(this).AnyTime_current(p==b,(!g.earliest||d.getTime()>=e)&&(!g.latest||c.getTime()<=f)),23>b&&c.setHours(c.getHours()+1)}),c.setHours(this.time.getHours()),d.setHours(this.time.getHours(),9);var q=this.time.getMinutes(),r=String(Math.floor(q/10)),s=String(q%10);if(a("#"+this.id+" .AnyTime-min-ten-btn:not(.AnyTime-min-ten-btn-empty)").each(function(){a(this).AnyTime_current(this.innerHTML==r,(!g.earliest||d.getTime()>=e)&&(!g.latest||c.getTime()<=f)),c.getMinutes()<50&&(c.setMinutes(c.getMinutes()+10),d.setMinutes(d.getMinutes()+10))}),c.setMinutes(10*Math.floor(this.time.getMinutes()/10)),d.setMinutes(10*Math.floor(this.time.getMinutes()/10)),a("#"+this.id+" .AnyTime-min-one-btn:not(.AnyTime-min-one-btn-empty)").each(function(){a(this).AnyTime_current(this.innerHTML==s,(!g.earliest||d.getTime()>=e)&&(!g.latest||c.getTime()<=f)),c.setMinutes(c.getMinutes()+1),d.setMinutes(d.getMinutes()+1)}),c.setMinutes(this.time.getMinutes()),d.setMinutes(this.time.getMinutes(),9),q=this.time.getSeconds(),r=String(Math.floor(q/10)),s=String(q%10),a("#"+this.id+" .AnyTime-sec-ten-btn:not(.AnyTime-sec-ten-btn-empty)").each(function(){a(this).AnyTime_current(this.innerHTML==r,(!g.earliest||d.getTime()>=e)&&(!g.latest||c.getTime()<=f)),c.getSeconds()<50&&(c.setSeconds(c.getSeconds()+10),d.setSeconds(d.getSeconds()+10))}),c.setSeconds(10*Math.floor(this.time.getSeconds()/10)),d.setSeconds(10*Math.floor(this.time.getSeconds()/10)),a("#"+this.id+" .AnyTime-sec-one-btn:not(.AnyTime-sec-one-btn-empty)").each(function(){a(this).AnyTime_current(this.innerHTML==s,(!g.earliest||d.getTime()>=e)&&(!g.latest||c.getTime()<=f)),c.setSeconds(c.getSeconds()+1),d.setSeconds(d.getSeconds()+1)}),this.oConv){this.oConv.setUtcFormatOffsetAlleged(this.offMin),this.oConv.setUtcFormatOffsetSubIndex(this.offSI);var t=this.oConv.format(this.time);this.oCur.html(t)}if(b&&this.setFocus(b),this.conv.setUtcFormatOffsetAlleged(this.offMin),this.conv.setUtcFormatOffsetSubIndex(this.offSI),this.updVal(this.conv.format(this.time)),this.div.show(),this.dO){this.oCur.css("width","0");var u=this.dT.width()-this.oMinW;40>u&&(u=40),this.oCur.css("width",String(u)+"px")}this.pop||this.ajax()},updODiv:function(b){var c=!1,d=null;this.oDiv.find(".AnyTime-off-off-btn").each(function(){this.AnyTime_offMin==g.offMin?this.AnyTime_offSI==g.offSI?a(this).AnyTime_current(c=!0,!0):(a(this).AnyTime_current(!1,!0),null==d&&(d=a(this))):a(this).AnyTime_current(!1,!0)}),c||null==d||d.AnyTime_current(!0,!0),this.conv.setUtcFormatOffsetAlleged(this.offMin),this.conv.setUtcFormatOffsetSubIndex(this.offSI),this.updVal(this.conv.format(this.time)),this.upd(b)},updYDiv:function(b){var c,d,e=1,f=this.time.getFullYear();0>f&&(e=-1,f=0-f),f=AnyTime.pad(f,4);var h=g.earliest&&g.earliest.getFullYear(),i=g.latest&&g.latest.getFullYear();c=0,this.yDiv.find(".AnyTime-mil-btn").each(function(){d=(!g.earliest||e*(c+(0>e?0:999))>=h)&&(!g.latest||i>=e*(c+(e>0?0:999))),a(this).AnyTime_current(this.innerHTML==f.substring(0,1),d),c+=1e3}),c=1e3*Math.floor(f/1e3),this.yDiv.find(".AnyTime-cent-btn").each(function(){d=(!g.earliest||e*(c+(0>e?0:99))>=h)&&(!g.latest||i>=e*(c+(e>0?0:99))),a(this).AnyTime_current(this.innerHTML==f.substring(1,2),d),c+=100}),c=100*Math.floor(f/100),this.yDiv.find(".AnyTime-dec-btn").each(function(){d=(!g.earliest||e*(c+(0>e?0:9))>=h)&&(!g.latest||i>=e*(c+(e>0?0:9))),a(this).AnyTime_current(this.innerHTML==f.substring(2,3),d),c+=10}),c=10*Math.floor(f/10),this.yDiv.find(".AnyTime-yr-btn").each(function(){d=(!g.earliest||e*c>=h)&&(!g.latest||i>=e*c),a(this).AnyTime_current(this.innerHTML==f.substring(3),d),c+=1}),this.yDiv.find(".AnyTime-bce-btn").each(function(){a(this).AnyTime_current(0>e,!g.earliest||g.earliest.getFullYear()<0)}),this.yDiv.find(".AnyTime-ce-btn").each(function(){a(this).AnyTime_current(e>0,!g.latest||g.latest.getFullYear()>0)}),this.conv.setUtcFormatOffsetAlleged(this.offMin),this.conv.setUtcFormatOffsetSubIndex(this.offSI),this.updVal(this.conv.format(this.time)),this.upd(b)},updVal:function(a){this.inp.val()!=a&&(this.inp.val(a),this.inp.change())}},d[e].initialize(e)},AnyTime.setCurrent=function(a,b){d[a].setCurrent(b)},AnyTime.setEarliest=function(a,b){d[a].setEarliest(b)},AnyTime.setLatest=function(a,b){d[a].setLatest(b)}}(jQuery);
/*!
 * pickadate.js v3.5.6, 2015/04/20
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */
!function(a){"function"==typeof define&&define.amd?define("picker",["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):this.Picker=a(jQuery)}(function(a){function b(f,g,i,m){function n(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",B.component.nodes(w.open),y.box),y.wrap),y.frame),y.holder,'tabindex="-1"')}function o(){z.data(g,B).addClass(y.input).val(z.data("value")?B.get("select",x.format):f.value),x.editable||z.on("focus."+w.id+" click."+w.id,function(a){a.preventDefault(),B.open()}).on("keydown."+w.id,u),e(f,{haspopup:!0,expanded:!1,readonly:!1,owns:f.id+"_root"})}function p(){e(B.$root[0],"hidden",!0)}function q(){B.$holder.on({keydown:u,"focus.toOpen":t,blur:function(){z.removeClass(y.target)},focusin:function(a){B.$root.removeClass(y.focused),a.stopPropagation()},"mousedown click":function(b){var c=b.target;c!=B.$holder[0]&&(b.stopPropagation(),"mousedown"!=b.type||a(c).is("input, select, textarea, button, option")||(b.preventDefault(),B.$holder[0].focus()))}}).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var b=a(this),c=b.data(),d=b.hasClass(y.navDisabled)||b.hasClass(y.disabled),e=h();e=e&&(e.type||e.href),(d||e&&!a.contains(B.$root[0],e))&&B.$holder[0].focus(),!d&&c.nav?B.set("highlight",B.component.item.highlight,{nav:c.nav}):!d&&"pick"in c?(B.set("select",c.pick),x.closeOnSelect&&B.close(!0)):c.clear?(B.clear(),x.closeOnClear&&B.close(!0)):c.close&&B.close(!0)})}function r(){var b;x.hiddenName===!0?(b=f.name,f.name=""):(b=["string"==typeof x.hiddenPrefix?x.hiddenPrefix:"","string"==typeof x.hiddenSuffix?x.hiddenSuffix:"_submit"],b=b[0]+f.name+b[1]),B._hidden=a('<input type=hidden name="'+b+'"'+(z.data("value")||f.value?' value="'+B.get("select",x.formatSubmit)+'"':"")+">")[0],z.on("change."+w.id,function(){B._hidden.value=f.value?B.get("select",x.formatSubmit):""})}function s(){v&&l?B.$holder.find("."+y.frame).one("transitionend",function(){B.$holder[0].focus()}):B.$holder[0].focus()}function t(a){a.stopPropagation(),z.addClass(y.target),B.$root.addClass(y.focused),B.open()}function u(a){var b=a.keyCode,c=/^(8|46)$/.test(b);return 27==b?(B.close(!0),!1):void((32==b||c||!w.open&&B.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?B.clear().close():B.open()))}if(!f)return b;var v=!1,w={id:f.id||"P"+Math.abs(~~(Math.random()*new Date))},x=i?a.extend(!0,{},i.defaults,m):m||{},y=a.extend({},b.klasses(),x.klass),z=a(f),A=function(){return this.start()},B=A.prototype={constructor:A,$node:z,start:function(){return w&&w.start?B:(w.methods={},w.start=!0,w.open=!1,w.type=f.type,f.autofocus=f==h(),f.readOnly=!x.editable,f.id=f.id||w.id,"text"!=f.type&&(f.type="text"),B.component=new i(B,x),B.$root=a('<div class="'+y.picker+'" id="'+f.id+'_root" />'),p(),B.$holder=a(n()).appendTo(B.$root),q(),x.formatSubmit&&r(),o(),x.containerHidden?a(x.containerHidden).append(B._hidden):z.after(B._hidden),x.container?a(x.container).append(B.$root):z.after(B.$root),B.on({start:B.component.onStart,render:B.component.onRender,stop:B.component.onStop,open:B.component.onOpen,close:B.component.onClose,set:B.component.onSet}).on({start:x.onStart,render:x.onRender,stop:x.onStop,open:x.onOpen,close:x.onClose,set:x.onSet}),v=c(B.$holder[0]),f.autofocus&&B.open(),B.trigger("start").trigger("render"))},render:function(b){return b?(B.$holder=a(n()),q(),B.$root.html(B.$holder)):B.$root.find("."+y.box).html(B.component.nodes(w.open)),B.trigger("render")},stop:function(){return w.start?(B.close(),B._hidden&&B._hidden.parentNode.removeChild(B._hidden),B.$root.remove(),z.removeClass(y.input).removeData(g),setTimeout(function(){z.off("."+w.id)},0),f.type=w.type,f.readOnly=!1,B.trigger("stop"),w.methods={},w.start=!1,B):B},open:function(c){return w.open?B:(z.addClass(y.active),e(f,"expanded",!0),setTimeout(function(){B.$root.addClass(y.opened),e(B.$root[0],"hidden",!1)},0),c!==!1&&(w.open=!0,v&&k.css("overflow","hidden").css("padding-right","+="+d()),s(),j.on("click."+w.id+" focusin."+w.id,function(a){var b=a.target;b!=f&&b!=document&&3!=a.which&&B.close(b===B.$holder[0])}).on("keydown."+w.id,function(c){var d=c.keyCode,e=B.component.key[d],f=c.target;27==d?B.close(!0):f!=B.$holder[0]||!e&&13!=d?a.contains(B.$root[0],f)&&13==d&&(c.preventDefault(),f.click()):(c.preventDefault(),e?b._.trigger(B.component.key.go,B,[b._.trigger(e)]):B.$root.find("."+y.highlighted).hasClass(y.disabled)||(B.set("select",B.component.item.highlight),x.closeOnSelect&&B.close(!0)))})),B.trigger("open"))},close:function(a){return a&&(x.editable?f.focus():(B.$holder.off("focus.toOpen").focus(),setTimeout(function(){B.$holder.on("focus.toOpen",t)},0))),z.removeClass(y.active),e(f,"expanded",!1),setTimeout(function(){B.$root.removeClass(y.opened+" "+y.focused),e(B.$root[0],"hidden",!0)},0),w.open?(w.open=!1,v&&k.css("overflow","").css("padding-right","-="+d()),j.off("."+w.id),B.trigger("close")):B},clear:function(a){return B.set("clear",null,a)},set:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(d=g&&a.isPlainObject(c)?c:d||{},b){g||(h[b]=c);for(e in h)f=h[e],e in B.component.item&&(void 0===f&&(f=null),B.component.set(e,f,d)),("select"==e||"clear"==e)&&z.val("clear"==e?"":B.get(e,x.format)).trigger("change");B.render()}return d.muted?B:B.trigger("set",h)},get:function(a,c){if(a=a||"value",null!=w[a])return w[a];if("valueSubmit"==a){if(B._hidden)return B._hidden.value;a="value"}if("value"==a)return f.value;if(a in B.component.item){if("string"==typeof c){var d=B.component.get(a);return d?b._.trigger(B.component.formats.toString,B.component,[c,d]):""}return B.component.get(a)}},on:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(b){g||(h[b]=c);for(e in h)f=h[e],d&&(e="_"+e),w.methods[e]=w.methods[e]||[],w.methods[e].push(f)}return B},off:function(){var a,b,c=arguments;for(a=0,namesCount=c.length;a<namesCount;a+=1)b=c[a],b in w.methods&&delete w.methods[b];return B},trigger:function(a,c){var d=function(a){var d=w.methods[a];d&&d.map(function(a){b._.trigger(a,B,[c])})};return d("_"+a),d(a),B}};return new A}function c(a){var b,c="position";return a.currentStyle?b=a.currentStyle[c]:window.getComputedStyle&&(b=getComputedStyle(a)[c]),"fixed"==b}function d(){if(k.height()<=i.height())return 0;var b=a('<div style="visibility:hidden;width:100px" />').appendTo("body"),c=b[0].offsetWidth;b.css("overflow","scroll");var d=a('<div style="width:100%" />').appendTo(b),e=d[0].offsetWidth;return b.remove(),c-e}function e(b,c,d){if(a.isPlainObject(c))for(var e in c)f(b,e,c[e]);else f(b,c,d)}function f(a,b,c){a.setAttribute(("role"==b?"":"aria-")+b,c)}function g(b,c){a.isPlainObject(b)||(b={attribute:c}),c="";for(var d in b){var e=("role"==d?"":"aria-")+d,f=b[d];c+=null==f?"":e+'="'+b[d]+'"'}return c}function h(){try{return document.activeElement}catch(a){}}var i=a(window),j=a(document),k=a(document.documentElement),l=null!=document.documentElement.style.transition;return b.klasses=function(a){return a=a||"picker",{picker:a,opened:a+"--opened",focused:a+"--focused",input:a+"__input",active:a+"__input--active",target:a+"__input--target",holder:a+"__holder",frame:a+"__frame",wrap:a+"__wrap",box:a+"__box"}},b._={group:function(a){for(var c,d="",e=b._.trigger(a.min,a);e<=b._.trigger(a.max,a,[e]);e+=a.i)c=b._.trigger(a.item,a,[e]),d+=b._.node(a.node,c[0],c[1],c[2]);return d},node:function(b,c,d,e){return c?(c=a.isArray(c)?c.join(""):c,d=d?' class="'+d+'"':"",e=e?" "+e:"","<"+b+d+e+">"+c+"</"+b+">"):""},lead:function(a){return(10>a?"0":"")+a},trigger:function(a,b,c){return"function"==typeof a?a.apply(b,c||[]):a},digits:function(a){return/\d/.test(a[1])?2:1},isDate:function(a){return{}.toString.call(a).indexOf("Date")>-1&&this.isInteger(a.getDate())},isInteger:function(a){return{}.toString.call(a).indexOf("Number")>-1&&a%1===0},ariaAttr:g},b.extend=function(c,d){a.fn[c]=function(e,f){var g=this.data(c);return"picker"==e?g:g&&"string"==typeof e?b._.trigger(g[e],g,[f]):this.each(function(){var f=a(this);f.data(c)||new b(this,c,d,e)})},a.fn[c].defaults=d.defaults},b});
/*!
 * Date picker for pickadate.js v3.5.6
 * http://amsul.github.io/pickadate.js/date.htm
 */
!function(a){"function"==typeof define&&define.amd?define(["picker","jquery"],a):"object"==typeof exports?module.exports=a(require("./picker.js"),require("jquery")):a(Picker,jQuery)}(function(a,b){function c(a,b){var c=this,d=a.$node[0],e=d.value,f=a.$node.data("value"),g=f||e,h=f?b.formatSubmit:b.format,i=function(){return d.currentStyle?"rtl"==d.currentStyle.direction:"rtl"==getComputedStyle(a.$root[0]).direction};c.settings=b,c.$node=a.$node,c.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},c.item={},c.item.clear=null,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return a[0]===!0?a.shift():-1}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),g?c.set("select",g,{format:h,defaultValue:!0}):c.set("select",null).set("highlight",c.item.now),c.key={40:7,38:-7,39:function(){return i()?-1:1},37:function(){return i()?1:-1},go:function(a){var b=c.item.highlight,d=new Date(b.year,b.month,b.date+a);c.set("highlight",d,{interval:a}),this.render()}},a.on("render",function(){a.$root.find("."+b.klass.selectMonth).on("change",function(){var c=this.value;c&&(a.set("highlight",[a.get("view").year,c,a.get("highlight").date]),a.$root.find("."+b.klass.selectMonth).trigger("focus"))}),a.$root.find("."+b.klass.selectYear).on("change",function(){var c=this.value;c&&(a.set("highlight",[c,a.get("view").month,a.get("highlight").date]),a.$root.find("."+b.klass.selectYear).trigger("focus"))})},1).on("open",function(){var d="";c.disabled(c.get("now"))&&(d=":not(."+b.klass.buttonToday+")"),a.$root.find("button"+d+", select").attr("disabled",!1)},1).on("close",function(){a.$root.find("button, select").attr("disabled",!0)},1)}var d=7,e=6,f=a._;c.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?("clear"==a&&(a="select"),e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set("select",e.select,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",e.highlight,c)),d)},c.prototype.get=function(a){return this.item[a]},c.prototype.create=function(a,c,d){var e,g=this;return c=void 0===c?a:c,c==-(1/0)||c==1/0?e=c:b.isPlainObject(c)&&f.isInteger(c.pick)?c=c.obj:b.isArray(c)?(c=new Date(c[0],c[1],c[2]),c=f.isDate(c)?c:g.create().obj):c=f.isInteger(c)||f.isDate(c)?g.normalize(new Date(c),d):g.now(a,c,d),{year:e||c.getFullYear(),month:e||c.getMonth(),date:e||c.getDate(),day:e||c.getDay(),obj:e||c,pick:e||c.getTime()}},c.prototype.createRange=function(a,c){var d=this,e=function(a){return a===!0||b.isArray(a)||f.isDate(a)?d.create(a):a};return f.isInteger(a)||(a=e(a)),f.isInteger(c)||(c=e(c)),f.isInteger(a)&&b.isPlainObject(c)?a=[c.year,c.month,c.date+a]:f.isInteger(c)&&b.isPlainObject(a)&&(c=[a.year,a.month,a.date+c]),{from:e(a),to:e(c)}},c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},c.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},c.prototype.now=function(a,b,c){return b=new Date,c&&c.rel&&b.setDate(b.getDate()+c.rel),this.normalize(b,c)},c.prototype.navigate=function(a,c,d){var e,f,g,h,i=b.isArray(c),j=b.isPlainObject(c),k=this.item.view;if(i||j){for(j?(f=c.year,g=c.month,h=c.date):(f=+c[0],g=+c[1],h=+c[2]),d&&d.nav&&k&&k.month!==g&&(f=k.year,g=k.month),e=new Date(f,g+(d&&d.nav?d.nav:0),1),f=e.getFullYear(),g=e.getMonth();new Date(f,g,h).getMonth()!==g;)h-=1;c=[f,g,h]}return c},c.prototype.normalize=function(a){return a.setHours(0,0,0,0),a},c.prototype.measure=function(a,b){var c=this;return b?"string"==typeof b?b=c.parse(a,b):f.isInteger(b)&&(b=c.now(a,b,{rel:b})):b="min"==a?-(1/0):1/0,b},c.prototype.viewset=function(a,b){return this.create([b.year,b.month,1])},c.prototype.validate=function(a,c,d){var e,g,h,i,j=this,k=c,l=d&&d.interval?d.interval:1,m=-1===j.item.enable,n=j.item.min,o=j.item.max,p=m&&j.item.disable.filter(function(a){if(b.isArray(a)){var d=j.create(a).pick;d<c.pick?e=!0:d>c.pick&&(g=!0)}return f.isInteger(a)}).length;if((!d||!d.nav&&!d.defaultValue)&&(!m&&j.disabled(c)||m&&j.disabled(c)&&(p||e||g)||!m&&(c.pick<=n.pick||c.pick>=o.pick)))for(m&&!p&&(!g&&l>0||!e&&0>l)&&(l*=-1);j.disabled(c)&&(Math.abs(l)>1&&(c.month<k.month||c.month>k.month)&&(c=k,l=l>0?1:-1),c.pick<=n.pick?(h=!0,l=1,c=j.create([n.year,n.month,n.date+(c.pick===n.pick?0:-1)])):c.pick>=o.pick&&(i=!0,l=-1,c=j.create([o.year,o.month,o.date+(c.pick===o.pick?0:1)])),!h||!i);)c=j.create([c.year,c.month,c.date+l]);return c},c.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return f.isInteger(d)?a.day===(c.settings.firstDay?d:d-1)%7:b.isArray(d)||f.isDate(d)?a.pick===c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[3]||b.isPlainObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},c.prototype.parse=function(a,b,c){var d=this,e={};return b&&"string"==typeof b?(c&&c.format||(c=c||{},c.format=d.settings.format),d.formats.toArray(c.format).map(function(a){var c=d.formats[a],g=c?f.trigger(c,d,[b,e]):a.replace(/^!/,"").length;c&&(e[a]=b.substr(0,g)),b=b.substr(g)}),[e.yyyy||e.yy,+(e.mm||e.m)-1,e.dd||e.d]):b},c.prototype.formats=function(){function a(a,b,c){var d=a.match(/[^\x00-\x7F]+|\w+/)[0];return c.mm||c.m||(c.m=b.indexOf(d)+1),d.length}function b(a){return a.match(/\w+/)[0].length}return{d:function(a,b){return a?f.digits(a):b.date},dd:function(a,b){return a?2:f.lead(b.date)},ddd:function(a,c){return a?b(a):this.settings.weekdaysShort[c.day]},dddd:function(a,c){return a?b(a):this.settings.weekdaysFull[c.day]},m:function(a,b){return a?f.digits(a):b.month+1},mm:function(a,b){return a?2:f.lead(b.month+1)},mmm:function(b,c){var d=this.settings.monthsShort;return b?a(b,d,c):d[c.month]},mmmm:function(b,c){var d=this.settings.monthsFull;return b?a(b,d,c):d[c.month]},yy:function(a,b){return a?2:(""+b.year).slice(2)},yyyy:function(a,b){return a?4:b.year},toArray:function(a){return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return f.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}}}(),c.prototype.isDateExact=function(a,c){var d=this;return f.isInteger(a)&&f.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(f.isDate(a)||b.isArray(a))&&(f.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:b.isPlainObject(a)&&b.isPlainObject(c)?d.isDateExact(a.from,c.from)&&d.isDateExact(a.to,c.to):!1},c.prototype.isDateOverlap=function(a,c){var d=this,e=d.settings.firstDay?1:0;return f.isInteger(a)&&(f.isDate(c)||b.isArray(c))?(a=a%7+e,a===d.create(c).day+1):f.isInteger(c)&&(f.isDate(a)||b.isArray(a))?(c=c%7+e,c===d.create(a).day+1):b.isPlainObject(a)&&b.isPlainObject(c)?d.overlapRanges(a,c):!1},c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);return"flip"==c?d.flipEnable():c===!1?(d.flipEnable(1),e=[]):c===!0?(d.flipEnable(-1),e=[]):c.map(function(a){for(var c,g=0;g<e.length;g+=1)if(d.isDateExact(a,e[g])){c=!0;break}c||(f.isInteger(a)||f.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&e.push(a)}),e},c.prototype.activate=function(a,c){var d=this,e=d.item.disable,g=e.length;return"flip"==c?d.flipEnable():c===!0?(d.flipEnable(1),e=[]):c===!1?(d.flipEnable(-1),e=[]):c.map(function(a){var c,h,i,j;for(i=0;g>i;i+=1){if(h=e[i],d.isDateExact(h,a)){c=e[i]=null,j=!0;break}if(d.isDateOverlap(h,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[3]||c.push("inverted")):f.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}if(c)for(i=0;g>i;i+=1)if(d.isDateExact(e[i],a)){e[i]=null;break}if(j)for(i=0;g>i;i+=1)if(d.isDateOverlap(e[i],a)){e[i]=null;break}c&&e.push(c)}),e.filter(function(a){return null!=a})},c.prototype.nodes=function(a){var b=this,c=b.settings,g=b.item,h=g.now,i=g.select,j=g.highlight,k=g.view,l=g.disable,m=g.min,n=g.max,o=function(a,b){return c.firstDay&&(a.push(a.shift()),b.push(b.shift())),f.node("thead",f.node("tr",f.group({min:0,max:d-1,i:1,node:"th",item:function(d){return[a[d],c.klass.weekdays,'scope=col title="'+b[d]+'"']}})))}((c.showWeekdaysFull?c.weekdaysFull:c.weekdaysShort).slice(0),c.weekdaysFull.slice(0)),p=function(a){return f.node("div"," ",c.klass["nav"+(a?"Next":"Prev")]+(a&&k.year>=n.year&&k.month>=n.month||!a&&k.year<=m.year&&k.month<=m.month?" "+c.klass.navDisabled:""),"data-nav="+(a||-1)+" "+f.ariaAttr({role:"button",controls:b.$node[0].id+"_table"})+' title="'+(a?c.labelMonthNext:c.labelMonthPrev)+'"')},q=function(){var d=c.showMonthsShort?c.monthsShort:c.monthsFull;return c.selectMonths?f.node("select",f.group({min:0,max:11,i:1,node:"option",item:function(a){return[d[a],0,"value="+a+(k.month==a?" selected":"")+(k.year==m.year&&a<m.month||k.year==n.year&&a>n.month?" disabled":"")]}}),c.klass.selectMonth,(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelMonthSelect+'"'):f.node("div",d[k.month],c.klass.month)},r=function(){var d=k.year,e=c.selectYears===!0?5:~~(c.selectYears/2);if(e){var g=m.year,h=n.year,i=d-e,j=d+e;if(g>i&&(j+=g-i,i=g),j>h){var l=i-g,o=j-h;i-=l>o?o:l,j=h}return f.node("select",f.group({min:i,max:j,i:1,node:"option",item:function(a){return[a,0,"value="+a+(d==a?" selected":"")]}}),c.klass.selectYear,(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelYearSelect+'"')}return f.node("div",d,c.klass.year)};return f.node("div",(c.selectYears?r()+q():q()+r())+p()+p(1),c.klass.header)+f.node("table",o+f.node("tbody",f.group({min:0,max:e-1,i:1,node:"tr",item:function(a){var e=c.firstDay&&0===b.create([k.year,k.month,1]).day?-7:0;return[f.group({min:d*a-k.day+e+1,max:function(){return this.min+d-1},i:1,node:"td",item:function(a){a=b.create([k.year,k.month,a+(c.firstDay?1:0)]);var d=i&&i.pick==a.pick,e=j&&j.pick==a.pick,g=l&&b.disabled(a)||a.pick<m.pick||a.pick>n.pick,o=f.trigger(b.formats.toString,b,[c.format,a]);return[f.node("div",a.date,function(b){return b.push(k.month==a.month?c.klass.infocus:c.klass.outfocus),h.pick==a.pick&&b.push(c.klass.now),d&&b.push(c.klass.selected),e&&b.push(c.klass.highlighted),g&&b.push(c.klass.disabled),b.join(" ")}([c.klass.day]),"data-pick="+a.pick+" "+f.ariaAttr({role:"gridcell",label:o,selected:d&&b.$node.val()===o?!0:null,activedescendant:e?!0:null,disabled:g?!0:null})),"",f.ariaAttr({role:"presentation"})]}})]}})),c.klass.table,'id="'+b.$node[0].id+'_table" '+f.ariaAttr({role:"grid",controls:b.$node[0].id,readonly:!0}))+f.node("div",f.node("button",c.today,c.klass.buttonToday,"type=button data-pick="+h.pick+(a&&!b.disabled(h)?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.clear,c.klass.buttonClear,"type=button data-clear=1"+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.close,c.klass.buttonClose,"type=button data-close=true "+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id})),c.klass.footer)},c.defaults=function(a){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],today:"Today",clear:"Clear",close:"Close",closeOnSelect:!0,closeOnClear:!0,format:"d mmmm, yyyy",klass:{table:a+"table",header:a+"header",navPrev:a+"nav--prev",navNext:a+"nav--next",navDisabled:a+"nav--disabled",month:a+"month",year:a+"year",selectMonth:a+"select--month",selectYear:a+"select--year",weekdays:a+"weekday",day:a+"day",disabled:a+"day--disabled",selected:a+"day--selected",highlighted:a+"day--highlighted",now:a+"day--today",infocus:a+"day--infocus",outfocus:a+"day--outfocus",footer:a+"footer",buttonClear:a+"button--clear",buttonToday:a+"button--today",buttonClose:a+"button--close"}}}(a.klasses().picker+"__"),a.extend("pickadate",c)});
/*!
 * Time picker for pickadate.js v3.5.6
 * http://amsul.github.io/pickadate.js/time.htm
 */
!function(a){"function"==typeof define&&define.amd?define(["picker","jquery"],a):"object"==typeof exports?module.exports=a(require("./picker.js"),require("jquery")):a(Picker,jQuery)}(function(a,b){function c(a,b){var c=this,d=a.$node[0].value,e=a.$node.data("value"),f=e||d,g=e?b.formatSubmit:b.format;c.settings=b,c.$node=a.$node,c.queue={interval:"i",min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse create validate",view:"parse create validate",disable:"deactivate",enable:"activate"},c.item={},c.item.clear=null,c.item.interval=b.interval||30,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return a[0]===!0?a.shift():-1}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),f?c.set("select",f,{format:g}):c.set("select",null).set("highlight",c.item.now),c.key={40:1,38:-1,39:1,37:-1,go:function(a){c.set("highlight",c.item.highlight.pick+a*c.item.interval,{interval:a*c.item.interval}),this.render()}},a.on("render",function(){var c=a.$root.children(),d=c.find("."+b.klass.viewset),e=function(a){return["webkit","moz","ms","o",""].map(function(b){return(b?"-"+b+"-":"")+a})},f=function(a,b){e("transform").map(function(c){a.css(c,b)}),e("transition").map(function(c){a.css(c,b)})};d.length&&(f(c,"none"),c[0].scrollTop=~~d.position().top-2*d[0].clientHeight,f(c,""))},1).on("open",function(){a.$root.find("button").attr("disabled",!1)},1).on("close",function(){a.$root.find("button").attr("disabled",!0)},1)}var d=24,e=60,f=12,g=d*e,h=a._;c.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?("clear"==a&&(a="select"),e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):"interval"==a?d.set("min",e.min,c).set("max",e.max,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set("select",b,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",b,c),"min"==a&&d.set("max",e.max,c)),d)},c.prototype.get=function(a){return this.item[a]},c.prototype.create=function(a,c,f){var i=this;return c=void 0===c?a:c,h.isDate(c)&&(c=[c.getHours(),c.getMinutes()]),b.isPlainObject(c)&&h.isInteger(c.pick)?c=c.pick:b.isArray(c)?c=+c[0]*e+ +c[1]:h.isInteger(c)||(c=i.now(a,c,f)),"max"==a&&c<i.item.min.pick&&(c+=g),"min"!=a&&"max"!=a&&(c-i.item.min.pick)%i.item.interval!==0&&(c+=i.item.interval),c=i.normalize(a,c,f),{hour:~~(d+c/e)%d,mins:(e+c%e)%e,time:(g+c)%g,pick:c%g}},c.prototype.createRange=function(a,c){var d=this,e=function(a){return a===!0||b.isArray(a)||h.isDate(a)?d.create(a):a};return h.isInteger(a)||(a=e(a)),h.isInteger(c)||(c=e(c)),h.isInteger(a)&&b.isPlainObject(c)?a=[c.hour,c.mins+a*d.settings.interval]:h.isInteger(c)&&b.isPlainObject(a)&&(c=[a.hour,a.mins+c*d.settings.interval]),{from:e(a),to:e(c)}},c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},c.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},c.prototype.now=function(a,b){var c,d=this.item.interval,f=new Date,g=f.getHours()*e+f.getMinutes(),i=h.isInteger(b);return g-=g%d,c=0>b&&-d>=d*b+g,g+="min"==a&&c?0:d,i&&(g+=d*(c&&"max"!=a?b+1:b)),g},c.prototype.normalize=function(a,b){var c=this.item.interval,d=this.item.min&&this.item.min.pick||0;return b-="min"==a?0:(b-d)%c},c.prototype.measure=function(a,c,f){var g=this;return c||(c="min"==a?[0,0]:[d-1,e-1]),"string"==typeof c?c=g.parse(a,c):c===!0||h.isInteger(c)?c=g.now(a,c,f):b.isPlainObject(c)&&h.isInteger(c.pick)&&(c=g.normalize(a,c.pick,f)),c},c.prototype.validate=function(a,b,c){var d=this,e=c&&c.interval?c.interval:d.item.interval;return d.disabled(b)&&(b=d.shift(b,e)),b=d.scope(b),d.disabled(b)&&(b=d.shift(b,-1*e)),b},c.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return h.isInteger(d)?a.hour==d:b.isArray(d)||h.isDate(d)?a.pick==c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[2]||b.isPlainObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},c.prototype.shift=function(a,b){var c=this,d=c.item.min.pick,e=c.item.max.pick;for(b=b||c.item.interval;c.disabled(a)&&(a=c.create(a.pick+=b),!(a.pick<=d||a.pick>=e)););return a},c.prototype.scope=function(a){var b=this.item.min.pick,c=this.item.max.pick;return this.create(a.pick>c?c:a.pick<b?b:a)},c.prototype.parse=function(a,b,c){var d,f,g,i,j,k=this,l={};if(!b||"string"!=typeof b)return b;c&&c.format||(c=c||{},c.format=k.settings.format),k.formats.toArray(c.format).map(function(a){var c,d=k.formats[a],e=d?h.trigger(d,k,[b,l]):a.replace(/^!/,"").length;d&&(c=b.substr(0,e),l[a]=c.match(/^\d+$/)?+c:c),b=b.substr(e)});for(i in l)j=l[i],h.isInteger(j)?i.match(/^(h|hh)$/i)?(d=j,("h"==i||"hh"==i)&&(d%=12)):"i"==i&&(f=j):i.match(/^a$/i)&&j.match(/^p/i)&&("h"in l||"hh"in l)&&(g=!0);return(g?d+12:d)*e+f},c.prototype.formats={h:function(a,b){return a?h.digits(a):b.hour%f||f},hh:function(a,b){return a?2:h.lead(b.hour%f||f)},H:function(a,b){return a?h.digits(a):""+b.hour%24},HH:function(a,b){return a?h.digits(a):h.lead(b.hour%24)},i:function(a,b){return a?2:h.lead(b.mins)},a:function(a,b){return a?4:g/2>b.time%g?"a.m.":"p.m."},A:function(a,b){return a?2:g/2>b.time%g?"AM":"PM"},toArray:function(a){return a.split(/(h{1,2}|H{1,2}|i|a|A|!.)/g)},toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return h.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}},c.prototype.isTimeExact=function(a,c){var d=this;return h.isInteger(a)&&h.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(h.isDate(a)||b.isArray(a))&&(h.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:b.isPlainObject(a)&&b.isPlainObject(c)?d.isTimeExact(a.from,c.from)&&d.isTimeExact(a.to,c.to):!1},c.prototype.isTimeOverlap=function(a,c){var d=this;return h.isInteger(a)&&(h.isDate(c)||b.isArray(c))?a===d.create(c).hour:h.isInteger(c)&&(h.isDate(a)||b.isArray(a))?c===d.create(a).hour:b.isPlainObject(a)&&b.isPlainObject(c)?d.overlapRanges(a,c):!1},c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);return"flip"==c?d.flipEnable():c===!1?(d.flipEnable(1),e=[]):c===!0?(d.flipEnable(-1),e=[]):c.map(function(a){for(var c,f=0;f<e.length;f+=1)if(d.isTimeExact(a,e[f])){c=!0;break}c||(h.isInteger(a)||h.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&e.push(a)}),e},c.prototype.activate=function(a,c){var d=this,e=d.item.disable,f=e.length;return"flip"==c?d.flipEnable():c===!0?(d.flipEnable(1),e=[]):c===!1?(d.flipEnable(-1),e=[]):c.map(function(a){var c,g,i,j;for(i=0;f>i;i+=1){if(g=e[i],d.isTimeExact(g,a)){c=e[i]=null,j=!0;break}if(d.isTimeOverlap(g,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[2]||c.push("inverted")):h.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}if(c)for(i=0;f>i;i+=1)if(d.isTimeExact(e[i],a)){e[i]=null;break}if(j)for(i=0;f>i;i+=1)if(d.isTimeOverlap(e[i],a)){e[i]=null;break}c&&e.push(c)}),e.filter(function(a){return null!=a})},c.prototype.i=function(a,b){return h.isInteger(b)&&b>0?b:this.item.interval},c.prototype.nodes=function(a){var b=this,c=b.settings,d=b.item.select,e=b.item.highlight,f=b.item.view,g=b.item.disable;return h.node("ul",h.group({min:b.item.min.pick,max:b.item.max.pick,i:b.item.interval,node:"li",item:function(a){a=b.create(a);var i=a.pick,j=d&&d.pick==i,k=e&&e.pick==i,l=g&&b.disabled(a),m=h.trigger(b.formats.toString,b,[c.format,a]);return[h.trigger(b.formats.toString,b,[h.trigger(c.formatLabel,b,[a])||c.format,a]),function(a){return j&&a.push(c.klass.selected),k&&a.push(c.klass.highlighted),f&&f.pick==i&&a.push(c.klass.viewset),l&&a.push(c.klass.disabled),a.join(" ")}([c.klass.listItem]),"data-pick="+a.pick+" "+h.ariaAttr({role:"option",label:m,selected:j&&b.$node.val()===m?!0:null,activedescendant:k?!0:null,disabled:l?!0:null})]}})+h.node("li",h.node("button",c.clear,c.klass.buttonClear,"type=button data-clear=1"+(a?"":" disabled")+" "+h.ariaAttr({controls:b.$node[0].id})),"",h.ariaAttr({role:"presentation"})),c.klass.list,h.ariaAttr({role:"listbox",controls:b.$node[0].id}))},c.defaults=function(a){return{clear:"Clear",format:"h:i A",interval:30,closeOnSelect:!0,closeOnClear:!0,klass:{picker:a+" "+a+"--time",holder:a+"__holder",list:a+"__list",listItem:a+"__list-item",disabled:a+"__list-item--disabled",selected:a+"__list-item--selected",highlighted:a+"__list-item--highlighted",viewset:a+"__list-item--viewset",now:a+"__list-item--now",buttonClear:a+"__button--clear"}}}(a.klasses().picker),a.extend("pickatime",c)});
/*!
 * Legacy browser support
 */
[].map||(Array.prototype.map=function(a,b){for(var c=this,d=c.length,e=new Array(d),f=0;d>f;f++)f in c&&(e[f]=a.call(b,c[f],f,c));return e}),[].filter||(Array.prototype.filter=function(a){if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if("function"!=typeof a)throw new TypeError;for(var d=[],e=arguments[1],f=0;c>f;f++)if(f in b){var g=b[f];a.call(e,g,f,b)&&d.push(g)}return d}),[].indexOf||(Array.prototype.indexOf=function(a){if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:0!==d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1});/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * http://blog.stevenlevithan.com/archives/cross-browser-split
 */
var nativeSplit=String.prototype.split,compliantExecNpcg=void 0===/()??/.exec("")[1];String.prototype.split=function(a,b){var c=this;if("[object RegExp]"!==Object.prototype.toString.call(a))return nativeSplit.call(c,a,b);var d,e,f,g,h=[],i=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.extended?"x":"")+(a.sticky?"y":""),j=0;for(a=new RegExp(a.source,i+"g"),c+="",compliantExecNpcg||(d=new RegExp("^"+a.source+"$(?!\\s)",i)),b=void 0===b?-1>>>0:b>>>0;(e=a.exec(c))&&(f=e.index+e[0].length,!(f>j&&(h.push(c.slice(j,e.index)),!compliantExecNpcg&&e.length>1&&e[0].replace(d,function(){for(var a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(e[a]=void 0)}),e.length>1&&e.index<c.length&&Array.prototype.push.apply(h,e.slice(1)),g=e[0].length,j=f,h.length>=b)));)a.lastIndex===e.index&&a.lastIndex++;return j===c.length?(g||!a.test(""))&&h.push(""):h.push(c.slice(j)),h.length>b?h.slice(0,b):h};
$(function(){
	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true,
		gutter: 15
	})
	$(".mobile-menu-trigger").click(function(e){
		e.preventDefault();
		if(!$(this).hasClass('opened')){
			$("#sidemenu").addClass("opened");
			$(this).addClass("opened");
		}else{
			$("#sidemenu").removeClass("opened");
			$(this).removeClass("opened");
		}
	})
})
//# sourceMappingURL=compiled.panel.js.map
