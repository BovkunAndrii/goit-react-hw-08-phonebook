(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{173:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(144),i=a(0),o=a(11),l=a(12),r=a(174),s=a(142),c=a(2),u={form:{width:320,marginLeft:"auto",marginTop:"100px",marginRight:"auto",minHeight:"calc(100vh - 50px)"},label:{display:"flex",flexDirection:"column",marginBottom:25},button:{display:"block",marginLeft:"auto",marginRight:"auto"}};function b(){var e=Object(o.b)(),t=Object(i.useState)(""),a=Object(n.a)(t,2),b=a[0],m=a[1],d=Object(i.useState)(""),p=Object(n.a)(d,2),h=p[0],f=p[1],g=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"email":return m(n);case"password":return f(n);default:return}};return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(l.a.logIn({email:b,password:h})),m(""),f("")},style:u.form,autoComplete:"off",children:[Object(c.jsx)(r.a,{id:"outlined-basic",label:"Email adress",variant:"outlined",size:"small",style:u.label,type:"email",name:"email",value:b,onChange:g}),Object(c.jsx)(r.a,{id:"outlined-basic",label:"Password",variant:"outlined",size:"small",style:u.label,type:"password",name:"password",value:h,onChange:g}),Object(c.jsx)(s.a,{variant:"contained",color:"primary",type:"submit",style:u.button,children:"Enter"})]})})}}}]);
//# sourceMappingURL=6.80bd517a.chunk.js.map