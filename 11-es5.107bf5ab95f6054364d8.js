!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}function o(t,e,n){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{cDn4:function(e,a,c){"use strict";c.r(a),c.d(a,"CamionesPageModule",(function(){return T}));var b,s=c("ofXK"),u=c("3Pt+"),p=c("TEn/"),f=c("tyNb"),d=c("mrSG"),m=c("+Qoh"),h=c("BEOd"),P=c("fXoL"),O=c("BQIx"),g=c("ova0"),v=c("+nHt"),y=((b=function(e){i(c,e);var a=r(c);function c(e,n,o,i,r){var l;return t(this,c),(l=a.call(this,e,n,o,i,r)).getService=e,l.postService=n,l.putService=o,l.toastCtrl=i,l.modalCtrl=r,l.url="camiones",l.camion=new m.a,l.clicked=!1,l}return n(c,[{key:"ngOnInit",value:function(){var t=this;null!=this.id&&o(l(c.prototype),"consumirGet",this).call(this,this.url,this.id).then((function(e){t.camion=e}))}},{key:"guardar",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.clicked=!0,null!=this.id?this.actualizarCamion():this.crearCamion();case 1:case"end":return t.stop()}}),t,this)})))}},{key:"crearCamion",value:function(){var t=this;o(l(c.prototype),"consumirPost",this).call(this,this.url,this.camion).then((function(e){t.camion=e}))}},{key:"actualizarCamion",value:function(){var t=this;o(l(c.prototype),"consumirPut",this).call(this,this.url,this.id,this.camion).then((function(e){t.camion=e}))}}]),c}(h.a)).\u0275fac=function(t){return new(t||b)(P.Jb(O.a),P.Jb(g.a),P.Jb(v.a),P.Jb(p.Q),P.Jb(p.J))},b.\u0275cmp=P.Db({type:b,selectors:[["app-detalle-camion"]],inputs:{id:"id"},features:[P.vb],decls:27,vars:5,consts:[[1,"modal-title"],["fill","clear","color","dark",3,"click"],["name","close-outline"],[1,"ion-padding"],["type","text",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[1,"primary-button",3,"disabled","click"]],template:function(t,e){1&t&&(P.Pb(0,"ion-header"),P.Pb(1,"ion-toolbar"),P.Pb(2,"ion-title"),P.Pb(3,"div",0),P.Pb(4,"span"),P.zc(5,"Maestro Camiones"),P.Ob(),P.Pb(6,"ion-button",1),P.Xb("click",(function(){return e.dismiss(null)})),P.Kb(7,"ion-icon",2),P.Ob(),P.Ob(),P.Ob(),P.Ob(),P.Ob(),P.Pb(8,"ion-content",3),P.Pb(9,"ion-item"),P.Pb(10,"ion-label"),P.zc(11,"Placa"),P.Ob(),P.Pb(12,"ion-input",4),P.Xb("ngModelChange",(function(t){return e.camion.placa=t})),P.Ob(),P.Ob(),P.Pb(13,"ion-item"),P.Pb(14,"ion-label"),P.zc(15,"Remolque"),P.Ob(),P.Pb(16,"ion-input",4),P.Xb("ngModelChange",(function(t){return e.camion.remolque=t})),P.Ob(),P.Ob(),P.Pb(17,"ion-item"),P.Pb(18,"ion-label"),P.zc(19,"Camion Propio"),P.Ob(),P.Pb(20,"ion-checkbox",5),P.Xb("ngModelChange",(function(t){return e.camion.esPropio=t})),P.Ob(),P.Ob(),P.Pb(21,"ion-item"),P.Pb(22,"ion-label"),P.zc(23,"Activo"),P.Ob(),P.Pb(24,"ion-checkbox",5),P.Xb("ngModelChange",(function(t){return e.camion.activo=t})),P.Ob(),P.Ob(),P.Pb(25,"ion-button",6),P.Xb("click",(function(){return e.guardar()})),P.zc(26,"Guardar"),P.Ob(),P.Ob()),2&t&&(P.yb(12),P.fc("ngModel",e.camion.placa),P.yb(4),P.fc("ngModel",e.camion.remolque),P.yb(4),P.fc("ngModel",e.camion.esPropio),P.yb(4),P.fc("ngModel",e.camion.activo),P.yb(1),P.fc("disabled",e.clicked))},directives:[p.m,p.E,p.D,p.c,p.n,p.g,p.r,p.u,p.q,p.P,u.h,u.j,p.e,p.a],styles:[".modal-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.modal-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center}"]}),b),C=c("RyMC"),w=c("rEr+"),x=c("7zfz"),k=c("jIHw"),M=c("arFO");function z(t,e){if(1&t){var n=P.Qb();P.Pb(0,"div",7),P.Pb(1,"p-button",8),P.Xb("click",(function(){return P.rc(n),P.Zb().mostrarModal(null)})),P.Ob(),P.Pb(2,"p-button",9),P.Xb("click",(function(){return P.rc(n),P.Zb(),P.pc(9).exportCSV()})),P.Ob(),P.Ob()}}function R(t,e){if(1&t&&(P.Pb(0,"span"),P.zc(1),P.Ob()),2&t){var n=e.$implicit;P.yb(1),P.Ac(n.label)}}function _(t,e){if(1&t&&(P.Pb(0,"span"),P.zc(1),P.Ob()),2&t){var n=e.$implicit;P.yb(1),P.Ac(n.label)}}function j(t,e){if(1&t){var n=P.Qb();P.Pb(0,"tr"),P.Pb(1,"th",10),P.zc(2,"Placa "),P.Kb(3,"p-sortIcon",11),P.Ob(),P.Pb(4,"th",12),P.zc(5,"Remolque "),P.Kb(6,"p-sortIcon",13),P.Ob(),P.Pb(7,"th",14),P.zc(8,"Propio "),P.Kb(9,"p-sortIcon",15),P.Ob(),P.Pb(10,"th",16),P.zc(11,"Estado "),P.Kb(12,"p-sortIcon",17),P.Ob(),P.Pb(13,"th",18),P.zc(14,"Acciones"),P.Ob(),P.Ob(),P.Pb(15,"tr"),P.Pb(16,"th"),P.Pb(17,"input",19),P.Xb("input",(function(t){return P.rc(n),P.Zb(),P.pc(9).filter(t.target.value,"placa","contains")})),P.Ob(),P.Ob(),P.Pb(18,"th"),P.Pb(19,"input",20),P.Xb("input",(function(t){return P.rc(n),P.Zb(),P.pc(9).filter(t.target.value,"remolque","contains")})),P.Ob(),P.Ob(),P.Pb(20,"th"),P.Pb(21,"p-dropdown",21),P.Xb("onChange",(function(t){return P.rc(n),P.Zb(),P.pc(9).filter(t.value,"esPropio","equals")})),P.xc(22,R,2,1,"ng-template",22),P.Ob(),P.Ob(),P.Pb(23,"th"),P.Pb(24,"p-dropdown",23),P.Xb("onChange",(function(t){return P.rc(n),P.Zb(),P.pc(9).filter(t.value,"activo","equals")})),P.xc(25,_,2,1,"ng-template",22),P.Ob(),P.Ob(),P.Ob()}if(2&t){var o=P.Zb();P.yb(21),P.fc("options",o.statusesPropio)("showClear",!0),P.yb(3),P.fc("options",o.statuses)("showClear",!0)}}function S(t,e){if(1&t){var n=P.Qb();P.Pb(0,"tr"),P.Pb(1,"td"),P.Pb(2,"span",24),P.zc(3,"Placa "),P.Ob(),P.zc(4),P.Ob(),P.Pb(5,"td"),P.Pb(6,"span",24),P.zc(7,"Remolque "),P.Ob(),P.zc(8),P.Ob(),P.Pb(9,"td"),P.Pb(10,"span",24),P.zc(11,"Propio "),P.Ob(),P.zc(12),P.Ob(),P.Pb(13,"td"),P.Pb(14,"span",24),P.zc(15,"Estado "),P.Ob(),P.zc(16),P.Ob(),P.Pb(17,"td",25),P.Pb(18,"p-button",26),P.Xb("click",(function(){P.rc(n);var t=e.$implicit;return P.Zb().mostrarModal(t.id)})),P.Ob(),P.Ob(),P.Ob()}if(2&t){var o=e.$implicit;P.yb(4),P.Ac(o.placa),P.yb(4),P.Ac(o.remolque),P.yb(4),P.Ac(1==o.esPropio?"Si":"No"),P.yb(4),P.Ac(1==o.activo?"Activo":"Inactivo")}}var X,q,E,J=function(){return[10,25,50]},I=[{path:"",component:(X=function(e){i(c,e);var a=r(c);function c(e,n,o){var i;return t(this,c),(i=a.call(this,e,null,null,n,o)).getService=e,i.toastCtrl=n,i.modalCtrl=o,i.url="camiones",i.camiones=[],i.statusesPropio=[{label:"Si",value:"true"},{label:"No",value:"false"}],i}return n(c,[{key:"ngOnInit",value:function(){this.obtenerCamiones()}},{key:"obtenerCamiones",value:function(){var t=this;o(l(c.prototype),"consumirGet",this).call(this,this.url).then((function(e){t.camiones=e}))}},{key:"mostrarModal",value:function(t){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalCtrl.create({component:y,componentProps:{id:t},backdropDismiss:!1});case 2:return(n=e.sent).present(),e.next=6,n.onWillDismiss().then((function(t){null!=t.data&&t.data.success&&o.obtenerCamiones()}));case 6:case"end":return e.stop()}}),e,this)})))}}]),c}(h.a),X.\u0275fac=function(t){return new(t||X)(P.Jb(O.a),P.Jb(p.Q),P.Jb(p.J))},X.\u0275cmp=P.Db({type:X,selectors:[["app-camiones"]],features:[P.vb],decls:13,vars:7,consts:[["slot","start"],[1,"ion-padding"],["exportFilename","camiones","styleClass","p-datatable-striped p-datatable-responsive-demo","currentPageReportTemplate","Mostrando {first} a {last} de {totalRecords} registros",3,"columns","value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["label","Agregar Nuevo","icon","pi pi-plus","iconPos","left",3,"click"],["label","Exportar a CSV","icon","pi pi-file-o","iconPos","left",3,"click"],["pSortableColumn","placa"],["field","placa"],["pSortableColumn","remolque"],["field","remolque"],["pSortableColumn","esPropio"],["field","esPropio"],["pSortableColumn","activo"],["field","activo"],["rowspan","2",1,"action-column"],["pInputText","","type","text","placeholder","Buscar por Placa",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Remolque",1,"p-column-filter",3,"input"],["styleClass","p-column-filter","placeholder","Buscar por Propio",3,"options","showClear","onChange"],["pTemplate","item"],["styleClass","p-column-filter","placeholder","Buscar por Estado",3,"options","showClear","onChange"],[1,"p-column-title"],[1,"action-column"],["label","Editar","icon","pi pi-pencil","iconPos","left",1,"primary-button",3,"click"]],template:function(t,e){1&t&&(P.Pb(0,"ion-header"),P.Pb(1,"ion-toolbar"),P.Pb(2,"ion-buttons",0),P.Kb(3,"ion-menu-button"),P.Ob(),P.Pb(4,"ion-title"),P.zc(5," Camiones "),P.Ob(),P.Ob(),P.Kb(6,"app-user-menu"),P.Ob(),P.Pb(7,"ion-content",1),P.Pb(8,"p-table",2,3),P.xc(10,z,3,0,"ng-template",4),P.xc(11,j,26,4,"ng-template",5),P.xc(12,S,19,4,"ng-template",6),P.Ob(),P.Ob()),2&t&&(P.yb(8),P.fc("columns",e.cols)("value",e.camiones)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",P.hc(6,J)))},directives:[p.m,p.E,p.d,p.x,p.D,C.a,p.g,w.e,x.b,k.a,w.d,w.c,M.a],styles:["[_nghost-%COMP%]     .p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{display:none}.p-d-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.action-column[_ngcontent-%COMP%]{text-align:center!important}@media screen and (max-width:40rem){[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot>tr>td, [_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-thead>tr>th{display:none!important}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td{text-align:left;display:block;width:100%;float:left;clear:left;border:0}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{padding:.4rem;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4rem;font-weight:700}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td:last-child{border-bottom:1px solid var(--surface-d)}}"]}),X)}],A=((q=function e(){t(this,e)}).\u0275mod=P.Hb({type:q}),q.\u0275inj=P.Gb({factory:function(t){return new(t||q)},imports:[[f.i.forChild(I)],f.i]}),q),D=c("m/q5"),T=((E=function e(){t(this,e)}).\u0275mod=P.Hb({type:E}),E.\u0275inj=P.Gb({factory:function(t){return new(t||E)},imports:[[s.b,u.e,p.G,A,w.f,M.b,k.b,D.a]]}),E)}}])}();