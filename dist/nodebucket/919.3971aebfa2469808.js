"use strict";(self.webpackChunknodebucket=self.webpackChunknodebucket||[]).push([[919],{4919:(T,l,a)=>{a.r(l),a.d(l,{SecurityModule:()=>C});var d=a(6814),c=a(2129),s=a(95),m=a(9862),e=a(4769);let p=(()=>{var t;class i{}return(t=i).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-security"]],decls:1,vars:0,template:function(n,r){1&n&&e._UZ(0,"router-outlet")},dependencies:[c.lC],encapsulation:2}),i})();var g=a(459);let f=(()=>{var t;class i{constructor(n){this.http=n}findEmployeeById(n){return this.http.get("/api/employees/"+n)}}return(t=i).\u0275fac=function(n){return new(n||t)(e.LFG(m.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),i})();function h(t,i){if(1&t&&(e.TgZ(0,"div",15),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.hij(" ",o.errorMessage," ")}}function v(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1,"Sign in"),e.qZA())}function y(t,i){1&t&&(e.TgZ(0,"div"),e._UZ(1,"span",16),e._uU(2," Loading... "),e.qZA())}const S=[{path:"",component:p,children:[{path:"signin",component:(()=>{var t;class i{constructor(n,r,u,Z,b){this.fb=n,this.router=r,this.cookieService=u,this.secService=Z,this.route=b,this.isLoading=!1,this.signinForm=this.fb.group({empId:[null,s.kI.compose([s.kI.required,s.kI.pattern("^[0-9]*$")])]}),this.sessionUser={},this.errorMessage=""}signin(){this.isLoading=!0;const n=this.signinForm.controls.empId.value;if(!n||isNaN(parseInt(n,10)))return this.errorMessage="The employee ID you entered is invalid, please try again.",void(this.isLoading=!1);this.secService.findEmployeeById(n).subscribe({next:r=>{this.sessionUser=r,this.cookieService.set("session_user",n,1),this.cookieService.set("session_name",`${r.firstName} ${r.lastName}`,1);const u=this.route.snapshot.queryParamMap.get("returnUrl")||"task-management/my-tasks";this.isLoading=!1,this.router.navigate([u])},error:r=>{this.isLoading=!1,r.error.message&&(this.errorMessage=r.error.message)}})}}return(t=i).\u0275fac=function(n){return new(n||t)(e.Y36(s.qu),e.Y36(c.F0),e.Y36(g.N),e.Y36(f),e.Y36(c.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-signin"]],decls:21,vars:4,consts:[[1,"container"],[1,"row","justify-content-center","mt-5"],[1,"col-lg-4","col-md-6","col-sm-6"],[1,"card","shadow"],[1,"card-title","text-center","border-bottom"],[1,"p-3"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"card-body"],[3,"formGroup","ngSubmit"],["for","empId",1,"form-label"],["type","text","id","empId","formControlName","empId",1,"form-control"],[1,"d-grid"],["type","submit",1,"btn","btn-success"],[4,"ngIf"],["routerLink","/",1,"text-warning","text-underline-hover"],["role","alert",1,"alert","alert-danger"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),e._uU(6,"Employee Sign In"),e.qZA()(),e.YNc(7,h,2,1,"div",6),e.TgZ(8,"div",7)(9,"form",8),e.NdJ("ngSubmit",function(){return r.signin(),r.signinForm.reset()}),e.TgZ(10,"div")(11,"label",9),e._uU(12,"Employee ID:"),e.qZA(),e._UZ(13,"input",10)(14,"br")(15,"div",11),e.TgZ(16,"button",12),e.YNc(17,v,2,0,"span",13),e.YNc(18,y,3,0,"div",13),e.qZA()()()()(),e.TgZ(19,"a",14),e._uU(20,"Return"),e.qZA()()()()),2&n&&(e.xp6(7),e.Q6J("ngIf",r.errorMessage),e.xp6(2),e.Q6J("formGroup",r.signinForm),e.xp6(8),e.Q6J("ngIf",!r.isLoading),e.xp6(1),e.Q6J("ngIf",r.isLoading))},dependencies:[d.O5,c.rH,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]}),i})(),title:"Nodebucket: Sign In"}]}];let I=(()=>{var t;class i{}return(t=i).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(S),c.Bz]}),i})(),C=(()=>{var t;class i{}return(t=i).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,I,c.Bz,s.u5,s.UX,m.JF]}),i})()}}]);