(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{295:function(t,e,n){"use strict";n.r(e);n(5);var r={name:"headingDots",props:{length:{type:Number,required:!0}},computed:{dots:function(){return screen.width<640?3:this.length}}},l=n(32),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex align-self-center"},this._l(this.dots,(function(i){return e("div",{key:i,staticClass:"yellow-dot align-self-center"})})),0)}),[],!1,null,null,null);e.default=component.exports},297:function(t,e,n){"use strict";n.r(e);var r={props:{feature:{type:Object,required:!0},type:{type:String,required:!0}},data:function(){return{showModal:!1}},methods:{addToCart:function(){this.$store.commit("cart/ADD_PRODUCT",this.feature)}}},l=n(32),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card team-card bg-light mb-5"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-7"},[n("h2",{staticClass:"text-danger font-weight-bold"},[t._v(t._s(t.feature.title))]),t._v(" "),n("p",{staticClass:"text-muted"},[t._v("\n          "+t._s(t.feature.excerpt)+"\n        ")]),t._v(" "),n("h5",[t._v("₹ "+t._s(t.feature.price)+"/-")]),t._v(" "),n("div",{staticClass:"d-flex justify-content-start align-items-center"},[n("NuxtLink",{staticClass:"button button-1 button-1c bg-danger text-decoration-none text-white",attrs:{to:"/"+t.type+"/"+t.feature.slug}},[t._v("\n            READ MORE\n          ")]),t._v(" "),n("button",{staticClass:"button button-1 button-1c bg-yellow ml-1",on:{click:t.addToCart}},[t._v("\n            ADD TO CART\n          ")])],1)]),t._v(" "),n("div",{staticClass:"col-md-5"},[n("img",{staticClass:"img-fluid feature-img",attrs:{alt:"mudransh-"+t.feature.slug,src:t.feature.featured_image.large}})])])])])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,n){"use strict";n.r(e);n(52);var r=n(19),l={components:{FeatureCard:n(297).default},name:"MudranshBlogs",head:function(){return{title:"Mudransh | Blogs"}},loading:!0,data:function(){return{posts:[]}},scrollToTop:!0,methods:{getAllPosts:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios("/wl/v1/posts");case 2:n=e.sent,data=n.data,t.posts=data;case 5:case"end":return e.stop()}}),e)})))()}},created:function(){this.getAllPosts()}},o=n(32),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mudransh-services py-5 my-5"},[e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"d-flex justify-content-center align-items-center mb-5"},[e("Dots",{attrs:{length:15}}),this._v(" "),e("h1",{staticClass:"mudransh-heading text-center text-danger mx-4"},[this._v("OUR BLOGS")]),this._v(" "),e("Dots",{attrs:{length:15}})],1),this._v(" "),e("div",{staticClass:"row px-4 mt-5"},this._l(this.posts,(function(t){return e("div",{key:t.id,staticClass:"col-12"},[e("FeatureCard",{attrs:{feature:t,type:"blogs"}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Dots:n(295).default,FeatureCard:n(297).default})}}]);