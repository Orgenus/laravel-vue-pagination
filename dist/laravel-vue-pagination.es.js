import { resolveComponent, openBlock, createBlock, withCtx, createElementBlock, mergeProps, normalizeClass, createElementVNode, toHandlers, createCommentVNode, Fragment, renderList, toDisplayString, renderSlot, createTextVNode } from "vue";
const _sfc_main$1 = {
  emits: ["pagination-change-page"],
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    limit: {
      type: Number,
      default: 0
    },
    showDisabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator: (value) => {
        return ["small", "default", "large"].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      default: "left",
      validator: (value) => {
        return ["left", "center", "right"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    isApiResource() {
      return !!this.data.meta;
    },
    currentPage() {
      return this.isApiResource ? this.data.meta.current_page : this.data.current_page;
    },
    firstPageUrl() {
      return this.isApiResource ? this.data.links.first : null;
    },
    from() {
      return this.isApiResource ? this.data.meta.from : this.data.from;
    },
    lastPage() {
      return this.isApiResource ? this.data.meta.last_page : this.data.last_page;
    },
    lastPageUrl() {
      return this.isApiResource ? this.data.links.last : null;
    },
    nextPageUrl() {
      return this.isApiResource ? this.data.links.next : this.data.next_page_url;
    },
    perPage() {
      return this.isApiResource ? this.data.meta.per_page : this.data.per_page;
    },
    prevPageUrl() {
      return this.isApiResource ? this.data.links.prev : this.data.prev_page_url;
    },
    to() {
      return this.isApiResource ? this.data.meta.to : this.data.to;
    },
    total() {
      return this.isApiResource ? this.data.meta.total : this.data.total;
    },
    pageRange() {
      if (this.limit === -1) {
        return 0;
      }
      if (this.limit === 0) {
        return this.lastPage;
      }
      var current = this.currentPage;
      var last = this.lastPage;
      var delta = this.limit;
      var left = current - delta;
      var right = current + delta + 1;
      var range = [];
      var pages = [];
      var l;
      for (var i = 1; i <= last; i++) {
        if (i === 1 || i === last || i >= left && i < right) {
          range.push(i);
        }
      }
      range.forEach(function(i2) {
        if (l) {
          if (i2 - l === 2) {
            pages.push(l + 1);
          } else if (i2 - l !== 1) {
            pages.push("...");
          }
        }
        pages.push(i2);
        l = i2;
      });
      return pages;
    }
  },
  methods: {
    previousPage() {
      this.selectPage(this.currentPage - 1);
    },
    nextPage() {
      this.selectPage(this.currentPage + 1);
    },
    selectPage(page) {
      if (page === "...") {
        return;
      }
      this.$emit("pagination-change-page", page);
    }
  },
  render() {
    return this.$slots.default({
      data: this.data,
      limit: this.limit,
      showDisabled: this.showDisabled,
      size: this.size,
      align: this.align,
      computed: {
        isApiResource: this.isApiResource,
        currentPage: this.currentPage,
        firstPageUrl: this.firstPageUrl,
        from: this.from,
        lastPage: this.lastPage,
        lastPageUrl: this.lastPageUrl,
        nextPageUrl: this.nextPageUrl,
        perPage: this.perPage,
        prevPageUrl: this.prevPageUrl,
        to: this.to,
        total: this.total,
        pageRange: this.pageRange
      },
      prevButtonEvents: {
        click: (e) => {
          e.preventDefault();
          this.previousPage();
        }
      },
      nextButtonEvents: {
        click: (e) => {
          e.preventDefault();
          this.nextPage();
        }
      },
      pageButtonEvents: (page) => ({
        click: (e) => {
          e.preventDefault();
          this.selectPage(page);
        }
      })
    });
  }
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  inheritAttrs: false,
  emits: ["pagination-change-page"],
  components: {
    RenderlessLaravelVuePagination: _sfc_main$1
  },
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    limit: {
      type: Number,
      default: 0
    },
    showDisabled: {
      type: Boolean,
      default: false
    },
    themeEngine: {
      type: String,
      default: "tailwind"
    },
    size: {
      type: String,
      default: "default",
      validator: (value) => {
        return ["small", "default", "large"].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      default: "left",
      validator: (value) => {
        return ["left", "center", "right"].indexOf(value) !== -1;
      }
    }
  },
  methods: {
    onPaginationChangePage(page) {
      this.$emit("pagination-change-page", page);
    }
  }
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = ["tabindex"];
const _hoisted_3 = /* @__PURE__ */ createElementVNode("span", { class: "sr-only" }, "Previous", -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("svg", {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    "fill-rule": "evenodd",
    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    "clip-rule": "evenodd"
  })
], -1);
const _hoisted_5 = [
  _hoisted_3,
  _hoisted_4
];
const _hoisted_6 = ["tabindex"];
const _hoisted_7 = /* @__PURE__ */ createElementVNode("span", { class: "sr-only" }, "Next", -1);
const _hoisted_8 = /* @__PURE__ */ createElementVNode("svg", {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    "fill-rule": "evenodd",
    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
    "clip-rule": "evenodd"
  })
], -1);
const _hoisted_9 = [
  _hoisted_7,
  _hoisted_8
];
const _hoisted_10 = { key: 1 };
const _hoisted_11 = ["tabindex"];
const _hoisted_12 = /* @__PURE__ */ createElementVNode("span", { "aria-hidden": "true" }, "\xAB", -1);
const _hoisted_13 = /* @__PURE__ */ createElementVNode("span", { class: "sr-only" }, "Previous", -1);
const _hoisted_14 = {
  key: 0,
  class: "sr-only"
};
const _hoisted_15 = ["tabindex"];
const _hoisted_16 = /* @__PURE__ */ createElementVNode("span", { "aria-hidden": "true" }, "\xBB", -1);
const _hoisted_17 = /* @__PURE__ */ createElementVNode("span", { class: "sr-only" }, "Next", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RenderlessLaravelVuePagination = resolveComponent("RenderlessLaravelVuePagination");
  return openBlock(), createBlock(_component_RenderlessLaravelVuePagination, {
    data: $props.data,
    limit: $props.limit,
    "show-disabled": $props.showDisabled,
    size: $props.size,
    align: $props.align,
    onPaginationChangePage: $options.onPaginationChangePage
  }, {
    default: withCtx((slotProps) => [
      slotProps.themeEngine == "tailwind" ? (openBlock(), createElementBlock("div", _hoisted_1, [
        slotProps.computed.total > slotProps.computed.perPage ? (openBlock(), createElementBlock("ul", mergeProps({ key: 0 }, _ctx.$attrs, {
          class: ["pagination inline-flex -space-x-px", {
            "pagination-sm": slotProps.size == "small",
            "pagination-lg": slotProps.size == "large",
            "justify-content-center": slotProps.align == "center",
            "justify-content-end": slotProps.align == "right"
          }]
        }), [
          slotProps.computed.prevPageUrl || slotProps.showDisabled ? (openBlock(), createElementBlock("li", {
            key: 0,
            class: normalizeClass(["page-item pagination-prev-nav", { "disabled": !slotProps.computed.prevPageUrl }])
          }, [
            createElementVNode("a", mergeProps({
              "aria-label": "Previous",
              tabindex: !slotProps.computed.prevPageUrl && -1
            }, toHandlers(slotProps.prevButtonEvents), {
              href: "#",
              class: "page-linkblock py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            }), _hoisted_5, 16, _hoisted_2)
          ], 2)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(slotProps.computed.pageRange, (page, key) => {
            return openBlock(), createElementBlock("li", {
              class: normalizeClass(["page-item pagination-page-nav", { "active": page == slotProps.computed.currentPage }]),
              key
            }, [
              createElementVNode("a", mergeProps({
                class: "page-link py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                href: "#"
              }, toHandlers(slotProps.pageButtonEvents(page))), toDisplayString(page), 17)
            ], 2);
          }), 128)),
          slotProps.computed.nextPageUrl || slotProps.showDisabled ? (openBlock(), createElementBlock("li", {
            key: 1,
            class: normalizeClass(["page-item pagination-next-nav", { "disabled": !slotProps.computed.nextPageUrl }])
          }, [
            createElementVNode("a", mergeProps({
              href: "#",
              "aria-label": "Next",
              tabindex: !slotProps.computed.nextPageUrl && -1
            }, toHandlers(slotProps.nextButtonEvents), { class: "page-link block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" }), _hoisted_9, 16, _hoisted_6)
          ], 2)) : createCommentVNode("", true)
        ], 16)) : createCommentVNode("", true)
      ])) : (openBlock(), createElementBlock("div", _hoisted_10, [
        slotProps.computed.total > slotProps.computed.perPage ? (openBlock(), createElementBlock("ul", mergeProps({ key: 0 }, _ctx.$attrs, {
          class: ["pagination", {
            "pagination-sm": slotProps.size == "small",
            "pagination-lg": slotProps.size == "large",
            "justify-content-center": slotProps.align == "center",
            "justify-content-end": slotProps.align == "right"
          }]
        }), [
          slotProps.computed.prevPageUrl || slotProps.showDisabled ? (openBlock(), createElementBlock("li", {
            key: 0,
            class: normalizeClass(["page-item pagination-prev-nav", { "disabled": !slotProps.computed.prevPageUrl }])
          }, [
            createElementVNode("a", mergeProps({
              class: "page-link",
              href: "#",
              "aria-label": "Previous",
              tabindex: !slotProps.computed.prevPageUrl && -1
            }, toHandlers(slotProps.prevButtonEvents)), [
              renderSlot(_ctx.$slots, "prev-nav", {}, () => [
                _hoisted_12,
                _hoisted_13
              ])
            ], 16, _hoisted_11)
          ], 2)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(slotProps.computed.pageRange, (page, key) => {
            return openBlock(), createElementBlock("li", {
              class: normalizeClass(["page-item pagination-page-nav", { "active": page == slotProps.computed.currentPage }]),
              key
            }, [
              createElementVNode("a", mergeProps({
                class: "page-link",
                href: "#"
              }, toHandlers(slotProps.pageButtonEvents(page))), [
                createTextVNode(toDisplayString(page) + " ", 1),
                page == slotProps.computed.currentPage ? (openBlock(), createElementBlock("span", _hoisted_14, "(current)")) : createCommentVNode("", true)
              ], 16)
            ], 2);
          }), 128)),
          slotProps.computed.nextPageUrl || slotProps.showDisabled ? (openBlock(), createElementBlock("li", {
            key: 1,
            class: normalizeClass(["page-item pagination-next-nav", { "disabled": !slotProps.computed.nextPageUrl }])
          }, [
            createElementVNode("a", mergeProps({
              class: "page-link",
              href: "#",
              "aria-label": "Next",
              tabindex: !slotProps.computed.nextPageUrl && -1
            }, toHandlers(slotProps.nextButtonEvents)), [
              renderSlot(_ctx.$slots, "next-nav", {}, () => [
                _hoisted_16,
                _hoisted_17
              ])
            ], 16, _hoisted_15)
          ], 2)) : createCommentVNode("", true)
        ], 16)) : createCommentVNode("", true)
      ]))
    ]),
    _: 3
  }, 8, ["data", "limit", "show-disabled", "size", "align", "onPaginationChangePage"]);
}
var LaravelVuePagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { LaravelVuePagination as default };
