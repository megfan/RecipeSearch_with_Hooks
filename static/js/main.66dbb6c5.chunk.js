(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a(68)},52:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),o=(a(52),a(36)),l=a.n(o),s=a(40),u=a(27),m=(a(54),a(55),a(98)),p=a(41),h=a(103),f=a(104),d=a(102),E=a(100),b=a(101),g=Object(m.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",width:"70%",fontSize:"120px"},palette:{primary:"#fb9e06",secondary:"#fb9e06"}}}),v={PaperProps:{style:{maxHeight:224,width:250}}},y=["eggs","potatoes","tomatoes","pasta","rice","chicken","mushrooms","corn","zucchini","sour cream","cucumbers","broccoli","butter","lemon","bananas","onion","sugar","apple"];function w(e,t,a){return{fontWeight:-1===t.indexOf(e)?a.typography.fontWeightRegular:a.typography.fontWeightMedium}}var O=function(e){var t=e.getSelect,a=(g(),Object(p.a)()),n=r.a.useState([]),c=Object(u.a)(n,2),i=c[0],o=c[1];return r.a.createElement("div",{className:"multiSearch"},r.a.createElement(E.a,{className:"multiSearch__form",id:"multiForm"},r.a.createElement(f.a,{htmlFor:"select-multiple"},"Choose from the list"),r.a.createElement(b.a,{multiple:!0,value:i,onChange:function(e){o(e.target.value)},input:r.a.createElement(h.a,{id:"select-multiple"}),MenuProps:v},y.map(function(e){return r.a.createElement(d.a,{key:e,value:e,style:w(e,i,a)},e)}))),r.a.createElement("button",{className:"search-button",onClick:function(){return t(i)}},"GO"))},j=(a(67),function(e){var t=e.title,a=e.ingredients,n=e.image,c=e.link;return r.a.createElement("div",{className:"result-content"},""===n?r.a.createElement("img",{src:"https://images.unsplash.com/photo-1503197553955-b4eafae3e08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1295&q=80",alt:"{title}"}):r.a.createElement("img",{src:n,alt:"{title}"}),r.a.createElement("div",{className:"result-data"},r.a.createElement("h3",null,t),r.a.createElement("p",null,a),r.a.createElement("a",{href:c},"Go to recipe")))}),N=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),m=o[0],p=o[1],h=Object(n.useState)(""),f=Object(u.a)(h,2),d=f[0],E=f[1];Object(n.useEffect)(function(){b()},[d]);var b=function(){var e=Object(s.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=".concat(d,"&p=10"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.results);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"header__title"},"Recipes by ",r.a.createElement("span",null,"Ingredients")),r.a.createElement("h2",null,"Find recipes based on ingredients that you have on hand"),r.a.createElement("div",{className:"header__search"},r.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),E(m)}},r.a.createElement("input",{className:"search-input",type:"text",value:m,onChange:function(e){p(e.target.value)}}),r.a.createElement("button",{className:"search-button"},"GO"))),r.a.createElement(O,{getSelect:function(e){E(e)}})),r.a.createElement("div",{className:"result"},a.map(function(e){return r.a.createElement(j,{key:e.href,image:e.thumbnail,ingredients:e.ingredients,title:e.title,link:e.href})})),r.a.createElement("div",{className:"footer"},r.a.createElement("h1",null,"Enjoy your meal!")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.66dbb6c5.chunk.js.map