(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(39)},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(4),c=n.n(u),o=n(2),s=n(14),l=n.n(s),i=n(3),m=n.n(i),f="/api/person/",d=function(){return m.a.get(f).then((function(e){return e.data}))},b=function(e){return m.a.post(f,e).then((function(e){return e.data}))},h=function(e,t){return m.a.put("".concat(f,"/").concat(e),t).then((function(e){return e.data}))},p=function(e){return m.a.delete("".concat(f,"/").concat(e))},E=function(e){var t=e.persons,n=e.setNewName,a=e.newName,u=e.setNumber,c=e.newNumber,o=e.setPersons,s=e.setMessage,i=e.setStatus;return r.a.createElement("form",{onSubmit:function(e){var r,m;return l.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:e.preventDefault(),r={name:a,number:c},a.length<1&&c.length<1?(s("Name or number missing"),i("error")):0===(m=t.filter((function(e){return e.name===r.name}))).length||void 0===m?b(r).then(d()).then((function(e){return o(t.concat(e))})).then(s("".concat(r.name," was added")),i("success")).then(n(""),u(""),setTimeout((function(){s(null)}),5e3)):window.confirm("".concat(r.name," already exists, add new number?"))&&h(m[0].id,r).then((function(e){o(t.map((function(t){return t.id!==m[0].id?t:e})))})).then(n(""),u(""));case 4:case"end":return l.stop()}}))}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:function(e){return function(e){n(e.target.value)}(e)},value:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:function(e){return function(e){e.preventDefault(),u(e.target.value.trim())}(e)},value:c})),r.a.createElement("button",{type:"submit"},"add"),r.a.createElement("div",null,"debug: ",a))},v=function(e){e.persons,e.filter;var t=e.setFilter;return r.a.createElement("div",null,"Search: ",r.a.createElement("input",{onChange:function(e){e.preventDefault(),t(e.target.value)}}))},g=function(e){var t=e.persons,n=e.filter,a=e.setPersons,u=e.setMessage,c=e.setStatus,o=t.filter((function(e){return e.name.includes(n)?e:""})),s=function(e){return r.a.createElement("li",{key:e.id},"Name: ",e.name," - ",e.number,r.a.createElement("button",{onClick:function(){return function(e){window.confirm("Rly delete, ".concat(e.name,"?"))&&p(e.id).then((function(){var n=t.filter((function(t){return t.id!==e.id}));a(n),u("".concat(e.name," was deleted")),c("error"),setTimeout((function(){u(null)}),5e3)})).catch(u("".concat(e.name," was not found on the server")),c("error"))}(e)}},"Delete"))},l=o.map((function(e){return s(e)})),i=t.map((function(e){return s(e)}));return r.a.createElement("div",null,r.a.createElement("ul",null,0!==n.length?l:i))},w=function(e){var t=e.message,n=e.person,a=e.status;return null===t?null:r.a.createElement("div",{className:a},n," ",t)},N=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],u=t[1],c=Object(a.useState)(""),s=Object(o.a)(c,2),l=s[0],i=s[1],m=Object(a.useState)(""),f=Object(o.a)(m,2),b=f[0],h=f[1],p=Object(a.useState)([]),N=Object(o.a)(p,2),j=N[0],O=N[1],S=Object(a.useState)(""),k=Object(o.a)(S,2),y=k[0],P=k[1],C=Object(a.useState)(""),D=Object(o.a)(C,2),M=D[0],x=D[1];return Object(a.useEffect)((function(){d().then((function(e){u(e)}))}),[h]),r.a.createElement("div",null,r.a.createElement("h2",null,"PhoneBook"),r.a.createElement(w,{message:y,status:M}),r.a.createElement(v,{setFilter:O}),r.a.createElement("h2",null,"Add a new person:"),r.a.createElement(E,{persons:n,setNewName:i,newName:l,setNumber:h,newNumber:b,setPersons:u,setMessage:P,setStatus:x}),r.a.createElement("h2",null,"Numbers"),n.length?r.a.createElement(g,{persons:n,setPersons:u,setMessage:P,setStatus:x,filter:j}):null)},j=N;c.a.render(r.a.createElement(N,null),document.getElementById("root"));n(38);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2060bfc1.chunk.js.map