(this["webpackJsonpmaking-todo-app-with-usereducer-and-context-in-react"]=this["webpackJsonpmaking-todo-app-with-usereducer-and-context-in-react"]||[]).push([[0],{24:function(t,e,n){"use strict";n.r(e);var c,o,a,r=n(0),i=n(13),d=n.n(i),u=n(3),l="delete",s="complete",j="uncomplete",b="edit",p=n(9),O=n(2),x=n(26),f={toDos:[],completed:[]},h=function(t,e){switch(e.type){case"add":return Object(O.a)(Object(O.a)({},t),{},{toDos:[].concat(Object(p.a)(t.toDos),[{text:e.payload,id:Object(x.a)()}])});case l:return Object(O.a)(Object(O.a)({},t),{},{toDos:t.toDos.filter((function(t){return t.id!==e.payload})),completed:t.completed.filter((function(t){return t.id!==e.payload}))});case s:return Object(O.a)(Object(O.a)({},t),{},{completed:[].concat(Object(p.a)(t.completed),[t.toDos.find((function(t){return t.id===e.payload}))]),toDos:t.toDos.filter((function(t){return t.id!==e.payload}))});case j:return Object(O.a)(Object(O.a)({},t),{},{toDos:[].concat(Object(p.a)(t.toDos),[t.completed.find((function(t){return t.id===e.payload}))]),completed:t.completed.filter((function(t){return t.id!==e.payload}))});case b:var n=t.toDos.find((function(t){return t.id===e.id})),c=t.toDos.filter((function(t){return t.id!==e.id}));return Object(O.a)(Object(O.a)({},t),{},{toDos:c.concat(Object(O.a)(Object(O.a)({},n),{},{text:e.payload}))});default:throw new Error}},m=n(1),v=Object(r.createContext)(),y=function(){return Object(r.useContext)(v).dispatch},g=function(t){var e=t.children,n=Object(r.useReducer)(h,f),c=Object(u.a)(n,2),o=c[0],a=c[1];return Object(m.jsx)(v.Provider,{value:{state:o,dispatch:a},children:e})},D=function(){var t=Object(r.useState)(""),e=Object(u.a)(t,2),n=e[0],c=e[1],o=y();return Object(m.jsx)("form",{onSubmit:function(t){t.preventDefault(),o({type:"add",payload:n})},children:Object(m.jsx)("input",{value:n,type:"text",placeholder:"Write to do",onChange:function(t){var e=t.target.value;c(e)}})})},C=function(t){var e=t.name,n=t.children;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:e}),Object(m.jsx)("ul",{children:n})]})},k=n(7),w=n(8),S=w.a.li(c||(c=Object(k.a)(["\n  display: flex;\n  padding-left: 10px;\n  margin-bottom: 5px;\n"]))),E=w.a.input(o||(o=Object(k.a)(["\n  all: unset;\n  padding: 5px 0;\n"]))),F=w.a.input(a||(a=Object(k.a)(["\n  all: unset;\n  padding: 5px 0;\n  text-decoration: line-through;\n  color: rgba(127, 140, 141, 0.8);\n"]))),J=function(t){var e=t.text,n=t.id,c=t.isCompleted,o=Object(r.useState)(e),a=Object(u.a)(o,2),i=a[0],d=a[1],p=y(),O=function(t){var e=t.target.value;d(e)};return Object(m.jsxs)(S,{children:[Object(m.jsx)("form",{onSubmit:function(t){t.preventDefault();var e=t.target;p({type:b,payload:e[0].value,id:n}),e[0].disabled=!0},children:c?Object(m.jsx)(F,{type:"text",value:i,onChange:O,disabled:!0}):Object(m.jsx)(E,{type:"text",value:i,onChange:O,disabled:!0})}),c?"":Object(m.jsx)("button",{onClick:function(t){var e=t.target.previousSibling[0];e.disabled=!1,e.focus()},children:"edit"}),Object(m.jsx)("button",{onClick:function(){return p({type:l,payload:n})},children:"\u274c"}),Object(m.jsx)("button",{onClick:function(){return p({type:c?j:s,payload:n})},children:c?"\ud83d\ude01":"\u2705"})]})},T=function(){var t=Object(r.useContext)(v).state,e=t.toDos,n=t.completed;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"ADD To Dos"}),Object(m.jsx)(D,{}),Object(m.jsx)(C,{name:"To Dos",children:e.map((function(t){return Object(m.jsx)(J,{id:t.id,text:t.text,isCompleted:!1},t.id)}))}),Object(m.jsx)(C,{name:0!==n.length?"Completed":"",children:n.map((function(t){return Object(m.jsx)(J,{id:t.id,text:t.text,isCompleted:!0},t.id)}))})]})};d.a.render(Object(m.jsx)(g,{children:Object(m.jsx)(T,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.91a3f077.chunk.js.map