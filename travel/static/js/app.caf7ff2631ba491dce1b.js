webpackJsonp([2],{"+K2g":function(t,e){},"2IHE":function(t,e){},"5Yf3":function(t,e){},"6m15":function(t,e){},"9n10":function(t,e){},BOb6:function(t,e){},DjJ7:function(t,e){},K1rf:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},s=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},n,!1,null,null,null);e.default=s.exports},N2xj:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s=i("F3EI"),a=i.n(s),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var o=i("VU/8")({name:"App"},r,!1,function(t){i("2IHE")},null,null).exports,c=i("/ocq"),l=i("mtWM"),u=i.n(l),d={name:"CommonGallary",props:{imgs:{type:Array}},methods:{handleClick:function(){this.$emit("close")}},computed:{showImgs:function(){return this.imgs.length}},data:function(){return{swiperOptions:{autoplay:!1,loop:!0,pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleClick}},[e("div",{staticClass:"wrapper"},[this.showImgs?e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)])},staticRenderFns:[]};var p=i("VU/8")(d,h,!1,function(t){i("V9zw")},"data-v-f2a7a6e6",null).exports,f={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var v=i("VU/8")({name:"FadeAnimation"},f,!1,function(t){i("N2xj")},"data-v-11c3987e",null).exports,m={name:"DetailBanner",props:{sightName:String,bannerImg:String,gallaryImgs:Array},data:function(){return{showGallary:!1}},methods:{handleClick:function(){this.showGallary=!0},close:function(){this.showGallary=!1}},components:{CommonGallary:p,FadeAnimation:v}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),t._v(" "),i("div",{staticClass:"banner-info"},[t._m(0),t._v(" "),i("div",{staticClass:"banner-title"},[t._v(t._s(t.sightName))])])]),t._v(" "),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.gallaryImgs},on:{close:t.close}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-number"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("  2\r\n          ")])}]};var w=i("VU/8")(m,y,!1,function(t){i("5Yf3")},"data-v-3ee76a2e",null).exports,_={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){console.log("aa");var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},created:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{attrs:{to:"/"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs iconfont"},[this._v("\n     \n    ")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("  ")])]),this._v("\n        景点详情\n    ")],1)],1)},staticRenderFns:[]};var g=i("VU/8")(_,C,!1,function(t){i("WwBy")},"data-v-2c15ad74",null).exports,b={name:"DetailList",props:{list:Array}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n            "+t._s(e.title)+"\n        ")]),t._v(" "),e.children?i("div",{staticClass:"item-children"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}),0)},staticRenderFns:[]};var $={name:"Detail",data:function(){return{list:[],sightName:"",bannerImg:"",gallaryImgs:[]}},components:{DetailBanner:w,DetailHeader:g,DetailList:i("VU/8")(b,k,!1,function(t){i("uK+D")},"data-v-b4d33a36",null).exports},methods:{getCityInfo:function(){u.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.list=e.categoryList,this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs}}},mounted:function(){this.getCityInfo()}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("detail-list",{attrs:{list:this.list}}),this._v(" "),e("div",{staticClass:"content"})],1)},staticRenderFns:[]};var S=i("VU/8")($,x,!1,function(t){i("6m15")},"data-v-7d7dcaa8",null).exports,I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("城市选择\n    "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("  ")])])],1)},staticRenderFns:[]};var N=i("VU/8")({name:"CityHeader"},I,!1,function(t){i("BOb6")},"data-v-d89ed81e",null).exports,E=i("GQaK"),T={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},computed:{hasNodata:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.tiemr),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},methods:{handleClick:function(t){this.$store.commit("changeCity",t),this.$router.push("/"),this.keyword=""}},mounted:function(){this.scroll=new E.a(this.$refs.search,{click:!0})}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e,n){return i("li",{key:n,staticClass:"search-item border-bottom",on:{click:function(i){return t.handleClick(e.name)}}},[t._v(t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNodata,expression:"hasNodata"}],staticClass:"search-item border-bottom"},[t._v("没有找到匹配数据")])],2)])])},staticRenderFns:[]};var F=i("VU/8")(T,A,!1,function(t){i("DjJ7")},"data-v-49dde1fa",null).exports,j=i("Dd8w"),D=i.n(j),O=i("NYxO"),V={name:"CityList",props:{cities:Object,hot:Array,letter:String},computed:D()({},Object(O.c)(["city"])),methods:D()({handleClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(O.b)(["changeCity"])),watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},mounted:function(){this.scroll?this.scroll.refresh():this.scroll=new E.a(this.$refs.wrapper,{click:!0})}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.city))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){return t.handleClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,n){return i("div",{key:e.key,ref:n,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(n))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){return t.handleClick(e.name)}}},[t._v(t._s(e.name))])}),0)])})],2)])},staticRenderFns:[]};var L=i("VU/8")(V,U,!1,function(t){i("K1rf")},"data-v-9908c4de",null).exports,R={name:"CityAlphabet",props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerHTML)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,n=Math.floor((i-e.startY)/22);n>=0&&n<e.letters.length&&e.$emit("change",e.letters[n])},10))},handleTouchEnd:function(){this.touchStatus=!1}}},G={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleLetterClick,touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[t._v(t._s(e))])}),0)},staticRenderFns:[]};var M={name:"City",components:{CityHeader:N,CitySearch:F,CityList:L,CityAlphabet:i("VU/8")(R,G,!1,function(t){i("QhQS")},"data-v-18dea36f",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){u.a.get("/api/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hot:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var B=i("VU/8")(M,H,!1,function(t){i("+K2g")},"data-v-5b782d69",null).exports;n.a.use(c.a);var Y=new c.a({routes:[{path:"/",name:"home",component:function(){return i.e(0).then(i.bind(null,"nU8l"))}},{path:"/city",name:"City",component:B},{path:"/detail/:id",name:"Detail",component:S}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),K=i("v5o6"),z=i.n(K),P="杭州";try{localStorage.city&&(P=localStorage.city)}catch(t){}var Q={city:P},W={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};n.a.use(O.a);var J=new O.a.Store({state:Q,mutations:W});i("j1ja"),i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns");n.a.config.productionTip=!1,z.a.attach(document.body),n.a.use(a.a),new n.a({el:"#app",router:Y,store:J,components:{App:o},template:"<App/>"})},QhQS:function(t,e){},TzC8:function(t,e){},V9zw:function(t,e){},WwBy:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="undefined"!=typeof window;n&&(window.Swiper=i("gsqX"));var s={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&n&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&n){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(s):s()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(s,a,!1,null,null,null);e.default=r.exports},"uK+D":function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.caf7ff2631ba491dce1b.js.map