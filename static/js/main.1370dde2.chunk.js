(this["webpackJsonpreact-recipes"]=this["webpackJsonpreact-recipes"]||[]).push([[0],{24:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(17),a=c.n(s),i=(c(24),c(0));function j(){return Object(i.jsx)("footer",{className:"page-footer green lighten-4",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/IlyaMur/best-recipes_app",target:"_blank",rel:"noreferrer",children:"Repo"})]})})})}var o=c(5);function l(){return Object(i.jsx)("nav",{className:"green darken-1",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)(o.b,{to:"/",className:"brand-logo",children:"Best Recipes"}),Object(i.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/about",children:"About"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/contacts",children:"Contacts"})})]})]})})}var b=c(2),u=c(8),d=c(10),h=c.n(d),O=c(13),x="https://www.themealdb.com/api/json/v1/".concat("1","/"),p=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"lookup.php?i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"filter.php?c="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function g(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})}var v=c(12);function y(e){var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-image",children:Object(i.jsx)("img",{src:c,alt:t})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title",children:t}),Object(i.jsxs)("p",{children:[n.slice(0,60),"..."]})]}),Object(i.jsx)("div",{className:"card-action",children:Object(i.jsx)(o.b,{to:"/category/".concat(t),className:"btn",children:"Watch category"})})]})}function N(e){var t=e.catalog,c=void 0===t?[]:t;return Object(i.jsx)("div",{className:"list",children:c.map((function(e){return Object(i.jsx)(y,Object(v.a)({},e),e.idCategory)}))})}function w(e){var t=e.cb,c=void 0===t?Function.prototype:t,r=Object(n.useState)(""),s=Object(u.a)(r,2),a=s[0],j=s[1],o=function(){c(a)};return Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"input-field col s12",children:[Object(i.jsx)("input",{type:"search",id:"search-field",placeholder:"search",onKeyDown:function(e){"Enter"===e.key&&o()},onChange:function(e){return j(e.target.value)},value:a}),Object(i.jsx)("button",{className:"btn",style:{position:"absolute",top:0,right:0},onClick:o,children:"Search"})]})})}function C(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(u.a)(s,2),j=a[0],o=a[1],l=Object(b.g)(),d=l.pathname,h=l.search,O=Object(b.f)().push;return Object(n.useEffect)((function(){m().then((function(e){r(e.categories),o(h?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(h.split("=")[1].toLowerCase())})):e.categories)}))}),[h]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(w,{cb:function(e){o(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O({pathname:d,search:"?search=".concat(e)})}}),c?Object(i.jsx)(N,{catalog:j}):Object(i.jsx)(g,{})]})}function k(){return Object(i.jsx)("h5",{children:"React Recipes project made by Ilya Muratov"})}function M(){return Object(i.jsx)("h4",{children:Object(i.jsx)("a",{href:"https://github.com/IlyaMur/",children:"Author github"})})}function S(){return Object(i.jsx)("h1",{children:"Page not found"})}function A(e){var t=e.strMeal,c=e.idMeal,n=e.strMealThumb;return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-image",children:Object(i.jsx)("img",{src:n,alt:t})}),Object(i.jsx)("div",{className:"card-content",children:Object(i.jsx)("span",{className:"card-title",children:t})}),Object(i.jsx)("div",{className:"card-action",children:Object(i.jsx)(o.b,{to:"/meal/".concat(c),className:"btn",children:"Watch recipe"})})]})}function F(e){var t=e.meals;return Object(i.jsx)("div",{className:"list",children:t.map((function(e){return Object(i.jsx)(A,Object(v.a)({},e),e.idMeal)}))})}function I(){var e=Object(b.h)().name,t=Object(n.useState)(),c=Object(u.a)(t,2),r=c[0],s=c[1],a=Object(b.f)().goBack;return Object(n.useEffect)((function(){f(e).then((function(e){return s(e.meals)}))}),[e]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("button",{className:"btn",onClick:a,children:"Go Back"}),r?Object(i.jsx)(F,{meals:r}):Object(i.jsx)(g,{})]})}function B(){var e=Object(b.h)().id,t=Object(n.useState)({}),c=Object(u.a)(t,2),r=c[0],s=c[1],a=Object(b.f)().goBack;return Object(n.useEffect)((function(){p(e).then((function(e){return s(e.meals[0])}))}),[e]),Object(i.jsxs)(i.Fragment,{children:[r.idMeal?Object(i.jsxs)("div",{className:"recipe",children:[Object(i.jsx)("div",{style:{margin:"0 auto",maxWidth:"450px"},children:Object(i.jsx)("img",{src:r.strMealThumb,alt:r.strMeal})}),Object(i.jsx)("h1",{style:{textAlign:"center"},children:r.strMeal}),Object(i.jsxs)("h4",{style:{textAlign:"center"},children:["Category: ",r.strCategory]}),r.strArea?Object(i.jsxs)("h6",{children:["Area: ",r.strArea," "]}):null,Object(i.jsx)("p",{style:{marginTop:"50px"},children:r.strInstructions}),Object(i.jsxs)("table",{className:"centered",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Ingredient"}),Object(i.jsx)("th",{children:"Measure"})]})}),Object(i.jsx)("tbody",{children:Object.keys(r).map((function(e){return e.includes("Ingredient")&&r[e]?Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:r[e]}),Object(i.jsx)("td",{children:r["strMeasure".concat(e.slice(13))]})]},e):null}))})]}),r.strYoutube?Object(i.jsxs)("div",{className:"row",style:{margin:"0 auto",maxWidth:"450px"},children:[Object(i.jsx)("h5",{style:{margin:"2rem 0 1.5rem"},children:"Video Recipe:"}),Object(i.jsx)("iframe",{title:e,src:"https://www.youtube.com/embed/".concat(r.strYoutube.slice(-11)),allowFullScreen:!0})]}):null]}):Object(i.jsx)(g,{}),Object(i.jsx)("button",{className:"btn",onClick:a,children:"Go back"})]})}var E=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(o.a,{basename:"/best-recipes_app",children:[Object(i.jsx)(l,{}),Object(i.jsx)("main",{className:"container content",children:Object(i.jsxs)(b.c,{children:[Object(i.jsx)(b.a,{exact:!0,path:"/",component:C}),Object(i.jsx)(b.a,{path:"/about",component:k}),Object(i.jsx)(b.a,{path:"/contacts",component:M}),Object(i.jsx)(b.a,{path:"/category/:name",component:I}),Object(i.jsx)(b.a,{path:"/meal/:id",component:B}),Object(i.jsx)(b.a,{component:S})]})}),Object(i.jsx)(j,{})]})})};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.1370dde2.chunk.js.map