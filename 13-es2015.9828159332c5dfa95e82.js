(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"0G8V":function(e,t,i){"use strict";i.r(t),i.d(t,"UsuariosPageModule",(function(){return j}));var o=i("ofXK"),n=i("3Pt+"),s=i("TEn/"),a=i("tyNb"),c=i("mrSG"),l=i("BsNa");class r{constructor(){this.cedula="",this.password="",this.nombre="",this.email="",this.celular="",this.idCliente=0,this.nombreCliente="",this.roles=[{nombre:"Administrador",seleccionado:!1},{nombre:"Auxiliar",seleccionado:!1},{nombre:"Cliente",seleccionado:!1},{nombre:"Conductor",seleccionado:!1}]}}var b=i("fXoL"),u=i("BQIx"),d=i("ova0"),p=i("+nHt"),m=i("JmBq"),h=i("FdPp");function g(e,t){if(1&e){const e=b.Qb();b.Pb(0,"ion-toolbar"),b.Pb(1,"ion-title"),b.Pb(2,"div",0),b.Pb(3,"span"),b.yc(4,"Clientes"),b.Ob(),b.Pb(5,"ion-button",1),b.Xb("click",(function(){return b.qc(e),b.Zb(),b.oc(29).close()})),b.Kb(6,"ion-icon",14),b.Ob(),b.Ob(),b.Ob(),b.Ob()}}function O(e,t){if(1&e){const e=b.Qb();b.Pb(0,"ion-item"),b.Pb(1,"ion-label"),b.yc(2),b.Ob(),b.Pb(3,"ion-checkbox",10),b.Xb("ngModelChange",(function(i){return b.qc(e),t.$implicit.seleccionado=i})),b.Ob(),b.Ob()}if(2&e){const e=t.$implicit;b.yb(2),b.zc(e.nombre),b.yb(1),b.ec("ngModel",e.seleccionado)}}let P=(()=>{class e{constructor(e,t,i,o,n){this.getService=e,this.postService=t,this.putService=i,this.toastCtrl=o,this.modalCtrl=n,this.urlObtencion="account/users",this.urlCreacion="account/create",this.urlEdicion="account/editUser",this.urlClientes="clientes",this.usuario=new r,this.cliente=new l.a,this.clientes=[]}ngOnInit(){this.obtenerClientes(),null!=this.id&&this.getService.get(this.urlObtencion,this.id).subscribe(e=>{e.success&&(this.usuario=e.message,this.cliente=this.clientes.find(e=>e.id!==this.usuario.idCliente))})}obtenerClientes(){this.getService.get(this.urlClientes).subscribe(e=>Object(c.a)(this,void 0,void 0,(function*(){e.success?this.clientes=e.message:((yield this.toastCtrl.create({message:e.message,position:"middle",buttons:[{text:"Aceptar",role:"cancel"}]})).present(),console.log(e.message))})))}guardar(){return Object(c.a)(this,void 0,void 0,(function*(){this.usuario.idCliente=this.cliente.id,null!=this.id?this.actualizarUsuario():this.crearUsuario()}))}crearUsuario(){this.postService.post(this.urlCreacion,this.usuario).subscribe(e=>Object(c.a)(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:e.message,position:"middle",duration:e.success?3e3:0,color:e.success?"success":"danger",buttons:e.success?[]:[{text:"Aceptar",role:"cancel"}]})).present(),e.success&&this.dismiss(e)})),e=>Object(c.a)(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:e,position:"middle",color:"danger",buttons:[{text:"Aceptar",role:"cancel"}]})).present()})))}actualizarUsuario(){this.putService.put(this.urlEdicion,this.id,this.usuario).subscribe(e=>Object(c.a)(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:e.message,position:"middle",duration:e.success?3e3:0,color:e.success?"success":"danger",buttons:e.success?[]:[{text:"Aceptar",role:"cancel"}]})).present(),e.success&&this.dismiss(e)})),e=>Object(c.a)(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:e,position:"middle",color:"danger",buttons:[{text:"Aceptar",role:"cancel"}]})).present()})))}dismiss(e){this.modalCtrl.dismiss(e)}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(u.a),b.Jb(d.a),b.Jb(p.a),b.Jb(s.K),b.Jb(s.F))},e.\u0275cmp=b.Db({type:e,selectors:[["app-detalle-usuario"]],inputs:{id:"id"},decls:45,vars:10,consts:[[1,"modal-title"],["fill","clear","color","dark",3,"click"],["name","close-outline"],[1,"ion-padding"],["type","text",3,"ngModel","ngModelChange"],["type","email",3,"ngModel","ngModelChange"],["itemValueField","id","itemTextField","nombre",3,"ngModel","items","canSearch","ngModelChange"],["portComponent",""],["ionicSelectableHeaderTemplate",""],["type","password",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[1,"title-roles"],[4,"ngFor","ngForOf"],[3,"click"],["name","close-circle",2,"font-size","24px"]],template:function(e,t){1&e&&(b.Pb(0,"ion-header"),b.Pb(1,"ion-toolbar"),b.Pb(2,"ion-title"),b.Pb(3,"div",0),b.Pb(4,"span"),b.yc(5,"Maestro Usuarios"),b.Ob(),b.Pb(6,"ion-button",1),b.Xb("click",(function(){return t.dismiss(null)})),b.Kb(7,"ion-icon",2),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(8,"ion-content",3),b.Pb(9,"ion-item"),b.Pb(10,"ion-label"),b.yc(11,"C\xe9dula"),b.Ob(),b.Pb(12,"ion-input",4),b.Xb("ngModelChange",(function(e){return t.usuario.cedula=e})),b.Ob(),b.Ob(),b.Pb(13,"ion-item"),b.Pb(14,"ion-label"),b.yc(15,"Nombre"),b.Ob(),b.Pb(16,"ion-input",4),b.Xb("ngModelChange",(function(e){return t.usuario.nombre=e})),b.Ob(),b.Ob(),b.Pb(17,"ion-item"),b.Pb(18,"ion-label"),b.yc(19,"Correo Electr\xf3nico"),b.Ob(),b.Pb(20,"ion-input",5),b.Xb("ngModelChange",(function(e){return t.usuario.email=e})),b.Ob(),b.Ob(),b.Pb(21,"ion-item"),b.Pb(22,"ion-label"),b.yc(23,"Celular"),b.Ob(),b.Pb(24,"ion-input",4),b.Xb("ngModelChange",(function(e){return t.usuario.celular=e})),b.Ob(),b.Ob(),b.Pb(25,"ion-item"),b.Pb(26,"ion-label"),b.yc(27,"Cliente"),b.Ob(),b.Pb(28,"ionic-selectable",6,7),b.Xb("ngModelChange",(function(e){return t.cliente=e})),b.wc(30,g,7,0,"ng-template",8),b.Ob(),b.Ob(),b.Pb(31,"ion-item"),b.Pb(32,"ion-label"),b.yc(33,"Contrase\xf1a"),b.Ob(),b.Pb(34,"ion-input",9),b.Xb("ngModelChange",(function(e){return t.usuario.password=e})),b.Ob(),b.Ob(),b.Pb(35,"ion-item"),b.Pb(36,"ion-label"),b.yc(37,"Activo"),b.Ob(),b.Pb(38,"ion-checkbox",10),b.Xb("ngModelChange",(function(e){return t.usuario.activo=e})),b.Ob(),b.Ob(),b.Pb(39,"ion-title",11),b.Pb(40,"span"),b.yc(41,"Roles"),b.Ob(),b.Ob(),b.wc(42,O,4,2,"ion-item",12),b.Pb(43,"ion-button",13),b.Xb("click",(function(){return t.guardar()})),b.yc(44,"Guardar"),b.Ob(),b.Ob()),2&e&&(b.yb(12),b.ec("ngModel",t.usuario.cedula),b.yb(4),b.ec("ngModel",t.usuario.nombre),b.yb(4),b.ec("ngModel",t.usuario.email),b.yb(4),b.ec("ngModel",t.usuario.celular),b.yb(4),b.ec("ngModel",t.cliente)("items",t.clientes)("canSearch",!0),b.yb(6),b.ec("ngModel",t.usuario.password),b.yb(4),b.ec("ngModel",t.usuario.activo),b.yb(4),b.ec("ngForOf",t.usuario.roles))},directives:[s.i,s.A,s.z,s.c,s.j,s.g,s.n,s.q,s.m,s.J,n.h,n.j,m.a,h.a,s.e,s.a,o.i],styles:[".modal-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.modal-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center}.title-roles[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px}"]}),e})();var f=i("rEr+"),y=i("7zfz"),C=i("jIHw"),v=i("arFO");function M(e,t){if(1&e){const e=b.Qb();b.Pb(0,"div",7),b.Pb(1,"p-button",8),b.Xb("click",(function(){return b.qc(e),b.Zb().mostrarModal(null)})),b.Ob(),b.Pb(2,"p-button",9),b.Xb("click",(function(){return b.qc(e),b.Zb(),b.oc(8).exportCSV()})),b.Ob(),b.Ob()}}function w(e,t){if(1&e&&(b.Pb(0,"span"),b.yc(1),b.Ob()),2&e){const e=t.$implicit;b.yb(1),b.zc(e.label)}}function x(e,t){if(1&e){const e=b.Qb();b.Pb(0,"tr"),b.Pb(1,"th",10),b.yc(2,"Nombre "),b.Kb(3,"p-sortIcon",11),b.Ob(),b.Pb(4,"th",12),b.yc(5,"Correo "),b.Kb(6,"p-sortIcon",13),b.Ob(),b.Pb(7,"th",14),b.yc(8,"Celular "),b.Kb(9,"p-sortIcon",15),b.Ob(),b.Pb(10,"th",16),b.yc(11,"Cliente "),b.Kb(12,"p-sortIcon",17),b.Ob(),b.Pb(13,"th",18),b.yc(14,"Estado "),b.Kb(15,"p-sortIcon",19),b.Ob(),b.Pb(16,"th",20),b.yc(17,"Acciones"),b.Ob(),b.Ob(),b.Pb(18,"tr"),b.Pb(19,"th"),b.Pb(20,"input",21),b.Xb("input",(function(t){return b.qc(e),b.Zb(),b.oc(8).filter(t.target.value,"nombre","contains")})),b.Ob(),b.Ob(),b.Pb(21,"th"),b.Pb(22,"input",22),b.Xb("input",(function(t){return b.qc(e),b.Zb(),b.oc(8).filter(t.target.value,"email","contains")})),b.Ob(),b.Ob(),b.Pb(23,"th"),b.Pb(24,"input",23),b.Xb("input",(function(t){return b.qc(e),b.Zb(),b.oc(8).filter(t.target.value,"celular","contains")})),b.Ob(),b.Ob(),b.Pb(25,"th"),b.Pb(26,"input",24),b.Xb("input",(function(t){return b.qc(e),b.Zb(),b.oc(8).filter(t.target.value,"cliente","contains")})),b.Ob(),b.Ob(),b.Pb(27,"th"),b.Pb(28,"p-dropdown",25),b.Xb("onChange",(function(t){return b.qc(e),b.Zb(),b.oc(8).filter(t.value,"activo","equals")})),b.wc(29,w,2,1,"ng-template",26),b.Ob(),b.Ob(),b.Ob()}if(2&e){const e=b.Zb();b.yb(28),b.ec("options",e.statuses)("showClear",!0)}}function X(e,t){if(1&e){const e=b.Qb();b.Pb(0,"tr"),b.Pb(1,"td"),b.Pb(2,"span",27),b.yc(3,"Nombre "),b.Ob(),b.yc(4),b.Ob(),b.Pb(5,"td"),b.Pb(6,"span",27),b.yc(7,"Email "),b.Ob(),b.yc(8),b.Ob(),b.Pb(9,"td"),b.Pb(10,"span",27),b.yc(11,"Celular "),b.Ob(),b.yc(12),b.Ob(),b.Pb(13,"td"),b.Pb(14,"span",27),b.yc(15,"Celular "),b.Ob(),b.yc(16),b.Ob(),b.Pb(17,"td"),b.Pb(18,"span",27),b.yc(19,"Estado "),b.Ob(),b.yc(20),b.Ob(),b.Pb(21,"td",28),b.Pb(22,"p-button",29),b.Xb("click",(function(){b.qc(e);const i=t.$implicit;return b.Zb().mostrarModal(i.id)})),b.Ob(),b.Ob(),b.Ob()}if(2&e){const e=t.$implicit;b.yb(4),b.zc(e.nombre),b.yb(4),b.zc(e.email),b.yb(4),b.zc(e.celular),b.yb(4),b.zc(e.nombreCliente),b.yb(4),b.zc(1==e.activo?"Activo":"Inactivo")}}const S=function(){return[10,25,50]},k=[{path:"",component:(()=>{class e{constructor(e,t,i){this.getService=e,this.toastCtrl=t,this.modalCtrl=i,this.url="Account/users",this.usuarios=[],this.statuses=[{label:"Activo",value:"true"},{label:"Inactivo",value:"false"}],this.cols=[{field:"nombre",header:"Nombre"},{field:"email",header:"Correo Electronico"},{field:"celular",header:"Celular"},{field:"cliente",header:"Cliente"},{field:"activo",header:"Estado"}]}ngOnInit(){this.obtenerUsarios()}obtenerUsarios(){this.getService.get(this.url).subscribe(e=>Object(c.a)(this,void 0,void 0,(function*(){e.success?this.usuarios=e.message:((yield this.toastCtrl.create({message:e.message,position:"middle",buttons:[{text:"Aceptar",role:"cancel"}]})).present(),console.log(e.message))})))}mostrarModal(e){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.modalCtrl.create({component:P,componentProps:{id:e},backdropDismiss:!1,cssClass:"modal-cliente"});t.present(),yield t.onWillDismiss().then(e=>{null!=e.data&&e.data.success&&this.obtenerUsarios()})}))}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(u.a),b.Jb(s.K),b.Jb(s.F))},e.\u0275cmp=b.Db({type:e,selectors:[["app-usuarios"]],decls:12,vars:7,consts:[["slot","start"],[1,"ion-padding"],["exportFilename","usuarios","styleClass","p-datatable-striped p-datatable-responsive-demo","currentPageReportTemplate","Mostrando {first} a {last} de {totalRecords} registros",3,"columns","value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["label","Agregar Nuevo","icon","pi pi-plus","iconPos","left",3,"click"],["label","Exportar a CSV","icon","pi pi-file-o","iconPos","left",3,"click"],["pSortableColumn","nombre"],["field","nombre"],["pSortableColumn","email"],["field","email"],["pSortableColumn","celular"],["field","celular"],["pSortableColumn","cliente"],["field","cliente"],["pSortableColumn","activo"],["field","activo"],["rowspan","2",1,"action-column"],["pInputText","","type","text","placeholder","Buscar por Nombre",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Correo Electr\xf3nico",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Celular",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Cliente",1,"p-column-filter",3,"input"],["styleClass","p-column-filter","placeholder","Buscar por Estado",3,"options","showClear","onChange"],["pTemplate","item"],[1,"p-column-title"],[1,"action-column"],["label","Editar","icon","pi pi-pencil","iconPos","left",3,"click"]],template:function(e,t){1&e&&(b.Pb(0,"ion-header"),b.Pb(1,"ion-toolbar"),b.Pb(2,"ion-buttons",0),b.Kb(3,"ion-menu-button"),b.Ob(),b.Pb(4,"ion-title"),b.yc(5," Usuarios "),b.Ob(),b.Ob(),b.Ob(),b.Pb(6,"ion-content",1),b.Pb(7,"p-table",2,3),b.wc(9,M,3,0,"ng-template",4),b.wc(10,x,30,2,"ng-template",5),b.wc(11,X,23,5,"ng-template",6),b.Ob(),b.Ob()),2&e&&(b.yb(7),b.ec("columns",t.cols)("value",t.usuarios)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",b.gc(6,S)))},directives:[s.i,s.A,s.d,s.t,s.z,s.g,f.e,y.b,C.a,f.d,f.c,v.a],styles:["[_nghost-%COMP%]     .p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{display:none}.p-d-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.action-column[_ngcontent-%COMP%]{text-align:center!important}@media screen and (max-width:40rem){[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot>tr>td, [_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-thead>tr>th{display:none!important}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td{text-align:left;display:block;width:100%;float:left;clear:left;border:0}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{padding:.4rem;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4rem;font-weight:700}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td:last-child{border-bottom:1px solid var(--surface-d)}}"]}),e})()}];let A=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(t){return new(t||e)},imports:[[a.i.forChild(k)],a.i]}),e})(),j=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(t){return new(t||e)},imports:[[o.b,n.e,s.C,A,f.f,v.b,C.b]]}),e})()}}]);