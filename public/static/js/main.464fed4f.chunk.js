(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){e.exports=a(82)},39:function(e,t,a){},41:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),i=(a(39),a(2)),o=a.n(i),s=a(4),u=a(1),m=a(12),p=a(13),f=(a(41),a(3)),d=a.n(f);a(59);var v=function(e){var t=r.a.createRef();Object(n.useEffect)((function(){e.isOpenYet||(t.current.childNodes.forEach((function(e){console.log("re-anim"),a(e),setInterval((function(){return a(e)}),6200)})),e.toggleIsOpenYet())}));var a=function(e){setTimeout((function(){e.classList.add("anim")}),100),setTimeout((function(){e.classList.add("fadeout")}),5100),setTimeout((function(){e.classList.remove("anim"),e.classList.remove("fadeout")}),6100)};return r.a.createElement("div",{className:"header-container"},e.children,r.a.createElement("div",null,r.a.createElement("div",{ref:t},r.a.createElement("span",{style:{"--span-index":1}},"W"),r.a.createElement("span",{style:{"--span-index":2}},"E"),r.a.createElement("span",{style:{"--span-index":3}},"L"),r.a.createElement("span",{style:{"--span-index":4}},"C"),r.a.createElement("span",{style:{"--span-index":5}},"O"),r.a.createElement("span",{style:{"--span-index":6}},"M"),r.a.createElement("span",{style:{"--span-index":7}},"E"),r.a.createElement("span",{style:{"--span-index":8}}),r.a.createElement("span",{style:{"--span-index":9}},"H"),r.a.createElement("span",{style:{"--span-index":10}},"E"),r.a.createElement("span",{style:{"--span-index":11}},"R"),r.a.createElement("span",{style:{"--span-index":12}},"E"))))};a(60);var b=function(){return r.a.createElement("div",{className:"scroll-container"},r.a.createElement("h1",null,"Pick your favorite movie here!"),r.a.createElement("div",{className:"scroll-container-leftChild"},r.a.createElement("div",null,r.a.createElement("h1",null,"Pick your favorite movie here!"))))};a(61),a(62);var E=function(e){var t=e.movies,a=e.toggleModal;return t.map((function(e){return r.a.createElement("div",{key:e.title,className:"grid-item"},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:""}),r.a.createElement("p",null,r.a.createElement("span",null,"Title: "),r.a.createElement("span",null,e.title)),r.a.createElement("div",null,r.a.createElement("span",null,"Rating: "),r.a.createElement("div",{className:"star-container",style:{"--star-rating":e.vote_average/2,"--star-rating-floor":Math.floor(e.vote_average/2)}},r.a.createElement("div",{className:"star-cover"},r.a.createElement("div",null,r.a.createElement("div",{className:"star highlight-star"}),r.a.createElement("div",{className:"star highlight-star"}),r.a.createElement("div",{className:"star highlight-star"}),r.a.createElement("div",{className:"star highlight-star"}),r.a.createElement("div",{className:"star highlight-star"}))),r.a.createElement("div",{className:"star"}),r.a.createElement("div",{className:"star"}),r.a.createElement("div",{className:"star"}),r.a.createElement("div",{className:"star"}),r.a.createElement("div",{className:"star"})),r.a.createElement("span",null,(e.vote_average/2).toFixed(1))),r.a.createElement("p",null,r.a.createElement("span",null,"Price: $"),r.a.createElement("span",null,"$",e.price)),r.a.createElement("button",{onClick:function(){return a(e.title)}},"See more"))}))},h=a(11),g=a(8),O=(a(63),Object(n.createContext)()),y=function(e){var t=Object(n.useState)({popular:{1:null,2:null,3:null,4:null,5:null},top_rated:{1:null,2:null,3:null,4:null,5:null},cart:[],isLogin:!1,userInfo:{uuid:"",first_name:"",last_name:"",email:"",password:"",register_date:""},userFav:[],userHistory:[],isHistoryLoaded:!1}),a=Object(u.a)(t,2),c=a[0],l=a[1];return r.a.createElement(O.Provider,{value:[c,l]},e.children)};function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=a(17).default;var w=function(e){var t=e.data,a=e.toggleModal,c=Object(n.useState)(!1),l=Object(u.a)(c,2),i=l[0],m=l[1],p=Object(n.useState)(1),f=Object(u.a)(p,2),v=f[0],b=f[1],E=Object(n.useContext)(O),g=Object(u.a)(E,2),y=g[0],j=g[1],w=function(e){"plus"===e&&v<5&&b((function(e){return e+1})),"minus"===e&&v>1&&b((function(e){return e-1}))},x=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y.isLogin){e.next=3;break}return alert("You are not logining in"),e.abrupt("return");case 3:return e.prev=3,e.next=6,d.a.post("/save_favorites",{user_id:y.userInfo.id,uuid:y.userInfo.uuid,fav_info:[N({},t,{img:"http://image.tmdb.org/t/p/w500/".concat(t.backdrop_path)})],fav_uuid:[k()]});case 6:alert("Movies you choose have been added to favorites!"),j(N({},y,{isUserFavLoaded:!1})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{onClick:function(e){return function(e){"outer-container"===e.target.id&&a("close")}(e)},id:"outer-container",className:"outer-container"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-bg container-bg-bottom"}),r.a.createElement("div",{className:"container-bg container-bg-mid"}),r.a.createElement("div",{className:"container-bg container-bg-top"}),r.a.createElement("div",{className:"bottom-layer"},r.a.createElement("div",{className:"bottom-left"},r.a.createElement("h1",null,"Information"),r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500/".concat(t.backdrop_path),alt:""})),r.a.createElement("div",{className:"detail-info"},r.a.createElement("p",{className:"title"},"Title: ",r.a.createElement("span",null,r.a.createElement("i",{style:{fontStyle:"normal"}},t.title))),r.a.createElement("p",{className:"date"},"Date: ",r.a.createElement("span",null,t.release_date)),r.a.createElement("p",{className:"rating"},"Rating: ",r.a.createElement("span",null,t.vote_average)),r.a.createElement("p",{className:"price"},"Price: ",r.a.createElement("span",null,t.price))),r.a.createElement("section",null,r.a.createElement("button",{onClick:function(){return m((function(e){return!e}))}},"Buy Now"),r.a.createElement("button",{onClick:function(){return a("close")}},"Exit"))),r.a.createElement("div",{className:"bottom-right"},r.a.createElement("h1",null,"How many of this one would you like to buy?"),r.a.createElement("div",{className:"detail-info"},r.a.createElement("p",{className:"title"},"Title: ",r.a.createElement("span",null,r.a.createElement("i",{style:{fontStyle:"normal"}},t.title))),r.a.createElement("p",{className:"price"},"Each One: ",r.a.createElement("span",null,t.price)),r.a.createElement("p",{className:"amount"},"Amount: ",r.a.createElement("span",null,v),r.a.createElement("input",{type:"button",className:5===v?"disable":"",onClick:function(){return w("plus")},id:"plusBtn",value:"+"}),r.a.createElement("input",{type:"button",className:1===v?"disable":"",onClick:function(){return w("minus")},id:"minusBtn",value:"\u2013"})),r.a.createElement("p",{className:"total"},"Total: ",r.a.createElement("span",null,t.price*v))),r.a.createElement("section",null,r.a.createElement("button",{onClick:function(){return m((function(e){return!e}))}},"Back"),r.a.createElement("button",{onClick:function(){return function(){if(y.isLogin){var e={title:t.title,img:"http://image.tmdb.org/t/p/w500/".concat(t.backdrop_path),price:t.price,amount:v};j(N({},y,{cart:[].concat(Object(h.a)(y.cart),[e])})),a("close")}else alert("You are not loggin in!")}()}},"Submit")))),r.a.createElement("div",{className:"top-layer ".concat(i?"buy":"")},r.a.createElement("div",{className:"transparent-bg"},r.a.createElement("div",{className:i?"buy":""},r.a.createElement("div",{className:"left-info"},r.a.createElement("h1",null,"Thanks for buying our product"),r.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ducimus repudiandae esse neque laudantium sunt numquam, est error tenetur, id, ipsam nostrum odit dolorem!")),r.a.createElement("div",{className:"right-info"},r.a.createElement("h1",{className:"title"},r.a.createElement("span",null,r.a.createElement("i",{style:{fontStyle:"normal"}},t.title))),r.a.createElement("div",null,r.a.createElement("h2",null,"Overview: ",r.a.createElement("button",{className:"add-to-fav-btn",onClick:function(){return x(t)}},"Add to Favorite")),r.a.createElement("p",{id:"overview"},t.overview))))))))};var x=function(){var e=Object(n.useContext)(O),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(u.a)(l,2),m=i[0],f=i[1],v=Object(n.useState)("top_rated"),b=Object(u.a)(v,2),h=b[0],g=b[1],y=Object(n.useState)(1),j=Object(u.a)(y,2),N=j[0],k=j[1],x=Object(n.useState)(!1),C=Object(u.a)(x,2),P=C[0],_=C[1],S=Object(n.useState)({top:0,left:0}),I=Object(u.a)(S,2),L=I[0],q=I[1],F=Object(n.useState)({}),D=Object(u.a)(F,2),T=D[0],A=D[1],U=Object(p.f)(),H=function(){k((function(e){return 1})),g((function(e){return"top_rated"===e?"popular":"top_rated"}))},R=function(e){k("next"===e&&N<5?function(e){return e+1}:"prev"===e&&N>1?function(e){return e-1}:function(t){return e})},M=function(){var e=Object(s.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a[h][N]){e.next=2;break}return e.abrupt("return");case 2:return console.log("start fetching"),e.prev=3,f(!0),e.next=7,d.a.get("/search_movies/".concat(h,"/").concat(N));case 7:t=e.sent,(n=t.data.data).forEach((function(e){e.price=Math.floor(100*Math.random()+100)})),console.log(n),(r=a)[h][N]=n,c(r),f(!1),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(){return e.apply(this,arguments)}}(),Y=function(e){if(!P){var t=a[h][N].find((function(t){return t.title===e}));A(t),q({top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft})}_((function(e){return!e}))};return window.onscroll=function(){P&&window.scrollTo(L.left,L.top)},Object(n.useEffect)((function(){return M(),function(){}}),[h,N]),r.a.createElement("div",{className:"grid-outer-container"},P?r.a.createElement(w,{data:T,toggleModal:Y}):"",r.a.createElement("div",{className:"button-group"},r.a.createElement("button",{onClick:function(){return R("prev")}},"Prev"),r.a.createElement("button",{className:1===N?"active":"",onClick:function(){return R(1)}},"1"),r.a.createElement("button",{className:2===N?"active":"",onClick:function(){return R(2)}},"2"),r.a.createElement("button",{className:3===N?"active":"",onClick:function(){return R(3)}},"3"),r.a.createElement("button",{className:4===N?"active":"",onClick:function(){return R(4)}},"4"),r.a.createElement("button",{className:5===N?"active":"",onClick:function(){return R(5)}},"5"),r.a.createElement("button",{onClick:function(){return R("next")}},"Next")),r.a.createElement("div",{className:"movieType-btn-container"},r.a.createElement("button",{className:"top_rated"===h?"active":"",onClick:function(){return H()}},"Top Rated"),r.a.createElement("button",{className:"top_rated"===h?"":"active",onClick:function(){return H()}},"Popular")),r.a.createElement("div",{className:"shoppinglist-btn-container"},r.a.createElement("button",{onClick:function(){return U.push("/cart")}},"My Cart")),m||null===a[h][N]?r.a.createElement("h1",{style:{width:"100%",textAlign:"center"}},"Loading..."):r.a.createElement("div",{className:"grid-container"},r.a.createElement(E,{movies:a[h][N],toggleModal:Y})),r.a.createElement("div",{className:"button-group bottom"},r.a.createElement("button",{onClick:function(){return R("prev")}},"Prev"),r.a.createElement("button",{className:1===N?"active":"",onClick:function(){return R(1)}},"1"),r.a.createElement("button",{className:2===N?"active":"",onClick:function(){return R(2)}},"2"),r.a.createElement("button",{className:3===N?"active":"",onClick:function(){return R(3)}},"3"),r.a.createElement("button",{className:4===N?"active":"",onClick:function(){return R(4)}},"4"),r.a.createElement("button",{className:5===N?"active":"",onClick:function(){return R(5)}},"5"),r.a.createElement("button",{onClick:function(){return R("next")}},"Next")))};a(74);var C=function(e){var t=e.toggleIsUserOpen,a=Object(p.f)(),c=Object(n.useContext)(O),l=Object(u.a)(c,2),i=l[0],o=(l[1],Object(n.useState)(!1)),s=Object(u.a)(o,2),f=s[0],d=s[1];return r.a.createElement("div",{className:"nav-container"},r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-video"}),r.a.createElement("span",null,"Movie Center")),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{exact:!0,to:"/",activeClassName:"link-active"},"Home")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/about",activeClassName:"link-active"},"About")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/signin",activeClassName:"link-active"},i.isLogin?"Sign Out":"Sign In")))),r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement("button",{onClick:function(){return d((function(e){return!e}))},className:"btn-wrapper-controller"},"Preference",r.a.createElement("i",{className:"fas fa-arrow-circle-down"})),r.a.createElement("div",{className:"btn-wrapper-list ".concat(f?"open":"")},r.a.createElement("button",{style:{"--btn-index":1},onClick:function(){d((function(e){return!e})),a.push("/history")}},"History"),r.a.createElement("button",{style:{"--btn-index":2},onClick:function(){d((function(e){return!e})),a.push("/favorites")}},"Favorite"))),r.a.createElement("p",null,r.a.createElement("span",{onClick:function(){return a.push("/cart")}},r.a.createElement("i",{className:"fas fa-shopping-cart"})),r.a.createElement("span",{onClick:function(){return t()}},r.a.createElement("i",{className:"fas fa-user"})))))};a(75);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=function(){var e=Object(n.useContext)(O),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(u.a)(l,2),m=i[0],p=i[1],f=Object(n.useState)(a.userInfo.first_name),v=Object(u.a)(f,2),b=v[0],E=v[1],h=Object(n.useState)(a.userInfo.last_name),g=Object(u.a)(h,2),y=g[0],j=g[1],N=Object(n.useState)(a.userInfo.email),k=Object(u.a)(N,2),w=k[0],x=k[1],C=function(e){switch(e.target.id){case"firstName":E(e.target.value);break;case"lastName":j(e.target.value);break;default:x(e.target.value)}},P=function(){var e=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post("/update_user",{firstName:b,lastName:y,email:w,uuid:a.userInfo.uuid});case 3:t=e.sent,n=t.data,console.log(n),console.log("update user"),c(_({},a,{userInfo:_({},a.userInfo,{first_name:b,last_name:y,email:w})})),p(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"user-outer-container"},a.isLogin?r.a.createElement("div",{className:"user-container"},r.a.createElement("h1",null,"User Profile"),r.a.createElement("img",{src:"https://source.unsplash.com/random/203x200",alt:""}),r.a.createElement("div",{className:"user-info"},r.a.createElement("p",null,"First Name: ",m?r.a.createElement("input",{id:"firstName",type:"text",value:b,onChange:C}):r.a.createElement("span",null,a.userInfo.first_name)),r.a.createElement("p",null,"Last Name: ",m?r.a.createElement("input",{id:"lastName",type:"text",value:y,onChange:C}):r.a.createElement("span",null,a.userInfo.last_name)),r.a.createElement("p",null,"Email: ",m?r.a.createElement("input",{id:"email",type:"text",value:w,onChange:C}):r.a.createElement("span",null,a.userInfo.email)),r.a.createElement("p",null,"Register Date: ",r.a.createElement("span",null,a.userInfo.register_date))),r.a.createElement("div",{className:"user-btn"},m?r.a.createElement("button",{onClick:function(){return P()}},"Save Change"):r.a.createElement("button",{onClick:function(){E(a.userInfo.first_name),j(a.userInfo.last_name),x(a.userInfo.email),p(!0)}},"Update User"),m?r.a.createElement("button",{onClick:function(){return console.log("quit"),E(a.userInfo.first_name),j(a.userInfo.last_name),x(a.userInfo.email),void p(!1)}},"Cancel"):r.a.createElement("button",null,"Delete User"))):r.a.createElement("div",{className:"user-container"},r.a.createElement("h1",null,"User Profile"),r.a.createElement("p",null,"Please log in to see the user profile")))};a(76);var I=function(e){return r.a.createElement("div",{className:"layout-container ".concat(e.isUserOpen?"open":"")},e.children)};a(77);var L=function(){return r.a.createElement("div",{className:"about-container"},r.a.createElement("h1",null,"About Movie Center"),r.a.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sapiente corporis exercitationem adipisci, labore error. Corporis fugiat, quas ipsum error aperiam provident rem odit quae dolores a odio repudiandae commodi, consectetur illum, et eius! Repellat animi, inventore praesentium vel facere quos corporis laboriosam fugiat est exercitationem ipsa aperiam consectetur, quia eos, quam nisi. Cum odit eaque laboriosam dolorem porro accusamus quae facere nulla voluptatum! Numquam, obcaecati quod hic aliquam sed itaque eius quas veritatis at sit, magni quidem laudantium accusantium iure ullam commodi odio ipsum totam quae delectus vero mollitia nobis esse. Corporis hic facere neque harum, sapiente nemo veritatis illo vero eligendi incidunt amet eveniet non itaque tempore reprehenderit? Quas sed quam non sequi voluptate doloribus modi voluptatibus labore nam, blanditiis dicta. Distinctio possimus aut voluptates delectus? Repellat fugit soluta voluptate esse optio quasi est impedit dolores praesentium harum incidunt, officia rem iure alias eos reiciendis quod ullam. Itaque ipsa sed dolore dolorum quaerat iusto rem, laborum adipisci nostrum. Aut quae, id praesentium corporis delectus expedita maxime unde reprehenderit rem, qui dolorum illo commodi in doloribus similique nam modi illum facilis nesciunt, totam dolores! Laboriosam libero nesciunt ad, ab amet voluptas exercitationem nulla consectetur ea iusto dolores voluptate, distinctio quasi voluptatibus nemo pariatur vel quas asperiores, porro voluptatum. Error nisi possimus inventore eveniet assumenda quasi quam id repellat maxime non quae consequuntur quos earum perspiciatis nam neque blanditiis architecto optio tempore, tenetur cum iure? Impedit ipsa enim illum magni sit quia ea, mollitia debitis, nesciunt dolore odit quo, sunt tenetur amet tempora repellendus labore."))};a(78);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D=a(17).default;var T=function(){var e=Object(n.useContext)(O),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),i=Object(u.a)(l,2),m=i[0],f=i[1],v=Object(n.useState)(!0),b=Object(u.a)(v,2),E=(b[0],b[1]),g=(Object(p.f)(),function(e,t){var n=a;"plus"===e&&n.cart[t].amount<5&&(n.cart[t].amount++,c(n),E((function(e){return!e}))),"minus"===e&&n.cart[t].amount>1&&(n.cart[t].amount--,c(n),E((function(e){return!e})))}),y=function(){var e=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.isLogin){e.next=3;break}return alert("You are not logging in!"),e.abrupt("return");case 3:return e.prev=3,e.next=6,d.a.post("/save_history",{user_id:a.userInfo.id,uuid:a.userInfo.uuid,movies_info:a.cart});case 6:t=e.sent,n=t.data,console.log(n),alert("Order has been sent!"),c(F({},a,{cart:[],isHistoryLoaded:!1})),E((function(e){return!e})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==m.length){e.next=3;break}return alert("Please choose the item you want to add into my favorite!"),e.abrupt("return");case 3:for(e.prev=3,t=[],n=0;n<m.length;n++)t.push(D());return e.next=8,d.a.post("/save_favorites",{user_id:a.userInfo.id,uuid:a.userInfo.uuid,fav_info:m,fav_uuid:t});case 8:alert("Movies you choose have been added to favorites!"),f([]),c(F({},a,{isUserFavLoaded:!1})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"cart-container"},r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-shopping-cart icon-resize"}),a.isLogin?"".concat(a.userInfo.first_name," ").concat(a.userInfo.last_name,"'s Cart"):"You are not loggin in"),r.a.createElement("p",{id:"total"},"Total: ",r.a.createElement("span",null,0===a.cart.length?0:a.cart.reduce((function(e,t){return e+t.amount*t.price}),0)))),r.a.createElement("main",null,r.a.createElement("ul",null,0===a.cart.length?r.a.createElement("h4",{style:{textAlign:"center",fontSize:"24px"}},"You haven't buy anything yet..."):a.cart.map((function(e,t){return r.a.createElement("li",{key:e.title,"data-last":t+1===a.cart.length?"true":""},r.a.createElement("section",null,r.a.createElement("img",{src:e.img,alt:""}),r.a.createElement("h2",null,e.title),r.a.createElement("p",{className:"price"},r.a.createElement("span",null,"$",e.price)),r.a.createElement("p",{className:"amount"},"Amount: ",r.a.createElement("span",null,e.amount),r.a.createElement("button",{onClick:function(){return g("plus",t)},className:5===e.amount?"disable":""},"+"),r.a.createElement("button",{onClick:function(){return g("minus",t)},className:1===e.amount?"disable":""},"\u2013")),r.a.createElement("p",{className:"each-total-price"},"total: $",r.a.createElement("span",null,e.amount*e.price),r.a.createElement("button",{onClick:function(){return function(e){var t=a;t.cart=t.cart.filter((function(t){return t!==e})),c(t),f([]),E((function(e){return!e}))}(e)}},r.a.createElement("i",{className:"far fa-trash-alt"})," Delete"),r.a.createElement("button",{onClick:function(){return function(e){m.indexOf(e)<0?f([].concat(Object(h.a)(m),[e])):f((function(t){return t.filter((function(t){return t!==e}))}))}(e)},className:m.indexOf(e)>=0?"disable":""},m.indexOf(e)>=0?"Undo to Favorite":"Add to Favorite"))))})))),r.a.createElement("div",{className:"utility-btn"},r.a.createElement("button",{onClick:function(){return y()},className:"exit-Btn"},"Place Order"),r.a.createElement("button",{onClick:function(){return j()},className:"exit-Btn"},"Add to Favorite")))};a(79);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H=function(){var e=Object(n.useContext)(O),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),m=i[0],p=i[1],f=Object(n.useState)(""),v=Object(u.a)(f,2),b=v[0],E=v[1],h=Object(n.useState)(""),g=Object(u.a)(h,2),y=g[0],j=g[1],N=Object(n.useState)(""),k=Object(u.a)(N,2),w=k[0],x=k[1],C=Object(n.useState)(""),P=Object(u.a)(C,2),_=P[0],S=P[1],I=Object(n.useState)(""),L=Object(u.a)(I,2),q=L[0],F=L[1],D=Object(n.useState)(""),T=Object(u.a)(D,2),A=T[0],H=T[1],R=Object(n.useState)(!0),M=Object(u.a)(R,2),Y=(M[0],M[1]),B=Object(n.useState)(!0),$=Object(u.a)(B,2),W=$[0],z=$[1],J=function(e){switch(e.target.id){case"firstName":p(e.target.value);break;case"lastName":E(e.target.value);break;default:j(e.target.value)}},Q=function(){var e=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==m&&""!==b&&""!==y){e.next=3;break}return alert("None of the inputs can be empty!"),e.abrupt("return");case 3:return e.prev=3,e.next=6,d.a.post("/find_user",{firstName:m,lastName:b,password:y});case 6:t=e.sent,"no result"===(n=t.data.result)?alert("no such user"):(console.log(n),c(U({},a,{isLogin:!0,userInfo:n})),Y((function(e){return!e}))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),V=function(e){switch(e.target.id){case"firstName-create":x(e.target.value);break;case"lastName-create":S(e.target.value);break;case"email-create":H(e.target.value);break;default:F(e.target.value)}},X=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==w&&""!==_&&""!==A&&""!==q){e.next=3;break}return alert("None of the inputs can be empty"),e.abrupt("return");case 3:return e.prev=3,e.next=6,d.a.post("/check_user",{firstName:w,lastName:_,email:A,password:q});case 6:if(t=e.sent,"no such user"!==t.data.message){e.next=15;break}return e.next=11,d.a.post("/create_user",{firstName:w,lastName:_,email:A,password:q});case 11:alert("A new user is created"),setTimeout(Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/find_user",{firstName:w,lastName:_,password:q});case 2:t=e.sent,n=t.data.result,c(U({},a,{isLogin:!0,userInfo:n})),Y((function(e){return!e}));case 6:case"end":return e.stop()}}),e)}))),1e3),e.next=16;break;case 15:alert("This username is alreated used. Try another one!");case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"signin-container"},a.isLogin?r.a.createElement("div",{className:"signin-container-signin"},r.a.createElement("h1",null,"You are now Signing in as ","".concat(a.userInfo.first_name," ").concat(a.userInfo.last_name)),r.a.createElement("button",{onClick:function(){c(U({},a,{cart:[],isLogin:!1,isHistoryLoaded:!1,userHistory:[],isUserFavLoaded:!1,userFav:[]}))}},"Sign out")):r.a.createElement("div",{className:"signin-container-both"},r.a.createElement("div",{className:"signin-btn-controller"},r.a.createElement("button",{onClick:function(){return z(!0)},className:W?"":"inactive"},"Sign In"),r.a.createElement("button",{onClick:function(){return z(!1)},className:W?"inactive":""},"Register")),W?r.a.createElement("div",{className:"signin-form"},r.a.createElement("h1",null,"Please sign in"),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"firstName"},"First Name: "),r.a.createElement("input",{type:"text",id:"firstName",value:m,onChange:J})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"lastName"},"First Name: "),r.a.createElement("input",{type:"text",id:"lastName",value:b,onChange:J})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"password"},"Password: "),r.a.createElement("input",{type:"text",id:"password",value:y,onChange:J}))),r.a.createElement("button",{onClick:function(){return Q()}},"Sign in")):r.a.createElement("div",{className:"signup-form"},r.a.createElement("h1",null,"Create a new account"),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"firstName-create"},"First Name: "),r.a.createElement("input",{type:"text",id:"firstName-create",value:w,onChange:V})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"lastName-create"},"Last Name: "),r.a.createElement("input",{type:"text",id:"lastName-create",value:_,onChange:V})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"password-create"},"Password: "),r.a.createElement("input",{type:"text",id:"password-create",value:q,onChange:V})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"email-create"},"Email: "),r.a.createElement("input",{type:"text",id:"email-create",value:A,onChange:V}))),r.a.createElement("button",{onClick:function(){return X()}},"Create new user"))))};a(80);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Y=a(17).default;var B=function(){var e=Object(n.useContext)(O),t=Object(u.a)(e,2),a=t[0],c=t[1],l=function(){var e=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post("/get_history",{uuid:a.userInfo.uuid});case 3:t=e.sent,n=t.data,console.log(n),c(M({},a,{isHistoryLoaded:!0,userHistory:n.history})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return!a.isHistoryLoaded&&a.isLogin&&l(),function(){}}),[]),r.a.createElement("div",{className:"history-container"},a.isLogin?r.a.createElement("div",{className:"history-login"},r.a.createElement("h1",null,"".concat(a.userInfo.first_name," ").concat(a.userInfo.last_name,"'s Buying History")),a.isHistoryLoaded?function(e){if(0===e.length)return r.a.createElement("h1",null,"User has no shopping history");for(var t,a="",n=[],c=[],l=e.length-1;l>=0;l--)a!==e[l].purchase_date?(a=e[l].purchase_date,n.push(a),t=[],c.push(t),t.push(e[l])):t.push(e[l]);return r.a.createElement("div",null,c.map((function(e,t){return r.a.createElement("div",{className:"history-each-time",key:Y()},r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-credit-card"}),n[t],r.a.createElement("span",null,"Total: ",e.reduce((function(e,t){return e+t.amount*t.price}),0))),r.a.createElement("ul",null,r.a.createElement("li",{className:"history-each-time-li"},r.a.createElement("p",null,"Title"),r.a.createElement("p",null,"Price"),r.a.createElement("p",null,"Amount")),e.map((function(e){return r.a.createElement("li",{className:"history-each-time-li",key:Y()},r.a.createElement("p",null,r.a.createElement("img",{width:"50",height:"50",src:e.img,alt:""}),r.a.createElement("span",null,e.title)),r.a.createElement("p",null,r.a.createElement("span",null,e.price)),r.a.createElement("p",null,r.a.createElement("span",null,e.amount)))}))))})))}(a.userHistory):r.a.createElement("h1",null,"Loading user history..."),r.a.createElement("button",{onClick:function(){return l()}},"load history")):r.a.createElement("h1",{className:"no-login-h1"},"You are not logging in"))};a(81);function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var z=function(){var e,t=Object(n.useContext)(O),a=Object(u.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(!1),m=Object(u.a)(i,2),p=m[0],f=m[1],v=Object(n.useState)([]),b=Object(u.a)(v,2),E=b[0],g=b[1],y=Object(n.useState)(!1),j=Object(u.a)(y,2),N=j[0],k=j[1],w=Object(n.useState)([]),x=Object(u.a)(w,2),C=x[0],P=x[1],_=function(){var e=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post("/find_favorites",{uuid:c.userInfo.uuid});case 3:t=e.sent,a=t.data,console.log(a),l(W({},c,{isUserFavLoaded:!0,userFav:a})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==E.length){e.next=3;break}return alert("Please choose the one you want to remove!"),e.abrupt("return");case 3:return e.prev=3,e.next=6,d.a.post("/delete_favorites",{fav_uuids:E.map((function(e){return e.fav_uuid}))});case 6:alert("The movies you choose has been removed!"),g([]),f(!1),P([]),setTimeout((function(){return _()}),500),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return!c.isUserFavLoaded&&c.isLogin&&_(),function(){}}),[]),r.a.createElement("div",{className:"favorites-container"},c.isLogin?r.a.createElement("div",{className:"favorite-login"},r.a.createElement("h1",null,"".concat(c.userInfo.first_name," ").concat(c.userInfo.last_name,"'s Favorite Movies")),c.isUserFavLoaded?0===(e=c.userFav).length?r.a.createElement("h1",null,"User has no favorite lists"):r.a.createElement("div",{className:"fav-list-container"},r.a.createElement("ul",null,r.a.createElement("li",{className:"fav-list-li"},r.a.createElement("p",null,"Title"),r.a.createElement("p",null,"Price"),r.a.createElement("p",null,"Add Date")),e.map((function(e,t){return r.a.createElement("li",{className:"fav-list-li",key:e.fav_uuid},r.a.createElement("p",null,r.a.createElement("img",{width:"25",height:"25",src:e.img,alt:""}),r.a.createElement("span",null,e.title)),r.a.createElement("p",null,e.price),r.a.createElement("p",null,r.a.createElement("span",{style:{marginRight:"4px"}},e.add_date),p?r.a.createElement("span",null,r.a.createElement("input",{type:"checkbox",id:"del-checkbox-".concat(t),onChange:function(){return t=e,void(E.indexOf(t)<0?g([].concat(Object(h.a)(E),[t])):g((function(e){return e.filter((function(e){return e!==t}))})));var t},checked:!!E.includes(e)}),r.a.createElement("label",{htmlFor:"del-checkbox-".concat(t)},"Remove")):r.a.createElement("span",null),N?r.a.createElement("span",null,r.a.createElement("input",{type:"checkbox",id:"add-checkbox-".concat(t),onChange:function(){return t=e,void(C.indexOf(t)<0?P([].concat(Object(h.a)(C),[t])):P((function(e){return e.filter((function(e){return e!==t}))})));var t},checked:!!C.includes(e)}),r.a.createElement("label",{htmlFor:"add-checkbox-".concat(t)},"Add")):r.a.createElement("span",null)))})).reverse())):r.a.createElement("h1",null,"Loading user Favorites..."),N||p?p&&!N?r.a.createElement("div",{className:"fav-commit-btn"},r.a.createElement("button",{onClick:function(){return S()}},"Confirm Removing"),r.a.createElement("button",{onClick:function(){return f(!1)}},"Canceal Removing")):r.a.createElement("div",{className:"fav-commit-btn"},r.a.createElement("button",{onClick:function(){return function(){if(0!==C.length){var e=C.map((function(e){return{title:e.title,img:e.img,price:e.price,amount:1}}));P([]),k(!1),g([]),l(W({},c,{cart:[].concat(Object(h.a)(c.cart),Object(h.a)(e))})),alert("The movies you choose have been sent to cart!")}else alert("Please choose the ones you want to add to the cart!")}()}},"Confirm Adding"),r.a.createElement("button",{onClick:function(){return k(!1)}},"Canceal Adding")):r.a.createElement("div",{className:"fav-commit-btn"}),r.a.createElement("div",{className:"fav-getuser-btn"},r.a.createElement("button",{onClick:function(){return _()}},"load Favorite"),r.a.createElement("button",{onClick:function(){N||f((function(e){return!e}))}},r.a.createElement("i",{className:"fas fa-trash-alt"}),p?"Canceal Removing":"Remove Items"),r.a.createElement("button",{onClick:function(){p||k((function(e){return!e}))}},r.a.createElement("i",{className:"fas fa-cart-plus"}),N?"Canceal Adding":"Add to Cart"))):r.a.createElement("h1",{className:"no-login-h1"},"You are not logging in"))};var J=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(u.a)(l,2),o=i[0],s=i[1];return r.a.createElement("div",null,r.a.createElement(y,null,r.a.createElement(m.a,null,r.a.createElement(v,{isOpenYet:o,toggleIsOpenYet:function(){return s(!0)}},r.a.createElement(C,{toggleIsUserOpen:function(){return c((function(e){return!e}))}})),r.a.createElement(I,{isUserOpen:a},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/"},r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(x,null))),r.a.createElement(p.a,{path:"/about"},r.a.createElement(L,null)),r.a.createElement(p.a,{path:"/cart"},r.a.createElement(T,null)),r.a.createElement(p.a,{path:"/signin"},r.a.createElement(H,null)),r.a.createElement(p.a,{path:"/history"},r.a.createElement(B,null)),r.a.createElement(p.a,{path:"/favorites"},r.a.createElement(z,null))),r.a.createElement(S,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.464fed4f.chunk.js.map