(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),r=c(1);c(10);function l(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var s=c(2),o=c.n(s),j=c(0),d=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(a/c),r=l(1,i),s=function(e){return function(){e!==t&&n(e)}};return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:1===t}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){1!==t&&n(t-1)},children:"\xab"})}),r.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:t===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:s(e),children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:t===i}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i,onClick:function(){t!==i&&n(t+1)},children:"\xbb"})})]})},u=l(1,42).map((function(e){return"Item ".concat(e)})),h=function(){var e=Object(r.useState)(1),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)(5),l=Object(i.a)(n,2),s=l[0],o=l[1],h=c*s,m=h-s,p=u.slice(m,h);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(c," (items ").concat(m+1," - ").concat(m+p.length," of ").concat(u.length,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){o(+e.target.value),t(1)},children:[3,5,10,20].map((function(e){return Object(j.jsx)("option",{value:e,selected:e===s,children:e},e)}))})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:u.length,perPage:s,currentPage:c,onPageChange:function(e){t(e)}}),Object(j.jsx)("ul",{children:p.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.3c464513.chunk.js.map