(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{12:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return g}));var r=n(22),c=n.n(r),a=n(37),u=n(25),i=n.n(u),o=n(4);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var s,l=function(e){i.a.defaults.headers.common.Authorization="Bearer ".concat(e)},b=function(){i.a.defaults.headers.common.Authorization=""},j=Object(o.c)("auth/register",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/signup",t);case 4:return a=e.sent,u=a.data,l(u.token),e.abrupt("return",u);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",r(e.t0.response.data));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(o.c)("auth/login",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/login",t);case 4:return a=e.sent,u=a.data,l(u.token),e.abrupt("return",u);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),f={register:j,logOut:Object(o.c)("auth/logout",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/logout");case 4:b(),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),logIn:d,fetchCurrentUser:Object(o.c)("auth/refresh",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),null!==(a=r.auth.token)){e.next=5;break}return console.log("\u0422\u043e\u043a\u0435\u043d\u0430 \u043d\u0435\u0442, \u0443\u0445\u043e\u0434\u0438\u043c \u0438\u0437 fetchCurrentUser"),e.abrupt("return",n.rejectWithValue());case 5:return l(a),e.prev=6,e.next=9,i.a.get("/users/current");case 9:return u=e.sent,o=u.data,e.abrupt("return",o);case 14:return e.prev=14,e.t0=e.catch(6),e.abrupt("return",n.rejectWithValue(e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n){return e.apply(this,arguments)}}())},h={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUsername:function(e){return e.auth.user.name},getIsFetchingCurrent:function(e){return e.auth.isFetchingCurrentUser}},O=n(6),g=Object(o.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(s={},Object(O.a)(s,f.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(O.a)(s,f.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(O.a)(s,f.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(O.a)(s,f.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(O.a)(s,f.fetchCurrentUser.rejected,(function(e){e.isFetchingCurrentUser=!1})),s)}).reducer},124:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(24),u=n.n(a),i=n(20),o=n(11),s=n(65),l=n(7),b=n(12),j=n(48),d=n.n(j),f=n(2),h={activeLink:{color:"rgb(0 255 149)"}},O=function(){var e=Object(o.c)(b.c.getIsLoggedIn);return Object(f.jsxs)("nav",{children:[Object(f.jsx)(i.b,{to:"/",exact:!0,className:d.a.link,activeStyle:h.activeLink,children:"Home"}),e&&Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(i.b,{to:"/contacts",exact:!0,className:d.a.link,activeStyle:h.activeLink,children:"Contacts"})})]})},g=n(142),p=n(44),x=n.n(p);function v(){var e=Object(o.b)(),t=Object(o.c)(b.c.getUsername);return Object(f.jsxs)("div",{className:x.a.container,children:[Object(f.jsxs)("span",{className:x.a.name,children:["Welcome, ",t]}),Object(f.jsx)(g.a,{variant:"contained",type:"button",className:x.a.button,onClick:function(){return e(b.a.logOut())},children:"Exit"})]})}var m=n(50),k=n.n(m),y={activeLink:{color:"rgb(0 255 149)"}};function C(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(i.b,{to:"/register",exact:!0,className:k.a.link,activeStyle:y.activeLink,children:"Sign up"}),Object(f.jsx)(i.b,{to:"/login",exact:!0,className:k.a.link,activeStyle:y.activeLink,children:"Login"})]})}var I=n(67),L=n.n(I);function _(){var e=Object(o.c)(b.c.getIsLoggedIn);return Object(f.jsxs)("header",{className:L.a.header,children:[Object(f.jsx)(O,{}),e?Object(f.jsx)(v,{}):Object(f.jsx)(C,{})]})}var w=n(68),U=n.n(w);function S(e){var t=e.children;return Object(f.jsx)("div",{className:U.a.container,children:t})}var N=n(32),T=n(43),z=["children","redirectTo"];function F(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,c=Object(T.a)(e,z),a=Object(o.c)(b.c.getIsLoggedIn);return Object(f.jsx)(l.b,Object(N.a)(Object(N.a)({},c),{},{children:a?t:Object(f.jsx)(l.a,{to:r})}))}var W=["children","restricted","redirectTo"];function E(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,c=e.redirectTo,a=void 0===c?"/":c,u=Object(T.a)(e,W),i=Object(o.c)(b.c.getIsLoggedIn)&&r;return Object(f.jsx)(l.b,Object(N.a)(Object(N.a)({},u),{},{children:i?Object(f.jsx)(l.a,{to:a}):t}))}var q=n(63),A=n.n(q),R=function(){return Object(f.jsx)(A.a,{type:"ThreeDots",color:"rgb(179, 14, 170)",height:80,width:80})},V=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,171))})),B=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,172))})),P=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,173))})),M=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,175))}));function H(){var e=Object(o.b)();return Object(r.useEffect)((function(){e(b.a.fetchCurrentUser())}),[e]),Object(f.jsxs)(S,{children:[Object(f.jsx)(_,{}),Object(f.jsx)(l.d,{children:Object(f.jsxs)(r.Suspense,{fallback:Object(f.jsx)(R,{}),children:[Object(f.jsx)(E,{exact:!0,path:"/",children:Object(f.jsx)(V,{})}),Object(f.jsx)(E,{exact:!0,path:"/register",restricted:!0,children:Object(f.jsx)(B,{})}),Object(f.jsx)(E,{exact:!0,path:"/login",redirectTo:"/todos",restricted:!0,children:Object(f.jsx)(P,{})}),Object(f.jsx)(F,{path:"/contacts",redirectTo:"/login",children:Object(f.jsx)(M,{})})]})})]})}var J,D,G=n(4),K=n(69),Q=n.n(K),X=n(23),Y=n(70),Z=n.n(Y),$=n(6),ee=n(71),te=n(10),ne=n(13),re=Object(G.d)([],(J={},Object($.a)(J,ne.j,(function(e,t){return t.payload})),Object($.a)(J,ne.c,(function(e,t){var n=t.payload;return[].concat(Object(ee.a)(e),[n])})),Object($.a)(J,ne.g,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),J)),ce=Object(G.d)(!1,(D={},Object($.a)(D,ne.i,(function(){return!0})),Object($.a)(D,ne.j,(function(){return!1})),Object($.a)(D,ne.h,(function(){return!1})),Object($.a)(D,ne.b,(function(){return!0})),Object($.a)(D,ne.c,(function(){return!1})),Object($.a)(D,ne.a,(function(){return!1})),Object($.a)(D,ne.f,(function(){return!0})),Object($.a)(D,ne.g,(function(){return!1})),Object($.a)(D,ne.e,(function(){return!1})),D)),ae=Object(G.d)("",Object($.a)({},ne.d,(function(e,t){return t.payload}))),ue=Object(te.b)({items:re,filter:ae,loading:ce}),ie={key:"auth",storage:Z.a,whitelist:["token"]},oe=Object(G.a)({reducer:{auth:Object(X.g)(ie,b.b),contacts:ue},middleware:function(e){return e({serializableCheck:{ignoredActions:[X.a,X.f,X.b,X.c,X.d,X.e]}}).concat(Q.a)},devTools:!1}),se=Object(X.h)(oe);n(122),n(123);u.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(o.a,{store:oe,children:Object(f.jsx)(s.a,{loading:null,persistor:se,children:Object(f.jsx)(i.a,{children:Object(f.jsx)(H,{})})})})}),document.getElementById("root"))},13:function(e,t,n){"use strict";n.d(t,"i",(function(){return c})),n.d(t,"j",(function(){return a})),n.d(t,"h",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return b})),n.d(t,"e",(function(){return j})),n.d(t,"d",(function(){return d}));var r=n(4),c=Object(r.b)("contacts/fetchContactsRequest"),a=Object(r.b)("contacts/fetchContactsSuccess"),u=Object(r.b)("contacts/fetchContactsError"),i=Object(r.b)("contacts/addContactRequest"),o=Object(r.b)("contacts/addContactSuccess"),s=Object(r.b)("contacts/addContactError"),l=Object(r.b)("contacts/deleteContactRequest"),b=Object(r.b)("contacts/deleteContactSuccess"),j=Object(r.b)("contacts/deleteContactError"),d=Object(r.b)("contacts/changeFilter")},44:function(e,t,n){e.exports={container:"UserMenu_container__12oC-",name:"UserMenu_name__G0U_w"}},48:function(e,t,n){e.exports={link:"Navigation_link__xqxo2"}},50:function(e,t,n){e.exports={link:"AuthNav_link__3Wwlw"}},67:function(e,t,n){e.exports={header:"AppBar_header__qlPHO"}},68:function(e,t,n){e.exports={container:"Container_container__2OnPB"}}},[[124,2,3]]]);
//# sourceMappingURL=main.1cfeb5c4.chunk.js.map