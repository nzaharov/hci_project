(this.webpackJsonphci_project=this.webpackJsonphci_project||[]).push([[0],{102:function(e,a,t){},112:function(e,a,t){},114:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(11),l=t.n(i),o=(t(102),t(49)),c=t(13),m=t(164),s=t(20),u=t(162),d=t(165),p=t(65),g=t(186),v=t(168),h=t(63),b=t(86),E=Object(b.a)({palette:{primary:{main:"#81c784"},secondary:{main:"#212121"},error:h.a}}),f=r.a.createContext(E);var x=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),h=o[0],b=o[1],E=Object(n.useState)(""),x=Object(s.a)(E,2),y=x[0],j=x[1],w=Object(c.e)(),O=Object(n.useContext)(f),S=Object(u.a)((function(){return{paper:{marginTop:O.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",width:"90%"},form:{width:"100%",marginTop:O.spacing(1)},submit:{margin:O.spacing(3,0,2)},footer:{display:"flex",flexDirection:"column",alignContent:"center"},error:{textAlign:"center",color:"red",fontSize:"1.3rem"}}}))();return r.a.createElement(m.a,{theme:O},r.a.createElement(d.a,null),r.a.createElement("div",{id:"login"},r.a.createElement("div",{className:S.paper},r.a.createElement(p.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:S.form,onSubmit:function(e){e.preventDefault(),"admin"===h&&"admin"===t?w.push("/"):j("Wrong username or password")}},r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Username",value:h,onChange:function(e){return b(e.target.value)},name:"username",autoComplete:"username",autoFocus:!0}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:t,name:"password",label:"Password",type:"password",id:"password",onChange:function(e){return i(e.target.value)}}),r.a.createElement(v.a,{type:"submit",fullWidth:!0,variant:"contained",className:S.submit},"Login")),y?r.a.createElement("p",{className:S.error},y):"")))},y=t(87),j=t(187),w=t(188),O=t(172),S=t(15),k=t.n(S),C=t(195),N=t(196),D=t(169),q=t(197);t(108);k.a.Icon.Default.imagePath="../node_modules/leaflet",delete k.a.Icon.Default.prototype._getIconUrl,k.a.Icon.Default.mergeOptions({iconRetinaUrl:t(109),iconUrl:t(110),shadowUrl:t(111)});var P=function(e){var a=e.markers;return r.a.createElement(C.a,{center:a[0]?a[0].coordinates:[42,23],zoom:13,style:{height:"500px"}},r.a.createElement(N.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),a.map((function(e,a){return r.a.createElement(D.a,{key:a,position:e.coordinates},r.a.createElement(q.a,null,e.title))})))},T=(t(112),function(e){var a=e.trip;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{markers:a.stops}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content-header"},r.a.createElement(p.a,{variant:"h4"},a.name),r.a.createElement(p.a,{variant:"subtitle1"},a.author)),r.a.createElement(p.a,{variant:"body1"},a.description)))}),A=t(170),B=t(171),I=function(e){return r.a.createElement(r.a.Fragment,null,e.images&&e.images.length?r.a.createElement(A.a,{cols:3},e.images.map((function(e,a){return r.a.createElement(B.a,{key:a,cols:1},r.a.createElement("img",{src:e,alt:"Loading..."}))}))):r.a.createElement("div",{id:"empty"},"No images available..."))},W=function(e){return r.a.createElement(r.a.Fragment,null)},F=function(e){var a=e.children,t=e.value,n=e.index,i=Object(y.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},i),t===n&&r.a.createElement(j.a,null,a))},M=function(e){var a=e.location.state.trip,t=Object(n.useState)(0),i=Object(s.a)(t,2),l=i[0],o=i[1];return r.a.createElement("div",null,r.a.createElement(w.a,{value:l,onChange:function(e,a){o(a)},indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(O.a,{label:"Trip"}),r.a.createElement(O.a,{label:"Stops"}),r.a.createElement(O.a,{label:"Gallery"})),r.a.createElement(F,{value:l,index:0},r.a.createElement(T,{trip:a})),r.a.createElement(F,{value:l,index:1},r.a.createElement(W,null)),r.a.createElement(F,{value:l,index:2},r.a.createElement(I,{images:a.images})))},L=t(82),U=t.n(L),z=t(83),V=t.n(z),_=t(173),R=t(174),Y=t(177),G=t(176),J=t(175),H=Object(u.a)({root:{maxHeight:"380px",width:"100%",marginTop:"10px",display:"flex",justifyContent:"center",flexDirection:"column"},cardContainer:{display:"flex",flexDirection:"column"},heartButton:{color:"#da42f5"},description:{overflowWrap:"break-word",height:"2.7rem",overflowY:"hidden"}});function Z(e){var a=H(),t=e.trip,i=Object(n.useState)(t.liked),l=Object(s.a)(i,2),o=l[0],m=l[1],u=Object(c.e)();return r.a.createElement(_.a,{className:a.root},r.a.createElement(R.a,{onClick:function(){return u.push({pathname:"trip",state:{trip:t}})}},r.a.createElement(J.a,{component:"img",alt:"Trip thumnail",height:"140px",image:"/images/".concat(t.thumbnail),title:"Contemplative Reptile"}),r.a.createElement(G.a,null,r.a.createElement(p.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name),r.a.createElement(p.a,{gutterBottom:!0,variant:"h6",component:"h4"},"by ",t.author),r.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p",className:a.description},t.description))),r.a.createElement(Y.a,null,r.a.createElement(v.a,{size:"small",onClick:function(){o?t.likes--:t.likes++,m(!o)}},o?r.a.createElement(U.a,{htmlColor:"#eb34db"}):r.a.createElement(V.a,{htmlColor:"#eb34db"})," ",t.likes)))}var $=[{name:"First",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet commodo dui, id accumsan sem. Praesent ut sem vel augue porta viverra quis non ipsum. Curabitur rhoncus efficitur tempus. Praesent vitae lacinia sem, vitae luctus mi. Sed viverra massa quis posuere tincidunt. Aenean pharetra tortor in commodo vestibulum. Phasellus convallis nulla egestas sollicitudin varius. Ut tincidunt ligula nec felis laoreet, tempor mattis dui elementum.\n\n    Sed dictum consectetur metus in scelerisque. Sed vitae enim condimentum, cursus neque ac, malesuada odio. Nulla facilisi. Integer quis dignissim ex. Vivamus lacus mauris, hendrerit nec mi sed, tempus finibus turpis. Sed dui mi, elementum nec lobortis ut, pharetra sed ante. Donec et congue orci. Morbi non pulvinar neque. Pellentesque elementum gravida diam sit amet pharetra. Sed ut viverra ligula. Duis mollis nibh lacus. Duis vel enim molestie tellus consequat sollicitudin ut a turpis. Sed id erat nec lacus porta commodo nec vitae lectus. Mauris et erat varius, vehicula nunc id, gravida eros. Maecenas tincidunt mollis enim, nec pretium magna bibendum nec.",author:"Yavor Petkov",thumbnail:"2.jpg",liked:!1,likes:23,stops:[{title:"First stop",coordinates:[41.5,23]},{title:"Second Stop",coordinates:[40,30]}]},{name:"Second",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet commodo dui, id accumsan sem. Praesent ut sem vel augue porta viverra quis non ipsum. Curabitur rhoncus efficitur tempus. Praesent vitae lacinia sem, vitae luctus mi. Sed viverra massa quis posuere tincidunt. Aenean pharetra tortor in commodo vestibulum. Phasellus convallis nulla egestas sollicitudin varius. Ut tincidunt ligula nec felis laoreet, tempor mattis dui elementum.\n\n    Sed dictum consectetur metus in scelerisque. Sed vitae enim condimentum, cursus neque ac, malesuada odio. Nulla facilisi. Integer quis dignissim ex. Vivamus lacus mauris, hendrerit nec mi sed, tempus finibus turpis. Sed dui mi, elementum nec lobortis ut, pharetra sed ante. Donec et congue orci. Morbi non pulvinar neque. Pellentesque elementum gravida diam sit amet pharetra. Sed ut viverra ligula. Duis mollis nibh lacus. Duis vel enim molestie tellus consequat sollicitudin ut a turpis. Sed id erat nec lacus porta commodo nec vitae lectus. Mauris et erat varius, vehicula nunc id, gravida eros. Maecenas tincidunt mollis enim, nec pretium magna bibendum nec.",author:"Nikolay Zaharov",thumbnail:"1.jpg",liked:!0,likes:24,stops:[{title:"First",coordinates:[42,23]},{title:"Second",coordinates:[42,24]},{title:"Third",coordinates:[42,25]}],images:["/images/pic1.jpg","/images/pic2.jpg","/images/pic3.jpg","/images/pic4.jpg","/images/pic5.jpg"]}],K=t(178),Q=t(84),X=t.n(Q),ee=function(){var e=Object(n.useContext)(f),a=Object(u.a)((function(){return{paper:{marginTop:e.spacing(8),display:"flex",justifyContent:"center",width:"100%",marginBottom:"20px"},cards:{display:"flex",width:"90%",height:"90%",overflowY:"auto",flexDirection:"column"}}}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.paper},r.a.createElement("div",{className:a.cards},$.map((function(e){return r.a.createElement(Z,{trip:e,key:e.name})})))),r.a.createElement(K.a,{color:"primary","aria-label":"add",styles:{position:"fixed",zIndex:1010,bottom:"16px",left:"16px"}},r.a.createElement(X.a,null)))},ae=t(64),te=t(183),ne=t(179),re=t(191),ie=t(190),le=t(185),oe=t(71),ce=t.n(oe),me=t(167),se=t(180),ue=t(181),de=t(182),pe=t(72),ge=t.n(pe),ve=t(85),he=t.n(ve),be=t(184),Ee=t(14),fe=t(192),xe=Object(u.a)((function(e){return{root:{display:"flex"},drawer:Object(ae.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(ae.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),avatarPlaceholder:{display:"flex",paddingLeft:"10px",paddingBottom:"5px"},menuButton:Object(ae.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),name:{paddingTop:"10px",paddingLeft:"2px"},toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}}}));var ye=function(e){var a=e.window,t=e.children,n=xe(),i=Object(Ee.a)(),l=r.a.useState(!1),o=Object(s.a)(l,2),c=o[0],m=o[1],u=function(){m(!c)},g=r.a.createElement("div",null,r.a.createElement("div",{className:n.toolbar}),r.a.createElement("div",{className:n.avatarPlaceholder},r.a.createElement(fe.a,{src:"/images/avatar.png"})," ",r.a.createElement("span",{className:n.name},"Admin Adminov ")),r.a.createElement(ne.a,null),r.a.createElement(me.a,null,["Inbox","Starred","Send email","Drafts"].map((function(e,a){return r.a.createElement(se.a,{button:!0,key:e},r.a.createElement(ue.a,null,a%2===0?r.a.createElement(ce.a,null):r.a.createElement(ge.a,null)),r.a.createElement(de.a,{primary:e}))}))),r.a.createElement(ne.a,null),r.a.createElement(me.a,null,["All mail","Trash","Spam"].map((function(e,a){return r.a.createElement(se.a,{button:!0,key:e},r.a.createElement(ue.a,null,a%2===0?r.a.createElement(ce.a,null):r.a.createElement(ge.a,null)),r.a.createElement(de.a,{primary:e}))})))),v=void 0!==a?function(){return a().document.body}:void 0;return r.a.createElement("div",{className:n.root},r.a.createElement(d.a,null),r.a.createElement(te.a,{position:"fixed",className:n.appBar},r.a.createElement(be.a,null,r.a.createElement(le.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:u,className:n.menuButton},r.a.createElement(he.a,null)),r.a.createElement(p.a,{variant:"h6",noWrap:!0},"Tripify"))),r.a.createElement("nav",{className:n.drawer,"aria-label":"mailbox folders"},r.a.createElement(ie.a,{smUp:!0,implementation:"css"},r.a.createElement(re.a,{container:v,variant:"temporary",anchor:"rtl"===i.direction?"right":"left",open:c,onClose:u,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},g)),r.a.createElement(ie.a,{xsDown:!0,implementation:"css"},r.a.createElement(re.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},g))),r.a.createElement("main",{className:n.content},t))},je=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),h=o[0],b=o[1],E=Object(n.useState)([]),x=Object(s.a)(E,2),y=(x[0],x[1]),j=Object(n.useState)(""),w=Object(s.a)(j,2),O=w[0],S=(w[1],Object(c.e)()),k=Object(n.useContext)(f),C=Object(u.a)((function(){return{paper:{marginTop:k.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",width:"90%"},form:{width:"100%",marginTop:k.spacing(1)},submit:{margin:k.spacing(3,0,2)},footer:{display:"flex",flexDirection:"column",alignContent:"center"},input:{display:"none",padding:12},error:{textAlign:"center",color:"red",fontSize:"1.3rem"}}}))();return r.a.createElement(m.a,{theme:k},r.a.createElement(d.a,null),r.a.createElement("div",{id:"login"},r.a.createElement("div",{className:C.paper},r.a.createElement(p.a,{component:"h1",variant:"h5"},"Add Trip"),r.a.createElement("form",{className:C.form,onSubmit:function(e){e.preventDefault(),$.push({name:t,author:"Admin Adminov",stops:[],description:h,isLiked:!1,likes:0}),S.push("/")}},r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",value:t,onChange:function(e){return i(e.target.value)},name:"username",autoComplete:"username",autoFocus:!0}),r.a.createElement(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:h,name:"description",label:"Description",multiline:!0,rows:"6",id:"password",onChange:function(e){return b(e.target.value)}}),r.a.createElement("input",{accept:"image/*",className:C.input,id:"contained-button-file",multiple:!0,type:"file",onChange:function(e){y(Array.from(e.target.files))}}),r.a.createElement("input",{type:"submit",id:"upload-button",hidden:!0}),r.a.createElement("label",{htmlFor:"contained-button-file"},r.a.createElement(v.a,{size:"large",variant:"outlined",color:"primary",component:"span"},"Choose picture")),r.a.createElement(v.a,{type:"submit",fullWidth:!0,variant:"contained",className:C.submit},"Create")),O?r.a.createElement("p",{className:C.error},O):"")))};var we=function(){var e=Object(n.useContext)(f);return r.a.createElement(o.a,null,r.a.createElement(m.a,{theme:e},r.a.createElement(ye,null,r.a.createElement(c.a,{exact:!0,path:"/auth/login",component:x}),r.a.createElement(c.a,{exact:!0,path:"/",component:ee})),r.a.createElement(c.a,{exact:!0,path:"/trip/add",component:je}),r.a.createElement(c.a,{exact:!0,path:"/trip",component:M})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,a,t){e.exports=t(114)}},[[97,1,2]]]);
//# sourceMappingURL=main.cfbdcaff.chunk.js.map