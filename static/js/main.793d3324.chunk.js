(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),o=n(4),a=n.n(o),i=(n(10),n(3)),l=(n(11),n(12),function(e){return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("img",{className:"robots",src:"https://robohash.org/".concat(e.id,"?set=set5&size=404x404"),alt:"robot-".concat(e.id)}),Object(c.jsx)("h2",{id:e.id,children:e.name}),Object(c.jsx)("p",{children:e.email})]})}),u=(n(13),function(e){return Object(c.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(c.jsx)(l,{id:e.id,name:e.name,email:e.email},e.id)}))})}),d=(n(14),function(e){var t=e.placeholder,n=e.handleChange;return Object(c.jsx)("input",{"aria-label":"search Robots",className:"search",type:"search",placeholder:t,onChange:n})});var h=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(r.useState)(""),a=Object(i.a)(o,2),l=a[0],h=a[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);var j=n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Monster Rolodex"}),Object(c.jsx)(d,{placeHolder:"Search Monsters",handleChange:function(e){h(e.target.value)}}),Object(c.jsx)(u,{monsters:j})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),ServiceWorker.register(),j()}],[[15,1,2]]]);
//# sourceMappingURL=main.793d3324.chunk.js.map