(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{XQjU:function(e,t,n){"use strict";n.r(t),n.d(t,"ProgramacionViajesPageModule",(function(){return Q}));var i=n("ofXK"),o=n("3Pt+"),a=n("TEn/"),c=n("tyNb"),r=n("mrSG"),b=n("+Qoh"),s=n("BsNa"),l=n("G7hY"),u=n("ypJn"),d=n("YxHF"),p=n("BEOd"),h=n("fXoL"),m=n("BQIx"),O=n("ova0"),P=n("+nHt"),g=n("JmBq"),f=n("FdPp");function v(e,t){if(1&e){const e=h.Qb();h.Pb(0,"ion-toolbar"),h.Pb(1,"ion-title"),h.Pb(2,"div",0),h.Pb(3,"span"),h.zc(4,"Clientes"),h.Ob(),h.Pb(5,"ion-button",1),h.Xb("click",(function(){return h.rc(e),h.Zb(),h.pc(17).close()})),h.Kb(6,"ion-icon",17),h.Ob(),h.Ob(),h.Ob(),h.Ob()}}function C(e,t){if(1&e){const e=h.Qb();h.Pb(0,"ion-toolbar"),h.Pb(1,"ion-title"),h.Pb(2,"div",0),h.Pb(3,"span"),h.zc(4,"Camiones"),h.Ob(),h.Pb(5,"ion-button",1),h.Xb("click",(function(){return h.rc(e),h.Zb(),h.pc(17).close()})),h.Kb(6,"ion-icon",17),h.Ob(),h.Ob(),h.Ob(),h.Ob()}}function x(e,t){if(1&e){const e=h.Qb();h.Pb(0,"ion-toolbar"),h.Pb(1,"ion-title"),h.Pb(2,"div",0),h.Pb(3,"span"),h.zc(4,"Conductores"),h.Ob(),h.Pb(5,"ion-button",1),h.Xb("click",(function(){return h.rc(e),h.Zb(),h.pc(29).close()})),h.Kb(6,"ion-icon",17),h.Ob(),h.Ob(),h.Ob(),h.Ob()}}function y(e,t){if(1&e){const e=h.Qb();h.Pb(0,"ion-toolbar"),h.Pb(1,"ion-title"),h.Pb(2,"div",0),h.Pb(3,"span"),h.zc(4,"Auxiliares"),h.Ob(),h.Pb(5,"ion-button",1),h.Xb("click",(function(){return h.rc(e),h.Zb(),h.pc(35).close()})),h.Kb(6,"ion-icon",17),h.Ob(),h.Ob(),h.Ob(),h.Ob()}}function M(e,t){if(1&e){const e=h.Qb();h.Pb(0,"ion-toolbar"),h.Pb(1,"ion-title"),h.Pb(2,"div",0),h.Pb(3,"span"),h.zc(4,"Origen"),h.Ob(),h.Pb(5,"ion-button",1),h.Xb("click",(function(){return h.rc(e),h.Zb(),h.pc(41).close()})),h.Kb(6,"ion-icon",17),h.Ob(),h.Ob(),h.Ob(),h.Ob()}}function j(e,t){if(1&e){const e=h.Qb();h.Pb(0,"ion-toolbar"),h.Pb(1,"ion-title"),h.Pb(2,"div",0),h.Pb(3,"span"),h.zc(4,"Destino"),h.Ob(),h.Pb(5,"ion-button",1),h.Xb("click",(function(){return h.rc(e),h.Zb(),h.pc(47).close()})),h.Kb(6,"ion-icon",17),h.Ob(),h.Ob(),h.Ob(),h.Ob()}}let z=(()=>{class e extends p.a{constructor(e,t,n,i,o){super(e,t,n,i,o),this.getService=e,this.postService=t,this.putService=n,this.toastCtrl=i,this.modalCtrl=o,this.url="viajes",this.urlOrigenDestinoCliente="sedes/PorCliente/",this.viaje=new l.a,this.cliente=new s.a,this.camion=new b.a,this.conductor=new d.a,this.auxiliar=new d.a,this.origen=new u.a,this.destino=new u.a}ngOnInit(){null!=this.id&&super.consumirGet(this.url+"/"+this.id).then(e=>{this.viaje=e,this.cliente=e.cliente,this.camion=e.camion,this.conductor=e.conductor,this.auxiliar=e.auxiliar,this.origen=e.sedeOrigen,this.destino=e.sedeDestino,this.fecha=e.fecha})}guardar(){return Object(r.a)(this,void 0,void 0,(function*(){null!=this.id?this.actualizarviaje():this.crearviaje()}))}crearviaje(){this.viaje.idCliente=this.cliente.id,this.viaje.idOrigen=this.origen.id,this.viaje.idDestino=this.destino.id,this.viaje.idCamion=this.camion.id,this.viaje.idConductor=this.conductor.id,this.viaje.idAuxiliar=null==this.auxiliar?null:this.auxiliar.id,this.viaje.fecha=this.fecha,console.log(this.viaje),this.postService.post(this.url,this.viaje).subscribe(e=>Object(r.a)(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:e.message,position:"middle",duration:e.success?3e3:0,color:e.success?"success":"danger",buttons:e.success?[]:[{text:"Aceptar",role:"cancel"}]})).present(),e.success&&this.dismiss(e)})),e=>Object(r.a)(this,void 0,void 0,(function*(){this.showModalError(e)})))}actualizarviaje(){this.putService.put(this.url,this.id,this.viaje).subscribe(e=>Object(r.a)(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:e.message,position:"middle",duration:e.success?3e3:0,color:e.success?"success":"danger",buttons:e.success?[]:[{text:"Aceptar",role:"cancel"}]})).present(),e.success&&this.dismiss(e)})),e=>Object(r.a)(this,void 0,void 0,(function*(){this.showModalError(e)})))}dismiss(e){this.modalCtrl.dismiss(e)}showModalError(e){return Object(r.a)(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:e,position:"middle",color:"danger",buttons:[{text:"Aceptar",role:"cancel"}]})).present(),console.log(e)}))}obtenerOrigenesDestinos(){console.log(this.urlOrigenDestinoCliente+this.cliente.id),this.getService.get(this.urlOrigenDestinoCliente+this.cliente.id).subscribe(e=>Object(r.a)(this,void 0,void 0,(function*(){e.success?this.origenesDestinos=e.message:this.showModalError(e.message)})))}}return e.\u0275fac=function(t){return new(t||e)(h.Jb(m.a),h.Jb(O.a),h.Jb(P.a),h.Jb(a.Q),h.Jb(a.J))},e.\u0275cmp=h.Db({type:e,selectors:[["app-detalle-programacion-viajes"]],inputs:{id:"id"},features:[h.vb],decls:63,vars:22,consts:[[1,"modal-title"],["fill","clear","color","dark",3,"click"],["name","close-outline"],[1,"ion-padding"],["placeholder","Fecha Programada","displayFormat","YYYY/MM/DD h:mm A",3,"ngModel","ngModelChange"],["itemValueField","id","itemTextField","nombre",3,"ngModel","items","canSearch","ngModelChange","onChange"],["portComponent",""],["ionicSelectableHeaderTemplate",""],["itemValueField","id","itemTextField","placa",3,"ngModel","items","canSearch","ngModelChange"],["itemValueField","id","itemTextField","nombre",3,"ngModel","items","canSearch","ngModelChange"],["portComponent1",""],["portComponent2",""],["portComponent3",""],["portComponent4",""],["type","number",3,"ngModel","ngModelChange"],["type","text",3,"ngModel","ngModelChange"],[3,"click"],["name","close-circle",2,"font-size","24px"]],template:function(e,t){1&e&&(h.Pb(0,"ion-header"),h.Pb(1,"ion-toolbar"),h.Pb(2,"ion-title"),h.Pb(3,"div",0),h.Pb(4,"span"),h.zc(5,"Maestro Viajes"),h.Ob(),h.Pb(6,"ion-button",1),h.Xb("click",(function(){return t.dismiss(null)})),h.Kb(7,"ion-icon",2),h.Ob(),h.Ob(),h.Ob(),h.Ob(),h.Ob(),h.Pb(8,"ion-content",3),h.Pb(9,"ion-item"),h.Pb(10,"ion-label"),h.zc(11,"Fecha"),h.Ob(),h.Pb(12,"ion-datetime",4),h.Xb("ngModelChange",(function(e){return t.fecha=e})),h.Ob(),h.Ob(),h.Pb(13,"ion-item"),h.Pb(14,"ion-label"),h.zc(15,"Cliente"),h.Ob(),h.Pb(16,"ionic-selectable",5,6),h.Xb("ngModelChange",(function(e){return t.cliente=e}))("onChange",(function(){return t.obtenerOrigenesDestinos()})),h.xc(18,v,7,0,"ng-template",7),h.Ob(),h.Ob(),h.Pb(19,"ion-item"),h.Pb(20,"ion-label"),h.zc(21,"Placa"),h.Ob(),h.Pb(22,"ionic-selectable",8,6),h.Xb("ngModelChange",(function(e){return t.camion=e})),h.xc(24,C,7,0,"ng-template",7),h.Ob(),h.Ob(),h.Pb(25,"ion-item"),h.Pb(26,"ion-label"),h.zc(27,"Conductor"),h.Ob(),h.Pb(28,"ionic-selectable",9,10),h.Xb("ngModelChange",(function(e){return t.conductor=e})),h.xc(30,x,7,0,"ng-template",7),h.Ob(),h.Ob(),h.Pb(31,"ion-item"),h.Pb(32,"ion-label"),h.zc(33,"Auxiliar"),h.Ob(),h.Pb(34,"ionic-selectable",9,11),h.Xb("ngModelChange",(function(e){return t.auxiliar=e})),h.xc(36,y,7,0,"ng-template",7),h.Ob(),h.Ob(),h.Pb(37,"ion-item"),h.Pb(38,"ion-label"),h.zc(39,"Origen"),h.Ob(),h.Pb(40,"ionic-selectable",9,12),h.Xb("ngModelChange",(function(e){return t.origen=e})),h.xc(42,M,7,0,"ng-template",7),h.Ob(),h.Ob(),h.Pb(43,"ion-item"),h.Pb(44,"ion-label"),h.zc(45,"Destino"),h.Ob(),h.Pb(46,"ionic-selectable",9,13),h.Xb("ngModelChange",(function(e){return t.destino=e})),h.xc(48,j,7,0,"ng-template",7),h.Ob(),h.Ob(),h.Pb(49,"ion-item"),h.Pb(50,"ion-label"),h.zc(51,"Valor Anticipo"),h.Ob(),h.Pb(52,"ion-input",14),h.Xb("ngModelChange",(function(e){return t.viaje.valorAnticipo=e})),h.Ob(),h.Ob(),h.Pb(53,"ion-item"),h.Pb(54,"ion-label"),h.zc(55,"N\xfamero Manifiesto"),h.Ob(),h.Pb(56,"ion-input",15),h.Xb("ngModelChange",(function(e){return t.viaje.numeroManifiesto=e})),h.Ob(),h.Ob(),h.Pb(57,"ion-item"),h.Pb(58,"ion-label"),h.zc(59,"N\xfamero Cuenta"),h.Ob(),h.Pb(60,"ion-input",15),h.Xb("ngModelChange",(function(e){return t.viaje.numeroCuenta=e})),h.Ob(),h.Ob(),h.Pb(61,"ion-button",16),h.Xb("click",(function(){return t.guardar()})),h.zc(62,"Guardar"),h.Ob(),h.Ob()),2&e&&(h.yb(12),h.fc("ngModel",t.fecha),h.yb(4),h.fc("ngModel",t.cliente)("items",t.clientes)("canSearch",!0),h.yb(6),h.fc("ngModel",t.camion)("items",t.camiones)("canSearch",!0),h.yb(6),h.fc("ngModel",t.conductor)("items",t.conductores)("canSearch",!0),h.yb(6),h.fc("ngModel",t.auxiliar)("items",t.auxiliares)("canSearch",!0),h.yb(6),h.fc("ngModel",t.origen)("items",t.origenesDestinos)("canSearch",!0),h.yb(6),h.fc("ngModel",t.destino)("items",t.origenesDestinos)("canSearch",!0),h.yb(6),h.fc("ngModel",t.viaje.valorAnticipo),h.yb(4),h.fc("ngModel",t.viaje.numeroManifiesto),h.yb(4),h.fc("ngModel",t.viaje.numeroCuenta))},directives:[a.m,a.E,a.D,a.c,a.n,a.g,a.r,a.u,a.h,a.O,o.h,o.j,g.a,f.a,a.q,a.L,a.P],styles:[".modal-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.modal-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center}"]}),e})();var w=n("RyMC"),X=n("rEr+"),D=n("7zfz"),A=n("jIHw");function S(e,t){if(1&e){const e=h.Qb();h.Pb(0,"div",7),h.Pb(1,"p-button",8),h.Xb("click",(function(){return h.rc(e),h.Zb().mostrarModal(null)})),h.Ob(),h.Pb(2,"p-button",9),h.Xb("click",(function(){return h.rc(e),h.Zb(),h.pc(9).exportCSV()})),h.Ob(),h.Ob()}}function k(e,t){if(1&e){const e=h.Qb();h.Pb(0,"tr"),h.Pb(1,"th",10),h.zc(2,"Fecha "),h.Kb(3,"p-sortIcon",11),h.Ob(),h.Pb(4,"th",12),h.zc(5,"Placa "),h.Kb(6,"p-sortIcon",13),h.Ob(),h.Pb(7,"th",14),h.zc(8,"Conductor "),h.Kb(9,"p-sortIcon",15),h.Ob(),h.Pb(10,"th",16),h.zc(11,"Auxiliar "),h.Kb(12,"p-sortIcon",17),h.Ob(),h.Pb(13,"th",18),h.zc(14,"Cliente "),h.Kb(15,"p-sortIcon",19),h.Ob(),h.Pb(16,"th",20),h.zc(17,"Origen "),h.Kb(18,"p-sortIcon",21),h.Ob(),h.Pb(19,"th",22),h.zc(20,"Destino "),h.Kb(21,"p-sortIcon",23),h.Ob(),h.Pb(22,"th",24),h.zc(23,"Desfase "),h.Kb(24,"p-sortIcon",25),h.Ob(),h.Pb(25,"th",26),h.zc(26,"Acciones"),h.Ob(),h.Ob(),h.Pb(27,"tr"),h.Pb(28,"th"),h.Pb(29,"input",27),h.Xb("input",(function(t){return h.rc(e),h.Zb(),h.pc(9).filter(t.target.value,"fecha","contains")})),h.Ob(),h.Ob(),h.Pb(30,"th"),h.Pb(31,"input",28),h.Xb("input",(function(t){return h.rc(e),h.Zb(),h.pc(9).filter(t.target.value,"placa","contains")})),h.Ob(),h.Ob(),h.Pb(32,"th"),h.Pb(33,"input",29),h.Xb("input",(function(t){return h.rc(e),h.Zb(),h.pc(9).filter(t.target.value,"nombreConductor","contains")})),h.Ob(),h.Ob(),h.Pb(34,"th"),h.Pb(35,"input",30),h.Xb("input",(function(t){return h.rc(e),h.Zb(),h.pc(9).filter(t.target.value,"nombreAuxiliar","contains")})),h.Ob(),h.Ob(),h.Pb(36,"th"),h.Pb(37,"input",31),h.Xb("input",(function(t){return h.rc(e),h.Zb(),h.pc(9).filter(t.target.value,"nombreCliente","contains")})),h.Ob(),h.Ob(),h.Pb(38,"th"),h.Pb(39,"input",32),h.Xb("input",(function(t){return h.rc(e),h.Zb(),h.pc(9).filter(t.target.value,"nombreOrigen","contains")})),h.Ob(),h.Ob(),h.Pb(40,"th"),h.Pb(41,"input",33),h.Xb("input",(function(t){return h.rc(e),h.Zb(),h.pc(9).filter(t.target.value,"nombreDestino","contains")})),h.Ob(),h.Ob(),h.Pb(42,"th"),h.Pb(43,"input",34),h.Xb("input",(function(t){return h.rc(e),h.Zb(),h.pc(9).filter(t.target.value,"desfase","contains")})),h.Ob(),h.Ob(),h.Ob()}}function I(e,t){if(1&e){const e=h.Qb();h.Pb(0,"tr"),h.Pb(1,"td"),h.Pb(2,"span",35),h.zc(3,"Fecha "),h.Ob(),h.zc(4),h.ac(5,"date"),h.Ob(),h.Pb(6,"td"),h.Pb(7,"span",35),h.zc(8,"Placa "),h.Ob(),h.zc(9),h.Ob(),h.Pb(10,"td"),h.Pb(11,"span",35),h.zc(12,"Conductor "),h.Ob(),h.zc(13),h.Ob(),h.Pb(14,"td"),h.Pb(15,"span",35),h.zc(16,"Auxiliar "),h.Ob(),h.zc(17),h.Ob(),h.Pb(18,"td"),h.Pb(19,"span",35),h.zc(20,"Cliente "),h.Ob(),h.zc(21),h.Ob(),h.Pb(22,"td"),h.Pb(23,"span",35),h.zc(24,"Origen "),h.Ob(),h.zc(25),h.Ob(),h.Pb(26,"td"),h.Pb(27,"span",35),h.zc(28,"Destino "),h.Ob(),h.zc(29),h.Ob(),h.Pb(30,"td"),h.Pb(31,"span",35),h.zc(32,"Desfase "),h.Ob(),h.zc(33),h.Ob(),h.Pb(34,"td",36),h.Pb(35,"p-button",37),h.Xb("click",(function(){h.rc(e);const n=t.$implicit;return h.Zb().mostrarModal(n.id)})),h.Ob(),h.Ob(),h.Ob()}if(2&e){const e=t.$implicit;h.yb(4),h.Ac(h.bc(5,8,e.fecha,"dd/MM/yyyy h:mm")),h.yb(5),h.Ac(e.placa),h.yb(4),h.Ac(e.nombreConductor),h.yb(4),h.Ac(e.nombreAuxiliar),h.yb(4),h.Ac(e.nombreCliente),h.yb(4),h.Ac(e.nombreOrigen),h.yb(4),h.Ac(e.nombreDestino),h.yb(4),h.Ac(e.desfase)}}const K=function(){return[10,25,50]},F=[{path:"",component:(()=>{class e{constructor(e,t,n){this.getService=e,this.toastCtrl=t,this.modalCtrl=n,this.url="viajes",this.viajes=[],this.statuses=[{label:"Activo",value:"true"},{label:"Inactivo",value:"false"}],this.cols=[{field:"nombre",header:"Nombre"},{field:"activo",header:"Estado"}]}ngOnInit(){this.obtenerViajes()}obtenerViajes(){this.getService.get(this.url).subscribe(e=>Object(r.a)(this,void 0,void 0,(function*(){e.success?this.viajes=e.message:((yield this.toastCtrl.create({message:e.message,position:"middle",buttons:[{text:"Aceptar",role:"cancel"}]})).present(),console.log(e.message))})))}mostrarModal(e){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield this.modalCtrl.create({component:z,componentProps:{id:e},backdropDismiss:!1,cssClass:"long-modal"});t.present(),yield t.onWillDismiss().then(e=>{null!=e.data&&e.data.success&&this.obtenerViajes()})}))}}return e.\u0275fac=function(t){return new(t||e)(h.Jb(m.a),h.Jb(a.Q),h.Jb(a.J))},e.\u0275cmp=h.Db({type:e,selectors:[["app-programacion-viajes"]],decls:13,vars:7,consts:[["slot","start"],[1,"ion-padding"],["exportFilename","viajes","styleClass","p-datatable-striped p-datatable-responsive-demo","currentPageReportTemplate","Mostrando {first} a {last} de {totalRecords} registros",3,"columns","value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["label","Agregar Nuevo","icon","pi pi-plus","iconPos","left",3,"click"],["label","Exportar a CSV","icon","pi pi-file-o","iconPos","left",3,"click"],["pSortableColumn","Fecha"],["field","fecha"],["pSortableColumn","Placa"],["field","placa"],["pSortableColumn","Conductor"],["field","nombreConductor"],["pSortableColumn","Auxiliar"],["field","nombreAuxiliar"],["pSortableColumn","Cliente"],["field","nombreCliente"],["pSortableColumn","Origen"],["field","nombreOrigen"],["pSortableColumn","Destino"],["field","nombreDestino"],["pSortableColumn","Desfase"],["field","desfase"],["rowspan","2",1,"action-column"],["pInputText","","type","text","placeholder","Buscar por Fecha",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Placa",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Conductor",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Auxiliar",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Cliente",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Origen",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Destino",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Desfase",1,"p-column-filter",3,"input"],[1,"p-column-title"],[1,"action-column"],["label","Editar","icon","pi pi-pencil","iconPos","left",1,"primary-button",3,"click"]],template:function(e,t){1&e&&(h.Pb(0,"ion-header"),h.Pb(1,"ion-toolbar"),h.Pb(2,"ion-buttons",0),h.Kb(3,"ion-menu-button"),h.Ob(),h.Pb(4,"ion-title"),h.zc(5," Programaci\xf3n Viajes "),h.Ob(),h.Ob(),h.Kb(6,"app-user-menu"),h.Ob(),h.Pb(7,"ion-content",1),h.Pb(8,"p-table",2,3),h.xc(10,S,3,0,"ng-template",4),h.xc(11,k,44,0,"ng-template",5),h.xc(12,I,36,11,"ng-template",6),h.Ob(),h.Ob()),2&e&&(h.yb(8),h.fc("columns",t.cols)("value",t.viajes)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",h.hc(6,K)))},directives:[a.m,a.E,a.d,a.x,a.D,w.a,a.g,X.e,D.b,A.a,X.d,X.c],pipes:[i.d],styles:["[_nghost-%COMP%]     .p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{display:none}.p-d-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.action-column[_ngcontent-%COMP%]{text-align:center!important}@media screen and (max-width:40rem){[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot>tr>td, [_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-thead>tr>th{display:none!important}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td{text-align:left;display:block;width:100%;float:left;clear:left;border:0}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{padding:.4rem;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4rem;font-weight:700}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td:last-child{border-bottom:1px solid var(--surface-d)}}"]}),e})()}];let T=(()=>{class e{}return e.\u0275mod=h.Hb({type:e}),e.\u0275inj=h.Gb({factory:function(t){return new(t||e)},imports:[[c.i.forChild(F)],c.i]}),e})();var Z=n("arFO"),J=n("m/q5");let Q=(()=>{class e{}return e.\u0275mod=h.Hb({type:e}),e.\u0275inj=h.Gb({factory:function(t){return new(t||e)},imports:[[i.b,o.e,a.G,T,X.f,Z.b,A.b,J.a]]}),e})()}}]);