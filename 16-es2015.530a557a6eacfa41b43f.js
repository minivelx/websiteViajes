(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0G8V":function(t,e,n){"use strict";n.r(e),n.d(e,"UsuariosPageModule",(function(){return A}));var i=n("ofXK"),o=n("3Pt+"),a=n("TEn/"),r=n("tyNb"),l=n("mrSG"),c=n("BsNa"),b=n("YxHF"),s=n("BEOd"),u=n("fXoL"),p=n("BQIx"),d=n("ova0"),m=n("+nHt"),h=n("JmBq"),P=n("FdPp");function f(t,e){if(1&t){const t=u.Qb();u.Pb(0,"ion-toolbar"),u.Pb(1,"ion-title"),u.Pb(2,"div",0),u.Pb(3,"span"),u.zc(4,"Clientes"),u.Ob(),u.Pb(5,"ion-button",1),u.Xb("click",(function(){return u.rc(t),u.Zb(),u.pc(29).close()})),u.Kb(6,"ion-icon",14),u.Ob(),u.Ob(),u.Ob(),u.Ob()}}function O(t,e){if(1&t){const t=u.Qb();u.Pb(0,"ion-item"),u.Pb(1,"ion-label"),u.zc(2),u.Ob(),u.Pb(3,"ion-checkbox",10),u.Xb("ngModelChange",(function(n){return u.rc(t),e.$implicit.seleccionado=n})),u.Ob(),u.Ob()}if(2&t){const t=e.$implicit;u.yb(2),u.Ac(t.nombre),u.yb(1),u.fc("ngModel",t.seleccionado)}}let g=(()=>{class t extends s.a{constructor(t,e,n,i,o){super(t,e,n,i,o),this.getService=t,this.postService=e,this.putService=n,this.toastCtrl=i,this.modalCtrl=o,this.urlObtencion="account/users",this.urlCreacion="account/create",this.urlEdicion="account/editUser",this.urlClientes="clientes",this.usuario=new b.a,this.cliente=new c.a,this.clientes=[],this.clicked=!1}ngOnInit(){this.obtenerClientes(),null!=this.id&&super.consumirGet(this.urlObtencion,this.id).then(t=>{this.usuario=t,this.cliente=this.clientes.find(t=>t.id!==this.usuario.idCliente)})}obtenerClientes(){super.consumirGet(this.urlClientes).then(t=>{this.clientes=t})}guardar(){return Object(l.a)(this,void 0,void 0,(function*(){this.clicked=!1,this.usuario.idCliente=this.cliente.id,null!=this.id?this.actualizarUsuario():this.crearUsuario()}))}crearUsuario(){super.consumirPost(this.urlCreacion,this.usuario).then(t=>{})}actualizarUsuario(){super.consumirPut(this.urlEdicion,this.id,this.usuario).then(t=>{})}}return t.\u0275fac=function(e){return new(e||t)(u.Jb(p.a),u.Jb(d.a),u.Jb(m.a),u.Jb(a.Q),u.Jb(a.J))},t.\u0275cmp=u.Db({type:t,selectors:[["app-detalle-usuario"]],inputs:{id:"id"},features:[u.vb],decls:45,vars:11,consts:[[1,"modal-title"],["fill","clear","color","dark",3,"click"],["name","close-outline"],[1,"ion-padding"],["type","text",3,"ngModel","ngModelChange"],["type","email",3,"ngModel","ngModelChange"],["itemValueField","id","itemTextField","nombre",3,"ngModel","items","canSearch","ngModelChange"],["portComponent",""],["ionicSelectableHeaderTemplate",""],["type","password",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[1,"title-roles"],[4,"ngFor","ngForOf"],[3,"disabled","click"],["name","close-circle",2,"font-size","24px"]],template:function(t,e){1&t&&(u.Pb(0,"ion-header"),u.Pb(1,"ion-toolbar"),u.Pb(2,"ion-title"),u.Pb(3,"div",0),u.Pb(4,"span"),u.zc(5,"Maestro Usuarios"),u.Ob(),u.Pb(6,"ion-button",1),u.Xb("click",(function(){return e.dismiss(null)})),u.Kb(7,"ion-icon",2),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Pb(8,"ion-content",3),u.Pb(9,"ion-item"),u.Pb(10,"ion-label"),u.zc(11,"C\xe9dula"),u.Ob(),u.Pb(12,"ion-input",4),u.Xb("ngModelChange",(function(t){return e.usuario.cedula=t})),u.Ob(),u.Ob(),u.Pb(13,"ion-item"),u.Pb(14,"ion-label"),u.zc(15,"Nombre"),u.Ob(),u.Pb(16,"ion-input",4),u.Xb("ngModelChange",(function(t){return e.usuario.nombre=t})),u.Ob(),u.Ob(),u.Pb(17,"ion-item"),u.Pb(18,"ion-label"),u.zc(19,"Correo Electr\xf3nico"),u.Ob(),u.Pb(20,"ion-input",5),u.Xb("ngModelChange",(function(t){return e.usuario.email=t})),u.Ob(),u.Ob(),u.Pb(21,"ion-item"),u.Pb(22,"ion-label"),u.zc(23,"Celular"),u.Ob(),u.Pb(24,"ion-input",4),u.Xb("ngModelChange",(function(t){return e.usuario.celular=t})),u.Ob(),u.Ob(),u.Pb(25,"ion-item"),u.Pb(26,"ion-label"),u.zc(27,"Cliente"),u.Ob(),u.Pb(28,"ionic-selectable",6,7),u.Xb("ngModelChange",(function(t){return e.cliente=t})),u.xc(30,f,7,0,"ng-template",8),u.Ob(),u.Ob(),u.Pb(31,"ion-item"),u.Pb(32,"ion-label"),u.zc(33,"Contrase\xf1a"),u.Ob(),u.Pb(34,"ion-input",9),u.Xb("ngModelChange",(function(t){return e.usuario.password=t})),u.Ob(),u.Ob(),u.Pb(35,"ion-item"),u.Pb(36,"ion-label"),u.zc(37,"Activo"),u.Ob(),u.Pb(38,"ion-checkbox",10),u.Xb("ngModelChange",(function(t){return e.usuario.activo=t})),u.Ob(),u.Ob(),u.Pb(39,"ion-title",11),u.Pb(40,"span"),u.zc(41,"Roles"),u.Ob(),u.Ob(),u.xc(42,O,4,2,"ion-item",12),u.Pb(43,"ion-button",13),u.Xb("click",(function(){return e.guardar()})),u.zc(44,"Guardar"),u.Ob(),u.Ob()),2&t&&(u.yb(12),u.fc("ngModel",e.usuario.cedula),u.yb(4),u.fc("ngModel",e.usuario.nombre),u.yb(4),u.fc("ngModel",e.usuario.email),u.yb(4),u.fc("ngModel",e.usuario.celular),u.yb(4),u.fc("ngModel",e.cliente)("items",e.clientes)("canSearch",!0),u.yb(6),u.fc("ngModel",e.usuario.password),u.yb(4),u.fc("ngModel",e.usuario.activo),u.yb(4),u.fc("ngForOf",e.usuario.roles),u.yb(1),u.fc("disabled",e.clicked))},directives:[a.m,a.E,a.D,a.c,a.n,a.g,a.r,a.u,a.q,a.P,o.h,o.j,h.a,P.a,a.e,a.a,i.j],styles:[".modal-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.modal-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center}.title-roles[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px}"]}),t})();var C=n("RyMC"),y=n("rEr+"),v=n("7zfz"),M=n("jIHw"),x=n("arFO");function z(t,e){if(1&t){const t=u.Qb();u.Pb(0,"div",7),u.Pb(1,"p-button",8),u.Xb("click",(function(){return u.rc(t),u.Zb().mostrarModal(null)})),u.Ob(),u.Pb(2,"p-button",9),u.Xb("click",(function(){return u.rc(t),u.Zb(),u.pc(9).exportCSV()})),u.Ob(),u.Ob()}}function w(t,e){if(1&t&&(u.Pb(0,"span"),u.zc(1),u.Ob()),2&t){const t=e.$implicit;u.yb(1),u.Ac(t.label)}}function k(t,e){if(1&t){const t=u.Qb();u.Pb(0,"tr"),u.Pb(1,"th",10),u.zc(2,"Nombre "),u.Kb(3,"p-sortIcon",11),u.Ob(),u.Pb(4,"th",12),u.zc(5,"Correo "),u.Kb(6,"p-sortIcon",13),u.Ob(),u.Pb(7,"th",14),u.zc(8,"Celular "),u.Kb(9,"p-sortIcon",15),u.Ob(),u.Pb(10,"th",16),u.zc(11,"Cliente "),u.Kb(12,"p-sortIcon",17),u.Ob(),u.Pb(13,"th",18),u.zc(14,"Estado "),u.Kb(15,"p-sortIcon",19),u.Ob(),u.Pb(16,"th",20),u.zc(17,"Acciones"),u.Ob(),u.Ob(),u.Pb(18,"tr"),u.Pb(19,"th"),u.Pb(20,"input",21),u.Xb("input",(function(e){return u.rc(t),u.Zb(),u.pc(9).filter(e.target.value,"nombre","contains")})),u.Ob(),u.Ob(),u.Pb(21,"th"),u.Pb(22,"input",22),u.Xb("input",(function(e){return u.rc(t),u.Zb(),u.pc(9).filter(e.target.value,"email","contains")})),u.Ob(),u.Ob(),u.Pb(23,"th"),u.Pb(24,"input",23),u.Xb("input",(function(e){return u.rc(t),u.Zb(),u.pc(9).filter(e.target.value,"celular","contains")})),u.Ob(),u.Ob(),u.Pb(25,"th"),u.Pb(26,"input",24),u.Xb("input",(function(e){return u.rc(t),u.Zb(),u.pc(9).filter(e.target.value,"cliente","contains")})),u.Ob(),u.Ob(),u.Pb(27,"th"),u.Pb(28,"p-dropdown",25),u.Xb("onChange",(function(e){return u.rc(t),u.Zb(),u.pc(9).filter(e.value,"activo","equals")})),u.xc(29,w,2,1,"ng-template",26),u.Ob(),u.Ob(),u.Ob()}if(2&t){const t=u.Zb();u.yb(28),u.fc("options",t.statuses)("showClear",!0)}}function X(t,e){if(1&t){const t=u.Qb();u.Pb(0,"tr"),u.Pb(1,"td"),u.Pb(2,"span",27),u.zc(3,"Nombre "),u.Ob(),u.zc(4),u.Ob(),u.Pb(5,"td"),u.Pb(6,"span",27),u.zc(7,"Email "),u.Ob(),u.zc(8),u.Ob(),u.Pb(9,"td"),u.Pb(10,"span",27),u.zc(11,"Celular "),u.Ob(),u.zc(12),u.Ob(),u.Pb(13,"td"),u.Pb(14,"span",27),u.zc(15,"Celular "),u.Ob(),u.zc(16),u.Ob(),u.Pb(17,"td"),u.Pb(18,"span",27),u.zc(19,"Estado "),u.Ob(),u.zc(20),u.Ob(),u.Pb(21,"td",28),u.Pb(22,"p-button",29),u.Xb("click",(function(){u.rc(t);const n=e.$implicit;return u.Zb().mostrarModal(n.id)})),u.Ob(),u.Ob(),u.Ob()}if(2&t){const t=e.$implicit;u.yb(4),u.Ac(t.nombre),u.yb(4),u.Ac(t.email),u.yb(4),u.Ac(t.celular),u.yb(4),u.Ac(t.nombreCliente),u.yb(4),u.Ac(1==t.activo?"Activo":"Inactivo")}}const S=function(){return[10,25,50]},E=[{path:"",component:(()=>{class t extends s.a{constructor(t,e,n,i,o){super(t,e,n,i,o),this.getService=t,this.postService=e,this.putService=n,this.toastCtrl=i,this.modalCtrl=o,this.url="Account/users",this.usuarios=[]}ngOnInit(){this.obtenerUsarios()}obtenerUsarios(){super.consumirGet(this.url).then(t=>{this.usuarios=t})}mostrarModal(t){return Object(l.a)(this,void 0,void 0,(function*(){const e=yield this.modalCtrl.create({component:g,componentProps:{id:t},backdropDismiss:!1,cssClass:"modal-cliente"});e.present(),yield e.onWillDismiss().then(t=>{null!=t.data&&t.data.success&&this.obtenerUsarios()})}))}}return t.\u0275fac=function(e){return new(e||t)(u.Jb(p.a),u.Jb(d.a),u.Jb(m.a),u.Jb(a.Q),u.Jb(a.J))},t.\u0275cmp=u.Db({type:t,selectors:[["app-usuarios"]],features:[u.vb],decls:13,vars:7,consts:[["slot","start"],[1,"ion-padding"],["exportFilename","usuarios","styleClass","p-datatable-striped p-datatable-responsive-demo","currentPageReportTemplate","Mostrando {first} a {last} de {totalRecords} registros",3,"columns","value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["label","Agregar Nuevo","icon","pi pi-plus","iconPos","left",3,"click"],["label","Exportar a CSV","icon","pi pi-file-o","iconPos","left",3,"click"],["pSortableColumn","nombre"],["field","nombre"],["pSortableColumn","email"],["field","email"],["pSortableColumn","celular"],["field","celular"],["pSortableColumn","cliente"],["field","cliente"],["pSortableColumn","activo"],["field","activo"],["rowspan","2",1,"action-column"],["pInputText","","type","text","placeholder","Buscar por Nombre",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Correo Electr\xf3nico",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Celular",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Cliente",1,"p-column-filter",3,"input"],["styleClass","p-column-filter","placeholder","Buscar por Estado",3,"options","showClear","onChange"],["pTemplate","item"],[1,"p-column-title"],[1,"action-column"],["label","Editar","icon","pi pi-pencil","iconPos","left",1,"primary-button",3,"click"]],template:function(t,e){1&t&&(u.Pb(0,"ion-header"),u.Pb(1,"ion-toolbar"),u.Pb(2,"ion-buttons",0),u.Kb(3,"ion-menu-button"),u.Ob(),u.Pb(4,"ion-title"),u.zc(5," Usuarios "),u.Ob(),u.Ob(),u.Kb(6,"app-user-menu"),u.Ob(),u.Pb(7,"ion-content",1),u.Pb(8,"p-table",2,3),u.xc(10,z,3,0,"ng-template",4),u.xc(11,k,30,2,"ng-template",5),u.xc(12,X,23,5,"ng-template",6),u.Ob(),u.Ob()),2&t&&(u.yb(8),u.fc("columns",e.cols)("value",e.usuarios)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",u.hc(6,S)))},directives:[a.m,a.E,a.d,a.x,a.D,C.a,a.g,y.e,v.b,M.a,y.d,y.c,x.a],styles:["[_nghost-%COMP%]     .p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{display:none}.p-d-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.action-column[_ngcontent-%COMP%]{text-align:center!important}@media screen and (max-width:40rem){[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot>tr>td, [_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-thead>tr>th{display:none!important}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td{text-align:left;display:block;width:100%;float:left;clear:left;border:0}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{padding:.4rem;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4rem;font-weight:700}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td:last-child{border-bottom:1px solid var(--surface-d)}}"]}),t})()}];let J=(()=>{class t{}return t.\u0275mod=u.Hb({type:t}),t.\u0275inj=u.Gb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(E)],r.i]}),t})();var I=n("m/q5");let A=(()=>{class t{}return t.\u0275mod=u.Hb({type:t}),t.\u0275inj=u.Gb({factory:function(e){return new(e||t)},imports:[[i.b,o.e,a.G,J,y.f,x.b,M.b,I.a]]}),t})()}}]);