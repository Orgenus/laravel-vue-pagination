(function(e,o){typeof exports=="object"&&typeof module!="undefined"?module.exports=o(require("vue")):typeof define=="function"&&define.amd?define(["vue"],o):(e=typeof globalThis!="undefined"?globalThis:e||self,e.LaravelVuePagination=o(e.Vue))})(this,function(e){"use strict";const o={emits:["pagination-change-page"],props:{data:{type:Object,default:()=>{}},limit:{type:Number,default:0},showDisabled:{type:Boolean,default:!1},themeEngine:{type:String,default:"tailwind"},size:{type:String,default:"default",validator:a=>["small","default","large"].indexOf(a)!==-1},align:{type:String,default:"left",validator:a=>["left","center","right"].indexOf(a)!==-1}},computed:{isApiResource(){return!!this.data.meta},currentPage(){return this.isApiResource?this.data.meta.current_page:this.data.current_page},firstPageUrl(){return this.isApiResource?this.data.links.first:null},from(){return this.isApiResource?this.data.meta.from:this.data.from},lastPage(){return this.isApiResource?this.data.meta.last_page:this.data.last_page},lastPageUrl(){return this.isApiResource?this.data.links.last:null},nextPageUrl(){return this.isApiResource?this.data.links.next:this.data.next_page_url},perPage(){return this.isApiResource?this.data.meta.per_page:this.data.per_page},prevPageUrl(){return this.isApiResource?this.data.links.prev:this.data.prev_page_url},to(){return this.isApiResource?this.data.meta.to:this.data.to},total(){return this.isApiResource?this.data.meta.total:this.data.total},pageRange(){if(this.limit===-1)return 0;if(this.limit===0)return this.lastPage;for(var a=this.currentPage,l=this.lastPage,i=this.limit,d=a-i,c=a+i+1,g=[],s=[],t,n=1;n<=l;n++)(n===1||n===l||n>=d&&n<c)&&g.push(n);return g.forEach(function(r){t&&(r-t===2?s.push(t+1):r-t!==1&&s.push("...")),s.push(r),t=r}),s}},methods:{previousPage(){this.selectPage(this.currentPage-1)},nextPage(){this.selectPage(this.currentPage+1)},selectPage(a){a!=="..."&&this.$emit("pagination-change-page",a)}},render(){return this.$slots.default({data:this.data,limit:this.limit,showDisabled:this.showDisabled,size:this.size,align:this.align,themeEngine:this.themeEngine,computed:{isApiResource:this.isApiResource,currentPage:this.currentPage,firstPageUrl:this.firstPageUrl,from:this.from,lastPage:this.lastPage,lastPageUrl:this.lastPageUrl,nextPageUrl:this.nextPageUrl,perPage:this.perPage,prevPageUrl:this.prevPageUrl,to:this.to,total:this.total,pageRange:this.pageRange},prevButtonEvents:{click:a=>{a.preventDefault(),this.previousPage()}},nextButtonEvents:{click:a=>{a.preventDefault(),this.nextPage()}},pageButtonEvents:a=>({click:l=>{l.preventDefault(),this.selectPage(a)}})})}};var m=(a,l)=>{const i=a.__vccOpts||a;for(const[d,c]of l)i[d]=c;return i};const h={inheritAttrs:!1,emits:["pagination-change-page"],components:{RenderlessLaravelVuePagination:o},props:{data:{type:Object,default:()=>{}},limit:{type:Number,default:0},showDisabled:{type:Boolean,default:!1},themeEngine:{type:String,default:"tailwind"},size:{type:String,default:"default",validator:a=>["small","default","large"].indexOf(a)!==-1},align:{type:String,default:"left",validator:a=>["left","center","right"].indexOf(a)!==-1}},methods:{onPaginationChangePage(a){this.$emit("pagination-change-page",a)}}},p=["tabindex"],u=[e.createElementVNode("svg",{style:{width:"1.25rem",height:"1.25rem"},class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e.createElementVNode("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1)],f=["tabindex"],x=[e.createElementVNode("svg",{style:{width:"1.25rem",height:"1.25rem"},class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e.createElementVNode("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1)],_={key:1},k=["tabindex"],y=e.createElementVNode("span",{"aria-hidden":"true"},"\xAB",-1),b=e.createElementVNode("span",{class:"sr-only"},"Previous",-1),E={key:0,class:"sr-only"},B=["tabindex"],P=e.createElementVNode("span",{"aria-hidden":"true"},"\xBB",-1),w=e.createElementVNode("span",{class:"sr-only"},"Next",-1);function V(a,l,i,d,c,g){const s=e.resolveComponent("RenderlessLaravelVuePagination");return e.openBlock(),e.createBlock(s,{data:i.data,limit:i.limit,"show-disabled":i.showDisabled,size:i.size,align:i.align,onPaginationChangePage:g.onPaginationChangePage},{default:e.withCtx(t=>[t.themeEngine==="tailwind"?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["flex",{"pagination-sm":t.size=="small","pagination-lg":t.size=="large","justify-center":t.align=="center","justify-end":t.align=="right"}])},[t.computed.total>t.computed.perPage?(e.openBlock(),e.createElementBlock("ul",e.mergeProps({key:0},a.$attrs,{class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"}),[t.computed.prevPageUrl||t.showDisabled?(e.openBlock(),e.createElementBlock("li",{key:0,class:e.normalizeClass({disabled:!t.computed.prevPageUrl})},[e.createElementVNode("a",e.mergeProps({href:"#",tabindex:!t.computed.prevPageUrl&&-1},e.toHandlers(t.prevButtonEvents),{class:"bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"}),u,16,p)],2)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.computed.pageRange,(n,r)=>(e.openBlock(),e.createElementBlock("li",{class:e.normalizeClass(["page-item pagination-page-nav",{active:n==t.computed.currentPage}]),key:r},[e.createElementVNode("a",e.mergeProps({class:{"z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium":n==t.computed.currentPage,"bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium":n!=t.computed.currentPage},href:"#"},e.toHandlers(t.pageButtonEvents(n))),e.toDisplayString(n),17)],2))),128)),t.computed.nextPageUrl||t.showDisabled?(e.openBlock(),e.createElementBlock("li",{key:1,class:e.normalizeClass(["page-item pagination-next-nav",{disabled:!t.computed.nextPageUrl}])},[e.createElementVNode("a",e.mergeProps({href:"#",tabindex:!t.computed.nextPageUrl&&-1},e.toHandlers(t.nextButtonEvents),{class:"bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"}),x,16,f)],2)):e.createCommentVNode("",!0)],16)):e.createCommentVNode("",!0)],2)):(e.openBlock(),e.createElementBlock("div",_,[t.computed.total>t.computed.perPage?(e.openBlock(),e.createElementBlock("ul",e.mergeProps({key:0},a.$attrs,{class:["pagination",{"pagination-sm":t.size=="small","pagination-lg":t.size=="large","justify-content-center":t.align=="center","justify-content-end":t.align=="right"}]}),[t.computed.prevPageUrl||t.showDisabled?(e.openBlock(),e.createElementBlock("li",{key:0,class:e.normalizeClass(["page-item pagination-prev-nav",{disabled:!t.computed.prevPageUrl}])},[e.createElementVNode("a",e.mergeProps({class:"page-link",href:"#","aria-label":"Previous",tabindex:!t.computed.prevPageUrl&&-1},e.toHandlers(t.prevButtonEvents)),[e.renderSlot(a.$slots,"prev-nav",{},()=>[y,b])],16,k)],2)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.computed.pageRange,(n,r)=>(e.openBlock(),e.createElementBlock("li",{class:e.normalizeClass(["page-item pagination-page-nav",{active:n==t.computed.currentPage}]),key:r},[e.createElementVNode("a",e.mergeProps({class:"page-link",href:"#"},e.toHandlers(t.pageButtonEvents(n))),[e.createTextVNode(e.toDisplayString(n)+" ",1),n==t.computed.currentPage?(e.openBlock(),e.createElementBlock("span",E,"(current)")):e.createCommentVNode("",!0)],16)],2))),128)),t.computed.nextPageUrl||t.showDisabled?(e.openBlock(),e.createElementBlock("li",{key:1,class:e.normalizeClass(["page-item pagination-next-nav",{disabled:!t.computed.nextPageUrl}])},[e.createElementVNode("a",e.mergeProps({class:"page-link",href:"#","aria-label":"Next",tabindex:!t.computed.nextPageUrl&&-1},e.toHandlers(t.nextButtonEvents)),[e.renderSlot(a.$slots,"next-nav",{},()=>[P,w])],16,B)],2)):e.createCommentVNode("",!0)],16)):e.createCommentVNode("",!0)]))]),_:3},8,["data","limit","show-disabled","size","align","onPaginationChangePage"])}var N=m(h,[["render",V]]);return N});
