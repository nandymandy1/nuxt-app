(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{291:function(t,e,n){"use strict";n.r(e);n(5);var l={name:"headingDots",props:{length:{type:Number,required:!0}},computed:{dots:function(){return screen.width<640?3:this.length}}},r=n(32),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex align-self-center"},this._l(this.dots,(function(i){return e("div",{key:i,staticClass:"yellow-dot align-self-center"})})),0)}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,n){"use strict";n.r(e);var l={name:"SkeletonLoader"},r=n(32),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"block pulsate mb-3",style:{width:"90%"}}),this._v(" "),e("div",{staticClass:"block pulsate mb-3",style:{width:"85%"}}),this._v(" "),e("div",{staticClass:"block pulsate mb-3",style:{width:"80%"}}),this._v(" "),e("div",{staticClass:"block pulsate mb-3",style:{width:"80%"}}),this._v(" "),e("div",{staticClass:"block pulsate mb-3",style:{width:"75%"}}),this._v(" "),e("div",{staticClass:"block pulsate mb-3",style:{width:"75%"}})])}),[],!1,null,null,null);e.default=component.exports},296:function(t,e,n){"use strict";n.r(e);var l={props:{feature:{type:Object,required:!0},type:{type:String,required:!0}}},r=n(32),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card team-card bg-light mb-5"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-10"},[n("h2",{staticClass:"text-danger font-weight-bold"},[t._v(t._s(t.feature.title))]),t._v(" "),n("p",{staticClass:"text-muted"},[t._v("\n          "+t._s(t.feature.excerpt)+"\n        ")]),t._v(" "),n("NuxtLink",{staticClass:"button button-1 button-1c bg-danger text-decoration-none text-white",attrs:{to:"/"+t.type+"/"+t.feature.slug}},[t._v("\n          READ MORE\n        ")])],1),t._v(" "),n("div",{staticClass:"col-md-2"},[n("img",{staticClass:"img-fluid feature-img ml-auto",attrs:{alt:"mudransh-"+t.feature.slug,src:t.feature.featured_image.large}})])])])])}),[],!1,null,null,null);e.default=component.exports},328:function(t,e,n){"use strict";n.r(e);n(51);var l=n(18),r=n(296),c=n(292),o={components:{OfferCard:r.default,SkeletonLoader:c.default},name:"MudranshOffers",head:function(){return{title:"Mudransh | Offers"}},data:function(){return{posts:[],loading:!1}},scrollToTop:!0,methods:{getAllPosts:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios("/wl/v1/offers");case 3:n=e.sent,data=n.data,t.posts=data,t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()}},created:function(){this.getAllPosts()}},d=n(32),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mudransh-offers mt-5 py-5 bg-white"},[n("div",{staticClass:"container mt-5"},[n("div",{staticClass:"d-flex justify-content-center align-items-center mb-5"},[n("Dots",{attrs:{length:15}}),t._v(" "),n("h1",{staticClass:"mudransh-heading text-center text-danger mx-4"},[t._v("\n        OUR OFFERS\n      ")]),t._v(" "),n("Dots",{attrs:{length:15}})],1),t._v(" "),n("div",{staticClass:"row px-4 mt-5"},[t.loading?n("div",{staticClass:"col-12"},[n("div",{staticClass:"card loan-card"},[n("div",{staticClass:"card-body"},[n("SkeletonLoader")],1)])]):t._e(),t._v(" "),t._l(t.posts,(function(t){return n("div",{key:t.id,staticClass:"col-12"},[n("OfferCard",{attrs:{feature:t,type:"offers"}})],1)}))],2)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Dots:n(291).default,SkeletonLoader:n(292).default,OfferCard:n(296).default})}}]);