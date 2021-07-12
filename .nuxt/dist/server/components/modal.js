exports.ids = [1];
exports.modules = {

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("73676256", content, true, context)
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_2a3fee04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_2a3fee04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_2a3fee04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_2a3fee04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_2a3fee04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".form-input[data-v-2a3fee04],.form-label[data-v-2a3fee04]{margin-top:10px!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modal.vue?vue&type=template&id=2a3fee04&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.buttonType==='modal')?_vm._ssrNode("<div data-v-2a3fee04>","</div>",[_c('b-button',{attrs:{"id":"show-btn","disabled":_vm.disabled,"variant":_vm.lbTheme,"pill":_vm.modalpill,"squared":_vm.modalsquared},on:{"click":_vm.showModal}},[_vm._v(_vm._s(_vm.label)+"\n      ")]),_vm._ssrNode(" "),_c('b-modal',{ref:"my-modal",attrs:{"scrollable":"","hide-footer":"","title":_vm.modaltitle,"size":_vm.modalsize,"id":'modal-'+_vm.effect}},[_c('b-container',{attrs:{"fluid":""}},[_c('div',{staticClass:"d-block text-left"},[(_vm.mode === 'form')?_c('div',[_c('b-form',{on:{"submit":_vm.formSubmit}},[_c('div',_vm._l((_vm.formFields),function(rs){return _c('b-row',{key:rs},[_c('b-col',{attrs:{"cols":"3"}},[_c('label',{staticClass:"form-label"},[_vm._v(_vm._s(rs))])]),_vm._v(" "),_c('b-col',{attrs:{"cols":"9"}},[_c('b-form-input',{staticClass:"form-input",attrs:{"type":"text","v-model":rs,"placeholder":'Enter ' + rs}})],1)],1)}),1),_vm._v(" "),_c('br'),_vm._v(" "),_c('b-button',{staticClass:"mt-3",attrs:{"variant":_vm.sbTheme,"block":_vm.sbBlock,"type":_vm.sbType}},[_vm._v(_vm._s(_vm.sbTitle))])],1)],1):(_vm.mode==='custom')?_c('div',[_vm._t("default",function(){return [_c('p',{staticStyle:{"color":"orange"}},[_vm._v("Design form fields")])]})],2):_c('div',[_vm._t("default",function(){return [_c('p',{staticStyle:{"color":"orange"}},[_vm._v(_vm._s(_vm.content))])]})],2)])])],1)],2):(_vm.buttonType==='button')?_vm._ssrNode("<div data-v-2a3fee04>","</div>",[_c('b-button',{attrs:{"to":_vm.to,"href":_vm.href,"type":_vm.type,"title":_vm.title,"value":_vm.value,"icon":_vm.icon,"variant":_vm.variant,"size":_vm.size,"block":_vm.block,"active":_vm.active,"pill":_vm.pill,"squared":_vm.squared,"disabled":_vm.disabled,"target":_vm.target}},[_c('b-icon',{attrs:{"icon":_vm.icon}}),_vm._v(" "),_c(_vm.type,{tag:"component",attrs:{"right":_vm.right},domProps:{"innerHTML":_vm._s(_vm.value)}})],1)],1):_vm._ssrNode(("<div data-v-2a3fee04></div>"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/modal.vue?vue&type=template&id=2a3fee04&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var modalvue_type_script_lang_js_ = ({
  name: "DcButton",

  data() {
    return {
      formSelectItem: ''
    };
  },

  props: {
    getData: {
      default: null
    },
    formSubmit: {
      default: null
    },
    buttonType: {
      type: String,
      default: 'button'
    },
    content: {
      default: 'Enter modal body content'
    },
    effect: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: 'modal Label'
    },
    modaltitle: {
      type: String,
      default: 'Modal Title'
    },
    mode: {
      type: String,
      default: null
    },
    formFields: {
      type: [],
      default: null
    },
    formSelect: {
      type: [],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    lbTheme: {
      type: String,
      default: 'info'
    },
    modalpill: {
      type: String,
      default: null
    },
    modalsquared: {
      type: String,
      default: null
    },
    modalsize: {
      type: String,
      default: 'md'
    },
    sbTitle: {
      type: String,
      default: 'Submit'
    },
    sbTheme: {
      type: String,
      default: 'info'
    },
    sbBlock: {
      type: Boolean,
      default: true
    },
    sbType: {
      type: String,
      default: 'submit'
    },
    title: {
      type: String,
      default: 'hello'
    },
    icon: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'button'
    },
    variant: {
      type: String,
      default: 'success'
    },
    size: {
      type: String,
      default: 'md'
    },
    pill: {
      type: Boolean,
      default: false
    },
    squared: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show();
    },

    hideModal() {
      this.$refs['my-modal'].hide();
    },

    toggleModal() {
      this.$refs['my-modal'].toggle('#toggle-btn');
    }

  },
  computed: {
    type() {
      if (this.value) {
        return 'span';
      } else {
        return '';
      }
    }

  }
});
// CONCATENATED MODULE: ./components/modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_modalvue_type_script_lang_js_ = (modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/modal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(29)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_modalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2a3fee04",
  "f505f45e"
  
)

/* harmony default export */ var modal = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=modal.js.map