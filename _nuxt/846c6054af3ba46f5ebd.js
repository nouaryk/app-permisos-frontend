(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{178:function(t,e,r){var content=r(180);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("e611ed62",content,!0,{sourceMap:!1})},179:function(t,e,r){"use strict";var n=r(178);r.n(n).a},180:function(t,e,r){(e=r(39)(!1)).push([t.i,"li{cursor:pointer}",""]),t.exports=e},181:function(t,e,r){"use strict";var n={name:"navbar"},o=(r(179),r(19)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-gray-800 py-2 text-white  fixed w-full flex"},[r("ul",{staticClass:"px-10 flex"},[r("li",{staticClass:"mr-10",on:{click:function(e){return t.$router.push("/manage")}}},[t._v("Usuarios")]),t._v(" "),r("li",{staticClass:"mr-10",on:{click:function(e){return t.$router.push("/manage/uuaa")}}},[t._v("UUAAs")]),t._v(" "),r("li",{staticClass:"mr-10",on:{click:function(e){return t.$router.push("/manage/roles")}}},[t._v("Roles")]),t._v(" "),r("li",{staticClass:"mr-10",on:{click:function(e){return t.$router.push("/manage/permisos")}}},[t._v("Permisos")]),t._v(" "),r("li",{staticClass:"mr-5",on:{click:function(e){return t.$router.push("/")}}},[t._v("Cerrar sesión")])])])}),[],!1,null,null,null);e.a=component.exports},182:function(t,e,r){"use strict";var n=r(7),o=r(183)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),n(n.P+n.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(73)("find")},183:function(t,e,r){var n=r(27),o=r(72),c=r(28),l=r(20),d=r(184);t.exports=function(t,e){var r=1==t,h=2==t,v=3==t,f=4==t,m=6==t,_=5==t||m,x=e||d;return function(e,d,A){for(var U,R,k=c(e),y=o(k),w=n(d,A,3),C=l(y.length),$=0,L=r?x(e,C):h?x(e,0):void 0;C>$;$++)if((_||$ in y)&&(R=w(U=y[$],$,k),t))if(r)L[$]=R;else if(R)switch(t){case 3:return!0;case 5:return U;case 6:return $;case 2:L.push(U)}else if(f)return!1;return m?-1:v||f?f:L}}},184:function(t,e,r){var n=r(185);t.exports=function(t,e){return new(n(t))(e)}},185:function(t,e,r){var n=r(10),o=r(110),c=r(2)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},202:function(t,e,r){"use strict";r.r(e);r(182),r(41);var n,o,c,l,d,h,v=r(5),f=r(29),m=r.n(f),_={components:{navbar:r(181).a},data:function(){return{users:[],editMode:!1,user:[],listUUAA:[],uuaaToAdd:[],userRole:"",isLoading:!1,roles:[]}},mounted:function(){this.getUsers(),this.getRoles()},methods:{getUsers:(h=Object(v.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.prev=1,t.next=4,m.a.get("".concat("https://api-permisos.herokuapp.com/","getUsers"),{}).then((function(t){t.data.users.length>0&&(e.users=t.data.users)}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),this.$toast.error("El servidor no responde",{duration:2e3});case 9:return t.prev=9,this.isLoading=!1,t.finish(9);case 12:case"end":return t.stop()}}),t,this,[[1,6,9,12]])}))),function(){return h.apply(this,arguments)}),getRoles:(d=Object(v.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!1,t.prev=1,t.next=4,m.a.post("".concat("https://api-permisos.herokuapp.com/","getRoles"),{}).then((function(t){t.data&&(e.roles=t.data)}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),this.$toast.error("El servidor no responde");case 9:return t.prev=9,this.isLoading=!1,t.finish(9);case 12:case"end":return t.stop()}}),t,this,[[1,6,9,12]])}))),function(){return d.apply(this,arguments)}),selectUser:(l=Object(v.a)(regeneratorRuntime.mark((function t(e){var r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,this.editMode=!0,t.prev=2,t.next=5,m.a.post("".concat("https://api-permisos.herokuapp.com/","getUser/").concat(e),{}).then((function(t){t.data&&(r.user=t.data,r.getRoleUUAAS(r.user.role))}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),this.$toast.error("El servidor no responde",{duration:2e3});case 10:return t.prev=10,this.isLoading=!1,t.finish(10);case 13:case"end":return t.stop()}}),t,this,[[2,7,10,13]])}))),function(t){return l.apply(this,arguments)}),updateUUAAS:(c=Object(v.a)(regeneratorRuntime.mark((function t(){var e,i,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(this.isLoading=!0,e=document.querySelectorAll("#uuaa"),this.uuaaToAdd=[],i=0;i<e.length;i++)e[i].checked&&(console.log(e[i].getAttribute("data-uuaa")),this.uuaaToAdd.push(e[i].getAttribute("data-uuaa")));return console.log(this.uuaasToAdd),t.prev=5,t.next=8,m.a.post("".concat("https://api-permisos.herokuapp.com/","updateUUAAs"),{data:{uuaas:this.uuaaToAdd,userId:this.user._id}}).then((function(t){t.data&&r.$toast.success("Se han actualizado los permisos del usuario",{duration:2e3})}));case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(5),this.$toast.error("El servidor no responde",{duration:2e3});case 13:return t.prev=13,this.isLoading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,this,[[5,10,13,16]])}))),function(){return c.apply(this,arguments)}),checkHasUUAA:function(t,e){var r=!1;return null!=e&&e.find((function(e){e==t&&(console.log("found!!!"),r=!0)})),r},setUserRole:function(){event.target.value?(this.userRole=event.target.value,this.getRoleUUAAS(this.userRole)):this.listUUAA=[]},getRoleUUAAS:(o=Object(v.a)(regeneratorRuntime.mark((function t(e){var r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,console.log(this.userRole),t.prev=2,t.next=5,m.a.post("".concat("https://api-permisos.herokuapp.com/","getRoleUUAAS"),{data:{rolename:e}}).then((function(t){t.data&&(console.log(t.data),r.listUUAA=t.data)}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),this.$toast.error("El servidor no responde",{duration:2e3});case 10:return t.prev=10,this.isLoading=!1,t.finish(10);case 13:case"end":return t.stop()}}),t,this,[[2,7,10,13]])}))),function(t){return o.apply(this,arguments)}),updateUserRole:(n=Object(v.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,console.log(this.userRole),t.prev=2,t.next=5,m.a.post("".concat("https://api-permisos.herokuapp.com/","updateUserRole"),{data:{userId:this.user._id,role:this.userRole}}).then((function(t){t.data&&e.$toast.success("Se ha actualizado el rol del usuario",{duration:2e3})}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),this.$toast.error("El servidor no responde",{duration:2e3});case 10:return t.prev=10,this.isLoading=!1,t.finish(10);case 13:case"end":return t.stop()}}),t,this,[[2,7,10,13]])}))),function(){return n.apply(this,arguments)})}},x=r(19),component=Object(x.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("navbar"),t._v(" "),r("div",{staticClass:"bg-grey-100 h-screen md:flex "},[r("div",{staticClass:"w-full md:w-2/5  sm:px-5 py-5 mt-10"},[r("h1",{staticClass:"text-2xl"},[t._v("Gestionar usuarios")]),t._v(" "),r("table",{staticClass:"table-auto text-center"},[t._m(0),t._v(" "),r("tbody",t._l(t.users,(function(u){return r("tr",[r("td",[t._v("\n                        "+t._s(u.user)+"\n                    ")]),t._v(" "),r("td",[r("button",{staticClass:"text-white bg-red-400 text-sm px-4 py-1 focus:outline-none",class:{"bg-red-600":u._id==t.user._id},attrs:{disabled:t.isLoading},on:{click:function(e){return t.selectUser(u._id)}}},[t._v("Permisos")])])])})),0)])]),t._v(" "),r("div",{staticClass:"w-full py-5 mt-10"},[t.editMode?r("div",[r("h2",{staticClass:"text-xl"},[t._v(" Modificar permisos del usuario "+t._s(t.user.user))]),t._v(" "),r("strong",{staticClass:"text-gray-700 mr-3"},[t._v("Cambiar rol ")]),t._v(" "),r("select",{on:{change:t.setUserRole}},[r("option",{attrs:{selected:"",value:""}},[t._v("Selecciona un rol")]),t._v(" "),t._l(t.roles,(function(e){return r("option",{attrs:{role_id:e._id},domProps:{selected:t.user.role==e.name,value:e.name}},[t._v(t._s(e.name))])}))],2),t._v(" "),r("button",{staticClass:"bg-blue-700 text-white py-1 px-4 mt-3",attrs:{disabled:""==t.userRole},on:{click:t.updateUserRole}},[t._v("Guardar")]),t._v(" "),r("hr",{staticClass:"mt-4 mb-4"}),t._v(" "),0==t.listUUAA.length?r("p",{staticClass:"bg-orange-100 py-3 px-3 text-center"},[r("i",[t._v("Este rol no tiene ninguna UUAA asignada.")])]):r("table",{staticClass:"table-auto text-center"},[t._m(1),t._v(" "),r("tbody",t._l(t.listUUAA.uuaas,(function(e,n){return r("tr",{key:e._id},[r("td",[t._v("\n                        "+t._s(e)+"\n                    ")]),t._v(" "),t._m(2,!0)])})),0)])]):r("div",{staticClass:"mt-10"},[t._v("\n            Selecciona un usuario en el listado de la izquierda para modificar sus permisos de UUAAs\n        ")])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"px-4 py-2"},[this._v("Usuario")]),this._v(" "),e("th",{staticClass:"px-4 py-2"},[this._v("Acciones")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"px-4 py-2"},[this._v("UUAA")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("label",{staticClass:"inline-flex items-center"})])}],!1,null,null,null);e.default=component.exports}}]);