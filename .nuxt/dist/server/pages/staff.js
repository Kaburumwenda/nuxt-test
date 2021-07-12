exports.ids = [6,1];
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

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0901e718", content, true, context)
};

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_staff_vue_vue_type_style_index_0_id_3d911621_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_staff_vue_vue_type_style_index_0_id_3d911621_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_staff_vue_vue_type_style_index_0_id_3d911621_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_staff_vue_vue_type_style_index_0_id_3d911621_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_staff_vue_vue_type_style_index_0_id_3d911621_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".staff-con[data-v-3d911621]{margin:20px 40px}.hidden[data-v-3d911621]{display:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/staff.vue?vue&type=template&id=3d911621&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"staff-con"},[_vm._ssrNode("<div data-v-3d911621>"+((_vm.message)?("<p data-v-3d911621><script data-v-3d911621>"+_vm._ssrEscape("\n                Swal.fire({\n                    position: '',\n                    icon: 'success',\n                    title: 'Success',\n                    text: '"+_vm._s(_vm.message)+"',\n                    showConfirmButton: false,\n                    timer: 1500\n                    })\n            ")+"</script></p>"):("<p data-v-3d911621></p>"))+"</div> "),_vm._ssrNode("<div style=\"background:grey\" data-v-3d911621>","</div>",[_c('b-button',{attrs:{"variant":"primary","squared":"squared"},on:{"click":_vm.showModal}},[_c('b-icon',{attrs:{"icon":"plus-circle"}}),_vm._v(" \n                Add New Record")],1),_vm._ssrNode(" "),_c('b-modal',{ref:"my-modal-g",attrs:{"title":"Add Staff","hide-footer":"","size":"xl"}},[_c('div',[(_vm.error.length)?_c('div',[_c('strong',{staticStyle:{"color":"orange"}},[_vm._v("Please correct bellow errors:")]),_vm._v(" "),_c('ul',_vm._l((_vm.error),function(e){return _c('li',{key:e.id},[_vm._v(_vm._s(e))])}),0),_vm._v(" "),_c('hr')]):_vm._e()]),_vm._v(" "),_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.userpostData.apply(null, arguments)}}},[_c('b-container',[_c('b-row',[_c('b-col',{attrs:{"cols":"6"}},[_c('label',[_vm._v("Name:")]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"text","name":"fullname"},model:{value:(_vm.userPost.fullname),callback:function ($$v) {_vm.$set(_vm.userPost, "fullname", $$v)},expression:"userPost.fullname"}})],1),_vm._v(" "),_c('b-col',{attrs:{"cols":"6"}},[_c('label',[_vm._v("Phone:")]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"number"},model:{value:(_vm.userPost.phone),callback:function ($$v) {_vm.$set(_vm.userPost, "phone", $$v)},expression:"userPost.phone"}})],1)],1),_vm._v(" "),_c('hr'),_vm._v(" "),_c('b-row',[_c('b-col',{attrs:{"cols":"6"}},[_c('label',[_vm._v("Email:")]),_vm._v(" "),_c('b-form-input',{attrs:{"type":"email"},model:{value:(_vm.userPost.email),callback:function ($$v) {_vm.$set(_vm.userPost, "email", $$v)},expression:"userPost.email"}})],1),_vm._v(" "),_c('b-col',{attrs:{"cols":"6"}},[_c('label',[_vm._v("Gender:")]),_vm._v(" "),_c('b-form-select',{attrs:{"options":_vm.sex},model:{value:(_vm.userPost.gender),callback:function ($$v) {_vm.$set(_vm.userPost, "gender", $$v)},expression:"userPost.gender"}})],1)],1),_vm._v(" "),_c('hr')],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('b-button',{attrs:{"type":"submit","variant":"warning","block":""}},[_vm._v("Submit")])],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<table class=\"table table-hover table-bordered\" data-v-3d911621>","</table>",[_vm._ssrNode("<thead data-v-3d911621><th data-v-3d911621>ID</th> <th data-v-3d911621>Name</th> <th data-v-3d911621>Phone</th> <th data-v-3d911621>Email</th> <th data-v-3d911621></th></thead> "),_vm._ssrNode("<tbody data-v-3d911621>","</tbody>",_vm._l((_vm.staffInfo),function(rs){return _vm._ssrNode("<tr data-v-3d911621>","</tr>",[_vm._ssrNode("<td data-v-3d911621>"+_vm._ssrEscape(_vm._s(rs.id))+"</td> <td data-v-3d911621>"+_vm._ssrEscape(_vm._s(rs.fullname))+"</td> <td data-v-3d911621>"+_vm._ssrEscape(_vm._s(rs.phone))+"</td> <td data-v-3d911621>"+_vm._ssrEscape(_vm._s(rs.email))+"</td> "),_vm._ssrNode("<td data-v-3d911621>","</td>",[_vm._ssrNode("<div data-v-3d911621>","</div>",[_c('b-button',{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":true}}],on:{"click":function($event){$event.preventDefault();return _vm.viewUser(rs.id)}}},[_c('b-icon',{attrs:{"icon":"eye"}})],1),_vm._ssrNode(" "),_c('b-button',{attrs:{"variant":"danger"},on:{"click":function($event){$event.preventDefault();return _vm.deleteUser(rs.id)}}},[_c('b-icon',{attrs:{"icon":"trash"}})],1)],2)])],2)}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-3d911621>","</div>",[_c('b-modal',{attrs:{"id":"modal-1","title":"User Details"}},[_c('b-container',[_c('b-row',[_c('b-col',{attrs:{"cols":"6"}},[_c('p',[_c('strong',[_vm._v("ID: ")]),_vm._v(" "+_vm._s(_vm.user[0].id))]),_vm._v(" "),_c('p',[_c('strong',[_vm._v("Phone: ")]),_vm._v(" "+_vm._s(_vm.user[0].phone))]),_vm._v(" "),_c('p',[_c('strong',[_vm._v("Gender: ")]),_vm._v(" "+_vm._s(_vm.user[0].gender))]),_vm._v(" "),_c('p',[_c('strong',[_vm._v("Status: ")]),_vm._v(" "+_vm._s(_vm.user[0].status))])]),_vm._v(" "),_c('b-col',{attrs:{"cols":"6"}},[_c('p',[_c('strong',[_vm._v("Name: ")]),_vm._v(" "+_vm._s(_vm.user[0].fullname))]),_vm._v(" "),_c('p',[_c('strong',[_vm._v("Email: ")]),_vm._v(" "+_vm._s(_vm.user[0].email))]),_vm._v(" "),_c('p',[_c('strong',[_vm._v("Date: ")]),_vm._v(" "+_vm._s(_vm.user[0].date))])])],1)],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-3d911621>","</div>",[_c('b-modal',{attrs:{"id":"modal-2","title":"Update User Details"}},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.userUpdate.apply(null, arguments)}}},[_c('p',{staticStyle:{"color":"orange"}},[_vm._v(_vm._s(_vm.message))]),_vm._v(" "),_c('b-container',[_c('b-row',[_c('b-col',{attrs:{"cols":"6"}},[_c('b-form-group',{attrs:{"description":_vm.user[0].fullname,"label":"Fullname"}},[_c('b-form-input',{model:{value:(_vm.userPost.fullname),callback:function ($$v) {_vm.$set(_vm.userPost, "fullname", $$v)},expression:"userPost.fullname"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"cols":"6"}},[_c('b-form-group',{attrs:{"description":_vm.user[0].phone,"label":"Phone"}},[_c('b-form-input',{model:{value:(_vm.userPost.phone),callback:function ($$v) {_vm.$set(_vm.userPost, "phone", $$v)},expression:"userPost.phone"}})],1)],1)],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('b-row',[_c('b-col',{attrs:{"cols":"6"}},[_c('b-form-group',{attrs:{"description":_vm.user[0].email,"label":"Email"}},[_c('b-form-input',{model:{value:(_vm.userPost.email),callback:function ($$v) {_vm.$set(_vm.userPost, "email", $$v)},expression:"userPost.email"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"cols":"6"}},[_c('b-form-group',{attrs:{"description":_vm.user[0].gender,"label":"Sex"}},[_c('b-form-input',{model:{value:(_vm.userPost.gender),callback:function ($$v) {_vm.$set(_vm.userPost, "gender", $$v)},expression:"userPost.gender"}})],1)],1)],1)],1),_vm._v(" "),_c('hr'),_vm._v(" "),_c('b-button',{attrs:{"type":"submit","variant":"warning","block":""}},[_vm._v("Submit")])],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/staff.vue?vue&type=template&id=3d911621&scoped=true&

// EXTERNAL MODULE: ./components/modal.vue + 4 modules
var modal = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/staff.vue?vue&type=script&lang=js&
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

/* harmony default export */ var staffvue_type_script_lang_js_ = ({
  components: {
    DcButton: modal["default"]
  },

  data() {
    return {
      sex: ['Male', 'Female', 'Not Sure', 'Rather not to say'],
      modalShow: false,
      staffInfo: null,
      user: 'hello',
      userid: null,
      message: '',
      error: [],
      userPost: {
        gender: null,
        fullname: null,
        phone: null,
        email: null
      }
    };
  },

  created() {
    this.getUser();
  },

  methods: {
    getUser() {
      this.$axios.$get('/users/api/gettest/').then(res => {
        this.staffInfo = res;
      }).catch(errors => {
        this.staffInfo = 'An error Occured' + errors;
      });
    },

    viewUser(id) {
      this.$axios.$get('/users/api/getdemo/' + id).then(resp => {
        this.user = resp;
      }).catch(error => {
        console.warn(error);
      });
    },

    async userpostData(e) {
      this.error = [];
      e.preventDefault();

      if (!this.userPost.gender) {
        this.error.push("The gender is missing");
      }

      if (!this.userPost.fullname) {
        this.error.push("The  name is missing");
      }

      if (!this.userPost.phone) {
        this.error.push("The Phone nunber is missing");
      }

      if (!this.userPost.email) {
        this.error.push("The email address is missing");
      }

      if (!this.error.length) {
        const formData = {
          gender: this.userPost.gender,
          fullname: this.userPost.fullname,
          phone: this.userPost.phone,
          email: this.userPost.email
        };
        await this.$axios.$post('/users/api/createtest/', formData).then(res => {
          // this.userPost='';
          this.hideModal(); // this.modalShow = false;

          this.getUser();
          this.message = 'Your work have been saved successfully'; // this.$router.push({ path : '/staff' });
        }).catch(error => {
          if (error.response) {
            for (const property in error.response.data) {
              this.error.push(`${property}: ${error.response.data[property]}`);
            }

            console.log(JSON.stringify(error.response.data));
          } else if (error.message) {
            this.error.push('Something went wrong. Please try again');
            console.log(JSON.stringify(error));
          }
        });
      }
    },

    userUpdate(id) {
      //   const id = this.userid;
      const formData = {
        gender: this.userPost.gender,
        fullname: this.userPost.fullname,
        phone: this.userPost.phone,
        email: this.userPost.email
      };
      this.userid = id;
      this.$axios.$patch(`/users/api/update/${this.userid}`, formData).then(rest => {
        this.message = rest.message;
        console.warn(userid);
        this.$router.push('/staff');
        this.getUser();
      });
    },

    deleteUser(id) {
      this.$axios.$delete('/users/api/delete/' + id).then(rest => {
        // this.message = 'Staff record deleted successfully'
        this.$bvToast.toast('Staff record deleted successfully', {
          title: 'Success',
          autoHideDelay: 2000,
          solid: true
        });
        this.getUser();
      }).catch(error => {
        console.warn(error);
      });
    },

    modalReset() {
      this.userPost = '';
    },

    showModal() {
      this.$refs['my-modal-g'].show();
    },

    hideModal() {
      this.$refs['my-modal-g'].hide();
    },

    toggleModal() {
      this.$refs['my-modal-g'].toggle('#toggle-btn');
    }

  }
});
// CONCATENATED MODULE: ./pages/staff.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_staffvue_type_script_lang_js_ = (staffvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/staff.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_staffvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3d911621",
  "ba6049f0"
  
)

/* harmony default export */ var staff = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=staff.js.map