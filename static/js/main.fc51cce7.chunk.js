(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(72)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),l=a.n(i),o=(a(31),a(19)),c=a(20),s=a(24),m=a(21),u=a(25),p=(a(32),function(e){e.onRouteChange,e.isSignedIn;return r.a.createElement("div",null)}),b=a(22),d=a.n(b),h=(a(33),function(){return r.a.createElement("div",{className:"ma4 mt0"},r.a.createElement(d.a,{className:"Tilt br2 shadow-2",options:{max:25},style:{height:150,width:150}},r.a.createElement("div",{className:"Tilt-inner"}," ")))}),g=(a(34),function(e){var t=e.OnInputChange,a=e.onButtonSubmit;return r.a.createElement("div",null,r.a.createElement("p",{className:"f3 "},"See maagiline leht tuvastab n\xe4gusi, proovi j\xe4rgi"),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"form center pa4 br3 shadow-5"},r.a.createElement("input",{type:"text",name:"",id:"",className:"f4 pa2 w-70 center",onChange:t}),r.a.createElement("br",null),r.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Tuvasta"))),"Enter picture url to use face recognition")}),E=(a(35),function(e){var t=e.imageURL,a=e.box;return r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("img",{src:t,alt:"",width:"500px",height:"auto",id:"inputimage"}),r.a.createElement("div",{className:"bounding-box",style:{left:a.leftCol,top:a.topRow,right:a.rightCol,bottom:a.bottomRow}})))}),w=function(e){var t=e.onRouteChange;return r.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0 center"},"Face recognition app"),r.a.createElement("p",null,"Detects faces on picture, all done using React.js. Purpose was to learn React.")),r.a.createElement("div",{className:""},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Start using",onClick:function(){return t("home")}})))))},f=function(e){var t=e.onRouteChange;return r.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0 center"},"Registeeru"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Nimi"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Parool"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:""},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Registeeru",onClick:function(){return t("home")}})))))},v=(a(36),a(23)),N=a.n(v),C=a(11),R=a.n(C),y=new R.a.App({apiKey:"07195c9ff13d4e8081a7dbc093894ae8"}),k={particles:{number:{value:70,density:{enable:!0,value_area:800}}}},S=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).OnInputChange=function(t){e.setState({input:t.target.value})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),r=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*r,rightCol:n-t.right_col*n,bottomRow:r-t.bottom_row*r}},e.displayFaceBox=function(t){e.setState({box:t})},e.onButtonSubmit=function(){e.setState({imageURL:e.state.input}),y.models.predict(R.a.FACE_DETECT_MODEL,e.state.input).then(function(t){e.displayFaceBox(e.calculateFaceLocation(t))},function(e){console.log(e)})},e.onRouteChange=function(t){"signout"===t?e.setState({isSignedIn:!1}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageURL:"",box:{},route:"signin",isSignedIn:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageURL,n=e.route,i=e.box;return r.a.createElement("div",{className:"App"},r.a.createElement(N.a,{className:"particles",params:k}),r.a.createElement(p,{isSignedIn:t,onRouteChange:this.onRouteChange}),r.a.createElement(h,null),"home"===n?r.a.createElement("div",null,r.a.createElement(g,{OnInputChange:this.OnInputChange,onButtonSubmit:this.onButtonSubmit}),r.a.createElement(E,{imageURL:a,box:i})):"signin"===n?r.a.createElement(w,{onRouteChange:this.onRouteChange}):r.a.createElement(f,{onRouteChange:this.onRouteChange}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.fc51cce7.chunk.js.map