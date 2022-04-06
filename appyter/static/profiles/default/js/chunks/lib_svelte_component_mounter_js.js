"use strict";
(self["webpackChunkappyter_js"] = self["webpackChunkappyter_js"] || []).push([["lib_svelte_component_mounter_js"],{

/***/ "./components/app/Error.svelte":
/*!*************************************!*\
  !*** ./components/app/Error.svelte ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _home_u8sand_Programs_work_active_appyter_js_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var _home_u8sand_Programs_work_active_appyter_js_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* components/app/Error.svelte generated by Svelte v3.46.4 */

const {
  Error: Error_1
} = svelte_internal__WEBPACK_IMPORTED_MODULE_0__.globals;
const file = "components/app/Error.svelte";

function create_fragment(ctx) {
  let div;
  let t_value =
  /*error*/
  ctx[0].toString() + "";
  let t;
  const block = {
    c: function create() {
      div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr_dev)(div, "class", "alert alert-danger");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_location)(div, file, 4, 0, 69);
    },
    l: function claim(nodes) {
      throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert_dev)(target, div, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_dev)(div, t);
    },
    p: function update(ctx, [dirty]) {
      if (dirty &
      /*error*/
      1 && t_value !== (t_value =
      /*error*/
      ctx[0].toString() + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data_dev)(t, t_value);
    },
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function destroy(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach_dev)(div);
    }
  };
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let {
    $$slots: slots = {},
    $$scope
  } = $$props;
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.validate_slots)('Error', slots, []);
  let {
    error = 'An unknown error occurred'
  } = $$props;
  const writable_props = ['error'];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Error> was created with unknown prop '${key}'`);
  });

  $$self.$$set = $$props => {
    if ('error' in $$props) $$invalidate(0, error = $$props.error);
  };

  $$self.$capture_state = () => ({
    error
  });

  $$self.$inject_state = $$props => {
    if ('error' in $$props) $$invalidate(0, error = $$props.error);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [error];
}

class Error extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      error: 0
    });
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Error",
      options,
      id: create_fragment.name
    });
  }

  get error() {
    throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set error(value) {
    throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}




if (module && module.hot) {}

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./lib/svelte_component_mounter.js":
/*!*****************************************!*\
  !*** ./lib/svelte_component_mounter.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ svelte_component_mounter; }
/* harmony export */ });
/* harmony import */ var _utils_get_require__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/get_require */ "./utils/get_require.js");
/* harmony import */ var _components_app_Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/app/Error */ "./components/app/Error.svelte");


async function svelte_component_mounter(window) {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.classList && node.classList.contains('svelte')) svelte_component_mount_from_dom(window, node);
      });
    });
  });
  observer.observe(document, {
    subtree: true,
    childList: true
  });
  document.querySelectorAll('.svelte').forEach(node => svelte_component_mount_from_dom(window, node));
}

function svelte_component_mount_from_dom(window, target) {
  target.childNodes.forEach(childNode => {
    if (childNode.nodeName === 'SCRIPT' && childNode.getAttribute('type') === 'application/json') {
      svelte_component_mount(window, target, childNode).catch(e => {
        console.error(e);
        const errorComponent = new _components_app_Error__WEBPACK_IMPORTED_MODULE_1__["default"]({
          target,
          props: {
            error: e.toString()
          }
        });
      }).finally(() => {
        target.classList.remove('loading');
      });
      return;
    }
  });
}

async function svelte_component_mount(window, target, propsNode) {
  const {
    js_url,
    ...props
  } = JSON.parse(propsNode.textContent);
  const {
    default: Component
  } = await (0,_utils_get_require__WEBPACK_IMPORTED_MODULE_0__["default"])(window, js_url);
  const currentChildren = [...target.children];
  const component = new Component({
    target,
    props
  });

  for (const child of currentChildren) child.remove();
}

/***/ }),

/***/ "./utils/get_require.js":
/*!******************************!*\
  !*** ./utils/get_require.js ***!
  \******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ get_require; }
/* harmony export */ });
function get_require(window, required) {
  if (Array.isArray(required)) {
    return new Promise((resolve, reject) => window.require(required, (...args) => resolve(args), reject));
  } else {
    return new Promise((resolve, reject) => window.require([required], resolve, reject));
  }
}

/***/ })

}]);
//# sourceMappingURL=lib_svelte_component_mounter_js.js.map