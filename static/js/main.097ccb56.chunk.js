(this["webpackJsonpgoit-react-hm-feedback"]=this["webpackJsonpgoit-react-hm-feedback"]||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),o=a(5),i=a(8),l=a(7),u=a(0),c=a.n(u),s=a(6),d=a.n(s),m=a(1),p=a.n(m),b=function(e){var t=e.options;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{id:"good",onClick:function(e){t(e.target.id)}},"Good"),c.a.createElement("button",{id:"neutral",onClick:function(e){t(e.target.id)}},"Neutral"),c.a.createElement("button",{id:"bad",onClick:function(e){t(e.target.id)}},"Bad"))};b.prototype={options:p.a.func.isRequired};var g=b;function v(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,o=e.positivePercentage;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Good: ",t),c.a.createElement("p",null,"Neutral: ",a),c.a.createElement("p",null,"Bad: ",n),c.a.createElement("p",null,"Total: ",r),c.a.createElement("p",null,"Positive feedback: ",o,"%"))}v.prototype={good:p.a.number.isRequired,neutral:p.a.number.isRequired,bad:p.a.number.isRequired,positivePercentage:p.a.number.isRequired,total:p.a.number.isRequired};var f=v;function E(e){var t=e.title,a=e.child;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,t),a)}E.prototype={child:p.a.element.isRequired,title:p.a.string.isRequired};var h=E;function k(e){var t=e.message;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,t))}k.prototype={message:p.a.string.isRequired};var q=k,F=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={good:0,neutral:0,bad:0},e.uppervalue=function(t){e.setState((function(e){return Object(n.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){var t=[];for(var a in e.state)t.push(e.state[a]);return t.reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(t){var a=0;return a=0===t?0:e.state.good/t*100,Math.floor(a)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage(e);return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{title:"Please leave feedback",child:c.a.createElement(g,{options:this.uppervalue})}),c.a.createElement(h,{title:"Statistics",child:0===e?c.a.createElement(q,{message:"No feedback given"}):c.a.createElement(f,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:t})}))}}]),a}(u.Component);d.a.render(c.a.createElement(F,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.097ccb56.chunk.js.map