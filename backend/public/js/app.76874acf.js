(function(t){function e(e){for(var c,l,a=e[0],u=e[1],i=e[2],d=0,s=[];d<a.length;d++)l=a[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&s.push(r[l][0]),r[l]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(t[c]=u[c]);b&&b(e);while(s.length)s.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],c=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(c=!1)}c&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var c={},r={app:0},o=[];function l(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=c,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)l.d(n,c,function(e){return t[e]}.bind(null,c));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var i=0;i<a.length;i++)e(a[i]);var b=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={id:"bar"},o=Object(c["f"])("메인으로 ㄱㄱ"),l=Object(c["d"])("h5",{class:"text-center"},"대충 뭐시기 메인바",-1),a={key:0,class:"userName"},u={key:1,class:"userName"};function i(t,e,n,i,b,d){var s=Object(c["t"])("router-link"),p=Object(c["t"])("router-view");return Object(c["p"])(),Object(c["c"])("div",null,[Object(c["d"])("div",r,[Object(c["g"])(s,{to:"/",id:"main"},{default:Object(c["z"])((function(){return[o]})),_:1}),l,1==b.isLogin?(Object(c["p"])(),Object(c["c"])("div",a,Object(c["v"])(b.userName),1)):(Object(c["p"])(),Object(c["c"])("div",u,"로그인하면 니 이름 뜨는 자리"))]),Object(c["g"])(p)])}var b={name:"App",data:function(){return{isLogin:!1,userName:null}},components:{}},d=(n("8cd1"),n("6b0d")),s=n.n(d);const p=s()(b,[["render",i]]);var O=p,j=n("6c02"),f={id:"page"},m=Object(c["f"])(" VSNovel 테스트 페이지임 "),v=Object(c["d"])("br",null,null,-1),h=Object(c["f"])("회원가입"),g=Object(c["f"])(),w=Object(c["d"])("br",null,null,-1),y=Object(c["f"])("로그인"),x=Object(c["f"])(),k=Object(c["d"])("br",null,null,-1),P=Object(c["f"])("게시판");function _(t,e,n,r,o,l){var a=Object(c["t"])("router-link");return Object(c["p"])(),Object(c["c"])("div",f,[m,v,Object(c["g"])(a,{to:"/signup"},{default:Object(c["z"])((function(){return[h]})),_:1}),g,w,Object(c["g"])(a,{to:"/signin"},{default:Object(c["z"])((function(){return[y]})),_:1}),x,k,Object(c["g"])(a,{to:"/board"},{default:Object(c["z"])((function(){return[P]})),_:1})])}var N={name:"Index",data:function(){return{}}};n("bfe6");const A=s()(N,[["render",_]]);var V=A,z={class:"container mt-3"},S={class:"mb-3"},U={class:"mb-3"},C={class:"mb-3"};function I(t,e,n,r,o,l){return Object(c["p"])(),Object(c["c"])("div",z,[Object(c["d"])("div",S,[Object(c["A"])(Object(c["d"])("input",{type:"text",class:"form-control",placeholder:"name","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.newName=t})},null,512),[[c["x"],o.newName]])]),Object(c["d"])("div",U,[Object(c["A"])(Object(c["d"])("input",{type:"email",class:"form-control",placeholder:"email","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.newEmail=t})},null,512),[[c["x"],o.newEmail]])]),Object(c["d"])("div",C,[Object(c["A"])(Object(c["d"])("input",{type:"password",class:"form-control",placeholder:"pw","onUpdate:modelValue":e[2]||(e[2]=function(t){return o.newPw=t})},null,512),[[c["x"],o.newPw]])]),Object(c["d"])("button",{class:"btn btn-primary",onClick:e[3]||(e[3]=function(t){return l.signup()})},"가입하기")])}n("99af");var M={name:"Signup",data:function(){return{newName:"",newEmail:"",newPw:""}},methods:{signup:function(){alert("".concat(this.newName,", ").concat(this.newEmail,", ").concat(this.newPw))}}};const T=s()(M,[["render",I]]);var E=T,B={class:"container mt-3"},L={class:"mb-3"},J={class:"mb-3"},D=Object(c["f"])(),q=Object(c["d"])("br",null,null,-1),F=Object(c["d"])("br",null,null,-1);function G(t,e,n,r,o,l){return Object(c["p"])(),Object(c["c"])("div",B,[Object(c["d"])("div",L,[Object(c["A"])(Object(c["d"])("input",{type:"email",class:"form-control",placeholder:"email","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.email=t})},null,512),[[c["x"],o.email]])]),Object(c["d"])("div",J,[Object(c["A"])(Object(c["d"])("input",{type:"password",class:"form-control",placeholder:"pw","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.pw=t})},null,512),[[c["x"],o.pw]])]),Object(c["d"])("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=function(t){return l.login()})},"로그인"),D,q,F,Object(c["d"])("button",{class:"btn btn-primary",onClick:e[3]||(e[3]=function(t){return l.logout()})},"로그아웃")])}var H={name:"Login",data:function(){return{email:"",pw:""}},methods:{login:function(){alert("".concat(this.email,", ").concat(this.pw))},logout:function(){alert("로그아웃 버튼 눌림")}}};const K=s()(H,[["render",G]]);var Q=K,R=Object(c["d"])("h1",{class:"text-center"},"대충 뭐시기 게시판",-1),W={id:"mainTable"},X={class:"table table-hover table-striped text-center",style:{}},Y=Object(c["d"])("thead",null,[Object(c["d"])("th",null,"번호"),Object(c["d"])("th",null,"제목"),Object(c["d"])("th",null,"작성자"),Object(c["d"])("th",null,"날짜"),Object(c["d"])("th",null,"조회수")],-1),Z=Object(c["d"])("td",null,"나중에",-1),$=Object(c["d"])("td",null,"DB데이터갖다가",-1),tt=Object(c["d"])("td",null,"v-for",-1),et=Object(c["d"])("td",null,"돌리면된다",-1),nt=Object(c["d"])("td",null,"이거야",-1),ct=[Z,$,tt,et,nt],rt=Object(c["d"])("button",null,"글쓰기",-1);function ot(t,e,n,r,o,l){var a=Object(c["t"])("router-link");return Object(c["p"])(),Object(c["c"])("div",null,[R,Object(c["d"])("div",W,[Object(c["d"])("table",X,[Y,Object(c["d"])("tbody",null,[Object(c["d"])("tr",{onClick:e[0]||(e[0]=function(t){return o.goToInfo()})},ct)])])]),Object(c["g"])(a,{to:"/posting",id:"postingBt"},{default:Object(c["z"])((function(){return[rt]})),_:1})])}var lt={name:"MainBoard",data:function(){return{goToInfo:function(){window.location.href="/post/testId"}}}};n("584b");const at=s()(lt,[["render",ot]]);var ut=at,it={class:"container mt-3"},bt=Object(c["f"])(),dt=Object(c["d"])("br",null,null,-1),st=Object(c["d"])("button",{class:"btn btn-primary mt-3"},"취소",-1);function pt(t,e,n,r,o,l){var a=Object(c["t"])("router-link");return Object(c["p"])(),Object(c["c"])("div",it,[Object(c["A"])(Object(c["d"])("input",{type:"text",class:"form-control mt-2","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.title=t}),placeholder:"제목"},null,512),[[c["x"],o.title]]),Object(c["A"])(Object(c["d"])("textarea",{class:"form-control mt-2","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.content=t})},null,512),[[c["x"],o.content]]),Object(c["d"])("button",{class:"btn btn-danger mt-3",onClick:e[2]||(e[2]=function(t){return l.send()})},"글 올리기"),bt,dt,Object(c["g"])(a,{to:"/board"},{default:Object(c["z"])((function(){return[st]})),_:1})])}var Ot={name:"Posting",data:function(){return{title:"",content:""}},methods:{send:function(){alert("올리기 버튼 눌림")}}};const jt=s()(Ot,[["render",pt]]);var ft=jt,mt=Object(c["e"])('<div class="container my-1"><div class="row"><table class="table"><thead><tr class="table-active"><th scope="col" style="width:60%;">대충 제목<br> 대충 유저이름</th><th scope="col" style="width:40%;" class="text-right">조회 : 대충조회수 <br> 대충 날짜</th></tr></thead><tbody><tr><td><pre>대충내용</pre></td></tr></tbody></table></div></div>',1),vt=Object(c["d"])("button",{class:"btn btn-primary mt-3"},"뒤로가기",-1);function ht(t,e,n,r,o,l){var a=Object(c["t"])("router-link");return Object(c["p"])(),Object(c["c"])("div",null,[mt,Object(c["g"])(a,{to:"/board"},{default:Object(c["z"])((function(){return[vt]})),_:1})])}var gt={name:"PostInfo",data:function(){return{}}};const wt=s()(gt,[["render",ht]]);var yt=wt,xt=[{path:"/",component:V},{path:"/signup",component:E},{path:"/signin",component:Q},{path:"/board",component:ut},{path:"/posting",component:ft},{path:"/post/:id",component:yt}],kt=Object(j["a"])({history:Object(j["b"])(),routes:xt}),Pt=kt;Object(c["b"])(O).use(Pt).mount("#app")},"584b":function(t,e,n){"use strict";n("c074")},"5d09":function(t,e,n){},"88c8":function(t,e,n){},"8cd1":function(t,e,n){"use strict";n("5d09")},bfe6:function(t,e,n){"use strict";n("88c8")},c074:function(t,e,n){}});
//# sourceMappingURL=app.76874acf.js.map