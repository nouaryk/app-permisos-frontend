(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{178:function(t,e,n){var content=n(180);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("e611ed62",content,!0,{sourceMap:!1})},179:function(t,e,n){"use strict";var r=n(178);n.n(r).a},180:function(t,e,n){(e=n(39)(!1)).push([t.i,"li{cursor:pointer}",""]),t.exports=e},181:function(t,e,n){"use strict";var r={name:"navbar"},o=(n(179),n(19)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-800 py-2 text-white  fixed w-full flex"},[n("ul",{staticClass:"px-10 flex"},[n("li",{staticClass:"mr-10",on:{click:function(e){return t.$router.push("/manage")}}},[t._v("Usuarios")]),t._v(" "),n("li",{staticClass:"mr-10",on:{click:function(e){return t.$router.push("/manage/uuaa")}}},[t._v("UUAAs")]),t._v(" "),n("li",{staticClass:"mr-10",on:{click:function(e){return t.$router.push("/manage/roles")}}},[t._v("Roles")]),t._v(" "),n("li",{staticClass:"mr-10",on:{click:function(e){return t.$router.push("/manage/permisos")}}},[t._v("Permisos")]),t._v(" "),n("li",{staticClass:"mr-5",on:{click:function(e){return t.$router.push("/")}}},[t._v("Cerrar sesión")])])])}),[],!1,null,null,null);e.a=component.exports},189:function(t,e,n){var content=n(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("078256de",content,!0,{sourceMap:!1})},196:function(t,e,n){"use strict";var r=n(189);n.n(r).a},197:function(t,e,n){(e=n(39)(!1)).push([t.i,"a{color:#3c5a7f}",""]),t.exports=e},199:function(t,e,n){"use strict";n.r(e);n(41);var r,o,c,l=n(5),d=n(29),m=n.n(d),h={components:{navbar:n(181).a},data:function(){return{editMode:!1,listUUAAs:[],isLoading:!1,addNewUUAA:!0,uuaaName:"",uuaaID:""}},mounted:function(){this.getUUAAs()},methods:{addUUAA:(c=Object(l.a)(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={},this.editMode?(console.log(this.uuaaID),e={data:{_id:this.uuaaID,uuaaName:this.uuaaName,editMode:!0}}):e={data:{uuaaName:this.uuaaName,editMode:!1}},this.isLoading=!0,t.prev=3,t.next=6,m.a.post("".concat("https://api-permisos.herokuapp.com/","addUUAA"),e).then((function(t){var e;"UUAA_EXISTS"==t.data.status?n.$toast.error("Esta UUAA ya existe",{duration:5e3,position:"top-center"}):(e=n.editMode?"UUAA modificada con éxito.":"Se ha añadido la UUAA ".concat(n.uuaaName," con éxito"),n.getUUAAs(),n.$toast.success(e,{duration:5e3,position:"top-center"}),n.uuaaName="",n.editMode=!1)}));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),this.$toast.error("El servidor no responde",{duration:5e3,position:"top-center"});case 11:return t.prev=11,this.isLoading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,this,[[3,8,11,14]])}))),function(){return c.apply(this,arguments)}),deleteUUAA:(o=Object(l.a)(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!1,t.prev=1,t.next=4,m.a.post("".concat("https://api-permisos.herokuapp.com/","deleteUUAA"),{data:{_id:e}}).then((function(t){"UUAA_NOT_FOUND"==t.data.status?n.$toast.error("Esta UUAA no existe.",{duration:5e3,position:"top-center"}):(n.uuaaName="",n.getUUAAs(),n.$toast.success("Se ha eliminado la UUAA con éxito",{duration:5e3,position:"top-center"}))}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),this.$toast.error("El servidor no responde",{duration:5e3,position:"top-center"});case 9:return t.prev=9,this.isLoading=!1,t.finish(9);case 12:case"end":return t.stop()}}),t,this,[[1,6,9,12]])}))),function(t){return o.apply(this,arguments)}),getUUAAs:(r=Object(l.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!1,t.prev=1,t.next=4,m.a.post("".concat("https://api-permisos.herokuapp.com/","getUUAAs"),{}).then((function(t){t.data&&(e.listUUAAs=t.data)}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),this.$toast.error("El servidor no responde");case 9:return t.prev=9,this.isLoading=!1,t.finish(9);case 12:case"end":return t.stop()}}),t,this,[[1,6,9,12]])}))),function(){return r.apply(this,arguments)}),cancel:function(){this.uuaaName="",this.editMode=!1}}},f=(n(196),n(19)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navbar"),t._v(" "),n("div",{staticClass:"bg-grey-100 h-screen flex "},[n("div",{staticClass:"w-full md:flex py-5 px-20 mt-10"},[n("div",{staticClass:"mt-3 w-full mr-5"},[t.editMode?n("h2",{staticClass:"text-xl mb-2"},[t._v("Editar UUAA")]):n("h2",{staticClass:"text-xl mb-2"},[t._v("Añadir una nueva UUAA")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.uuaaName,expression:"uuaaName"}],staticClass:"appearance-none bg-gray-200 focus:outline-none py-2 px-2 w-full",attrs:{placeholder:"Nombre de la UUAA...",spellcheck:"false",autofocus:"",autocomplete:"off",type:"text"},domProps:{value:t.uuaaName},on:{input:function(e){e.target.composing||(t.uuaaName=e.target.value)}}}),t._v(" "),n("button",{staticClass:"bg-blue-600 px-5 text-white py-2 text-sm mt-3 w-full focus:outline-none",attrs:{disabled:""==t.uuaaName},on:{click:t.addUUAA}},[t._v("Guardar")]),t._v(" "),n("button",{staticClass:"bg-gray-400 px-5 text-white py-2 text-sm mt-3 w-full focus:outline-none",on:{click:t.cancel}},[t._v("Cancelar")])]),t._v(" "),n("div",{staticClass:"mt-3 md:w-2/3"},[0==t.listUUAAs.length?n("p",{staticClass:"bg-orange-100 py-3 px-3 text-center"},[n("i",[t._v("No hay registros en la base de datos.")])]):n("table",{staticClass:"table-auto w-full"},[t._m(0),t._v(" "),n("tbody",t._l(t.listUUAAs,(function(e){return n("tr",[n("td",{staticClass:"border px-4 py-2"},[t._v(t._s(e.name))]),t._v(" "),n("td",{staticClass:"border px-4 py-2"},[n("a",{staticClass:"cursor-pointer",on:{click:function(){t.uuaaName=e.name,t.editMode=!0,t.uuaaID=e._id}}},[t._v("Editar")])]),n("td",{staticClass:"border px-4 py-2 text-center"},[n("a",{staticClass:"cursor-pointer text-red-500",on:{click:function(n){return t.deleteUUAA(e._id)}}},[t._v("Eliminar")])])])})),0)])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("h2",{staticClass:"text-xl mb-2"},[this._v("Gestión de UUAAS")])])}],!1,null,null,null);e.default=component.exports}}]);