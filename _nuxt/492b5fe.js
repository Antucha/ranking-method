(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{300:function(t,e,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(123).default)("1b7833da",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";n(300)},309:function(t,e,n){var o=n(122)(!1);o.push([t.i,".center-letter{text-align:center}.display-flex{display:flex}.color-text-white{color:#fff}.m-5px{margin:5px 5px 0}.b-1px-solid,.paso-content{border:1px solid #000}.paso-content{width:98vw;margin:25px auto}.w-50-px{width:50px}.m-5px{margin:5px}.h-26-px{height:26px}.f-w-b{font-weight:700}.circle{width:20px;height:20px;border-radius:50%}.input-group{display:flex;align-items:flex-start}.head-text,.save-factor-button{margin:0 5px}.head-text,.left-text{border:1px solid #000}.left-text{margin:5px 0 0 5px}.container-left-column{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.container-body,.container-grid{display:flex}.columns-grig{display:flex;transform:translate(5px,3px)}.celda-input{width:61.64px;margin:5px 5px 0}.input-importancia{width:100%;height:25px}.calculate-ponderaitions{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:auto}.conteo-head,.total-color{background:#0a2685;color:#fff;text-align:center}.conteo-column{background:#7f9af5;color:#fff;width:53.5px;margin:5px 5px 0 10px;text-align:center}.ponderaciones-head{background:#7a1a32;color:#fff;text-align:center}.ponderaciones-column{background:#f16e8f;color:#fff;width:105.15px;margin:5px 5px 0;text-align:center}.conteo-total{width:53.5px;margin:5px 0 0 10px;text-align:center}.numer-left{width:24px}.factor-left,.numer-left{border:1px solid #000;margin:5px}.factor-left{width:150px}.peso-left{width:60px;border:1px solid #000;margin:5px}.cuadro-resultado{display:flex}.margin-ponderaciones{margin:5px 5px 10px}.contnet-likert{height:120px;display:flex;align-items:center;flex-grow:1;align-self:center;justify-content:space-evenly}.image-likert{height:100%}.ponderation-color{background:#7f9af5}.ponderation-total{background:#0a2685}",""]),t.exports=o},317:function(t,e,n){"use strict";n.r(e);n(183);var o=n(41),r=n(42),c=n(87),l=n(124),d=n(66),v=n(62),f=(n(16),n(9),n(12),n(297)),h=n(86);n(298);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c};f.Vue.use(h.a);var x=function(t){Object(c.a)(n,t);var e=_(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).showInputAdd=!1,t.factorName="",t.listaFactores=[],t.showPreg2=!1,t.arrayImportanciaRelativa=[],t.arrSuma=[],t.totalSuma=0,t.showResults=!1,t.showPreg3=!1,t.showInputAddPaso3=!1,t.zonarName="",t.listaZonas=[],t.showPreg4=!1,t.showResultsFinal=!1,t.ganador={name:"",id:0,calificaciones:[],ponderaciones:[],totalPonderacion:0},t}return Object(r.a)(n,[{key:"mounted",value:function(){}},{key:"saveFactor",value:function(){this.listaFactores.push({name:this.factorName,id:this.listaFactores.length+1,peso:0}),this.factorName="",this.showInputAdd=!this.showInputAdd}},{key:"saveZona",value:function(){this.listaZonas.push({name:this.zonarName,id:this.listaZonas.length+1,calificaciones:[],ponderaciones:[],totalPonderacion:0}),this.zonarName="",this.showInputAddPaso3=!this.showInputAddPaso3}},{key:"cancelAddFactor",value:function(){this.factorName="",this.showInputAdd=!this.showInputAdd}},{key:"cancelAddZona",value:function(){this.zonarName="",this.showInputAddPaso3=!this.showInputAddPaso3}},{key:"createArray",value:function(){this.arrayImportanciaRelativa=[];for(var i=0;i<this.listaFactores.length;i++){for(var t=[],e=0;e<this.listaFactores.length;e++)i==e?t.push({state:0,value:0}):t.push({state:1,value:0});this.arrayImportanciaRelativa.push(t)}this.showPreg2=!0,this.showResults=!1}},{key:"createArrayZonas",value:function(){var t=this;this.listaZonas.forEach((function(e){t.listaFactores.forEach((function(t){e.calificaciones.push({value:0})}))})),this.listaZonas.forEach((function(e){t.arrSuma.forEach((function(t,n){e.ponderaciones.push(t.percent*e.calificaciones[n].value/100)}))})),this.showPreg4=!0,console.log(this.listaFactores)}},{key:"updatePonderaciones",value:function(){var t=this;this.listaZonas.forEach((function(e){t.arrSuma.forEach((function(t,n){e.ponderaciones=[]}))})),this.listaZonas.forEach((function(e){t.arrSuma.forEach((function(t,n){e.ponderaciones.push(Math.round(t.percent*e.calificaciones[n].value*100/100)/100)}))})),this.listaZonas.forEach((function(e){t.arrSuma.forEach((function(t,n){e.totalPonderacion+=t.percent*e.calificaciones[n].value*100/100})),e.totalPonderacion=Math.round(e.totalPonderacion)/100}))}},{key:"calcularConteo",value:function(){var t=this;this.arrSuma=[],this.totalSuma=0,this.arrayImportanciaRelativa.forEach((function(e){var n=0;console.log(e);for(var i=0;i<e.length;i++)n+=parseInt(e[i].value);console.log(n),t.arrSuma.push({value:n,percent:0})})),this.arrSuma.forEach((function(e){t.totalSuma+=e.value})),this.arrSuma.forEach((function(e){e.percent=Math.round(100*e.value*100/t.totalSuma)/100})),this.arrSuma.forEach((function(e,n){t.listaFactores[n].peso=e.percent})),this.showResults=!0}},{key:"verResult",value:function(){var t=this;this.listaZonas.forEach((function(e){e.totalPonderacion>t.ganador.totalPonderacion&&(t.ganador=e)})),this.showResultsFinal=!0}}]),n}(f.Vue),w=x=m([Object(f.Component)({components:{}})],x),C=(n(308),n(88)),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"div"},[n("h1",[t._v("Método de ranking de factores")]),t._v(" "),n("div",{staticClass:"paso1-content paso-content"},[t._m(0),t._v(" "),n("div",{staticClass:"body-preg"},[n("div",{staticClass:"list-factores"},[t._l(t.listaFactores,(function(e,o){return n("p",{key:o},[t._v("Factor "+t._s(o+1)+": "+t._s(e.name))])})),t._v(" "),t.showInputAdd?n("div",{staticClass:"input-group"},[n("p",[t._v("Factor "+t._s(t.listaFactores.length+1)+":")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.factorName,expression:"factorName"}],attrs:{type:"text"},domProps:{value:t.factorName},on:{input:function(e){e.target.composing||(t.factorName=e.target.value)}}}),t._v(" "),n("b-button",{staticClass:"save-factor-button",attrs:{size:"sm",variant:"outline-primary"},on:{click:function(e){return t.saveFactor()}}},[t._v("Guardar")]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(e){return t.cancelAddFactor()}}},[t._v("Cancelar")])],1):t._e(),t._v(" "),n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){t.showInputAdd=!t.showInputAdd}}},[t._v(t._s(t.showInputAdd?"Cerrar formulario":"Agregar factor"))]),t._v(" "),n("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.createArray()}}},[t._v("Pasar al paso 2")])],2)])]),t._v(" "),t.showPreg2?n("div",{staticClass:"paso2-content paso-content"},[t._m(1),t._v(" "),n("div",{staticClass:"body-preg"},[n("div",{staticClass:"list-factores"},[n("div",{staticClass:"container-head-column display-flex"},[n("p",{staticClass:"head-text color-text-white"},[t._v("Factor: 1")]),t._v(" "),t._l(t.listaFactores,(function(e,o){return n("p",{key:o,staticClass:"head-text"},[t._v(" Factor: "+t._s(o+1)+" ")])})),t._v(" "),t.showResults?n("p",{staticClass:"head-text conteo-head"},[t._v("Conteo")]):t._e(),t._v(" "),t.showResults?n("p",{staticClass:"head-text ponderaciones-head"},[t._v("Ponderaciones")]):t._e()],2),t._v(" "),n("div",{staticClass:"container-body"},[n("div",{staticClass:"container-left-column"},t._l(t.listaFactores,(function(e,o){return n("p",{key:o,staticClass:"left-text"},[t._v(" Factor: "+t._s(o+1)+" ")])})),0),t._v(" "),n("div",{staticClass:"container-grid"},[n("div",{staticClass:"grids-cont"},t._l(t.arrayImportanciaRelativa,(function(e,o){return n("div",{key:o,staticClass:"columns-grig"},t._l(e,(function(e,o){return n("div",{key:o,staticClass:"celda-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"importancia.value"}],staticClass:"input-importancia center-letter",attrs:{type:"number",min:"0",max:"1",disabled:0==e.state},domProps:{value:e.value},on:{input:function(n){n.target.composing||t.$set(e,"value",n.target.value)}}})])})),0)})),0),t._v(" "),t.showResults?n("div",{staticClass:"content-result-partial"},[t._l(t.arrSuma,(function(e,o){return n("p",{key:o,staticClass:"m-5px b-1px-solid conteo-column"},[t._v("  "+t._s(e.value)+" ")])})),t._v(" "),n("p",{staticClass:"conteo-total total-color b-1px-solid"},[t._v(t._s(t.totalSuma)+" ")])],2):t._e(),t._v(" "),t.showResults?n("div",{staticClass:"content-result-partial"},[t._l(t.arrSuma,(function(e,o){return n("p",{key:o,staticClass:" b-1px-solid ponderaciones-column"},[t._v("  "+t._s(e.percent)+"% ")])})),t._v(" "),n("p",{staticClass:" ponderaciones-head m-5px b-1px-solid"},[t._v("100% ")])],2):t._e()])]),t._v(" "),n("b-button",{staticClass:"calculate-ponderaitions",attrs:{variant:"outline-primary"},on:{click:function(e){return t.calcularConteo()}}},[t._v("Calcular ponderaciones")]),t._v(" "),n("b-button",{staticClass:"calculate-ponderaitions",attrs:{variant:"success"},on:{click:function(e){t.showPreg3=!t.showPreg3}}},[t._v("Pasar al paso 3")])],1)])]):t._e(),t._v(" "),t.showPreg3?n("div",{staticClass:"paso3-content paso-content"},[t._m(2),t._v(" "),n("div",{staticClass:"body-preg"},[n("div",{staticClass:"list-factores"},[t._l(t.listaZonas,(function(e,o){return n("p",{key:o},[t._v("Zona "+t._s(o+1)+": "+t._s(e.name))])})),t._v(" "),t.showInputAddPaso3?n("div",{staticClass:"input-group"},[n("p",[t._v("Zona "+t._s(t.listaZonas.length+1)+":")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.zonarName,expression:"zonarName"}],attrs:{type:"text"},domProps:{value:t.zonarName},on:{input:function(e){e.target.composing||(t.zonarName=e.target.value)}}}),t._v(" "),n("b-button",{staticClass:"save-factor-button",attrs:{size:"sm",variant:"outline-primary"},on:{click:function(e){return t.saveZona()}}},[t._v("Guardar")]),t._v(" "),n("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(e){return t.cancelAddZona()}}},[t._v("Cancelar")])],1):t._e(),t._v(" "),n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){t.showInputAddPaso3=!t.showInputAddPaso3}}},[t._v(t._s(t.showInputAddPaso3?"Cerrar formulario":"Agregar zona"))]),t._v(" "),n("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.createArrayZonas()}}},[t._v("Pasar al paso 4")])],2)])]):t._e(),t._v(" "),t.showPreg4?n("div",{staticClass:"paso4-content paso-content"},[t._m(3),t._v(" "),n("div",{staticClass:"body-preg"},[n("div",{staticClass:"cuadro-resultado"},[n("div",{staticClass:"left-name-peso"},[t._m(4),t._v(" "),n("div",{staticClass:"body-result-cuadrado"},t._l(t.listaFactores,(function(e,o){return n("div",{key:o,staticClass:"rows-left display-flex"},[n("p",{staticClass:"numer-left"},[t._v(t._s(o+1))]),t._v(" "),n("p",{staticClass:"factor-left"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"peso-left"},[t._v(t._s(e.peso)+"%")])])})),0)]),t._v(" "),n("div",{staticClass:"right-result display-flex"},t._l(t.listaZonas,(function(e,o){return n("div",{key:o,staticClass:"zona-element"},[n("div",{staticClass:"name-zona center-letter m-5px b-1px-solid f-w-b"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"content-body-zona display-flex"},[n("div",{staticClass:"content-input-calificaciones"},t._l(e.calificaciones,(function(e,o){return n("div",{key:o,staticClass:"calificaciones-content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"calif.value"}],staticClass:"w-50-px m-5px h-26-px",attrs:{type:"number"},domProps:{value:e.value},on:{input:function(n){n.target.composing||t.$set(e,"value",n.target.value)}}})])})),0),t._v(" "),n("div",{staticClass:"ponderaciones-content"},[t._l(e.ponderaciones,(function(e,o){return n("p",{key:o,staticClass:"margin-ponderaciones color-text-white b-1px-solid ponderation-color"},[t._v(t._s(e))])})),t._v(" "),n("p",{staticClass:"b-1px-solid f-w-b ponderation-total color-text-white"},[t._v(t._s(e.totalPonderacion))])],2)])])})),0),t._v(" "),t._m(5)]),t._v(" "),n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.updatePonderaciones()}}},[t._v("Actualizar ponderaciones")]),t._v(" "),n("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.verResult()}}},[t._v("Ver reusltados")])],1)]):t._e(),t._v(" "),t.showResultsFinal?n("div",{staticClass:"paso4-content paso-content"},[t._m(6),t._v(" "),n("div",{staticClass:"body-preg"},[n("p",[t._v("GANADOR: "+t._s(t.ganador.name))]),t._v(" "),n("p",[t._v("PONDERACIÓN: "+t._s(t.ganador.totalPonderacion))])])]):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-preg"},[n("h2",[t._v("Paso 1: Enlista los factores relevantes")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-preg"},[n("h2",[t._v("Paso 2: Analizar la importancia relativa")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-preg"},[n("h2",[t._v("Paso 3: Enlistar las posibles locaciones")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-preg"},[n("h2",[t._v("Paso 4: Evaluar el nivel de desarrollo de cada factor")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-result-cuadro display-flex"},[n("p",{staticClass:"numer-left f-w-b"},[t._v("N°")]),t._v(" "),n("p",{staticClass:"factor-left f-w-b"},[t._v("Factor")]),t._v(" "),n("p",{staticClass:"peso-left f-w-b"},[t._v("Peso")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contnet-likert"},[n("img",{staticClass:"image-likert",attrs:{src:"https://blog.hubspot.es/hubfs/media/ejemplosdeescaladelikert.png"}}),t._v(" "),n("div",{staticClass:"leyenda"},[n("div",{staticClass:"content-1 display-flex"},[n("div",{staticClass:"circle ponderation-color"}),t._v(" "),n("p",[t._v("Ponderaciones")])]),t._v(" "),n("div",{staticClass:"content-1 display-flex"},[n("div",{staticClass:"circle ponderation-total"}),t._v(" "),n("p",[t._v("Suma de ponderaciones por zona")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-preg"},[n("h2",[t._v("Resultados")])])}],!1,null,null,null);e.default=component.exports}}]);