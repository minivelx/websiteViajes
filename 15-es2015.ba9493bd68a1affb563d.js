(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/UPL":function(t,e,a){"use strict";a.r(e),a.d(e,"OcupacionDiariaPageModule",(function(){return w}));var n=a("ofXK"),o=a("3Pt+"),i=a("TEn/"),r=a("tyNb"),c=a("mrSG"),p=a("BEOd"),s=a("fXoL"),l=a("BQIx"),b=a("ova0"),u=a("RyMC"),d=a("rEr+"),m=a("7zfz"),f=a("jIHw");function O(t,e){if(1&t){const t=s.Qb();s.Pb(0,"div",7),s.Pb(1,"p-button",8),s.Xb("click",(function(){return s.sc(t),s.Zb(),s.qc(9).exportCSV()})),s.Ob(),s.Ob()}}function P(t,e){if(1&t){const t=s.Qb();s.Pb(0,"tr"),s.Pb(1,"th",9),s.Ac(2,"Fecha "),s.Kb(3,"p-sortIcon",10),s.Ob(),s.Pb(4,"th",11),s.Ac(5,"N\xfamero Viajes Realizados "),s.Kb(6,"p-sortIcon",12),s.Ob(),s.Pb(7,"th",13),s.Ac(8,"N\xfamero Camiones Utilizados "),s.Kb(9,"p-sortIcon",14),s.Ob(),s.Pb(10,"th",15),s.Ac(11,"Porcentaje Ocupaci\xf3n Flota "),s.Kb(12,"p-sortIcon",16),s.Ob(),s.Ob(),s.Pb(13,"tr"),s.Pb(14,"th"),s.Pb(15,"input",17),s.Xb("input",(function(e){return s.sc(t),s.Zb(),s.qc(9).filter(e.target.value,"fecha","contains")})),s.Ob(),s.Ob(),s.Pb(16,"th"),s.Pb(17,"input",18),s.Xb("input",(function(e){return s.sc(t),s.Zb(),s.qc(9).filter(e.target.value,"numeroViajes","contains")})),s.Ob(),s.Ob(),s.Pb(18,"th"),s.Pb(19,"input",19),s.Xb("input",(function(e){return s.sc(t),s.Zb(),s.qc(9).filter(e.target.value,"numeroCamionesUtilizados","contains")})),s.Ob(),s.Ob(),s.Pb(20,"th"),s.Pb(21,"input",20),s.Xb("input",(function(e){return s.sc(t),s.Zb(),s.qc(9).filter(e.target.value,"porcentajeOcupacion","contains")})),s.Ob(),s.Ob(),s.Ob()}}function h(t,e){if(1&t&&(s.Pb(0,"tr"),s.Pb(1,"td"),s.Pb(2,"span",21),s.Ac(3,"Fecha "),s.Ob(),s.Ac(4),s.ac(5,"date"),s.Ob(),s.Pb(6,"td"),s.Pb(7,"span",21),s.Ac(8,"N\xfamero Viajes Realizados "),s.Ob(),s.Ac(9),s.Ob(),s.Pb(10,"td"),s.Pb(11,"span",21),s.Ac(12,"N\xfamero Camiones Utilizados "),s.Ob(),s.Ac(13),s.Ob(),s.Pb(14,"td"),s.Pb(15,"span",21),s.Ac(16,"Porcentaje Ocupaci\xf3n Flota "),s.Ob(),s.Ac(17),s.Ob(),s.Ob()),2&t){const t=e.$implicit;s.yb(4),s.Bc(s.cc(5,4,t.fecha,"dd/MM/yyyy")),s.yb(5),s.Bc(t.numeroViajes),s.yb(4),s.Bc(t.numeroCamionesUtilizados),s.yb(4),s.Cc("",t.porcentajeOcupacion," %")}}const y=function(){return[10,25,50]},g=[{path:"",component:(()=>{class t extends p.a{constructor(t,e,a,n){super(t,e,null,a,n),this.getService=t,this.postService=e,this.toastCtrl=a,this.modalCtrl=n,this.url="viajes"}ngOnInit(){this.obtenerViajes()}obtenerViajes(){super.consumirPostSimple(this.url+"/ocupacionDiaria",null).then(t=>{this.lstOcupacionDiaria=t})}mostrarModal(t){return Object(c.a)(this,void 0,void 0,(function*(){}))}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(l.a),s.Jb(b.a),s.Jb(i.Q),s.Jb(i.J))},t.\u0275cmp=s.Db({type:t,selectors:[["app-ocupacion-diaria"]],features:[s.vb],decls:13,vars:7,consts:[["slot","start"],[1,"ion-padding"],["exportFilename","ocupacion","styleClass","p-datatable-striped p-datatable-responsive-demo","currentPageReportTemplate","Mostrando {first} a {last} de {totalRecords} registros",3,"columns","value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["label","Exportar a CSV","icon","pi pi-file-o","iconPos","left",3,"click"],["pSortableColumn","fecha"],["field","fecha"],["pSortableColumn","placa"],["field","numeroViajes"],["pSortableColumn","numeroCamionesUtilizados"],["field","numeroCamionesUtilizados"],["pSortableColumn","nombreAuxiliar"],["field","porcentajeOcupacion"],["pInputText","","type","text","placeholder","Buscar por Fecha",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por N\xfamero Viajes",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por N\xfamero Camiones",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Porcentaje Ocupaci\xf3n",1,"p-column-filter",3,"input"],[1,"p-column-title"]],template:function(t,e){1&t&&(s.Pb(0,"ion-header"),s.Pb(1,"ion-toolbar"),s.Pb(2,"ion-buttons",0),s.Kb(3,"ion-menu-button"),s.Ob(),s.Pb(4,"ion-title"),s.Ac(5," Ocupaci\xf3n Diaria "),s.Ob(),s.Ob(),s.Kb(6,"app-user-menu"),s.Ob(),s.Pb(7,"ion-content",1),s.Pb(8,"p-table",2,3),s.yc(10,O,2,0,"ng-template",4),s.yc(11,P,22,0,"ng-template",5),s.yc(12,h,18,7,"ng-template",6),s.Ob(),s.Ob()),2&t&&(s.yb(8),s.gc("columns",e.cols)("value",e.lstOcupacionDiaria)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",s.ic(6,y)))},directives:[i.m,i.E,i.d,i.x,i.D,u.a,i.g,d.e,m.b,f.a,d.d,d.c],pipes:[n.e],styles:["[_nghost-%COMP%]     .p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{display:none}.p-d-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.action-column[_ngcontent-%COMP%]{text-align:center!important}@media screen and (max-width:40rem){[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot>tr>td, [_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-thead>tr>th{display:none!important}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td{text-align:left;display:block;width:100%;float:left;clear:left;border:0}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{padding:.4rem;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4rem;font-weight:700}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td:last-child{border-bottom:1px solid var(--surface-d)}}"]}),t})()}];let C=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(g)],r.i]}),t})();var v=a("arFO"),x=a("m/q5");let w=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[n.b,o.e,i.G,C,d.f,v.b,f.b,x.a]]}),t})()}}]);