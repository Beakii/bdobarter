(this.webpackJsonpbdotools=this.webpackJsonpbdotools||[]).push([[0],{19:function(e,a,t){e.exports=t(35)},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),m=(t(24),t(25),t(6)),i=(t(26),function(){return l.a.createElement("nav",{className:"navbar"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"logo"},l.a.createElement(m.b,{className:"nav-link",to:"/"},l.a.createElement("span",{className:"link-text"},"BDOBarter"),l.a.createElement("i",{className:"fas fa-chevron-right"}))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link",to:"/"},l.a.createElement("i",{className:"fas fa-home"}),l.a.createElement("span",{className:"link-text"},"Home"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link",to:"/calculator"},l.a.createElement("i",{className:"fas fa-weight-hanging"}),l.a.createElement("span",{className:"link-text"},"Weight"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link",to:"/boat"},l.a.createElement("i",{className:"fas fa-ship"}),l.a.createElement("span",{className:"link-text"},"Upgrade"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link",to:"/calculator"},l.a.createElement("i",{className:"fas fa-link"}),l.a.createElement("span",{className:"link-text"},"Links")))))}),s=t(9),o=t(18),u=(t(32),function(){var e=Object(n.useState)({maxWeight:0,lt800:0,lt900:0,lt1000:0,remaining:0}),a=Object(o.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",{className:"calc-wrapper"},l.a.createElement("label",{className:"instructions"},"Enter your boats MAX weight - Sailors/Gear:",l.a.createElement("br",null),"e.g. 9500, 15000"),l.a.createElement("br",null),l.a.createElement("div",{className:"input-row"},l.a.createElement("label",{className:"ship-weight"},"Ship Max Weight:"),l.a.createElement("input",{type:"number",onInput:function(e){return a=e.target.value,void r(Object(s.a)({},t,{maxWeight:a,remaining:a-(t.lt800+t.lt900+t.lt1000)}));var a}})),l.a.createElement("br",null),l.a.createElement("label",{className:"instructions"},"Enter the amount of each item you have:",l.a.createElement("br",null),"e.g. 1 800LT item; 4 1000LT items;"),l.a.createElement("br",null),l.a.createElement("section",{className:"input-grid"},l.a.createElement("div",{className:"input-row"},l.a.createElement("label",null,l.a.createElement("span",null,"0"),"800LT Items:"),l.a.createElement("input",{type:"number",onInput:function(e){return a=e.target.value,void r(Object(s.a)({},t,{lt800:800*a,remaining:t.maxWeight-(800*a+t.lt900+t.lt1000)}));var a}}),l.a.createElement("label",{htmlFor:"number"},"Total: ",t.lt800)),l.a.createElement("br",null),l.a.createElement("div",{className:"input-row"},l.a.createElement("label",null,l.a.createElement("span",null,"0"),"900LT Items:"),l.a.createElement("input",{type:"number",onInput:function(e){return a=e.target.value,void r(Object(s.a)({},t,{lt900:900*a,remaining:t.maxWeight-(t.lt800+900*a+t.lt1000)}));var a}}),l.a.createElement("label",{htmlFor:"number"},"Total: ",t.lt900)),l.a.createElement("br",null),l.a.createElement("div",{className:"input-row"},l.a.createElement("label",null,"1000LT Items:"),l.a.createElement("input",{type:"number",onInput:function(e){return a=e.target.value,void r(Object(s.a)({},t,{lt1000:1e3*a,remaining:t.maxWeight-(t.lt800+t.lt900+1e3*a)}));var a}}),l.a.createElement("label",{htmlFor:"number"},"Total: ",t.lt1000)),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("h3",null,"Remaining Weight: ",l.a.createElement("span",{className:t.remaining<=0?"overweight":"normal"},t.remaining),"LT"))}),E=(t(33),function(){return l.a.createElement("div",{className:"nav-padding home-notice"},l.a.createElement("h1",null,"BDOBarter"),l.a.createElement("br",null),l.a.createElement("h4",null,"Is a passion project intended to provide quality of life features you can use while bartering."),l.a.createElement("br",null),l.a.createElement("h5",null,"At present the only feature built is the weight calculator for inventory management on your boat."),l.a.createElement("br",null),l.a.createElement("h5",null,"This project is under active development. If you have any feature you would like added, reach out to me on the links below."),l.a.createElement("div",{className:"link-row"},l.a.createElement("div",{className:"content-link"},"coming soon\u2122"),l.a.createElement("div",{className:"content-link"},"coming soon\u2122"),l.a.createElement("div",{className:"content-link"},"coming soon\u2122")))});t(34);var b=function(){return l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Ship Upgrade"),l.a.createElement("h3",null,"Building material tracker"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Coming Soon\u2122"))},p=t(5);var v=function(){return l.a.createElement(m.a,null,l.a.createElement(p.c,null,l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement("main",null,l.a.createElement(p.a,{exact:!0,path:"/",component:E}),l.a.createElement(p.a,{path:"/calculator",component:u}),l.a.createElement(p.a,{path:"/boat",component:b})))))};c.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.04f5402d.chunk.js.map