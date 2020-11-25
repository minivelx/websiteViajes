!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{cDn4:function(t,o,a){"use strict";a.r(o),a.d(o,"CamionesPageModule",(function(){return I}));var i,r=a("ofXK"),s=a("3Pt+"),c=a("TEn/"),l=a("tyNb"),b=a("mrSG"),u=a("+Qoh"),p=a("fXoL"),d=a("BQIx"),m=a("ova0"),f=a("+nHt"),h=((i=function(){function t(n,o,a,i,r){e(this,t),this.getService=n,this.postService=o,this.putService=a,this.toastCtrl=i,this.modalCtrl=r,this.url="camiones",this.camion=new u.a}return n(t,[{key:"ngOnInit",value:function(){var e=this;null!=this.id&&this.getService.get(this.url,this.id).subscribe((function(t){t.success&&(e.camion=t.message)}))}},{key:"guardar",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!=this.id?this.actualizarCamion():this.crearCamion();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"crearCamion",value:function(){var e=this;this.postService.post(this.url,this.camion).subscribe((function(t){return Object(b.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastCtrl.create({message:t.message,position:"middle",duration:t.success?3e3:0,color:t.success?"success":"danger",buttons:t.success?[]:[{text:"Aceptar",role:"cancel"}]});case 2:e.sent.present(),t.success&&this.dismiss(t);case 4:case"end":return e.stop()}}),e,this)})))}),(function(t){return Object(b.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastCtrl.create({message:t,position:"middle",color:"danger",buttons:[{text:"Aceptar",role:"cancel"}]});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}))}},{key:"actualizarCamion",value:function(){var e=this;this.putService.put(this.url,this.id,this.camion).subscribe((function(t){return Object(b.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastCtrl.create({message:t.message,position:"middle",duration:t.success?3e3:0,color:t.success?"success":"danger",buttons:t.success?[]:[{text:"Aceptar",role:"cancel"}]});case 2:e.sent.present(),t.success&&this.dismiss(t);case 4:case"end":return e.stop()}}),e,this)})))}),(function(t){return Object(b.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastCtrl.create({message:t,position:"middle",color:"danger",buttons:[{text:"Aceptar",role:"cancel"}]});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}))}},{key:"dismiss",value:function(e){this.modalCtrl.dismiss(e)}}]),t}()).\u0275fac=function(e){return new(e||i)(p.Jb(d.a),p.Jb(m.a),p.Jb(f.a),p.Jb(c.Q),p.Jb(c.J))},i.\u0275cmp=p.Db({type:i,selectors:[["app-detalle-camion"]],inputs:{id:"id"},decls:27,vars:4,consts:[[1,"modal-title"],["fill","clear","color","dark",3,"click"],["name","close-outline"],[1,"ion-padding"],["type","text",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[1,"primary-button",3,"click"]],template:function(e,t){1&e&&(p.Pb(0,"ion-header"),p.Pb(1,"ion-toolbar"),p.Pb(2,"ion-title"),p.Pb(3,"div",0),p.Pb(4,"span"),p.zc(5,"Maestro Camiones"),p.Ob(),p.Pb(6,"ion-button",1),p.Xb("click",(function(){return t.dismiss(null)})),p.Kb(7,"ion-icon",2),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Pb(8,"ion-content",3),p.Pb(9,"ion-item"),p.Pb(10,"ion-label"),p.zc(11,"Placa"),p.Ob(),p.Pb(12,"ion-input",4),p.Xb("ngModelChange",(function(e){return t.camion.placa=e})),p.Ob(),p.Ob(),p.Pb(13,"ion-item"),p.Pb(14,"ion-label"),p.zc(15,"Remolque"),p.Ob(),p.Pb(16,"ion-input",4),p.Xb("ngModelChange",(function(e){return t.camion.remolque=e})),p.Ob(),p.Ob(),p.Pb(17,"ion-item"),p.Pb(18,"ion-label"),p.zc(19,"Camion Propio"),p.Ob(),p.Pb(20,"ion-checkbox",5),p.Xb("ngModelChange",(function(e){return t.camion.esPropio=e})),p.Ob(),p.Ob(),p.Pb(21,"ion-item"),p.Pb(22,"ion-label"),p.zc(23,"Activo"),p.Ob(),p.Pb(24,"ion-checkbox",5),p.Xb("ngModelChange",(function(e){return t.camion.activo=e})),p.Ob(),p.Ob(),p.Pb(25,"ion-button",6),p.Xb("click",(function(){return t.guardar()})),p.zc(26,"Guardar"),p.Ob(),p.Ob()),2&e&&(p.yb(12),p.fc("ngModel",t.camion.placa),p.yb(4),p.fc("ngModel",t.camion.remolque),p.yb(4),p.fc("ngModel",t.camion.esPropio),p.yb(4),p.fc("ngModel",t.camion.activo))},directives:[c.m,c.E,c.D,c.c,c.n,c.g,c.r,c.u,c.q,c.P,s.h,s.j,c.e,c.a],styles:[".modal-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.modal-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center}"]}),i),g=a("e8h1"),P=a("RyMC"),v=a("rEr+"),O=a("7zfz"),C=a("jIHw"),y=a("arFO");function w(e,t){if(1&e){var n=p.Qb();p.Pb(0,"div",7),p.Pb(1,"p-button",8),p.Xb("click",(function(){return p.rc(n),p.Zb().mostrarModal(null)})),p.Ob(),p.Pb(2,"p-button",9),p.Xb("click",(function(){return p.rc(n),p.Zb(),p.pc(9).exportCSV()})),p.Ob(),p.Ob()}}function x(e,t){if(1&e&&(p.Pb(0,"span"),p.zc(1),p.Ob()),2&e){var n=t.$implicit;p.yb(1),p.Ac(n.label)}}function k(e,t){if(1&e&&(p.Pb(0,"span"),p.zc(1),p.Ob()),2&e){var n=t.$implicit;p.yb(1),p.Ac(n.label)}}function M(e,t){if(1&e){var n=p.Qb();p.Pb(0,"tr"),p.Pb(1,"th",10),p.zc(2,"Placa "),p.Kb(3,"p-sortIcon",11),p.Ob(),p.Pb(4,"th",12),p.zc(5,"Remolque "),p.Kb(6,"p-sortIcon",13),p.Ob(),p.Pb(7,"th",14),p.zc(8,"Propio "),p.Kb(9,"p-sortIcon",15),p.Ob(),p.Pb(10,"th",16),p.zc(11,"Estado "),p.Kb(12,"p-sortIcon",17),p.Ob(),p.Pb(13,"th",18),p.zc(14,"Acciones"),p.Ob(),p.Ob(),p.Pb(15,"tr"),p.Pb(16,"th"),p.Pb(17,"input",19),p.Xb("input",(function(e){return p.rc(n),p.Zb(),p.pc(9).filter(e.target.value,"placa","contains")})),p.Ob(),p.Ob(),p.Pb(18,"th"),p.Pb(19,"input",20),p.Xb("input",(function(e){return p.rc(n),p.Zb(),p.pc(9).filter(e.target.value,"remolque","contains")})),p.Ob(),p.Ob(),p.Pb(20,"th"),p.Pb(21,"p-dropdown",21),p.Xb("onChange",(function(e){return p.rc(n),p.Zb(),p.pc(9).filter(e.value,"esPropio","equals")})),p.xc(22,x,2,1,"ng-template",22),p.Ob(),p.Ob(),p.Pb(23,"th"),p.Pb(24,"p-dropdown",23),p.Xb("onChange",(function(e){return p.rc(n),p.Zb(),p.pc(9).filter(e.value,"activo","equals")})),p.xc(25,k,2,1,"ng-template",22),p.Ob(),p.Ob(),p.Ob()}if(2&e){var o=p.Zb();p.yb(21),p.fc("options",o.statusesPropio)("showClear",!0),p.yb(3),p.fc("options",o.statuses)("showClear",!0)}}function z(e,t){if(1&e){var n=p.Qb();p.Pb(0,"tr"),p.Pb(1,"td"),p.Pb(2,"span",24),p.zc(3,"Placa "),p.Ob(),p.zc(4),p.Ob(),p.Pb(5,"td"),p.Pb(6,"span",24),p.zc(7,"Remolque "),p.Ob(),p.zc(8),p.Ob(),p.Pb(9,"td"),p.Pb(10,"span",24),p.zc(11,"Propio "),p.Ob(),p.zc(12),p.Ob(),p.Pb(13,"td"),p.Pb(14,"span",24),p.zc(15,"Estado "),p.Ob(),p.zc(16),p.Ob(),p.Pb(17,"td",25),p.Pb(18,"p-button",26),p.Xb("click",(function(){p.rc(n);var e=t.$implicit;return p.Zb().mostrarModal(e.id)})),p.Ob(),p.Ob(),p.Ob()}if(2&e){var o=t.$implicit;p.yb(4),p.Ac(o.placa),p.yb(4),p.Ac(o.remolque),p.yb(4),p.Ac(1==o.esPropio?"Si":"No"),p.yb(4),p.Ac(1==o.activo?"Activo":"Inactivo")}}var R,S,q,A=function(){return[10,25,50]},X=[{path:"",component:(R=function(){function t(n,o,a,i){e(this,t),this.getService=n,this.toastCtrl=o,this.modalCtrl=a,this.storage=i,this.url="camiones",this.camiones=[],this.statuses=[{label:"Activo",value:"true"},{label:"Inactivo",value:"false"}],this.statusesPropio=[{label:"Si",value:"true"},{label:"No",value:"false"}],this.cols=[{field:"placa",header:"Placa"},{field:"remolque",header:"Remolque"},{field:"esPropio",header:"Propio"},{field:"activo",header:"Estado"}]}return n(t,[{key:"ngOnInit",value:function(){this.obtenerCamiones()}},{key:"obtenerCamiones",value:function(){var e=this;this.getService.get(this.url).subscribe((function(t){return Object(b.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.success){e.next=4;break}this.camiones=t.message,e.next=8;break;case 4:return e.next=6,this.toastCtrl.create({message:t.message,position:"middle",buttons:[{text:"Aceptar",role:"cancel"}]});case 6:e.sent.present(),console.log(t.message);case 8:case"end":return e.stop()}}),e,this)})))}))}},{key:"mostrarModal",value:function(e){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalCtrl.create({component:h,componentProps:{id:e},backdropDismiss:!1});case 2:return(n=t.sent).present(),t.next=6,n.onWillDismiss().then((function(e){null!=e.data&&e.data.success&&o.obtenerCamiones()}));case 6:case"end":return t.stop()}}),t,this)})))}}]),t}(),R.\u0275fac=function(e){return new(e||R)(p.Jb(d.a),p.Jb(c.Q),p.Jb(c.J),p.Jb(g.b))},R.\u0275cmp=p.Db({type:R,selectors:[["app-camiones"]],decls:13,vars:7,consts:[["slot","start"],[1,"ion-padding"],["exportFilename","camiones","styleClass","p-datatable-striped p-datatable-responsive-demo","currentPageReportTemplate","Mostrando {first} a {last} de {totalRecords} registros",3,"columns","value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["label","Agregar Nuevo","icon","pi pi-plus","iconPos","left",3,"click"],["label","Exportar a CSV","icon","pi pi-file-o","iconPos","left",3,"click"],["pSortableColumn","placa"],["field","placa"],["pSortableColumn","remolque"],["field","remolque"],["pSortableColumn","esPropio"],["field","esPropio"],["pSortableColumn","activo"],["field","activo"],["rowspan","2",1,"action-column"],["pInputText","","type","text","placeholder","Buscar por Placa",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Remolque",1,"p-column-filter",3,"input"],["styleClass","p-column-filter","placeholder","Buscar por Propio",3,"options","showClear","onChange"],["pTemplate","item"],["styleClass","p-column-filter","placeholder","Buscar por Estado",3,"options","showClear","onChange"],[1,"p-column-title"],[1,"action-column"],["label","Editar","icon","pi pi-pencil","iconPos","left",1,"primary-button",3,"click"]],template:function(e,t){1&e&&(p.Pb(0,"ion-header"),p.Pb(1,"ion-toolbar"),p.Pb(2,"ion-buttons",0),p.Kb(3,"ion-menu-button"),p.Ob(),p.Pb(4,"ion-title"),p.zc(5," Camiones "),p.Ob(),p.Ob(),p.Kb(6,"app-user-menu"),p.Ob(),p.Pb(7,"ion-content",1),p.Pb(8,"p-table",2,3),p.xc(10,w,3,0,"ng-template",4),p.xc(11,M,26,4,"ng-template",5),p.xc(12,z,19,4,"ng-template",6),p.Ob(),p.Ob()),2&e&&(p.yb(8),p.fc("columns",t.cols)("value",t.camiones)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",p.hc(6,A)))},directives:[c.m,c.E,c.d,c.x,c.D,P.a,c.g,v.e,O.b,C.a,v.d,v.c,y.a],styles:["[_nghost-%COMP%]     .p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{display:none}.p-d-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.action-column[_ngcontent-%COMP%]{text-align:center!important}@media screen and (max-width:40rem){[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot>tr>td, [_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-thead>tr>th{display:none!important}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td{text-align:left;display:block;width:100%;float:left;clear:left;border:0}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{padding:.4rem;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4rem;font-weight:700}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td:last-child{border-bottom:1px solid var(--surface-d)}}"]}),R)}],j=((S=function t(){e(this,t)}).\u0275mod=p.Hb({type:S}),S.\u0275inj=p.Gb({factory:function(e){return new(e||S)},imports:[[l.i.forChild(X)],l.i]}),S),J=a("m/q5"),I=((q=function t(){e(this,t)}).\u0275mod=p.Hb({type:q}),q.\u0275inj=p.Gb({factory:function(e){return new(e||q)},imports:[[r.b,s.e,c.G,j,v.f,y.b,C.b,J.a]]}),q)}}])}();