(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,a){e.exports=a(72)},36:function(e,t,a){},38:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),c=a.n(l),i=(a(36),a(5)),o=a.n(i),u=a(8),s=a(1),m=a(9),p=a(10),f=(a(38),a(12)),E=a.n(f);a(56);var d=function(e){var t=r.a.createRef();Object(n.useEffect)((function(){e.isOpenYet||(t.current.childNodes.forEach((function(e){console.log("re-anim"),a(e),setInterval((function(){return a(e)}),6200)})),e.toggleIsOpenYet())}));var a=function(e){setTimeout((function(){e.classList.add("anim")}),100),setTimeout((function(){e.classList.add("fadeout")}),5100),setTimeout((function(){e.classList.remove("anim"),e.classList.remove("fadeout")}),6100)};return r.a.createElement("div",{className:"header-container"},e.children,r.a.createElement("div",null,r.a.createElement("div",{ref:t},r.a.createElement("span",{style:{"--span-index":1}},"W"),r.a.createElement("span",{style:{"--span-index":2}},"E"),r.a.createElement("span",{style:{"--span-index":3}},"L"),r.a.createElement("span",{style:{"--span-index":4}},"C"),r.a.createElement("span",{style:{"--span-index":5}},"O"),r.a.createElement("span",{style:{"--span-index":6}},"M"),r.a.createElement("span",{style:{"--span-index":7}},"E"),r.a.createElement("span",{style:{"--span-index":8}}),r.a.createElement("span",{style:{"--span-index":9}},"H"),r.a.createElement("span",{style:{"--span-index":10}},"E"),r.a.createElement("span",{style:{"--span-index":11}},"R"),r.a.createElement("span",{style:{"--span-index":12}},"E"))))};a(57);var v=function(){return r.a.createElement("div",{className:"scroll-container"},r.a.createElement("h1",null,"Pick your favorite movie here!"),r.a.createElement("div",{className:"scroll-container-leftChild"},r.a.createElement("div",null,r.a.createElement("h1",null,"Pick your favorite movie here!"))))};a(58),a(59);var b=function(e){var t=e.movies,a=e.toggleModal;return t.map((function(e){return r.a.createElement("div",{key:e.title,className:"grid-item"},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:""}),r.a.createElement("p",null,r.a.createElement("span",null,"Title: "),r.a.createElement("span",null,e.title)),r.a.createElement("div",null,r.a.createElement("span",null,"Rating: "),r.a.createElement("div",{className:"star-container",style:{"--star-rating":e.vote_average/2,"--star-rating-floor":Math.floor(e.vote_average/2)}},r.a.createElement("div",{className:"star-cover"},r.a.createElement("div",null,r.a.createElement("div",{className:"star highlight-star"}),r.a.createElement("div",{className:"star highlight-star"}),r.a.createElement("div",{className:"star highlight-star"}),r.a.createElement("div",{className:"star highlight-star"}),r.a.createElement("div",{className:"star highlight-star"}))),r.a.createElement("div",{className:"star"}),r.a.createElement("div",{className:"star"}),r.a.createElement("div",{className:"star"}),r.a.createElement("div",{className:"star"}),r.a.createElement("div",{className:"star"})),r.a.createElement("span",null,(e.vote_average/2).toFixed(1))),r.a.createElement("p",null,r.a.createElement("span",null,"Price: $"),r.a.createElement("span",null,"$",e.price)),r.a.createElement("button",{onClick:function(){return a(e.title)}},"See more"))}))},g=(a(60),Object(n.createContext)()),h=function(e){var t=Object(n.useState)({popular:{1:null,2:null,3:null,4:null,5:null},top_rated:{1:null,2:null,3:null,4:null,5:null},cart:[],isLogin:!1,userInfo:{uuid:"",first_name:"",last_name:"",email:"",password:"",register_date:""}}),a=Object(s.a)(t,2),l=a[0],c=a[1];return r.a.createElement(g.Provider,{value:[l,c]},e.children)};var N=function(e){var t=e.data,a=e.toggleModal,l=Object(n.useState)(!1),c=Object(s.a)(l,2),i=c[0],o=c[1],u=Object(n.useState)(1),m=Object(s.a)(u,2),p=m[0],f=m[1],E=Object(n.useContext)(g),d=Object(s.a)(E,2),v=d[0],b=d[1],h=function(e){"plus"===e&&p<5&&f((function(e){return e+1})),"minus"===e&&p>1&&f((function(e){return e-1}))};return r.a.createElement("div",{onClick:function(e){return function(e){"outer-container"===e.target.id&&a("close")}(e)},id:"outer-container",className:"outer-container"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-bg container-bg-bottom"}),r.a.createElement("div",{className:"container-bg container-bg-mid"}),r.a.createElement("div",{className:"container-bg container-bg-top"}),r.a.createElement("div",{className:"bottom-layer"},r.a.createElement("div",{className:"bottom-left"},r.a.createElement("h1",null,"Information"),r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500/".concat(t.backdrop_path),alt:""})),r.a.createElement("div",{className:"detail-info"},r.a.createElement("p",{className:"title"},"Title: ",r.a.createElement("span",null,r.a.createElement("i",{style:{fontStyle:"normal"}},t.title))),r.a.createElement("p",{className:"date"},"Date: ",r.a.createElement("span",null,t.release_date)),r.a.createElement("p",{className:"rating"},"Rating: ",r.a.createElement("span",null,t.vote_average)),r.a.createElement("p",{className:"price"},"Price: ",r.a.createElement("span",null,t.price))),r.a.createElement("section",null,r.a.createElement("button",{onClick:function(){return o((function(e){return!e}))}},"Buy Now"),r.a.createElement("button",{onClick:function(){return a("close")}},"Exit"))),r.a.createElement("div",{className:"bottom-right"},r.a.createElement("h1",null,"How many of this one would you like to buy?"),r.a.createElement("div",{className:"detail-info"},r.a.createElement("p",{className:"title"},"Title: ",r.a.createElement("span",null,r.a.createElement("i",{style:{fontStyle:"normal"}},t.title))),r.a.createElement("p",{className:"price"},"Each One: ",r.a.createElement("span",null,t.price)),r.a.createElement("p",{className:"amount"},"Amount: ",r.a.createElement("span",null,p),r.a.createElement("input",{type:"button",className:5===p?"disable":"",onClick:function(){return h("plus")},id:"plusBtn",value:"+"}),r.a.createElement("input",{type:"button",className:1===p?"disable":"",onClick:function(){return h("minus")},id:"minusBtn",value:"\u2013"})),r.a.createElement("p",{className:"total"},"Total: ",r.a.createElement("span",null,t.price*p))),r.a.createElement("section",null,r.a.createElement("button",{onClick:function(){return o((function(e){return!e}))}},"Back"),r.a.createElement("button",{onClick:function(){return function(){var e={title:t.title,img:"http://image.tmdb.org/t/p/w500/".concat(t.backdrop_path),price:t.price,amount:p},n=v;n.cart.push(e),b(n),a("close")}()}},"Submit")))),r.a.createElement("div",{className:"top-layer ".concat(i?"buy":"")},r.a.createElement("div",{className:"transparent-bg"},r.a.createElement("div",{className:i?"buy":""},r.a.createElement("div",{className:"left-info"},r.a.createElement("h1",null,"Thanks for buying our product"),r.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ducimus repudiandae esse neque laudantium sunt numquam, est error tenetur, id, ipsam nostrum odit dolorem!")),r.a.createElement("div",{className:"right-info"},r.a.createElement("h1",{className:"title"},r.a.createElement("span",null,r.a.createElement("i",{style:{fontStyle:"normal"}},t.title))),r.a.createElement("div",null,r.a.createElement("h2",null,"Overview: "),r.a.createElement("p",{id:"overview"},t.overview))))))))};var O=function(){var e=Object(n.useContext)(g),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(s.a)(c,2),m=i[0],f=i[1],d=Object(n.useState)("top_rated"),v=Object(s.a)(d,2),h=v[0],O=v[1],j=Object(n.useState)(1),y=Object(s.a)(j,2),k=y[0],C=y[1],x=Object(n.useState)(!1),w=Object(s.a)(x,2),q=w[0],S=w[1],_=Object(n.useState)({top:0,left:0}),I=Object(s.a)(_,2),P=I[0],L=I[1],D=Object(n.useState)({}),T=Object(s.a)(D,2),M=T[0],U=T[1],Y=Object(p.f)(),R=function(){C((function(e){return 1})),O((function(e){return"top_rated"===e?"popular":"top_rated"}))},A=function(e){C("next"===e&&k<5?function(e){return e+1}:"prev"===e&&k>1?function(e){return e-1}:function(t){return e})},B=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a[h][k]){e.next=2;break}return e.abrupt("return");case 2:return console.log("start fetching"),e.prev=3,f(!0),e.next=7,E.a.get("/search_movies/".concat(h,"/").concat(k));case 7:t=e.sent,(n=t.data.data).forEach((function(e){e.price=Math.floor(100*Math.random()+100)})),console.log(n),(r=a)[h][k]=n,l(r),f(!1),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(){return e.apply(this,arguments)}}(),F=function(e){if(!q){var t=a[h][k].find((function(t){return t.title===e}));U(t),L({top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft})}S((function(e){return!e}))};return window.onscroll=function(){q&&window.scrollTo(P.left,P.top)},Object(n.useEffect)((function(){return B(),function(){}}),[h,k]),r.a.createElement("div",{className:"grid-outer-container"},q?r.a.createElement(N,{data:M,toggleModal:F}):"",r.a.createElement("div",{className:"button-group"},r.a.createElement("button",{onClick:function(){return A("prev")}},"Prev"),r.a.createElement("button",{className:1===k?"active":"",onClick:function(){return A(1)}},"1"),r.a.createElement("button",{className:2===k?"active":"",onClick:function(){return A(2)}},"2"),r.a.createElement("button",{className:3===k?"active":"",onClick:function(){return A(3)}},"3"),r.a.createElement("button",{className:4===k?"active":"",onClick:function(){return A(4)}},"4"),r.a.createElement("button",{className:5===k?"active":"",onClick:function(){return A(5)}},"5"),r.a.createElement("button",{onClick:function(){return A("next")}},"Next")),r.a.createElement("div",{className:"movieType-btn-container"},r.a.createElement("button",{className:"top_rated"===h?"active":"",onClick:function(){return R()}},"Top Rated"),r.a.createElement("button",{className:"top_rated"===h?"":"active",onClick:function(){return R()}},"Popular")),r.a.createElement("div",{className:"shoppinglist-btn-container"},r.a.createElement("button",{onClick:function(){return Y.push("/cart")}},"My Cart")),m||null===a[h][k]?r.a.createElement("h1",{style:{width:"100%",textAlign:"center"}},"Loading..."):r.a.createElement("div",{className:"grid-container"},r.a.createElement(b,{movies:a[h][k],toggleModal:F})),r.a.createElement("div",{className:"button-group bottom"},r.a.createElement("button",{onClick:function(){return A("prev")}},"Prev"),r.a.createElement("button",{className:1===k?"active":"",onClick:function(){return A(1)}},"1"),r.a.createElement("button",{className:2===k?"active":"",onClick:function(){return A(2)}},"2"),r.a.createElement("button",{className:3===k?"active":"",onClick:function(){return A(3)}},"3"),r.a.createElement("button",{className:4===k?"active":"",onClick:function(){return A(4)}},"4"),r.a.createElement("button",{className:5===k?"active":"",onClick:function(){return A(5)}},"5"),r.a.createElement("button",{onClick:function(){return A("next")}},"Next")))};a(66);var j=function(e){var t=e.toggleIsUserOpen,a=Object(p.f)();return r.a.createElement("div",{className:"nav-container"},r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-video"}),r.a.createElement("span",null,"Movie Center")),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{exact:!0,to:"/",activeClassName:"link-active"},"Home")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/about",activeClassName:"link-active"},"About")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/signin",activeClassName:"link-active"},"Sign in")))),r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement("button",null,"User History")),r.a.createElement("p",null,r.a.createElement("span",{onClick:function(){return a.push("/cart")}},r.a.createElement("i",{className:"fas fa-shopping-cart"})),r.a.createElement("span",{onClick:function(){return t()}},r.a.createElement("i",{className:"fas fa-user"})))))},y=a(14);a(67);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=function(){var e=Object(n.useContext)(g),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(s.a)(c,2),m=i[0],p=i[1],f=Object(n.useState)(a.userInfo.first_name),E=Object(s.a)(f,2),d=E[0],v=E[1],b=Object(n.useState)(a.userInfo.last_name),h=Object(s.a)(b,2),N=h[0],O=h[1],j=Object(n.useState)(a.userInfo.email),y=Object(s.a)(j,2),k=y[0],x=y[1],w=function(e){switch(e.target.id){case"firstName":v(e.target.value);break;case"lastName":O(e.target.value);break;default:x(e.target.value)}},q=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new Date,n=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),l(C({},a,{userInfo:C({},a.userInfo,{first_name:d,last_name:N,email:k,register_date:n})})),console.log("update user"),p(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"user-outer-container"},a.isLogin?r.a.createElement("div",{className:"user-container"},r.a.createElement("h1",null,"User Profile"),r.a.createElement("img",{src:"https://source.unsplash.com/random/203x200",alt:""}),r.a.createElement("div",{className:"user-info"},r.a.createElement("p",null,"First Name: ",m?r.a.createElement("input",{id:"firstName",type:"text",value:d,onChange:w}):r.a.createElement("span",null,a.userInfo.first_name)),r.a.createElement("p",null,"Last Name: ",m?r.a.createElement("input",{id:"lastName",type:"text",value:N,onChange:w}):r.a.createElement("span",null,a.userInfo.last_name)),r.a.createElement("p",null,"Email: ",m?r.a.createElement("input",{id:"email",type:"text",value:k,onChange:w}):r.a.createElement("span",null,a.userInfo.email)),r.a.createElement("p",null,"Register Date: ",r.a.createElement("span",null,a.userInfo.register_date))),r.a.createElement("div",{className:"user-btn"},m?r.a.createElement("button",{onClick:function(){return q()}},"Save Change"):r.a.createElement("button",{onClick:function(){v(a.userInfo.first_name),O(a.userInfo.last_name),x(a.userInfo.email),p(!0)}},"Update User"),m?r.a.createElement("button",{onClick:function(){return console.log("quit"),v(a.userInfo.first_name),O(a.userInfo.last_name),x(a.userInfo.email),void p(!1)}},"Cancel"):r.a.createElement("button",null,"Delete User"))):r.a.createElement("div",{className:"user-container"},r.a.createElement("h1",null,"User Profile"),r.a.createElement("p",null,"Please log in to see the user profile")))};a(68);var w=function(e){return r.a.createElement("div",{className:"layout-container ".concat(e.isUserOpen?"open":"")},e.children)};a(69);var q=function(){return r.a.createElement("div",{className:"about-container"},r.a.createElement("h1",null,"About Movie Center"),r.a.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sapiente corporis exercitationem adipisci, labore error. Corporis fugiat, quas ipsum error aperiam provident rem odit quae dolores a odio repudiandae commodi, consectetur illum, et eius! Repellat animi, inventore praesentium vel facere quos corporis laboriosam fugiat est exercitationem ipsa aperiam consectetur, quia eos, quam nisi. Cum odit eaque laboriosam dolorem porro accusamus quae facere nulla voluptatum! Numquam, obcaecati quod hic aliquam sed itaque eius quas veritatis at sit, magni quidem laudantium accusantium iure ullam commodi odio ipsum totam quae delectus vero mollitia nobis esse. Corporis hic facere neque harum, sapiente nemo veritatis illo vero eligendi incidunt amet eveniet non itaque tempore reprehenderit? Quas sed quam non sequi voluptate doloribus modi voluptatibus labore nam, blanditiis dicta. Distinctio possimus aut voluptates delectus? Repellat fugit soluta voluptate esse optio quasi est impedit dolores praesentium harum incidunt, officia rem iure alias eos reiciendis quod ullam. Itaque ipsa sed dolore dolorum quaerat iusto rem, laborum adipisci nostrum. Aut quae, id praesentium corporis delectus expedita maxime unde reprehenderit rem, qui dolorum illo commodi in doloribus similique nam modi illum facilis nesciunt, totam dolores! Laboriosam libero nesciunt ad, ab amet voluptas exercitationem nulla consectetur ea iusto dolores voluptate, distinctio quasi voluptatibus nemo pariatur vel quas asperiores, porro voluptatum. Error nisi possimus inventore eveniet assumenda quasi quam id repellat maxime non quae consequuntur quos earum perspiciatis nam neque blanditiis architecto optio tempore, tenetur cum iure? Impedit ipsa enim illum magni sit quia ea, mollitia debitis, nesciunt dolore odit quo, sunt tenetur amet tempora repellendus labore."))};a(70);var S=function(){var e=Object(n.useContext)(g),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),i=Object(s.a)(c,2),o=(i[0],i[1]),u=Object(p.f)(),m=function(e,t){var n=a;"plus"===e&&n.cart[t].amount<5&&(n.cart[t].amount++,l(n),o((function(e){return!e}))),"minus"===e&&n.cart[t].amount>1&&(n.cart[t].amount--,l(n),o((function(e){return!e})))};return r.a.createElement("div",{className:"cart-container"},r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-shopping-cart icon-resize"}),a.isLogin?"".concat(a.userInfo.first_name," ").concat(a.userInfo.last_name,"'s Cart"):"You are not loggin in"),r.a.createElement("p",{id:"total"},"Total: ",r.a.createElement("span",null,0===a.cart.length?0:a.cart.reduce((function(e,t){return e+t.amount*t.price}),0)))),r.a.createElement("main",null,r.a.createElement("ul",null,0===a.cart.length?r.a.createElement("h4",{style:{textAlign:"center",fontSize:"24px"}},"You haven't buy anything yet..."):a.cart.map((function(e,t){return r.a.createElement("li",{key:e.title,"data-last":t+1===a.cart.length?"true":""},r.a.createElement("section",null,r.a.createElement("img",{src:e.img,alt:""}),r.a.createElement("h2",null,e.title),r.a.createElement("p",{className:"price"},r.a.createElement("span",null,"$",e.price)),r.a.createElement("p",{className:"amount"},"Amount: ",r.a.createElement("span",null,e.amount),r.a.createElement("button",{onClick:function(){return m("plus",t)},className:5===e.amount?"disable":""},"+"),r.a.createElement("button",{onClick:function(){return m("minus",t)},className:1===e.amount?"disable":""},"\u2013")),r.a.createElement("p",{className:"each-total-price"},"total: $",r.a.createElement("span",null,e.amount*e.price),r.a.createElement("button",{onClick:function(){return function(e){var t=a;t.cart=t.cart.filter((function(t){return t!==e})),l(t),o((function(e){return!e}))}(e)}},r.a.createElement("i",{className:"far fa-trash-alt",style:{fontSize:"14px"}})," Delete"))))})))),r.a.createElement("button",{onClick:function(){return u.push("/")},className:"exit-Btn"},"Exit"))};a(71);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(){var e=Object(n.useContext)(g),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),m=i[0],p=i[1],f=Object(n.useState)(""),d=Object(s.a)(f,2),v=d[0],b=d[1],h=Object(n.useState)(""),N=Object(s.a)(h,2),O=N[0],j=N[1],y=Object(n.useState)(!0),k=Object(s.a)(y,2),C=(k[0],k[1]),x=function(e){switch(e.target.id){case"firstName":p(e.target.value);break;case"lastName":b(e.target.value);break;default:j(e.target.value)}},w=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("/find_user/".concat(m,"/").concat(v,"/").concat(O));case 3:t=e.sent,"no result"===(n=t.data.result)?console.log("no such user"):(console.log(n),l(I({},a,{isLogin:!0,userInfo:n})),C((function(e){return!e}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"signin-container"},a.isLogin?r.a.createElement("div",null,r.a.createElement("h1",null,"You are now Signing in as ","".concat(a.userInfo.first_name," ").concat(a.userInfo.last_name)),r.a.createElement("button",{onClick:function(){l(I({},a,{cart:[],isLogin:!1}))}},"Sign out")):r.a.createElement("div",null,r.a.createElement("h1",null,"Please sign in"),r.a.createElement("div",null,r.a.createElement("label",{for:"firstName"},"First Name: "),r.a.createElement("input",{type:"text",id:"firstName",value:m,onChange:x}),r.a.createElement("br",null),r.a.createElement("label",{for:"lastName"},"First Name: "),r.a.createElement("input",{type:"text",id:"lastName",value:v,onChange:x}),r.a.createElement("br",null),r.a.createElement("label",{for:"password"},"Email: "),r.a.createElement("input",{type:"text",id:"password",value:O,onChange:x}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return w()}},"Sign in"))))};var L=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(s.a)(c,2),o=i[0],u=i[1];return r.a.createElement("div",null,r.a.createElement(h,null,r.a.createElement(m.a,null,r.a.createElement(d,{isOpenYet:o,toggleIsOpenYet:function(){return u(!0)}},r.a.createElement(j,{toggleIsUserOpen:function(){return l((function(e){return!e}))}})),r.a.createElement(w,{isUserOpen:a},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/"},r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(O,null))),r.a.createElement(p.a,{path:"/about"},r.a.createElement(q,null)),r.a.createElement(p.a,{path:"/cart"},r.a.createElement(S,null)),r.a.createElement(p.a,{path:"/signin"},r.a.createElement(P,null))),r.a.createElement(x,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.131ef16d.chunk.js.map