!function(){function t(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(i,o){var s=e.apply(n,r);function a(e){t(s,i,o,a,c,"next",e)}function c(e){t(s,i,o,a,c,"throw",e)}a(void 0)}))}}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+Qoh":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function t(){i(this,t),this.id=0,this.placa="",this.remolque="",this.esPropio=!0,this.activo=!0}},"+nHt":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var o=n("tk/3"),s=n("AytR"),a=n("fXoL"),c=n("e8h1"),u=function(){var t=function(){function t(e,n){i(this,t),this.http=e,this.storage=n,this.baseUrl=s.a.baseUrl,this.apiKey=""}return r(t,[{key:"put",value:function(t,e,n){var r=new o.d({"Content-Type":"application/json"});return this.http.put(this.baseUrl+t+"/"+e,n,{headers:r})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Tb(o.b),a.Tb(c.b))},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return a}));var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})}},notification:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},s=function(){r.selectionChanged()},a=function(){r.selectionEnd()},c=function(t){r.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(t,e,n){var r=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,e,n){var r=e/n,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,e,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,e,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}}}},BEOd:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("mrSG"),s=function(){function t(e,n,r,o,s){i(this,t),this.getService=e,this.postService=n,this.putService=r,this.toastCtrl=o,this.modalCtrl=s,this.statuses=[{label:"Activo",value:"true"},{label:"Inactivo",value:"false"}],this.cols=[{field:"nombre",header:"Nombre"},{field:"activo",header:"Estado"}]}return r(t,[{key:"consumirGet",value:function(t){var e=this;return new Promise((function(n){e.getService.get(t).subscribe((function(t){return Object(o.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.success?(console.log(t.message),n(t.message)):this.showModalError(t.message);case 1:case"end":return e.stop()}}),e,this)})))}),(function(t){return Object(o.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),this.showModalError("Error de conexi\xf3n con el servidor.");case 1:case"end":return e.stop()}}),e,this)})))}))}))}},{key:"consumirPost",value:function(t,e){var n=this;return new Promise((function(r){n.postService.post(t,e).subscribe((function(t){return Object(o.a)(n,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastCtrl.create({message:t.message,position:"middle",duration:t.success?3e3:0,color:t.success?"success":"danger",buttons:t.success?[]:[{text:"Aceptar",role:"cancel"}]});case 2:e.sent.present(),t.success&&(r(t.message),this.modalCtrl.dismiss(t));case 4:case"end":return e.stop()}}),e,this)})))}),(function(t){return Object(o.a)(n,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.showModalError(t);case 1:case"end":return e.stop()}}),e,this)})))}))}))}},{key:"showModalError",value:function(t){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastCtrl.create({message:t,position:"middle",color:"danger",buttons:[{text:"Aceptar",role:"cancel"}]});case 2:e.sent.present(),console.log(t);case 4:case"end":return e.stop()}}),e,this)})))}}]),t}()},BQIx:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var o=n("tk/3"),s=n("AytR"),a=n("fXoL"),c=n("e8h1"),u=function(){var t=function(){function t(e,n){i(this,t),this.http=e,this.storage=n,this.baseUrl=s.a.baseUrl,this.apiKey=""}return r(t,[{key:"get",value:function(t,e){var n=new o.d({"Content-Type":"application/json"});return this.http.get(this.baseUrl+t+"/"+(null==e?"":e),{headers:n})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Tb(o.b),a.Tb(c.b))},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},BsNa:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function t(){i(this,t),this.id=0,this.nombre="",this.lstSedes=[],this.activo=!0}},G7hY:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function t(){i(this,t),this.id=0}},NqGI:function(t,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return o}));var i=function(){var t=e(regeneratorRuntime.mark((function t(e,n,r,i,o){var s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",e.attachViewToDom(n,r,o,i));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(s="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,i&&i.forEach((function(t){return s.classList.add(t)})),o&&Object.assign(s,o),n.appendChild(s),t.t0=s.componentOnReady,!t.t0){t.next=12;break}return t.next=12,s.componentOnReady();case 12:return t.abrupt("return",s);case 13:case"end":return t.stop()}}),t)})));return function(e,n,r,i,o){return t.apply(this,arguments)}}(),o=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},PYW1:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("ePDZ"),i=n("ItpF"),o=n("2c9M"),s=function(t,e){var n,s,a=function(t,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(t,r);o&&e(o)?o!==n&&(u(),c(o,i)):u()}},c=function(t,e){n=t,s||(s=n);var i=n;Object(r.g)((function(){return i.classList.add("ion-activated")})),e()},u=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(n){var e=n;Object(r.g)((function(){return e.classList.remove("ion-activated")})),t&&s!==n&&n.click(),n=void 0}};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return a(t.currentX,t.currentY,o.a)},onMove:function(t){return a(t.currentX,t.currentY,o.b)},onEnd:function(){u(!0),Object(o.e)(),s=void 0}})}},RyMC:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var o,s,a=n("mrSG"),c=n("fXoL"),u=n("TEn/"),l=n("ova0"),f=n("3Pt+"),d=((o=function(){function t(e,n,r){i(this,t),this.toastCtrl=e,this.modalCtrl=n,this.postService=r,this.url="Account/ChangePassword",this.confirmPassword="",this.newPassword="",this.oldPassword=""}return r(t,[{key:"ngOnInit",value:function(){}},{key:"guardar",value:function(){var t=this;this.postService.post(this.url,{oldPassword:this.oldPassword,newPassword:this.newPassword,confirmPassword:this.confirmPassword}).subscribe((function(e){return Object(a.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.toastCtrl.create({message:e.message,position:"middle",duration:e.success?3e3:0,color:e.success?"success":"danger",buttons:e.success?[]:[{text:"Aceptar",role:"cancel"}]});case 2:t.sent.present(),e.success&&this.dismiss(e);case 4:case"end":return t.stop()}}),t,this)})))}),(function(e){return Object(a.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.toastCtrl.create({message:e,position:"middle",color:"danger",buttons:[{text:"Aceptar",role:"cancel"}]});case 2:t.sent.present();case 3:case"end":return t.stop()}}),t,this)})))}))}},{key:"dismiss",value:function(t){this.modalCtrl.dismiss(t)}}]),t}()).\u0275fac=function(t){return new(t||o)(c.Jb(u.Q),c.Jb(u.J),c.Jb(l.a))},o.\u0275cmp=c.Db({type:o,selectors:[["app-cambiar-password"]],decls:23,vars:3,consts:[[1,"modal-title"],["fill","clear","color","dark",3,"click"],["name","close-outline"],[1,"ion-padding"],["type","password",3,"ngModel","ngModelChange"],[1,"primary-button",3,"click"]],template:function(t,e){1&t&&(c.Pb(0,"ion-header"),c.Pb(1,"ion-toolbar"),c.Pb(2,"ion-title"),c.Pb(3,"div",0),c.Pb(4,"span"),c.zc(5,"Maestro Camiones"),c.Ob(),c.Pb(6,"ion-button",1),c.Xb("click",(function(){return e.dismiss(null)})),c.Kb(7,"ion-icon",2),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(8,"ion-content",3),c.Pb(9,"ion-item"),c.Pb(10,"ion-label"),c.zc(11,"Contrase\xf1a Actual"),c.Ob(),c.Pb(12,"ion-input",4),c.Xb("ngModelChange",(function(t){return e.oldPassword=t})),c.Ob(),c.Ob(),c.Pb(13,"ion-item"),c.Pb(14,"ion-label"),c.zc(15,"Contrase\xf1a Nueva"),c.Ob(),c.Pb(16,"ion-input",4),c.Xb("ngModelChange",(function(t){return e.newPassword=t})),c.Ob(),c.Ob(),c.Pb(17,"ion-item"),c.Pb(18,"ion-label"),c.zc(19,"Confirmar Contrase\xf1a"),c.Ob(),c.Pb(20,"ion-input",4),c.Xb("ngModelChange",(function(t){return e.confirmPassword=t})),c.Ob(),c.Ob(),c.Pb(21,"ion-button",5),c.Xb("click",(function(){return e.guardar()})),c.zc(22,"Guardar"),c.Ob(),c.Ob()),2&t&&(c.yb(12),c.fc("ngModel",e.oldPassword),c.yb(4),c.fc("ngModel",e.newPassword),c.yb(4),c.fc("ngModel",e.confirmPassword))},directives:[u.m,u.E,u.D,u.c,u.n,u.g,u.r,u.u,u.q,u.P,f.h,f.j],styles:[".modal-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.modal-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center}"]}),o),b=n("e8h1"),h=n("tyNb"),p=((s=function(){function t(e,n,r,o){i(this,t),this.storage=e,this.router=n,this.toastCtrl=r,this.modalCtrl=o}return r(t,[{key:"ngOnInit",value:function(){var t=this;this.storage.get("nombre").then((function(e){t.nombre=e}))}},{key:"logout",value:function(){this.storage.clear(),this.router.navigate(["/login"])}},{key:"mostrarModal",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalCtrl.create({component:d,backdropDismiss:!1});case 2:return(e=t.sent).present(),t.next=6,e.onWillDismiss().then((function(t){return Object(a.a)(n,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=null!=t.data&&t.data.success,!e.t0){e.next=5;break}return e.next=4,this.toastCtrl.create({message:t.data.message,position:"middle",duration:t.data.success?3e3:0,color:t.data.success?"success":"danger",buttons:t.data.success?[]:[{text:"Aceptar",role:"cancel"}]});case 4:e.sent.present();case 5:case"end":return e.stop()}}),e,this)})))}));case 6:case"end":return t.stop()}}),t,this)})))}}]),t}()).\u0275fac=function(t){return new(t||s)(c.Jb(b.b),c.Jb(h.g),c.Jb(u.Q),c.Jb(u.J))},s.\u0275cmp=c.Db({type:s,selectors:[["app-user-menu"]],decls:13,vars:1,consts:[["vertical","top","horizontal","end","slot","fixed","edge",""],["fill","clear"],["name","person"],["side","bottom"],[1,"primary-button",3,"click"],["name","lock-closed"],["name","log-out"]],template:function(t,e){1&t&&(c.Pb(0,"ion-fab",0),c.Pb(1,"ion-fab-button",1),c.zc(2),c.Kb(3,"ion-icon",2),c.Ob(),c.Pb(4,"ion-fab-list",3),c.Pb(5,"ion-fab-button",4),c.Xb("click",(function(){return e.mostrarModal()})),c.Pb(6,"ion-label"),c.zc(7,"Cambiar Contrase\xf1a"),c.Ob(),c.Kb(8,"ion-icon",5),c.Ob(),c.Pb(9,"ion-fab-button",4),c.Xb("click",(function(){return e.logout()})),c.Pb(10,"ion-label"),c.zc(11,"Cerrar Sesi\xf3n"),c.Ob(),c.Kb(12,"ion-icon",6),c.Ob(),c.Ob(),c.Ob()),2&t&&(c.yb(2),c.Bc("",e.nombre," "))},directives:[u.i,u.j,u.n,u.k,u.u],styles:["ion-fab[_ngcontent-%COMP%]{top:0;display:flex;justify-content:flex-end;height:-webkit-fill-available;align-items:center}ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{--border-radius:0;width:250px;white-space:pre-wrap!important}"]}),s)},YxHF:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function t(){i(this,t),this.cedula="",this.password="",this.nombre="",this.email="",this.celular="",this.idCliente=0,this.nombreCliente="",this.roles=[{nombre:"Administrador",seleccionado:!1},{nombre:"Auxiliar",seleccionado:!1},{nombre:"Cliente",seleccionado:!1},{nombre:"Conductor",seleccionado:!1}],this.activo=!0}},hcCc:function(t,n,r){"use strict";r.d(n,"a",(function(){return o})),r.d(n,"b",(function(){return s})),r.d(n,"c",(function(){return i})),r.d(n,"d",(function(){return c}));var i=function(t,e){return null!==e.closest(t)},o=function(t){return"string"==typeof t&&t.length>0?(r=!0,(n="ion-color-"+t)in(e={"ion-color":!0})?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e):void 0;var e,n,r},s=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},a=/^[a-z][a-z0-9+\-.]*:/,c=function(){var t=e(regeneratorRuntime.mark((function t(e,n,r,i){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||a.test(e)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=n&&n.preventDefault(),o.push(e,r,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(e,n,r,i){return t.apply(this,arguments)}}()},ypJn:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function t(){i(this,t),this.id=0,this.nombre="",this.direccion="",this.activo=!0}}}])}();