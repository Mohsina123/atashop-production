"use strict";(self.webpackChunkatashop=self.webpackChunkatashop||[]).push([[220],{5220:(z,m,t)=>{t.r(m),t.d(m,{WarehouseModule:()=>j});var d=t(6895),n=t(4006),v=t(6517),f=t(3805),i=t(4859),Z=t(6709),g=t(7331),C=t(3238),U=t(9602),A=t(5938),h=t(7084),N=t(9549),T=t(7392),x=t(4144),y=t(8739),W=t(1948),w=t(4385),J=t(6308),S=t(6257),F=t(7155),L=t(266),l=t(9299),P=t(3271),Q=t(5568),o=t(4650);let b=(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-warehouse"]],decls:3,vars:0,consts:[[1,"main-content"],[1,"container-fluid"]],template:function(e,a){1&e&&(o.TgZ(0,"div",0)(1,"div",1),o._UZ(2,"router-outlet"),o.qZA()())},dependencies:[l.lC]}),r})(),$=(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-warehouse-list"]],decls:2,vars:0,template:function(e,a){1&e&&(o.TgZ(0,"p"),o._uU(1,"warehouse-list works!"),o.qZA())}}),r})();var p=t(1135),R=t(2843),X=t(9646),B=t(8505),I=t(4004),Y=t(3900),D=t(2340),O=t(529);let G=(()=>{class r{constructor(e){this._httpClient=e,this._warehouses=new p.X(null),this._warehouse=new p.X(null),this.baseURL=`${D.N.apiUrl}/api/warehouses`}get warehouses$(){return this._warehouses.asObservable()}get warehouse$(){return this._warehouse.asObservable()}createWarehouse(e){return this._httpClient.post(`${this.baseURL}`,e)}updateWarehouse(e,a){return this._httpClient.put(`${this.baseURL}/${e}`,a)}deleteWarehouse(e){return this._httpClient.delete(`${this.baseURL}/${e}`)}getWarehouses(e){return this._httpClient.get(`${this.baseURL}`,{params:e}).pipe((0,B.b)(a=>{this._warehouses.next(a.data)}))}getAllWarehouses(e){return this._httpClient.get(`${this.baseURL}/all/fetch`,{params:e})}getWarehouseById(e){return this._httpClient.get(`${this.baseURL}/${e}`).pipe((0,I.U)(a=>(this._warehouse.next(a),a)),(0,Y.w)(a=>a?(0,X.of)(a):(0,R._)("Could not found warehouse with id of "+e+"!")))}}return r.\u0275fac=function(e){return new(e||r)(o.LFG(O.eN))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),c=(()=>{class r{constructor(e,a,u){this._formBuilder=e,this._warehouseService=a,this._router=u,this.warehouse={name:"",contactPersonName:"",contactCode:"",contactNo:"",gstNo:"",warehouseAddress:"",pincode:"",city:"",state:"",country:"",email:"",supportPhone:""}}ngOnInit(){this.warehouseForm=this._formBuilder.group({name:[""],contactPersonName:[""],contactCode:[""],contactNo:[""],gstNo:[""],warehouseAddress:[""],pincode:[""],city:[""],state:[""],country:["india"],email:[""],supportPhone:[""]})}onReactiveFormSubmit(){if(this.warehouseForm.invalid)return;console.log("warehouseForm==>",this.warehouseForm.value);const e=this.warehouseForm.value;let a=this._warehouseService.createWarehouse(e);this.warehouse&&this.warehouse._id&&(a=this._warehouseService.updateWarehouse(this.warehouse._id,e)),a.subscribe(E=>{console.log("response==>",E),this._router.navigate(["/warehouse"])})}}return r.\u0275fac=function(e){return new(e||r)(o.Y36(n.qu),o.Y36(G),o.Y36(l.F0))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-warehouse-details"]],decls:87,vars:15,consts:[[1,"flex","flex-col","w-full",3,"formGroup"],[1,"flex","row"],[1,"col-6"],[1,"input-group","has-validation"],["type","text","placeholder","Warehouse Name",1,"form-control",3,"formControlName"],["type","text","placeholder","Contact Person Name",1,"form-control",3,"formControlName"],[1,"flex","row","mt-3"],[1,"col-6","mt-3"],[1,"input-group"],[1,"input-group-prepend"],[1,"input-group-text"],["aria-placeholder","Select Payment Type",1,"form-control",3,"formControlName"],["value","91"],["value","7"],["value","1"],["placeholder","Phone Number","type","number","aria-label","Text input with radio button",1,"form-control",3,"formControlName"],["type","text","placeholder","GST Number",1,"form-control",3,"formControlName"],["placeholder","Full Address","name","warehouseAddress","id","warehouseAddress","cols","30","rows","5",1,"w-100","form-control",3,"formControlName"],["type","text","placeholder","Pincode",1,"form-control",3,"formControlName"],["type","text","placeholder","City",1,"form-control",3,"formControlName"],["type","text","placeholder","State",1,"form-control",3,"formControlName"],["value",""],["value","india","selected",""],["value","russia"],["value","usa"],["type","text","placeholder","Support Email",1,"form-control",3,"formControlName"],["type","text","placeholder","Support Phone",1,"form-control",3,"formControlName"],[1,"col-auto","text-right","mt-3"],["mat-flat-button","","routerLink","/warehouse",1,"ml-4","mt-3",3,"color"],[1,"ml-2","mr-1"],["mat-flat-button","",1,"ml-4","mt-3",3,"color","click"]],template:function(e,a){1&e&&(o.TgZ(0,"h4"),o._uU(1,"Warehouse"),o.qZA(),o.TgZ(2,"form",0)(3,"div",1)(4,"div",2)(5,"label"),o._uU(6,"Warehouse Name"),o.qZA(),o.TgZ(7,"div",3),o._UZ(8,"input",4),o.qZA()(),o.TgZ(9,"div",2)(10,"label"),o._uU(11,"Contact Person Name"),o.qZA(),o.TgZ(12,"div",3),o._UZ(13,"input",5),o.qZA()()(),o.TgZ(14,"div",6)(15,"div",7)(16,"label"),o._uU(17,"Contact Number"),o.qZA(),o.TgZ(18,"div",8)(19,"div",9)(20,"div",10)(21,"select",11)(22,"option",12),o._uU(23,"+91"),o.qZA(),o.TgZ(24,"option",13),o._uU(25,"+7"),o.qZA(),o.TgZ(26,"option",14),o._uU(27,"1"),o.qZA()()()(),o._UZ(28,"input",15),o.qZA()(),o.TgZ(29,"div",7)(30,"label"),o._uU(31,"GST Number"),o.qZA(),o.TgZ(32,"div",3),o._UZ(33,"input",16),o.qZA()()(),o.TgZ(34,"div",6)(35,"div",2)(36,"label"),o._uU(37,"Warehouse Address"),o.qZA(),o.TgZ(38,"div",3),o._UZ(39,"textarea",17),o.qZA()(),o.TgZ(40,"div",2)(41,"label"),o._uU(42,"Pincode"),o.qZA(),o.TgZ(43,"div",3),o._UZ(44,"input",18),o.qZA()(),o._UZ(45,"div",2),o.TgZ(46,"div",2)(47,"label"),o._uU(48,"City"),o.qZA(),o.TgZ(49,"div",3),o._UZ(50,"input",19),o.qZA()()(),o.TgZ(51,"div",6)(52,"div",2)(53,"label"),o._uU(54,"State"),o.qZA(),o.TgZ(55,"div",3),o._UZ(56,"input",20),o.qZA()(),o.TgZ(57,"div",2)(58,"label"),o._uU(59,"Country"),o.qZA(),o.TgZ(60,"select",11)(61,"option",21),o._uU(62,"Country"),o.qZA(),o.TgZ(63,"option",22),o._uU(64,"India"),o.qZA(),o.TgZ(65,"option",23),o._uU(66,"Russia"),o.qZA(),o.TgZ(67,"option",24),o._uU(68,"USA"),o.qZA()()()(),o.TgZ(69,"div",6)(70,"div",2)(71,"label"),o._uU(72,"Support Email"),o.qZA(),o.TgZ(73,"div",3),o._UZ(74,"input",25),o.qZA()(),o.TgZ(75,"div",2)(76,"label"),o._uU(77,"Support Phone"),o.qZA(),o.TgZ(78,"div",3),o._UZ(79,"input",26),o.qZA()()(),o.TgZ(80,"div",27)(81,"button",28)(82,"span",29),o._uU(83,"Cancel"),o.qZA()(),o.TgZ(84,"button",30),o.NdJ("click",function(){return a.onReactiveFormSubmit()}),o.TgZ(85,"span",29),o._uU(86,"Submit"),o.qZA()()()()),2&e&&(o.xp6(2),o.Q6J("formGroup",a.warehouseForm),o.xp6(6),o.Q6J("formControlName","name"),o.xp6(5),o.Q6J("formControlName","contactPersonName"),o.xp6(8),o.Q6J("formControlName","contactCode"),o.xp6(7),o.Q6J("formControlName","contactNo"),o.xp6(5),o.Q6J("formControlName","gstNo"),o.xp6(6),o.Q6J("formControlName","warehouseAddress"),o.xp6(5),o.Q6J("formControlName","pincode"),o.xp6(6),o.Q6J("formControlName","city"),o.xp6(6),o.Q6J("formControlName","state"),o.xp6(4),o.Q6J("formControlName","country"),o.xp6(14),o.Q6J("formControlName","email"),o.xp6(5),o.Q6J("formControlName","supportPhone"),o.xp6(2),o.Q6J("color","warn"),o.xp6(3),o.Q6J("color","primary"))},dependencies:[l.rH,n._Y,n.YN,n.Kr,n.Fj,n.wV,n.EJ,n.JJ,n.JL,n.sg,n.u,i.lW]}),r})();const M=[{path:"",component:b,children:[{path:"",component:$},{path:"create",component:c},{path:"edit/:id",component:c}]}];let j=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[d.ez,l.Bz.forChild(M),n.u5,n.UX,i.ot,N.lN,T.Ps,x.c,U.FA,C.XK,v.Yd,g.Hi,w.LD,L.AV,f.Bb,F.p0,y.TU,A.Is,Q.XX,P.rK,S.T5,J.JX,h.To,i.ot,h.To,W.Fk,Z.p9]}),r})()}}]);