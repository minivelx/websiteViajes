(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+Qoh":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));class s{constructor(){this.id=0,this.placa="",this.remolque="",this.esPropio=!0,this.activo=!0}}},"+nHt":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var s=n("tk/3"),i=n("AytR"),o=n("fXoL"),r=n("e8h1");let c=(()=>{class t{constructor(t,e){this.http=t,this.storage=e,this.baseUrl=i.a.baseUrl,this.apiKey=""}put(t,e,n){let i=new s.d({"Content-Type":"application/json"});return this.http.put(this.baseUrl+t+"/"+e,n,{headers:i})}}return t.\u0275fac=function(e){return new(e||t)(o.Tb(s.b),o.Tb(r.b))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c}));const s={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{s.selection()},o=()=>{s.selectionStart()},r=()=>{s.selectionChanged()},c=()=>{s.selectionEnd()},a=t=>{s.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));const s={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const s=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const s=e/n,i=t*s-t+"ms",o=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},BEOd:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var s=n("mrSG");class i{constructor(t,e,n,s,i){this.getService=t,this.postService=e,this.putService=n,this.toastCtrl=s,this.modalCtrl=i,this.statuses=[{label:"Activo",value:"true"},{label:"Inactivo",value:"false"}],this.cols=[{field:"nombre",header:"Nombre"},{field:"activo",header:"Estado"}]}consumirGet(t){return new Promise(e=>{this.getService.get(t).subscribe(t=>Object(s.a)(this,void 0,void 0,(function*(){t.success?(console.log(t.message),e(t.message)):this.showModalError(t.message)})),t=>Object(s.a)(this,void 0,void 0,(function*(){console.log(t),this.showModalError("Error de conexi\xf3n con el servidor.")})))})}consumirPost(t,e){return new Promise(n=>{this.postService.post(t,e).subscribe(t=>Object(s.a)(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:t.message,position:"middle",duration:t.success?3e3:0,color:t.success?"success":"danger",buttons:t.success?[]:[{text:"Aceptar",role:"cancel"}]})).present(),t.success&&(n(t.message),this.modalCtrl.dismiss(t))})),t=>Object(s.a)(this,void 0,void 0,(function*(){this.showModalError(t)})))})}showModalError(t){return Object(s.a)(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:t,position:"middle",color:"danger",buttons:[{text:"Aceptar",role:"cancel"}]})).present(),console.log(t)}))}}},BQIx:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var s=n("tk/3"),i=n("AytR"),o=n("fXoL"),r=n("e8h1");let c=(()=>{class t{constructor(t,e){this.http=t,this.storage=e,this.baseUrl=i.a.baseUrl,this.apiKey=""}get(t,e){let n=new s.d({"Content-Type":"application/json"});return this.http.get(this.baseUrl+t+"/"+(null==e?"":e),{headers:n})}}return t.\u0275fac=function(e){return new(e||t)(o.Tb(s.b),o.Tb(r.b))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},BsNa:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));class s{constructor(){this.id=0,this.nombre="",this.lstSedes=[],this.activo=!0}}},G7hY:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));class s{constructor(){this.id=0}}},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i}));const s=async(t,e,n,s,i)=>{if(t)return t.attachViewToDom(e,n,i,s);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return s&&s.forEach(t=>o.classList.add(t)),i&&Object.assign(o,i),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},i=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},PYW1:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var s=n("ePDZ"),i=n("ItpF"),o=n("2c9M");const r=(t,e)=>{let n,r;const c=(t,s,i)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,s);o&&e(o)?o!==n&&(l(),a(o,i)):l()},a=(t,e)=>{n=t,r||(r=n);const i=n;Object(s.g)(()=>i.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(s.g)(()=>e.classList.remove("ion-activated")),t&&r!==n&&n.click(),n=void 0};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,o.a),onMove:t=>c(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),Object(o.e)(),r=void 0}})}},RyMC:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var s=n("mrSG"),i=n("fXoL"),o=n("TEn/"),r=n("ova0"),c=n("3Pt+");let a=(()=>{class t{constructor(t,e,n){this.toastCtrl=t,this.modalCtrl=e,this.postService=n,this.url="Account/ChangePassword",this.confirmPassword="",this.newPassword="",this.oldPassword=""}ngOnInit(){}guardar(){this.postService.post(this.url,{oldPassword:this.oldPassword,newPassword:this.newPassword,confirmPassword:this.confirmPassword}).subscribe(t=>Object(s.a)(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:t.message,position:"middle",duration:t.success?3e3:0,color:t.success?"success":"danger",buttons:t.success?[]:[{text:"Aceptar",role:"cancel"}]})).present(),t.success&&this.dismiss(t)})),t=>Object(s.a)(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:t,position:"middle",color:"danger",buttons:[{text:"Aceptar",role:"cancel"}]})).present()})))}dismiss(t){this.modalCtrl.dismiss(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(o.Q),i.Jb(o.J),i.Jb(r.a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-cambiar-password"]],decls:23,vars:3,consts:[[1,"modal-title"],["fill","clear","color","dark",3,"click"],["name","close-outline"],[1,"ion-padding"],["type","password",3,"ngModel","ngModelChange"],[1,"primary-button",3,"click"]],template:function(t,e){1&t&&(i.Pb(0,"ion-header"),i.Pb(1,"ion-toolbar"),i.Pb(2,"ion-title"),i.Pb(3,"div",0),i.Pb(4,"span"),i.zc(5,"Maestro Camiones"),i.Ob(),i.Pb(6,"ion-button",1),i.Xb("click",(function(){return e.dismiss(null)})),i.Kb(7,"ion-icon",2),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(8,"ion-content",3),i.Pb(9,"ion-item"),i.Pb(10,"ion-label"),i.zc(11,"Contrase\xf1a Actual"),i.Ob(),i.Pb(12,"ion-input",4),i.Xb("ngModelChange",(function(t){return e.oldPassword=t})),i.Ob(),i.Ob(),i.Pb(13,"ion-item"),i.Pb(14,"ion-label"),i.zc(15,"Contrase\xf1a Nueva"),i.Ob(),i.Pb(16,"ion-input",4),i.Xb("ngModelChange",(function(t){return e.newPassword=t})),i.Ob(),i.Ob(),i.Pb(17,"ion-item"),i.Pb(18,"ion-label"),i.zc(19,"Confirmar Contrase\xf1a"),i.Ob(),i.Pb(20,"ion-input",4),i.Xb("ngModelChange",(function(t){return e.confirmPassword=t})),i.Ob(),i.Ob(),i.Pb(21,"ion-button",5),i.Xb("click",(function(){return e.guardar()})),i.zc(22,"Guardar"),i.Ob(),i.Ob()),2&t&&(i.yb(12),i.fc("ngModel",e.oldPassword),i.yb(4),i.fc("ngModel",e.newPassword),i.yb(4),i.fc("ngModel",e.confirmPassword))},directives:[o.m,o.E,o.D,o.c,o.n,o.g,o.r,o.u,o.q,o.P,c.h,c.j],styles:[".modal-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.modal-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center}"]}),t})();var l=n("e8h1"),u=n("tyNb");let d=(()=>{class t{constructor(t,e,n,s){this.storage=t,this.router=e,this.toastCtrl=n,this.modalCtrl=s}ngOnInit(){this.storage.get("nombre").then(t=>{this.nombre=t})}logout(){this.storage.clear(),this.router.navigate(["/login"])}mostrarModal(){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.modalCtrl.create({component:a,backdropDismiss:!1});t.present(),yield t.onWillDismiss().then(t=>Object(s.a)(this,void 0,void 0,(function*(){null!=t.data&&t.data.success&&(yield this.toastCtrl.create({message:t.data.message,position:"middle",duration:t.data.success?3e3:0,color:t.data.success?"success":"danger",buttons:t.data.success?[]:[{text:"Aceptar",role:"cancel"}]})).present()})))}))}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(l.b),i.Jb(u.g),i.Jb(o.Q),i.Jb(o.J))},t.\u0275cmp=i.Db({type:t,selectors:[["app-user-menu"]],decls:13,vars:1,consts:[["vertical","top","horizontal","end","slot","fixed","edge",""],["fill","clear"],["name","person"],["side","bottom"],[1,"primary-button",3,"click"],["name","lock-closed"],["name","log-out"]],template:function(t,e){1&t&&(i.Pb(0,"ion-fab",0),i.Pb(1,"ion-fab-button",1),i.zc(2),i.Kb(3,"ion-icon",2),i.Ob(),i.Pb(4,"ion-fab-list",3),i.Pb(5,"ion-fab-button",4),i.Xb("click",(function(){return e.mostrarModal()})),i.Pb(6,"ion-label"),i.zc(7,"Cambiar Contrase\xf1a"),i.Ob(),i.Kb(8,"ion-icon",5),i.Ob(),i.Pb(9,"ion-fab-button",4),i.Xb("click",(function(){return e.logout()})),i.Pb(10,"ion-label"),i.zc(11,"Cerrar Sesi\xf3n"),i.Ob(),i.Kb(12,"ion-icon",6),i.Ob(),i.Ob(),i.Ob()),2&t&&(i.yb(2),i.Bc("",e.nombre," "))},directives:[o.i,o.j,o.n,o.k,o.u],styles:["ion-fab[_ngcontent-%COMP%]{top:0;display:flex;justify-content:flex-end;height:-webkit-fill-available;align-items:center}ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{--border-radius:0;width:250px;white-space:pre-wrap!important}"]}),t})()},YxHF:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));class s{constructor(){this.cedula="",this.password="",this.nombre="",this.email="",this.celular="",this.idCliente=0,this.nombreCliente="",this.roles=[{nombre:"Administrador",seleccionado:!1},{nombre:"Auxiliar",seleccionado:!1},{nombre:"Cliente",seleccionado:!1},{nombre:"Conductor",seleccionado:!1}],this.activo=!0}}},hcCc:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return c}));const s=(t,e)=>null!==e.closest(t),i=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},r=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,n,s)=>{if(null!=t&&"#"!==t[0]&&!r.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n,s)}return!1}},ypJn:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));class s{constructor(){this.id=0,this.nombre="",this.direccion="",this.activo=!0}}}}]);