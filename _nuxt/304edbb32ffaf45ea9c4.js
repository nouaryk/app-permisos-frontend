(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{203:function(e,t,r){"use strict";r.r(t);r(41);var o,n=r(5),c=r(29),l=r.n(c),d={data:function(){return{user:"",password:"",confirm_password:"",message:"",isLoading:!1}},methods:{register:(o=Object(n.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==this.user&&""==this.password&&""==this.confirm_password){e.next=19;break}if(this.confirm_password!=this.password){e.next=16;break}return e.prev=2,this.isLoading=!0,e.next=6,l.a.post("".concat("https://api-permisos.herokuapp.com/","register"),{user:this.user,password:this.password}).then((function(e){console.log(e),"USER_EXISTS"===e.data.status?t.$toast.error("Este nombre de usuario ya existe.",{position:"top-center",duration:2e3}):t.$router.push("/manage")}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),this.$toast.error("El servidor no responde",{duration:2e3});case 11:return e.prev=11,this.isLoading=!1,e.finish(11);case 14:e.next=17;break;case 16:this.$toast.error("Las contraseñas tienen que coincidir",{position:"top-center",duration:2e3});case 17:e.next=20;break;case 19:this.$toast.error("Rellena todos los campos",{position:"top-center",duration:2e3});case 20:case"end":return e.stop()}}),e,this,[[2,8,11,14]])}))),function(){return o.apply(this,arguments)})}},m=r(19),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-gray-700 h-screen flex justify-center items-center"},[r("div",{staticClass:"md:w-2/5 px-4 bg-white text-black py-10"},[r("h1",{staticClass:"text-3xl text-center uppercase mb-3"},[e._v("Crear cuenta")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],staticClass:"py-2 px-2 w-full mb-3 leading-tight focus:outline-none bg-gray-300",attrs:{placeholder:"Introduce tu usuario...",type:"text"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"py-2 px-2 w-full mb-3 leading-tight focus:outline-none bg-gray-300",attrs:{placeholder:"**********",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.confirm_password,expression:"confirm_password"}],staticClass:"py-2 px-2 w-full mb-3 leading-tight focus:outline-none bg-gray-300",attrs:{placeholder:"**********",type:"password"},domProps:{value:e.confirm_password},on:{input:function(t){t.target.composing||(e.confirm_password=t.target.value)}}}),e._v("\n            "+e._s(e.user.password)+"\n            \n            "),r("button",{staticClass:"bg-blue-900 py-2 px-2 w-full text-white",attrs:{disabled:""==e.user||""==e.password||""==e.confirm_password,type:"submit"},on:{click:e.register}},[e.isLoading?r("span",[e._v("Espera...")]):r("span",[e._v("Crear cuenta")])]),e._v(" "),r("p",{staticClass:"mt-5 text-center"},[e._v("¿Ya tienes una cuenta?"),r("a",{staticClass:"cursor-pointer text-blue-600",on:{click:function(t){return e.$router.push("/login")}}},[e._v(" Inicia sesión")])])])])}),[],!1,null,null,null);t.default=component.exports}}]);