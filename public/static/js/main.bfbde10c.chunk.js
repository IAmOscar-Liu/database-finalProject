(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,n){e.exports=n(45)},21:function(e,t,n){},23:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),l=n.n(c),i=(n(21),n(3)),s=n.n(i),o=n(4),u=n(2),m=(n(23),n(5)),E=n.n(m);n(41);var v=function(){var e=r.a.createRef();Object(a.useEffect)((function(){e.current.childNodes.forEach((function(e){t(e),setInterval((function(){return t(e)}),6200)}))}));var t=function(e){setTimeout((function(){e.classList.add("anim")}),100),setTimeout((function(){e.classList.add("fadeout")}),5100),setTimeout((function(){e.classList.remove("anim"),e.classList.remove("fadeout")}),6100)};return r.a.createElement("div",{className:"header-container"},r.a.createElement("div",null,r.a.createElement("div",{ref:e},r.a.createElement("span",{style:{"--span-index":1}},"W"),r.a.createElement("span",{style:{"--span-index":2}},"E"),r.a.createElement("span",{style:{"--span-index":3}},"L"),r.a.createElement("span",{style:{"--span-index":4}},"C"),r.a.createElement("span",{style:{"--span-index":5}},"O"),r.a.createElement("span",{style:{"--span-index":6}},"M"),r.a.createElement("span",{style:{"--span-index":7}},"E"),r.a.createElement("span",{style:{"--span-index":8}}),r.a.createElement("span",{style:{"--span-index":9}},"H"),r.a.createElement("span",{style:{"--span-index":10}},"E"),r.a.createElement("span",{style:{"--span-index":11}},"R"),r.a.createElement("span",{style:{"--span-index":12}},"E"))))};n(42);var d=function(){return r.a.createElement("div",{className:"scroll-container"},r.a.createElement("h1",null,"Pick your favorite movie here!"),r.a.createElement("div",{className:"scroll-container-leftChild"},r.a.createElement("div",null,r.a.createElement("h1",null,"Pick your favorite movie here!"))))};n(43),n(44);var p=function(e){return e.movies.map((function(e){return r.a.createElement("div",{key:e.title,className:"grid-item"},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:""}),r.a.createElement("p",null,r.a.createElement("span",null,"Title: "),r.a.createElement("span",null,"$",e.title)),r.a.createElement("div",null,r.a.createElement("span",null,"Rating: "),r.a.createElement("div",{className:"star-container",style:{"--star-rating":e.vote_average/2,"--star-rating-floor":Math.floor(e.vote_average/2)}},r.a.createElement("div",{className:"star-cover"},r.a.createElement("div",null,r.a.createElement("div",{className:"star highlight-star"}),r.a.createElement("div",{className:"star highlight-star"}),r.a.createElement("div",{className:"star highlight-star"}),r.a.createElement("div",{className:"star highlight-star"}),r.a.createElement("div",{className:"star highlight-star"}))),r.a.createElement("div",{className:"star"}),r.a.createElement("div",{className:"star"}),r.a.createElement("div",{className:"star"}),r.a.createElement("div",{className:"star"}),r.a.createElement("div",{className:"star"}))),r.a.createElement("p",null,r.a.createElement("span",null,"Price: $"),r.a.createElement("span",null,"$",e.price)),r.a.createElement("button",null,"See more"))}))},f=Object(a.createContext)(),h=function(e){var t=Object(a.useState)({popular:{1:null,2:null,3:null,4:null,5:null},top_rated:{1:null,2:null,3:null,4:null,5:null}}),n=Object(u.a)(t,2),c=n[0],l=n[1];return r.a.createElement(f.Provider,{value:[c,l]},e.children)};var b=function(){var e=Object(a.useContext)(f),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!0),i=Object(u.a)(l,2),m=i[0],v=i[1],d=Object(a.useState)("top_rated"),h=Object(u.a)(d,2),b=h[0],N=h[1],g=Object(a.useState)(1),k=Object(u.a)(g,2),x=k[0],y=k[1],C=function(){y((function(e){return 1})),N((function(e){return"top_rated"===e?"popular":"top_rated"}))},O=function(e){y("next"===e&&x<5?function(e){return e+1}:"prev"===e&&x>1?function(e){return e-1}:function(t){return e})},j=function(){var e=Object(o.a)(s.a.mark((function e(){var t,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n[b][x]){e.next=2;break}return e.abrupt("return");case 2:return console.log("start fetching"),e.prev=3,v(!0),e.next=7,E.a.get("/search_movies/".concat(b,"/").concat(x));case 7:t=e.sent,(a=t.data.data).forEach((function(e){e.price=Math.floor(100*Math.random()+100)})),console.log(a),(r=n)[b][x]=a,c(r),v(!1),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return j(),function(){}}),[b,x]),r.a.createElement("div",{className:"grid-outer-container"},r.a.createElement("div",{className:"button-group"},r.a.createElement("button",{onClick:function(){return O("prev")}},"Prev"),r.a.createElement("button",{className:1===x?"active":"",onClick:function(){return O(1)}},"1"),r.a.createElement("button",{className:2===x?"active":"",onClick:function(){return O(2)}},"2"),r.a.createElement("button",{className:3===x?"active":"",onClick:function(){return O(3)}},"3"),r.a.createElement("button",{className:4===x?"active":"",onClick:function(){return O(4)}},"4"),r.a.createElement("button",{className:5===x?"active":"",onClick:function(){return O(5)}},"5"),r.a.createElement("button",{onClick:function(){return O("next")}},"Next")),r.a.createElement("div",{className:"movieType-btn-container"},r.a.createElement("button",{className:"top_rated"===b?"active":"",onClick:function(){return C()}},"Top Rated"),r.a.createElement("button",{className:"top_rated"===b?"":"active",onClick:function(){return C()}},"Popular")),r.a.createElement("div",{className:"shoppinglist-btn-container"},r.a.createElement("button",null,"Shopping list")),m||null===n[b][x]?r.a.createElement("h1",{style:{width:"100%",textAlign:"center"}},"Loading..."):r.a.createElement("div",{className:"grid-container"},r.a.createElement(p,{movies:n[b][x]})),r.a.createElement("div",{className:"button-group bottom"},r.a.createElement("button",{onClick:function(){return O("prev")}},"Prev"),r.a.createElement("button",{className:1===x?"active":"",onClick:function(){return O(1)}},"1"),r.a.createElement("button",{className:2===x?"active":"",onClick:function(){return O(2)}},"2"),r.a.createElement("button",{className:3===x?"active":"",onClick:function(){return O(3)}},"3"),r.a.createElement("button",{className:4===x?"active":"",onClick:function(){return O(4)}},"4"),r.a.createElement("button",{className:5===x?"active":"",onClick:function(){return O(5)}},"5"),r.a.createElement("button",{onClick:function(){return O("next")}},"Next")))};var N=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=(t[0],t[1],Object(a.useState)({users:null})),c=Object(u.a)(n,2);return c[0],c[1],r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(d,null),r.a.createElement(h,null,r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.bfbde10c.chunk.js.map