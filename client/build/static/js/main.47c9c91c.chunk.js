(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){},49:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(21),s=n.n(r),o=(n(28),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))}),u=n(5),i=n.n(u),l=n(4),j=n(9),d=n(6),p=n(23),b=function(e,t){switch(t.type){case"ADD_EXPENSE":return console.log(e),console.log(t.payload),Object(l.a)(Object(l.a)({},e),{},{expenses:[t.payload].concat(Object(p.a)(e.expenses))});case"GET_EXPENSES":return Object(l.a)(Object(l.a)({},e),{},{expenses:t.payload});case"ADD_USERNAME":return Object(l.a)(Object(l.a)({},e),{},{userName:t.payload});case"DELETE_EXPENSE":return Object(l.a)(Object(l.a)({},e),{},{expenses:e.expenses.filter((function(e){return e._id!==t.payload}))});default:return e}},x=n(10),O=n.n(x),h=n(2),f={expenses:[],userName:null},E=Object(c.createContext)(f),v=function(e){var t=e.children,n=Object(c.useReducer)(b,f),a=Object(d.a)(n,2),r=a[0],s=a[1],o=function(){var e=Object(j.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={header:{"Content-Type":"application/json"}},e.next=3,O.a.post("/expenses",Object(l.a)(Object(l.a)({},t),{},{userName:r.userName}),n);case 3:c=e.sent,s({type:"ADD_EXPENSE",payload:c.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(j.a)(i.a.mark((function e(){var t,n,c=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:new Date,e.prev=1,e.next=4,O.a.get("/expenses",{params:{userName:r.userName,date:t}});case 4:n=e.sent,console.log(n),s({type:"GET_EXPENSES",payload:n.data.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(j.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("expenses/".concat(t));case 3:s({type:"DELETE_EXPENSE",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(E.Provider,{value:{state:r,addExpense:o,getExpenses:u,setUserName:function(e){s({type:"ADD_USERNAME",payload:e})},deleteExpence:p},children:t})},m=(n(49),n(22)),y=(n(50),function(){var e=Object(c.useContext)(E),t=e.addExpense,n=e.getExpenses,a=Object(c.useState)(new Date),r=Object(d.a)(a,2),s=r[0],o=r[1],u=Object(c.useState)(0),i=Object(d.a)(u,2),l=i[0],j=i[1],p=Object(c.useState)("food"),b=Object(d.a)(p,2),x=b[0],O=b[1];return Object(h.jsxs)("div",{className:"expencesForm",children:[Object(h.jsx)(m.a,{value:s,onClickDay:function(e){o(e),n(e)}}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({date:s,amount:l,category:x}),console.log({date:s,amount:l,category:x})},children:[Object(h.jsx)("input",{type:"number",placeholder:"Spent amount",value:l,onChange:function(e){return j(e.target.value)}}),Object(h.jsxs)("select",{placeholder:"Category",value:x,onChange:function(e){return O(e.target.value)},children:[Object(h.jsx)("option",{children:"food"}),Object(h.jsx)("option",{children:"sport"}),Object(h.jsx)("option",{children:"education"}),Object(h.jsx)("option",{children:"entertaiment"}),Object(h.jsx)("option",{children:"bills"})]}),Object(h.jsx)("button",{children:"Create Entry"})]})]})}),g=function(e){var t=e.expense,n=Object(c.useContext)(E).deleteExpence;return console.log(t._id),Object(h.jsxs)("li",{className:"expense",children:[Object(h.jsxs)("div",{children:[t.category,"  ",t.amount]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{children:"EDIT"})," ",Object(h.jsx)("button",{onClick:function(){return n(t._id)},children:"DELETE"})]})]},t._id)},N=function(){var e=Object(c.useContext)(E),t=e.getExpenses,n=e.state;return Object(c.useEffect)((function(){t()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Day spending"}),Object(h.jsxs)("ul",{children:[n.expenses.map((function(e){return Object(h.jsx)(g,{expense:e})})),Object(h.jsxs)("li",{children:["Total - ",n.expenses.reduce((function(e,t){return e+Number(t.amount)}),0)]},"total")]})]})};var D=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h2",{children:"Budget Tracker App"}),Object(h.jsx)(y,{}),Object(h.jsx)(N,{})]})},S=function(){var e=Object(c.useContext)(E),t=e.state,n=e.setUserName,a=t.userName,r=Object(c.useRef)("");return a?Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"header",children:[" Hello, ",a]}),Object(h.jsx)(D,{})]}):Object(h.jsxs)("div",{className:"userNameInput",children:["Please add your userName to proceed with App",Object(h.jsx)("input",{type:"text",placeholder:"username",ref:r}),Object(h.jsx)("button",{onClick:function(){n(r.current.value)},children:"Add UserName"})]})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v,{children:Object(h.jsx)(S,{})})}),document.getElementById("root")),o()}},[[53,1,2]]]);
//# sourceMappingURL=main.47c9c91c.chunk.js.map