(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{288:function(t,e,n){"use strict";n.r(e);n(5);var r={name:"headingDots",props:{length:{type:Number,required:!0}}},l=n(32),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex align-self-center"},this._l(this.length,(function(i){return e("div",{key:i,staticClass:"yellow-dot align-self-center"})})),0)}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,n){"use strict";n.r(e);var r={props:{feature:{type:Object,required:!0},type:{type:String,required:!0}}},l=n(32),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card team-card bg-light mb-5"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-7"},[n("h2",{staticClass:"text-danger font-weight-bold"},[t._v(t._s(t.feature.title))]),t._v(" "),n("p",{staticClass:"text-muted"},[t._v("\n          "+t._s(t.feature.excerpt)+"\n        ")]),t._v(" "),n("NuxtLink",{staticClass:"btn btn-outline-danger px-5 font-weight-bold",attrs:{to:"/"+t.type+"/"+t.feature.slug}},[t._v("\n          READ MORE\n        ")])],1),t._v(" "),n("div",{staticClass:"col-md-5"},[n("img",{staticClass:"img-fluid feature-img",attrs:{alt:"mudransh-"+t.feature.slug,src:t.feature.featured_image.large}})])])])])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,n){"use strict";n.r(e);var r={name:"MudranshLoader"},l=n(32),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center py-5"},[e("bSpinner",{attrs:{variant:"danger",type:"grow",label:"Spinning"}}),this._v(" "),e("bSpinner",{attrs:{variant:"danger",type:"grow",label:"Spinning"}}),this._v(" "),e("bSpinner",{attrs:{variant:"danger",type:"grow",label:"Spinning"}})],1)}),[],!1,null,null,null);e.default=component.exports},308:function(t,e,n){"use strict";n.r(e);n(51);var r=n(20),l=n(290),c=n(289),d={name:"MudranshFeatures",components:{Loader:l.default,FeatureCard:c.default},data:function(){return{features:[],isLoading:!1}},head:function(){return{title:"Mudransh | Features"}},methods:{getFeatures:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$axios("/wl/v1/features");case 3:n=e.sent,data=n.data,t.features=data,t.isLoading=!1;case 7:case"end":return e.stop()}}),e)})))()}},created:function(){this.getFeatures()}},o=n(32),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mudransh-features py-5 my-5"},[n("div",{staticClass:"container"},[n("div",{staticClass:"d-flex justify-content-center align-items-center mb-5"},[n("Dots",{attrs:{length:15}}),t._v(" "),n("h1",{staticClass:"mudransh-heading text-center text-danger mx-4"},[t._v("\n        OUR FEATURES\n      ")]),t._v(" "),n("Dots",{attrs:{length:15}})],1),t._v(" "),n("p",{staticClass:"text-center text-muted mb-5"},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum facere\n      esse inventore velit excepturi quo ut eos dolor enim repudiandae iste.\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odit\n      facere similique delectus qui mollitia.\n    ")]),t._v(" "),t.isLoading?n("Loader"):n("div",t._l(t.features,(function(t){return n("FeatureCard",{key:t.id,attrs:{feature:t,type:"features"}})})),1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Dots:n(288).default,Loader:n(290).default,FeatureCard:n(289).default})}}]);