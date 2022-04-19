(function(e,o){typeof exports=="object"&&typeof module!="undefined"?module.exports=o(require("vue")):typeof define=="function"&&define.amd?define(["vue"],o):(e=typeof globalThis!="undefined"?globalThis:e||self,e.LaravelVuePagination=o(e.Vue))})(this,function(e){"use strict";const o={emits:["pagination-change-page"],props:{data:{type:Object,default:()=>{}},limit:{type:Number,default:0},showDisabled:{type:Boolean,default:!1},themeEngine:{type:String,default:"tailwind"},size:{type:String,default:"default",validator:a=>["small","default","large"].indexOf(a)!==-1},align:{type:String,default:"left",validator:a=>["left","center","right"].indexOf(a)!==-1}},computed:{isApiResource(){return!!this.data.meta},currentPage(){return this.isApiResource?this.data.meta.current_page:this.data.current_page},firstPageUrl(){return this.isApiResource?this.data.links.first:null},from(){return this.isApiResource?this.data.meta.from:this.data.from},lastPage(){return this.isApiResource?this.data.meta.last_page:this.data.last_page},lastPageUrl(){return this.isApiResource?this.data.links.last:null},nextPageUrl(){return this.isApiResource?this.data.links.next:this.data.next_page_url},perPage(){return this.isApiResource?this.data.meta.per_page:this.data.per_page},prevPageUrl(){return this.isApiResource?this.data.links.prev:this.data.prev_page_url},to(){return this.isApiResource?this.data.meta.to:this.data.to},total(){return this.isApiResource?this.data.meta.total:this.data.total},pageRange(){if(this.limit===-1)return 0;if(this.limit===0)return this.lastPage;for(var a=this.currentPage,l=this.lastPage,r=this.limit,d=a-r,g=a+r+1,c=[],s=[],t,n=1;n<=l;n++)(n===1||n===l||n>=d&&n<g)&&c.push(n);return c.forEach(function(i){t&&(i-t===2?s.push(t+1):i-t!==1&&s.push("...")),s.push(i),t=i}),s}},methods:{previousPage(){this.selectPage(this.currentPage-1)},nextPage(){this.selectPage(this.currentPage+1)},selectPage(a){a!=="..."&&this.$emit("pagination-change-page",a)}},render(){return this.$slots.default({data:this.data,limit:this.limit,showDisabled:this.showDisabled,size:this.size,align:this.align,computed:{isApiResource:this.isApiResource,currentPage:this.currentPage,firstPageUrl:this.firstPageUrl,from:this.from,lastPage:this.lastPage,lastPageUrl:this.lastPageUrl,nextPageUrl:this.nextPageUrl,perPage:this.perPage,prevPageUrl:this.prevPageUrl,to:this.to,total:this.total,pageRange:this.pageRange},prevButtonEvents:{click:a=>{a.preventDefault(),this.previousPage()}},nextButtonEvents:{click:a=>{a.preventDefault(),this.nextPage()}},pageButtonEvents:a=>({click:l=>{l.preventDefault(),this.selectPage(a)}})})}};var h=(a,l)=>{const r=a.__vccOpts||a;for(const[d,g]of l)r[d]=g;return r};const p={inheritAttrs:!1,emits:["pagination-change-page"],components:{RenderlessLaravelVuePagination:o},props:{data:{type:Object,default:()=>{}},limit:{type:Number,default:0},showDisabled:{type:Boolean,default:!1},themeEngine:{type:String,default:"tailwind"},size:{type:String,default:"default",validator:a=>["small","default","large"].indexOf(a)!==-1},align:{type:String,default:"left",validator:a=>["left","center","right"].indexOf(a)!==-1}},methods:{onPaginationChangePage(a){this.$emit("pagination-change-page",a)}}},m={key:0},u=["tabindex"],f=[e.createElementVNode("span",{class:"sr-only"},"Previous",-1),e.createElementVNode("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1)],k=["tabindex"],y=[e.createElementVNode("span",{class:"sr-only"},"Next",-1),e.createElementVNode("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1)],_={key:1},x=["tabindex"],b=e.createElementVNode("span",{"aria-hidden":"true"},"\xAB",-1),E=e.createElementVNode("span",{class:"sr-only"},"Previous",-1),B={key:0,class:"sr-only"},P=["tabindex"],w=e.createElementVNode("span",{"aria-hidden":"true"},"\xBB",-1),N=e.createElementVNode("span",{class:"sr-only"},"Next",-1);function V(a,l,r,d,g,c){const s=e.resolveComponent("RenderlessLaravelVuePagination");return e.openBlock(),e.createBlock(s,{data:r.data,limit:r.limit,"show-disabled":r.showDisabled,size:r.size,align:r.align,onPaginationChangePage:c.onPaginationChangePage},{default:e.withCtx(t=>[t.themeEngine==="tailwind"?(e.openBlock(),e.createElementBlock("div",m,[t.computed.total>t.computed.perPage?(e.openBlock(),e.createElementBlock("ul",e.mergeProps({key:0},a.$attrs,{class:["pagination inline-flex -space-x-px",{"pagination-sm":t.size=="small","pagination-lg":t.size=="large","justify-content-center":t.align=="center","justify-content-end":t.align=="right"}]}),[t.computed.prevPageUrl||t.showDisabled?(e.openBlock(),e.createElementBlock("li",{key:0,class:e.normalizeClass(["page-item pagination-prev-nav",{disabled:!t.computed.prevPageUrl}])},[e.createElementVNode("a",e.mergeProps({"aria-label":"Previous",tabindex:!t.computed.prevPageUrl&&-1},e.toHandlers(t.prevButtonEvents),{href:"#",class:"page-linkblock py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}),f,16,u)],2)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.computed.pageRange,(n,i)=>(e.openBlock(),e.createElementBlock("li",{class:e.normalizeClass(["page-item pagination-page-nav",{active:n==t.computed.currentPage}]),key:i},[e.createElementVNode("a",e.mergeProps({class:"page-link py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",href:"#"},e.toHandlers(t.pageButtonEvents(n))),e.toDisplayString(n),17)],2))),128)),t.computed.nextPageUrl||t.showDisabled?(e.openBlock(),e.createElementBlock("li",{key:1,class:e.normalizeClass(["page-item pagination-next-nav",{disabled:!t.computed.nextPageUrl}])},[e.createElementVNode("a",e.mergeProps({href:"#","aria-label":"Next",tabindex:!t.computed.nextPageUrl&&-1},e.toHandlers(t.nextButtonEvents),{class:"page-link block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}),y,16,k)],2)):e.createCommentVNode("",!0)],16)):e.createCommentVNode("",!0)])):(e.openBlock(),e.createElementBlock("div",_,[t.computed.total>t.computed.perPage?(e.openBlock(),e.createElementBlock("ul",e.mergeProps({key:0},a.$attrs,{class:["pagination",{"pagination-sm":t.size=="small","pagination-lg":t.size=="large","justify-content-center":t.align=="center","justify-content-end":t.align=="right"}]}),[t.computed.prevPageUrl||t.showDisabled?(e.openBlock(),e.createElementBlock("li",{key:0,class:e.normalizeClass(["page-item pagination-prev-nav",{disabled:!t.computed.prevPageUrl}])},[e.createElementVNode("a",e.mergeProps({class:"page-link",href:"#","aria-label":"Previous",tabindex:!t.computed.prevPageUrl&&-1},e.toHandlers(t.prevButtonEvents)),[e.renderSlot(a.$slots,"prev-nav",{},()=>[b,E])],16,x)],2)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.computed.pageRange,(n,i)=>(e.openBlock(),e.createElementBlock("li",{class:e.normalizeClass(["page-item pagination-page-nav",{active:n==t.computed.currentPage}]),key:i},[e.createElementVNode("a",e.mergeProps({class:"page-link",href:"#"},e.toHandlers(t.pageButtonEvents(n))),[e.createTextVNode(e.toDisplayString(n)+" ",1),n==t.computed.currentPage?(e.openBlock(),e.createElementBlock("span",B,"(current)")):e.createCommentVNode("",!0)],16)],2))),128)),t.computed.nextPageUrl||t.showDisabled?(e.openBlock(),e.createElementBlock("li",{key:1,class:e.normalizeClass(["page-item pagination-next-nav",{disabled:!t.computed.nextPageUrl}])},[e.createElementVNode("a",e.mergeProps({class:"page-link",href:"#","aria-label":"Next",tabindex:!t.computed.nextPageUrl&&-1},e.toHandlers(t.nextButtonEvents)),[e.renderSlot(a.$slots,"next-nav",{},()=>[w,N])],16,P)],2)):e.createCommentVNode("",!0)],16)):e.createCommentVNode("",!0)]))]),_:3},8,["data","limit","show-disabled","size","align","onPaginationChangePage"])}var U=h(p,[["render",V]]);return U});
