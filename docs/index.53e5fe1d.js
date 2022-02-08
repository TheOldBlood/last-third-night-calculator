function t(t,n,e,r){Object.defineProperty(t,n,{get:e,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},r={},o=n.parcelRequireedbe;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in r){var n=r[t];delete r[t];var o={id:t,exports:{}};return e[t]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,n){r[t]=n},n.parcelRequireedbe=o),o.register("hqokU",(function(n,e){var r,o;t(n.exports,"register",(function(){return r}),(function(t){return r=t})),t(n.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};r=function(t){for(var n=Object.keys(t),e=0;e<n.length;e++)i[n[e]]=t[n[e]]},o=function(t){var n=i[t];if(null==n)throw new Error("Could not resolve bundle with id "+t);return n}})),o.register("1Xzfr",(function(t,n){var e=function(){function t(t,n){for(var e in n){var r=n[e];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(t,n)}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),r=o("3N6wi"),i=o("3rW13"),a=.833,u=.3,s=6,c=12,l=18,f=-6,h=function(){function t(n,e,o){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.date=n,this.lat=e,this.longitude=o,this.sun=new r(n,e,o),this.moon=new i(n,e,o)}return e(t,{solarNoon:{get:function(){return this.sun.solarNoon}},sunrise:{get:function(){return this.sun.timeAtAngle(a,!0)}},sunset:{get:function(){return this.sun.timeAtAngle(a)}},sunriseEnd:{get:function(){return this.sun.timeAtAngle(u,!0)}},sunsetStart:{get:function(){return this.sun.timeAtAngle(u,!1)}},civilDawn:{get:function(){return this.sun.timeAtAngle(s,!0)}},dawn:{get:function(){return this.civilDawn}},civilDusk:{get:function(){return this.sun.timeAtAngle(s,!1)}},dusk:{get:function(){return this.civilDusk}},nauticalDawn:{get:function(){return this.sun.timeAtAngle(c,!0)}},nauticalDusk:{get:function(){return this.sun.timeAtAngle(c,!1)}},nightStart:{get:function(){return this.astronomicalDusk}},astronomicalDusk:{get:function(){return this.sun.timeAtAngle(l,!1)}},astronomicalDawn:{get:function(){return this.sun.timeAtAngle(l,!0)}},nightEnd:{get:function(){return this.astronomicalDawn}},goldenHourStart:{get:function(){return this.sun.timeAtAngle(f,!1)}},goldenHourEnd:{get:function(){return this.sun.timeAtAngle(f,!0)}},lunarDistance:{get:function(){return this.moon.distance}},lunarIlluminosity:{get:function(){return this.moon.illuminosity}}}),t}();t.exports=h})),o.register("3N6wi",(function(t,n){var e=function(){function t(t,n){for(var e in n){var r=n[e];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(t,n)}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),r=function(){function t(n,e,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.date=n,this.latitude=e,this.longitude=r,this.julianDate=function(t){var n=t.getFullYear(),e=t.getMonth()+1,r=t.getDate(),o=Math.floor(n/100),i=2-o+Math.floor(o/4);return Math.floor(365.25*(n+4716))+Math.floor(30.6001*(e+1))+r+i-1524.5}(n)}return e(t,{solarNoon:{get:function(){return function(t,n,e){var r=g(i(t-n/360)),a=i(t+(720-4*n-r)/1440);r=g(a);var u=720-4*n-r;for(;u<0;)u+=1440;for(;u>=1440;)u-=1440;return o(e,u)}(this.julianDate,this.longitude,this.date)}},timeAtAngle:{value:function(t,n){return function(t,n,e,r,i,a){var u=M(t,n,e,i,a),s=M(t,n,e+u/1440,i,a);if(v(s))return o(r,s);var c=function(t){var n,e=Math.floor(t+.5),r=t+.5-e;if(e<2299161)n=e;else{var o=Math.floor((e-1867216.25)/36524.25);n=e+1+o-Math.floor(o/4)}var i=n+1524,a=Math.floor((i-122.1)/365.25),u=Math.floor(365.25*a),s=Math.floor((i-u)/30.6001),c=i-u-Math.floor(30.6001*s)+r,l=s<14?s-1:s-13,f=(h=l>2?a-4716:a-4715,h%4==0&&h%100!=0||h%400==0?1:2);var h;return Math.floor(275*l/9)-f*Math.floor((l+9)/12)+c-30}(e);return d(m(i>66.4&&c>79&&c<267||i<-66.4&&(c<83||c>263)?!t:t,t,n,e,i,a))}(n,t,this.julianDate,this.date,this.latitude,this.longitude)}}}),t}(),o=function(t,n){var e=60*(n-Math.floor(n));return new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),0,n,e))};function i(t){return(t-2451545)/36525}function a(t){return 180*t/Math.PI}function u(t){return Math.PI*t/180}function s(t){for(var n=280.46646+t*(36000.76983+3032e-7*t);n>360;)n-=360;for(;n<0;)n+=360;return n}function c(t){return 357.52911+t*(35999.05029-1537e-7*t)}function l(t){var n=s(t),e=function(t){var n=u(c(t));return Math.sin(n)*(1.914602-t*(.004817+14e-6*t))+Math.sin(n+n)*(.019993-101e-6*t)+289e-6*Math.sin(n+n+n)}(t);return n+e}function f(t){var n=function(t){return 23+(26+(21.448-t*(46.815+t*(59e-5-.001813*t)))/60)/60}(t),e=125.04-1934.136*t;return n+.00256*Math.cos(u(e))}function h(t){var n=f(t),e=function(t){var n=125.04-1934.136*t;return l(t)-.00569-.00478*Math.sin(u(n))}(t),r=Math.sin(u(n))*Math.sin(u(e));return a(Math.asin(r))}function g(t){var n=f(t),e=s(t),r=function(t){return.016708634-t*(42037e-9+1.267e-7*t)}(t),o=c(t),i=Math.tan(u(n)/2);i*=i;var l=Math.sin(2*u(e)),h=Math.sin(u(o));return 4*a(i*l-2*r*h+4*r*i*h*Math.cos(2*u(e))-.5*i*i*Math.sin(4*u(e))-1.25*r*r*Math.sin(2*u(o)))}function v(t){for(var n=!1,e=""+t,r=0;r<e.length;r++){var o=e.charAt(r);if(0!==r||"-"!==o&&"+"!==o)if("."!==o||n){if(o<"0"||o>"9")return!1}else n=!0}return!0}function d(t){if(t<9e5||t>2817e3)return"error";var n,e=Math.floor(t+.5),r=t+.5-e;if(e<2299161)n=e;else{var o=Math.floor((e-1867216.25)/36524.25);n=e+1+o-Math.floor(o/4)}var i=n+1524,a=Math.floor((i-122.1)/365.25),u=Math.floor(365.25*a),s=Math.floor((i-u)/30.6001),c=i-u-Math.floor(30.6001*s)+r,l=s<14?s-1:s-13,f=l>2?a-4716:a-4715;return new Date(Date.UTC(f,l-1,c,0,0,0))}function M(t,n,e,r,o){var s=i(e),c=g(s),l=function(t,n,e){var r=u(n),o=u(e),i=Math.cos(u(90+t))/(Math.cos(r)*Math.cos(o))-Math.tan(r)*Math.tan(o);return Math.acos(i)}(n,r,h(s));return t||(l=-l),720-4*(o+a(l))-c}function m(t,n,e,r,o,i){for(var a=r,u=t?1:-1,s=M(n,e,a,o,i);!v(s);)s=M(n,e,a+=u,o,i);return a}t.exports=r})),o.register("3rW13",(function(t,n){var e=function(){function t(t,n){for(var e in n){var r=n[e];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(t,n)}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),r=function(){function t(n,e,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.date=n,this.latitude=e,this.longitude=r,this.julianDate=o(n)}return e(t,{illuminosity:{get:function(){return t=this.date,n=(o(t)+2451543.5-2451545)/36525,l=357.5291092+35999.0502909*n-1536e-7*(e=n*n)+(r=e*n)/2449e4,i(180-(s=297.8501921+445267.1114034*n-.0018819*e+r/545868-(u=r*n)/113065e3)-6.289*a(c=134.9633964+477198.8675055*n+.0087414*e+r/69699-u/14712e3)+2.1*a(l)-1.274*a(2*s-c)-.658*a(2*s)-.214*a(2*c)-.11*a(s))/360;var t,n,e,r,u,s,c,l}},distance:{get:function(){return function(t){for(var n=o(t)+2451543.5,e=(n-2451545)/36525,r=e*e,p=r*e,D=p*e,A=218.3164477+481267.88123421*e-.0015786*r+p/538841-D/65194e3,b=297.8501921+445267.1114034*e-.0018819*r+p/545868-D/113065e3,y=357.5291092+35999.0502909*e-1536e-7*r+p/2449e4,S=134.9633964+477198.8675055*e+.0087414*r+p/69699-D/14712e3,P=93.272095+483202.0175233*e-.0036539*r-p/3526e3+D/86331e4,q=119.75+131.849*e,j=53.09+479264.29*e,k=313.45+481266.484*e,T=1-.002516*e-74e-7*r,x=T*T,N=0,E=0,C=0;C<60;C++){var O=1;1===Math.abs(c[C])&&(O=T),2===Math.abs(c[C])&&(O=x),N+=h[C]*O*a(i(s[C]*b+c[C]*y+l[C]*S+f[C]*P)),E+=g[C]*O*u(i(s[C]*b+c[C]*y+l[C]*S+f[C]*P))}var L=0;for(C=0;C<60;C++){O=1;1===Math.abs(d[C])&&(O=T),2===Math.abs(d[C])&&(O=x),L+=w[C]*O*a(i(v[C]*b+d[C]*y+M[C]*S+m[C]*P))}N=N+3958*a(i(q))+1962*a(i(A-P))+318*a(i(j)),L=L-2235*a(i(A))+382*a(i(k))+175*a(i(q-P))+175*a(i(q+P))+127*a(i(A-S))-115*a(i(A+S));var I=i(A+N/1e6),U=i(L/1e6);U>180&&(U-=360);var H=Math.round(385000.56+E/1e3),W=23.4393-3.563e-9*(n-2451543.5),F=i((Y=a(I)*u(W)-(B=U,Math.tan(B*Math.PI/180)*a(W)),z=u(I),180/Math.PI*Math.atan(Y/z)-180*(z<0)))/15,R=i((_=a(U)*u(W)+u(U)*a(W)*a(I),180/Math.PI*Math.asin(_)));var _;var Y,z;var B;R>180&&(R-=360);return{ra:F,dec:R,distance:H}}(this.date).distance}}}),t}();function o(t){var n=t.getFullYear(),e=t.getMonth()+1,r=t.getDate(),o=Math.floor(n/100),i=2-o+Math.floor(o/4);return Math.floor(365.25*(n+4716))+Math.floor(30.6001*(e+1))+r+i-1524.5}function i(t){return t-360*Math.floor(t/360)}function a(t){return Math.sin(t*Math.PI/180)}function u(t){return Math.cos(t*Math.PI/180)}var s=[0,2,2,0,0,0,2,2,2,2,0,1,0,2,0,0,4,0,4,2,2,1,1,2,2,4,2,0,2,2,1,2,0,0,2,2,2,4,0,3,2,4,0,2,2,2,4,0,4,1,2,0,1,3,4,2,0,1,2,2],c=[0,0,0,0,1,0,0,-1,0,-1,1,0,1,0,0,0,0,0,0,1,1,0,1,-1,0,0,0,1,0,-1,0,-2,1,2,-2,0,0,-1,0,0,1,-1,2,2,1,-1,0,0,-1,0,1,0,1,0,0,-1,2,1,0,0],l=[1,-1,0,2,0,0,-2,-1,1,0,-1,0,1,0,1,1,-1,3,-2,-1,0,-1,0,1,2,0,-3,-2,-1,-2,1,0,2,0,-1,1,0,-1,2,-1,1,-2,-1,-1,-2,0,1,4,0,-2,0,2,1,-2,-3,2,1,-1,3,-1],f=[0,0,0,0,0,2,0,0,0,0,0,0,0,-2,2,-2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,-2,2,0,2,0,0,0,0,0,0,-2,0,0,0,0,-2,-2,0,0,0,0,0,0,0,-2],h=[6288774,1274027,658314,213618,-185116,-114332,58793,57066,53322,45758,-40923,-34720,-30383,15327,-12528,10980,10675,10034,8548,-7888,-6766,-5163,4987,4036,3994,3861,3665,-2689,-2602,2390,-2348,2236,-2120,-2069,2048,-1773,-1595,1215,-1110,-892,-810,759,-713,-700,691,596,549,537,520,-487,-399,-381,351,-340,330,327,-323,299,294,0],g=[-20905355,-3699111,-2955968,-569925,48888,-3149,246158,-152138,-170733,-204586,-129620,108743,104755,10321,0,79661,-34782,-23210,-21636,24208,30824,-8379,-16675,-12831,-10445,-11650,14403,-7003,0,10056,6322,-9884,5751,0,-4950,4130,0,-3958,0,3258,2616,-1897,-2117,2354,0,0,-1423,-1117,-1571,-1739,0,-4421,0,0,0,0,1165,0,0,8752],v=[0,0,0,2,2,2,2,0,2,0,2,2,2,2,2,2,2,0,4,0,0,0,1,0,0,0,1,0,4,4,0,4,2,2,2,2,0,2,2,2,2,4,2,2,0,2,1,1,0,2,1,2,0,4,4,1,4,1,4,2],d=[0,0,0,0,0,0,0,0,0,0,-1,0,0,1,-1,-1,-1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,-1,0,0,0,0,1,1,0,-1,-2,0,1,1,1,1,1,0,-1,1,0,-1,0,0,0,-1,-2],M=[0,1,1,0,-1,-1,0,2,1,2,0,-2,1,0,-1,0,-1,-1,-1,0,0,-1,0,1,1,0,0,3,0,-1,1,-2,0,2,1,-2,3,2,-3,-1,0,0,1,0,1,1,0,0,-2,-1,1,-2,2,-2,-1,1,1,-1,0,0],m=[1,1,-1,-1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,-1,-1,1,3,1,1,1,-1,-1,-1,1,-1,1,-3,1,-3,-1,-1,1,-1,1,-1,1,1,1,1,-1,3,-1,-1,1,-1,-1,1,-1,1,-1,-1,-1,-1,-1,-1,1],w=[5128122,280602,277693,173237,55413,46271,32573,17198,9266,8822,8216,4324,4200,-3359,2463,2211,2065,-1870,1828,-1794,-1749,-1565,-1491,-1475,-1410,-1344,-1335,1107,1021,833,777,671,607,596,491,-451,439,422,421,-366,-351,331,315,302,-283,-229,223,223,-220,-220,-185,181,-177,176,166,-164,132,-119,115,107];t.exports=r})),o("hqokU").register(JSON.parse('{"8W4Sm":"index.53e5fe1d.js","1ZyPq":"service-worker.js"}'));var i={};i=o("1Xzfr"),window.setPartNight=function(){if(""!=document.querySelector("#fajrtime").value&&""!=document.querySelector("#magribtime").value){let[t,n]=function(t,n,e,r){let o,i=new Date,a=new Date(i);i.setHours(e),i.setMinutes(r),a.setHours(t),a.setMinutes(n),o=i>a?864e5-(i-a):a-i;let u=new Date(i.getTime()+2*o/3);return[new Date(i.getTime()+1*o/2),u]}(...document.querySelector("#fajrtime").value.split(":"),...document.querySelector("#magribtime").value.split(":"));document.querySelector("#placeholder").innerText="Mid Night Begins At: "+t.toLocaleString("default",{hour:"numeric",minute:"numeric"})+"\nLast Third Night Begins At: "+n.toLocaleString("default",{hour:"numeric",minute:"numeric"})}},window.autoDetectWithCoords=function(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((t=>{var n=new i(new Date,t.coords.latitude,t.coords.longitude);let e=n.astronomicalDawn,r=n.sunset;document.querySelector("#fajrtime").value=e.toLocaleString("default",{hour:"numeric",minute:"numeric",hour12:!1}),document.querySelector("#magribtime").value=r.toLocaleString("default",{hour:"numeric",minute:"numeric",hour12:!1}),setPartNight()}))};var a;a=new URL(o("hqokU").resolve("1ZyPq"),import.meta.url).toString(),"serviceWorker"in navigator&&navigator.serviceWorker.register(a),document.addEventListener("DOMContentLoaded",(function(){[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(t){return new bootstrap.Tooltip(t)}))}));
//# sourceMappingURL=index.53e5fe1d.js.map
