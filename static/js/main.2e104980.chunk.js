(this.webpackJsonpto_do_app=this.webpackJsonpto_do_app||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),i=n.n(c),s=n(8),r=n.n(s),d=(n(14),n(6)),o=n(2),l=n(3),h=n(5),j=n(4),u=(n(15),n(16),function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).minDate=(new Date).toISOString().slice(0,10),t.state={text:"",checked:!1,date:t.minDate},t.handleText=function(e){t.setState({text:e.target.value})},t.handleCheckbox=function(e){t.setState({checked:e.target.checked})},t.handleDate=function(e){t.setState({date:e.target.value})},t.handleClick=function(){var e=t.state,n=e.text,a=e.checked,c=e.date;n.length<2||t.props.add(n,c,a)&&t.setState({text:"",checked:!1,date:t.minDate})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=1*this.minDate.slice(0,4)+1;return t="".concat(t,"-12-31"),Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("input",{type:"text",placeholder:"dodaj zadanie",value:this.state.text,onChange:this.handleText}),Object(a.jsx)("input",{type:"checkbox",checked:this.state.checked,id:"important",onChange:this.handleCheckbox}),Object(a.jsx)("label",{htmlFor:"important",children:"Priorytet"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"date",children:"Do kiedy zrobi\u0107"}),Object(a.jsx)("input",{type:"date",id:"date",value:this.state.date,min:this.minDate,max:t,onChange:this.handleDate}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:this.handleClick,children:"Dodaj"})]})}}]),n}(c.Component)),b=function(t){var e=t.task,n=e.text,c=e.date,i=e.id,s=e.active,r=e.important,d=e.finishDate;if(s)return Object(a.jsx)("div",{children:Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{style:r?{color:"red"}:null,children:n}),"- do ",Object(a.jsxs)("span",{children:[c," "]}),Object(a.jsx)("button",{onClick:function(){return t.change(i)},children:"Zosta\u0142o wykonane"}),Object(a.jsx)("button",{onClick:function(){return t.delete(i)},children:"X"})]})});var o=new Date(d).toLocaleString();return Object(a.jsx)("div",{children:Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:n}),Object(a.jsxs)("em",{children:[" (zrobi\u0107 do ",c,")"]}),Object(a.jsx)("br",{}),"-potwierdzenie wykonania ",Object(a.jsx)("span",{children:o}),Object(a.jsx)("button",{onClick:function(){return t.delete(i)},children:"X"})]})})},x=function(t){var e=t.tasks.filter((function(t){return t.active})),n=t.tasks.filter((function(t){return!t.active}));n.length>=2&&n.sort((function(t,e){return e.finishDate-t.finishDate})),e.length>=2&&e.sort((function(t,e){return(t=t.date)<(e=e.date)?-1:t>e?1:0}));var c=e.map((function(e){return Object(a.jsx)(b,{task:e,delete:t.delete,change:t.change},e.id)})),i=n.map((function(e){return Object(a.jsx)(b,{task:e,delete:t.delete,change:t.change},e.id)}));return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"active",children:[Object(a.jsx)("h2",{children:"Zadania do zrobienia"}),c.length>0?c:"brak zada\u0144, ale z Ciebie KOX"]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"done",children:[Object(a.jsxs)("h3",{children:["Zadania zrobione ",Object(a.jsxs)("em",{children:["(",i.length,")"]})]}),i.length>3&&Object(a.jsx)("span",{style:{fontSize:10},children:"Wy\u015bwietlone s\u0105 jedynie 3 ostatnie elementy"}),i.slice(0,3)]})]})},O=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={tasks:[{id:0,text:"zagra\u0107 w Wied\u017amina 3",date:"2021-02-15",important:!0,active:!0,finishDate:null},{id:1,text:"zrobic dobry uczynek",date:"2021-06-15",important:!1,active:!0,finishDate:null},{id:2,text:"Kupic mleko",date:"2021-01-25",important:!0,active:!0,finishDate:null},{id:3,text:"umy\u0107 samoch\xf3d",date:"2021-02-24",important:!0,active:!0,finishDate:null}]},t.counter=t.state.tasks.length,t.deleteTask=function(e){var n=Object(d.a)(t.state.tasks),a=n.findIndex((function(t){return t.id===e}));n.splice(a,1),t.setState({tasks:n})},t.changeTaskStatus=function(e){var n=Object(d.a)(t.state.tasks);n.forEach((function(t){t.id===e&&(t.active=!1,t.finishDate=(new Date).getTime())})),t.setState({tasks:n})},t.addTask=function(e,n,a){console.log("dodaj");var c={id:t.counter,text:e,date:n,important:a,active:!0,finishDate:null};t.counter++;var i=[].concat(Object(d.a)(t.state.tasks),[c]);return t.setState({tasks:i}),!0},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"TO DO APP"}),Object(a.jsx)(u,{add:this.addTask}),Object(a.jsx)(x,{tasks:this.state.tasks,delete:this.deleteTask,change:this.changeTaskStatus})]})}}]),n}(c.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),i(t),s(t)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.2e104980.chunk.js.map