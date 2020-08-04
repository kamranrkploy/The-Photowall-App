(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{171:function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"startAddingPost",(function(){return x})),n.d(a,"startLoadingPost",(function(){return I})),n.d(a,"startRemovingPost",(function(){return R})),n.d(a,"startAddingComment",(function(){return T})),n.d(a,"startLoadingComments",(function(){return M})),n.d(a,"loadComments",(function(){return W})),n.d(a,"removePost",(function(){return X})),n.d(a,"addPost",(function(){return B})),n.d(a,"addComment",(function(){return U})),n.d(a,"loadPost",(function(){return z}));var o=n(1),r=n.n(o),c=n(86),i=n.n(c),s=(n(97),n(17)),u=n(14),l=n(32),m=n(23),d=n(31),p=[];var f=Object(u.c)({Posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"remove_Post":return[].concat(Object(l.a)(t.slice(0,e.index)),Object(l.a)(t.slice(e.index+1)));case"add_post":return[].concat(Object(l.a)(t),[e.post]);case"Load_Post":return e.posts;default:return t}},comments:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"add_comment":return t[e.postId]?Object(d.a)(Object(d.a)({},t),{},Object(m.a)({},e.postId,[].concat(Object(l.a)(t[e.postId]),[e.comment]))):Object(d.a)(Object(d.a)({},t),{},Object(m.a)({},e.postId,[e.comment]));case"LOAD_COMMENTS":return e.comments;default:return t}}}),h=n(40),b=n(15),v=n(16),g=n(19),E=n(18),O=n(30),j=n.n(O);function y(t){var e=t.post;return r.a.createElement("figure",{className:"figure"},r.a.createElement(s.b,{to:"/single/".concat(e.id)},r.a.createElement("img",{className:"photo",src:e.imageLink,alt:e.description})),r.a.createElement("figcaption",null," ",r.a.createElement("p",null," ",e.description," ")," "),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{className:"remove",onClick:function(){t.startRemovingPost(t.index,e.id),t.history.push("/")}},"Remove")))}y.prototype={post:j.a.object.isRequired};var P=y;var w=function(t){return r.a.createElement("div",null,r.a.createElement(s.b,{className:"Add",to:"/addPhoto"}," ADD "),r.a.createElement("div",{className:"photoGrid"},t.posts.sort((function(t,e){return e.id-t.id})).map((function(e,n){return r.a.createElement(P,Object.assign({key:n,post:e},t,{index:n}))}))))},_=n(26),k=function(t){Object(g.a)(n,t);var e=Object(E.a)(n);function n(){var t;return Object(b.a)(this,n),(t=e.call(this)).SubmitPost=t.SubmitPost.bind(Object(_.a)(t)),t}return Object(v.a)(n,[{key:"SubmitPost",value:function(t){t.preventDefault();var e=t.target.elements.link.value,n=t.target.elements.description.value,a={id:Number(new Date),description:n,imageLink:e};n&&e?(this.props.startAddingPost(a),this.props.onHistory.push("/")):n||e?n?window.alert("please provide a valid link to an image."):window.alert("please give a relatable description for your image."):window.alert("please provide a link and a description")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"form",onSubmit:this.SubmitPost},r.a.createElement("input",{type:"text",placeholder:"Link",name:"link"}),r.a.createElement("input",{type:"text",placeholder:"Description",name:"description"}),r.a.createElement("button",null,"Post")))}}]),n}(o.Component),N=n(3),S=function(t){Object(g.a)(n,t);var e=Object(E.a)(n);function n(){var t;return Object(b.a)(this,n),(t=e.call(this)).handleSubmit=t.handleSubmit.bind(Object(_.a)(t)),t}return Object(v.a)(n,[{key:"handleSubmit",value:function(t){t.preventDefault();var e=t.target.elements.comment.value;e?this.props.startAddingComment(e,this.props.id):window.alert("please write a comment"),t.target.elements.comment.value=""}},{key:"render",value:function(){return r.a.createElement("div",{className:"comment"},this.props.comments.map((function(t,e){return r.a.createElement("p",{key:e}," ",t)})),r.a.createElement("form",{className:"comment-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"comment",name:"comment"}),r.a.createElement("input",{type:"submit",hidden:!0})))}}]),n}(o.Component),C=function(t){Object(g.a)(n,t);var e=Object(E.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){var t=this.props,e=t.match,n=t.posts,a=Number(e.params.id),o=n.find((function(t){return t.id===a})),c=this.props.comments[e.params.id]||[],i=this.props.posts.findIndex((function(t){return t.id===a}));return!0===this.props.loading?r.a.createElement("div",{className:"loader"}," loading..."):o?r.a.createElement("div",{className:"single-photo"},r.a.createElement(P,Object.assign({post:o},this.props,{index:i})),r.a.createElement(S,{startAddingComment:this.props.startAddingComment,comments:c,id:a})):r.a.createElement("h1",null,"No Post Found...")}}]),n}(o.Component),D=function(t){Object(g.a)(n,t);var e=Object(E.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={loading:!0},t}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.props.startLoadingPost().then((function(){t.setState({loading:!1})})),this.props.startLoadingComments()}},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(s.b,{to:"/"},"Photowall")),r.a.createElement(N.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",null,r.a.createElement(w,t.props))}}),r.a.createElement(N.a,{path:"/addPhoto",render:function(e){var n=e.history;return r.a.createElement(k,Object.assign({},t.props,{onHistory:n}))}}),r.a.createElement(N.a,{exact:!0,path:"/single/:id",render:function(e){return r.a.createElement(C,Object.assign({loading:t.state.loading},t.props,e))}}))}}]),n}(o.Component),A=n(53);A.initializeApp({apiKey:"AIzaSyDlOPAWWtrB1vWg17d3uPWjLxRleh9oCDA",authDomain:"thephotowallapp.firebaseapp.com",databaseURL:"https://thephotowallapp.firebaseio.com",projectId:"thephotowallapp",storageBucket:"thephotowallapp.appspot.com",messagingSenderId:"582655079973"});var L=A.database();function x(t){return function(e){return L.ref("posts").update(Object(m.a)({},t.id,t)).then((function(){e(B(t))})).catch((function(t){console.log(t)}))}}function I(){return function(t){return L.ref("posts").once("value").then((function(e){var n=[];e.forEach((function(t){n.push(t.val())})),t(z(n))})).catch((function(t){console.log(t)}))}}function R(t,e){return function(n){return L.ref("posts/".concat(e)).remove().then((function(){n(X(t))})).catch((function(t){console.log(t)}))}}function T(t,e){return function(n){return L.ref("comments/"+e).push(t).then((function(){n(U(t,e))})).catch((function(t){console.log(t)}))}}function M(){return function(t){return L.ref("comments").once("value").then((function(e){var n={};e.forEach((function(t){n[t.key]=Object.values(t.val())})),t(W(n))}))}}function W(t){return{type:"LOAD_COMMENTS",comments:t}}function X(t){return{type:"remove_Post",index:t}}function B(t){return{type:"add_post",post:t}}function U(t,e){return{type:"add_comment",comment:t,postId:e}}function z(t){return{type:"Load_Post",posts:t}}var H=Object(N.e)(Object(h.b)((function(t){return{posts:t.Posts,comments:t.comments}}),(function(t){return Object(u.b)(a,t)}))(D)),J=n(91),V=n.n(J),q=Object(u.d)(f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(u.a)(V.a));i.a.render(r.a.createElement(h.a,{store:q},r.a.createElement(s.a,null,r.a.createElement(H,null))),document.getElementById("root"))},92:function(t,e,n){t.exports=n(171)},97:function(t,e,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.596a1780.chunk.js.map