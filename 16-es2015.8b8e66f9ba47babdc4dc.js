(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{XQjU:function(e,t,n){"use strict";n.r(t),n.d(t,"ProgramacionViajesPageModule",(function(){return Q}));var i=n("ofXK"),o=n("3Pt+"),a=n("TEn/"),r=n("tyNb"),c=n("mrSG"),b=n("+Qoh"),l=n("BsNa"),s=n("G7hY"),u=n("ypJn"),p=n("YxHF"),d=n("BEOd"),m=n("fXoL"),h=n("BQIx"),P=n("ova0"),O=n("+nHt"),f=n("JmBq"),g=n("FdPp");function C(e,t){if(1&e){const e=m.Qb();m.Pb(0,"ion-toolbar"),m.Pb(1,"ion-title"),m.Pb(2,"div",0),m.Pb(3,"span"),m.zc(4,"Clientes"),m.Ob(),m.Pb(5,"ion-button",1),m.Xb("click",(function(){return m.rc(e),m.Zb(),m.pc(17).close()})),m.Kb(6,"ion-icon",17),m.Ob(),m.Ob(),m.Ob(),m.Ob()}}function v(e,t){if(1&e){const e=m.Qb();m.Pb(0,"ion-toolbar"),m.Pb(1,"ion-title"),m.Pb(2,"div",0),m.Pb(3,"span"),m.zc(4,"Camiones"),m.Ob(),m.Pb(5,"ion-button",1),m.Xb("click",(function(){return m.rc(e),m.Zb(),m.pc(17).close()})),m.Kb(6,"ion-icon",17),m.Ob(),m.Ob(),m.Ob(),m.Ob()}}function x(e,t){if(1&e){const e=m.Qb();m.Pb(0,"ion-toolbar"),m.Pb(1,"ion-title"),m.Pb(2,"div",0),m.Pb(3,"span"),m.zc(4,"Conductores"),m.Ob(),m.Pb(5,"ion-button",1),m.Xb("click",(function(){return m.rc(e),m.Zb(),m.pc(29).close()})),m.Kb(6,"ion-icon",17),m.Ob(),m.Ob(),m.Ob(),m.Ob()}}function y(e,t){if(1&e){const e=m.Qb();m.Pb(0,"ion-toolbar"),m.Pb(1,"ion-title"),m.Pb(2,"div",0),m.Pb(3,"span"),m.zc(4,"Auxiliares"),m.Ob(),m.Pb(5,"ion-button",1),m.Xb("click",(function(){return m.rc(e),m.Zb(),m.pc(35).close()})),m.Kb(6,"ion-icon",17),m.Ob(),m.Ob(),m.Ob(),m.Ob()}}function M(e,t){if(1&e){const e=m.Qb();m.Pb(0,"ion-toolbar"),m.Pb(1,"ion-title"),m.Pb(2,"div",0),m.Pb(3,"span"),m.zc(4,"Origen"),m.Ob(),m.Pb(5,"ion-button",1),m.Xb("click",(function(){return m.rc(e),m.Zb(),m.pc(41).close()})),m.Kb(6,"ion-icon",17),m.Ob(),m.Ob(),m.Ob(),m.Ob()}}function z(e,t){if(1&e){const e=m.Qb();m.Pb(0,"ion-toolbar"),m.Pb(1,"ion-title"),m.Pb(2,"div",0),m.Pb(3,"span"),m.zc(4,"Destino"),m.Ob(),m.Pb(5,"ion-button",1),m.Xb("click",(function(){return m.rc(e),m.Zb(),m.pc(47).close()})),m.Kb(6,"ion-icon",17),m.Ob(),m.Ob(),m.Ob(),m.Ob()}}let j=(()=>{class e extends d.a{constructor(e,t,n,i,o){super(e,t,n,i,o),this.getService=e,this.postService=t,this.putService=n,this.toastCtrl=i,this.modalCtrl=o,this.url="viajes",this.urlClientes="clientes",this.urlCamiones="camiones",this.urlConductores="account/listarPorRol/conductor",this.urlAuxiliares="account/listarPorRol/auxiliar",this.urlOrigenDestinoCliente="sedes/PorCliente",this.viaje=new s.a,this.cliente=new l.a,this.camion=new b.a,this.conductor=new p.a,this.auxiliar=new p.a,this.origen=new u.a,this.destino=new u.a,this.clicked=!1}ngOnInit(){this.obtenerClientes(),this.obtenerCamiones(),this.obtenerConductores(),this.obtenerAuxiliares(),null!=this.id&&super.consumirGet(this.url,this.id).then(e=>{this.viaje=e,this.cliente=e.cliente,this.camion=e.camion,this.conductor=e.conductor,this.auxiliar=e.auxiliar,this.origen=e.sedeOrigen,this.destino=e.sedeDestino,this.fecha=e.fecha})}guardar(){return Object(c.a)(this,void 0,void 0,(function*(){this.clicked=!0,null!=this.id?this.actualizarviaje():this.crearviaje()}))}crearviaje(){this.viaje.idCliente=this.cliente.id,this.viaje.idOrigen=this.origen.id,this.viaje.idDestino=this.destino.id,this.viaje.idCamion=this.camion.id,this.viaje.idConductor=this.conductor.id,this.viaje.idAuxiliar=null==this.auxiliar?null:this.auxiliar.id,this.viaje.fecha=this.fecha,console.log(this.viaje),super.consumirPost(this.url,this.viaje).then(e=>{this.clientes=e})}actualizarviaje(){super.consumirPut(this.url,this.id,this.viaje).then(e=>{this.clientes=e})}dismiss(e){this.modalCtrl.dismiss(e)}obtenerClientes(){super.consumirGet(this.urlClientes).then(e=>{this.clientes=e})}obtenerCamiones(){super.consumirGet(this.urlCamiones).then(e=>{this.camiones=e})}obtenerConductores(){super.consumirGet(this.urlConductores).then(e=>{this.conductores=e})}obtenerAuxiliares(){super.consumirGet(this.urlAuxiliares).then(e=>{this.auxiliares=e})}obtenerOrigenesDestinos(){super.consumirGet(this.urlOrigenDestinoCliente,this.cliente.id).then(e=>{this.origenesDestinos=e})}}return e.\u0275fac=function(t){return new(t||e)(m.Jb(h.a),m.Jb(P.a),m.Jb(O.a),m.Jb(a.Q),m.Jb(a.J))},e.\u0275cmp=m.Db({type:e,selectors:[["app-detalle-programacion-viajes"]],inputs:{id:"id"},features:[m.vb],decls:63,vars:23,consts:[[1,"modal-title"],["fill","clear","color","dark",3,"click"],["name","close-outline"],[1,"ion-padding"],["placeholder","Fecha Programada","displayFormat","YYYY/MM/DD h:mm A",3,"ngModel","ngModelChange"],["itemValueField","id","itemTextField","nombre",3,"ngModel","items","canSearch","ngModelChange","onChange"],["portComponent",""],["ionicSelectableHeaderTemplate",""],["itemValueField","id","itemTextField","placa",3,"ngModel","items","canSearch","ngModelChange"],["itemValueField","id","itemTextField","nombre",3,"ngModel","items","canSearch","ngModelChange"],["portComponent1",""],["portComponent2",""],["portComponent3",""],["portComponent4",""],["type","number",3,"ngModel","ngModelChange"],["type","text",3,"ngModel","ngModelChange"],[3,"disabled","click"],["name","close-circle",2,"font-size","24px"]],template:function(e,t){1&e&&(m.Pb(0,"ion-header"),m.Pb(1,"ion-toolbar"),m.Pb(2,"ion-title"),m.Pb(3,"div",0),m.Pb(4,"span"),m.zc(5,"Maestro Viajes"),m.Ob(),m.Pb(6,"ion-button",1),m.Xb("click",(function(){return t.dismiss(null)})),m.Kb(7,"ion-icon",2),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Pb(8,"ion-content",3),m.Pb(9,"ion-item"),m.Pb(10,"ion-label"),m.zc(11,"Fecha"),m.Ob(),m.Pb(12,"ion-datetime",4),m.Xb("ngModelChange",(function(e){return t.fecha=e})),m.Ob(),m.Ob(),m.Pb(13,"ion-item"),m.Pb(14,"ion-label"),m.zc(15,"Cliente"),m.Ob(),m.Pb(16,"ionic-selectable",5,6),m.Xb("ngModelChange",(function(e){return t.cliente=e}))("onChange",(function(){return t.obtenerOrigenesDestinos()})),m.xc(18,C,7,0,"ng-template",7),m.Ob(),m.Ob(),m.Pb(19,"ion-item"),m.Pb(20,"ion-label"),m.zc(21,"Placa"),m.Ob(),m.Pb(22,"ionic-selectable",8,6),m.Xb("ngModelChange",(function(e){return t.camion=e})),m.xc(24,v,7,0,"ng-template",7),m.Ob(),m.Ob(),m.Pb(25,"ion-item"),m.Pb(26,"ion-label"),m.zc(27,"Conductor"),m.Ob(),m.Pb(28,"ionic-selectable",9,10),m.Xb("ngModelChange",(function(e){return t.conductor=e})),m.xc(30,x,7,0,"ng-template",7),m.Ob(),m.Ob(),m.Pb(31,"ion-item"),m.Pb(32,"ion-label"),m.zc(33,"Auxiliar"),m.Ob(),m.Pb(34,"ionic-selectable",9,11),m.Xb("ngModelChange",(function(e){return t.auxiliar=e})),m.xc(36,y,7,0,"ng-template",7),m.Ob(),m.Ob(),m.Pb(37,"ion-item"),m.Pb(38,"ion-label"),m.zc(39,"Origen"),m.Ob(),m.Pb(40,"ionic-selectable",9,12),m.Xb("ngModelChange",(function(e){return t.origen=e})),m.xc(42,M,7,0,"ng-template",7),m.Ob(),m.Ob(),m.Pb(43,"ion-item"),m.Pb(44,"ion-label"),m.zc(45,"Destino"),m.Ob(),m.Pb(46,"ionic-selectable",9,13),m.Xb("ngModelChange",(function(e){return t.destino=e})),m.xc(48,z,7,0,"ng-template",7),m.Ob(),m.Ob(),m.Pb(49,"ion-item"),m.Pb(50,"ion-label"),m.zc(51,"Valor Anticipo"),m.Ob(),m.Pb(52,"ion-input",14),m.Xb("ngModelChange",(function(e){return t.viaje.valorAnticipo=e})),m.Ob(),m.Ob(),m.Pb(53,"ion-item"),m.Pb(54,"ion-label"),m.zc(55,"N\xfamero Manifiesto"),m.Ob(),m.Pb(56,"ion-input",15),m.Xb("ngModelChange",(function(e){return t.viaje.numeroManifiesto=e})),m.Ob(),m.Ob(),m.Pb(57,"ion-item"),m.Pb(58,"ion-label"),m.zc(59,"N\xfamero Cuenta"),m.Ob(),m.Pb(60,"ion-input",15),m.Xb("ngModelChange",(function(e){return t.viaje.numeroCuenta=e})),m.Ob(),m.Ob(),m.Pb(61,"ion-button",16),m.Xb("click",(function(){return t.guardar()})),m.zc(62,"Guardar"),m.Ob(),m.Ob()),2&e&&(m.yb(12),m.fc("ngModel",t.fecha),m.yb(4),m.fc("ngModel",t.cliente)("items",t.clientes)("canSearch",!0),m.yb(6),m.fc("ngModel",t.camion)("items",t.camiones)("canSearch",!0),m.yb(6),m.fc("ngModel",t.conductor)("items",t.conductores)("canSearch",!0),m.yb(6),m.fc("ngModel",t.auxiliar)("items",t.auxiliares)("canSearch",!0),m.yb(6),m.fc("ngModel",t.origen)("items",t.origenesDestinos)("canSearch",!0),m.yb(6),m.fc("ngModel",t.destino)("items",t.origenesDestinos)("canSearch",!0),m.yb(6),m.fc("ngModel",t.viaje.valorAnticipo),m.yb(4),m.fc("ngModel",t.viaje.numeroManifiesto),m.yb(4),m.fc("ngModel",t.viaje.numeroCuenta),m.yb(1),m.fc("disabled",t.clicked))},directives:[a.m,a.E,a.D,a.c,a.n,a.g,a.r,a.u,a.h,a.O,o.h,o.j,f.a,g.a,a.q,a.L,a.P],styles:[".modal-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.modal-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center}"]}),e})();var X=n("RyMC"),w=n("rEr+"),D=n("7zfz"),A=n("jIHw");function k(e,t){if(1&e){const e=m.Qb();m.Pb(0,"div",7),m.Pb(1,"p-button",8),m.Xb("click",(function(){return m.rc(e),m.Zb().mostrarModal(null)})),m.Ob(),m.Pb(2,"p-button",9),m.Xb("click",(function(){return m.rc(e),m.Zb(),m.pc(9).exportCSV()})),m.Ob(),m.Ob()}}function S(e,t){if(1&e){const e=m.Qb();m.Pb(0,"tr"),m.Pb(1,"th",10),m.zc(2,"Fecha "),m.Kb(3,"p-sortIcon",11),m.Ob(),m.Pb(4,"th",12),m.zc(5,"Placa "),m.Kb(6,"p-sortIcon",13),m.Ob(),m.Pb(7,"th",14),m.zc(8,"Conductor "),m.Kb(9,"p-sortIcon",15),m.Ob(),m.Pb(10,"th",16),m.zc(11,"Auxiliar "),m.Kb(12,"p-sortIcon",17),m.Ob(),m.Pb(13,"th",18),m.zc(14,"Cliente "),m.Kb(15,"p-sortIcon",19),m.Ob(),m.Pb(16,"th",20),m.zc(17,"Origen "),m.Kb(18,"p-sortIcon",21),m.Ob(),m.Pb(19,"th",22),m.zc(20,"Destino "),m.Kb(21,"p-sortIcon",23),m.Ob(),m.Pb(22,"th",24),m.zc(23,"Desfase "),m.Kb(24,"p-sortIcon",25),m.Ob(),m.Pb(25,"th",26),m.zc(26,"Acciones"),m.Ob(),m.Ob(),m.Pb(27,"tr"),m.Pb(28,"th"),m.Pb(29,"input",27),m.Xb("input",(function(t){return m.rc(e),m.Zb(),m.pc(9).filter(t.target.value,"fecha","contains")})),m.Ob(),m.Ob(),m.Pb(30,"th"),m.Pb(31,"input",28),m.Xb("input",(function(t){return m.rc(e),m.Zb(),m.pc(9).filter(t.target.value,"placa","contains")})),m.Ob(),m.Ob(),m.Pb(32,"th"),m.Pb(33,"input",29),m.Xb("input",(function(t){return m.rc(e),m.Zb(),m.pc(9).filter(t.target.value,"nombreConductor","contains")})),m.Ob(),m.Ob(),m.Pb(34,"th"),m.Pb(35,"input",30),m.Xb("input",(function(t){return m.rc(e),m.Zb(),m.pc(9).filter(t.target.value,"nombreAuxiliar","contains")})),m.Ob(),m.Ob(),m.Pb(36,"th"),m.Pb(37,"input",31),m.Xb("input",(function(t){return m.rc(e),m.Zb(),m.pc(9).filter(t.target.value,"nombreCliente","contains")})),m.Ob(),m.Ob(),m.Pb(38,"th"),m.Pb(39,"input",32),m.Xb("input",(function(t){return m.rc(e),m.Zb(),m.pc(9).filter(t.target.value,"nombreOrigen","contains")})),m.Ob(),m.Ob(),m.Pb(40,"th"),m.Pb(41,"input",33),m.Xb("input",(function(t){return m.rc(e),m.Zb(),m.pc(9).filter(t.target.value,"nombreDestino","contains")})),m.Ob(),m.Ob(),m.Pb(42,"th"),m.Pb(43,"input",34),m.Xb("input",(function(t){return m.rc(e),m.Zb(),m.pc(9).filter(t.target.value,"desfase","contains")})),m.Ob(),m.Ob(),m.Ob()}}function I(e,t){if(1&e){const e=m.Qb();m.Pb(0,"tr"),m.Pb(1,"td"),m.Pb(2,"span",35),m.zc(3,"Fecha "),m.Ob(),m.zc(4),m.ac(5,"date"),m.Ob(),m.Pb(6,"td"),m.Pb(7,"span",35),m.zc(8,"Placa "),m.Ob(),m.zc(9),m.Ob(),m.Pb(10,"td"),m.Pb(11,"span",35),m.zc(12,"Conductor "),m.Ob(),m.zc(13),m.Ob(),m.Pb(14,"td"),m.Pb(15,"span",35),m.zc(16,"Auxiliar "),m.Ob(),m.zc(17),m.Ob(),m.Pb(18,"td"),m.Pb(19,"span",35),m.zc(20,"Cliente "),m.Ob(),m.zc(21),m.Ob(),m.Pb(22,"td"),m.Pb(23,"span",35),m.zc(24,"Origen "),m.Ob(),m.zc(25),m.Ob(),m.Pb(26,"td"),m.Pb(27,"span",35),m.zc(28,"Destino "),m.Ob(),m.zc(29),m.Ob(),m.Pb(30,"td"),m.Pb(31,"span",35),m.zc(32,"Desfase "),m.Ob(),m.zc(33),m.Ob(),m.Pb(34,"td",36),m.Pb(35,"p-button",37),m.Xb("click",(function(){m.rc(e);const n=t.$implicit;return m.Zb().mostrarModal(n.id)})),m.Ob(),m.Ob(),m.Ob()}if(2&e){const e=t.$implicit;m.yb(4),m.Ac(m.bc(5,8,e.fecha,"dd/MM/yyyy h:mm")),m.yb(5),m.Ac(e.placa),m.yb(4),m.Ac(e.nombreConductor),m.yb(4),m.Ac(e.nombreAuxiliar),m.yb(4),m.Ac(e.nombreCliente),m.yb(4),m.Ac(e.nombreOrigen),m.yb(4),m.Ac(e.nombreDestino),m.yb(4),m.Ac(e.desfase)}}const K=function(){return[10,25,50]},T=[{path:"",component:(()=>{class e extends d.a{constructor(e,t,n){super(e,null,null,t,n),this.getService=e,this.toastCtrl=t,this.modalCtrl=n,this.url="viajes"}ngOnInit(){this.obtenerViajes()}obtenerViajes(){super.consumirGet(this.url).then(e=>{this.viajes=e})}mostrarModal(e){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.modalCtrl.create({component:j,componentProps:{id:e},backdropDismiss:!1,cssClass:"long-modal"});t.present(),yield t.onWillDismiss().then(e=>{null!=e.data&&e.data.success&&this.obtenerViajes()})}))}}return e.\u0275fac=function(t){return new(t||e)(m.Jb(h.a),m.Jb(a.Q),m.Jb(a.J))},e.\u0275cmp=m.Db({type:e,selectors:[["app-programacion-viajes"]],features:[m.vb],decls:13,vars:7,consts:[["slot","start"],[1,"ion-padding"],["exportFilename","viajes","styleClass","p-datatable-striped p-datatable-responsive-demo","currentPageReportTemplate","Mostrando {first} a {last} de {totalRecords} registros",3,"columns","value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["label","Agregar Nuevo","icon","pi pi-plus","iconPos","left",3,"click"],["label","Exportar a CSV","icon","pi pi-file-o","iconPos","left",3,"click"],["pSortableColumn","fecha"],["field","fecha"],["pSortableColumn","placa"],["field","placa"],["pSortableColumn","nombreConductor"],["field","nombreConductor"],["pSortableColumn","nombreAuxiliar"],["field","nombreAuxiliar"],["pSortableColumn","nombreCliente"],["field","nombreCliente"],["pSortableColumn","nombreOrigen"],["field","nombreOrigen"],["pSortableColumn","nombreDestino"],["field","nombreDestino"],["pSortableColumn","desfase"],["field","desfase"],["rowspan","2",1,"action-column"],["pInputText","","type","text","placeholder","Buscar por Fecha",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Placa",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Conductor",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Auxiliar",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Cliente",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Origen",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Destino",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Desfase",1,"p-column-filter",3,"input"],[1,"p-column-title"],[1,"action-column"],["label","Editar","icon","pi pi-pencil","iconPos","left",1,"primary-button",3,"click"]],template:function(e,t){1&e&&(m.Pb(0,"ion-header"),m.Pb(1,"ion-toolbar"),m.Pb(2,"ion-buttons",0),m.Kb(3,"ion-menu-button"),m.Ob(),m.Pb(4,"ion-title"),m.zc(5," Programaci\xf3n Viajes "),m.Ob(),m.Ob(),m.Kb(6,"app-user-menu"),m.Ob(),m.Pb(7,"ion-content",1),m.Pb(8,"p-table",2,3),m.xc(10,k,3,0,"ng-template",4),m.xc(11,S,44,0,"ng-template",5),m.xc(12,I,36,11,"ng-template",6),m.Ob(),m.Ob()),2&e&&(m.yb(8),m.fc("columns",t.cols)("value",t.viajes)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",m.hc(6,K)))},directives:[a.m,a.E,a.d,a.x,a.D,X.a,a.g,w.e,D.b,A.a,w.d,w.c],pipes:[i.d],styles:["[_nghost-%COMP%]     .p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{display:none}.p-d-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.action-column[_ngcontent-%COMP%]{text-align:center!important}@media screen and (max-width:40rem){[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot>tr>td, [_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-thead>tr>th{display:none!important}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td{text-align:left;display:block;width:100%;float:left;clear:left;border:0}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{padding:.4rem;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4rem;font-weight:700}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td:last-child{border-bottom:1px solid var(--surface-d)}}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275mod=m.Hb({type:e}),e.\u0275inj=m.Gb({factory:function(t){return new(t||e)},imports:[[r.i.forChild(T)],r.i]}),e})();var F=n("arFO"),J=n("m/q5");let Q=(()=>{class e{}return e.\u0275mod=m.Hb({type:e}),e.\u0275inj=m.Gb({factory:function(t){return new(t||e)},imports:[[i.b,o.e,a.G,Z,w.f,F.b,A.b,J.a]]}),e})()}}]);