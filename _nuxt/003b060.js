(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2],{281:function(e,t,o){var content=o(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(90).default)("73676256",content,!0,{sourceMap:!1})},282:function(e,t,o){"use strict";o(281)},283:function(e,t,o){var r=o(89)(!1);r.push([e.i,".form-input[data-v-2a3fee04],.form-label[data-v-2a3fee04]{margin-top:10px!important}",""]),e.exports=r},284:function(e,t,o){"use strict";o.r(t);var r,n=o(0),l={name:"DcButton",data:function(){return{formSelectItem:""}},props:(r={getData:{default:null},formSubmit:{default:null},buttonType:{type:String,default:"button"},content:{default:"Enter modal body content"},effect:{type:String,default:null},label:{type:String,default:"modal Label"},modaltitle:{type:String,default:"Modal Title"},mode:{type:String,default:null},formFields:{type:[],default:null},formSelect:{type:[],default:null},disabled:{type:Boolean,default:!1},lbTheme:{type:String,default:"info"},modalpill:{type:String,default:null},modalsquared:{type:String,default:null},modalsize:{type:String,default:"md"},sbTitle:{type:String,default:"Submit"},sbTheme:{type:String,default:"info"},sbBlock:{type:Boolean,default:!0},sbType:{type:String,default:"submit"},title:{type:String,default:"hello"},icon:{type:String,default:null},value:{type:String,default:null},to:{type:String,default:""},href:{type:String,default:""},type:{type:String,default:"button"},variant:{type:String,default:"success"},size:{type:String,default:"md"},pill:{type:Boolean,default:!1},squared:{type:Boolean,default:!1}},Object(n.a)(r,"disabled",{type:Boolean,default:!1}),Object(n.a)(r,"block",{type:Boolean,default:!1}),Object(n.a)(r,"target",{type:String,default:""}),Object(n.a)(r,"active",{type:Boolean,default:!1}),r),methods:{showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()},toggleModal:function(){this.$refs["my-modal"].toggle("#toggle-btn")}},computed:{type:function(){return this.value?"span":""}}},d=(o(282),o(63)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",["modal"===e.buttonType?o("div",[o("b-button",{attrs:{id:"show-btn",disabled:e.disabled,variant:e.lbTheme,pill:e.modalpill,squared:e.modalsquared},on:{click:e.showModal}},[e._v(e._s(e.label)+"\n      ")]),e._v(" "),o("b-modal",{ref:"my-modal",attrs:{scrollable:"","hide-footer":"",title:e.modaltitle,size:e.modalsize,id:"modal-"+e.effect}},[o("b-container",{attrs:{fluid:""}},[o("div",{staticClass:"d-block text-left"},["form"===e.mode?o("div",[o("b-form",{on:{submit:e.formSubmit}},[o("div",e._l(e.formFields,(function(t){return o("b-row",{key:t},[o("b-col",{attrs:{cols:"3"}},[o("label",{staticClass:"form-label"},[e._v(e._s(t))])]),e._v(" "),o("b-col",{attrs:{cols:"9"}},[o("b-form-input",{staticClass:"form-input",attrs:{type:"text","v-model":t,placeholder:"Enter "+t}})],1)],1)})),1),e._v(" "),o("br"),e._v(" "),o("b-button",{staticClass:"mt-3",attrs:{variant:e.sbTheme,block:e.sbBlock,type:e.sbType}},[e._v(e._s(e.sbTitle))])],1)],1):"custom"===e.mode?o("div",[e._t("default",(function(){return[o("p",{staticStyle:{color:"orange"}},[e._v("Design form fields")])]}))],2):o("div",[e._t("default",(function(){return[o("p",{staticStyle:{color:"orange"}},[e._v(e._s(e.content))])]}))],2)])])],1)],1):"button"===e.buttonType?o("div",[o("b-button",{attrs:{to:e.to,href:e.href,type:e.type,title:e.title,value:e.value,icon:e.icon,variant:e.variant,size:e.size,block:e.block,active:e.active,pill:e.pill,squared:e.squared,disabled:e.disabled,target:e.target}},[o("b-icon",{attrs:{icon:e.icon}}),e._v(" "),o(e.type,{tag:"component",attrs:{right:e.right},domProps:{innerHTML:e._s(e.value)}})],1)],1):o("div")])}),[],!1,null,"2a3fee04",null);t.default=component.exports},286:function(e,t,o){var content=o(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(90).default)("0901e718",content,!0,{sourceMap:!1})},291:function(e,t,o){"use strict";o(286)},292:function(e,t,o){var r=o(89)(!1);r.push([e.i,".staff-con[data-v-3d911621]{margin:20px 40px}.hidden[data-v-3d911621]{display:none}",""]),e.exports=r},296:function(e,t,o){"use strict";o.r(t);var r=o(21),n=(o(56),o(11),{components:{DcButton:o(284).default},data:function(){return{sex:["Male","Female","Not Sure","Rather not to say"],modalShow:!1,staffInfo:null,user:"hello",userid:null,message:"",error:[],userPost:{gender:null,fullname:null,phone:null,email:null}}},created:function(){this.getUser()},methods:{getUser:function(){var e=this;this.$axios.$get("/users/api/gettest/").then((function(t){e.staffInfo=t})).catch((function(t){e.staffInfo="An error Occured"+t}))},viewUser:function(e){var t=this;this.$axios.$get("/users/api/getdemo/"+e).then((function(e){t.user=e})).catch((function(e){console.warn(e)}))},userpostData:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t.error=[],e.preventDefault(),t.userPost.gender||t.error.push("The gender is missing"),t.userPost.fullname||t.error.push("The  name is missing"),t.userPost.phone||t.error.push("The Phone nunber is missing"),t.userPost.email||t.error.push("The email address is missing"),t.error.length){o.next=10;break}return r={gender:t.userPost.gender,fullname:t.userPost.fullname,phone:t.userPost.phone,email:t.userPost.email},o.next=10,t.$axios.$post("/users/api/createtest/",r).then((function(e){t.hideModal(),t.getUser(),t.message="Your work have been saved successfully"})).catch((function(e){if(e.response){for(var o in e.response.data)t.error.push("".concat(o,": ").concat(e.response.data[o]));console.log(JSON.stringify(e.response.data))}else e.message&&(t.error.push("Something went wrong. Please try again"),console.log(JSON.stringify(e)))}));case 10:case"end":return o.stop()}}),o)})))()},userUpdate:function(e){var t=this,o={gender:this.userPost.gender,fullname:this.userPost.fullname,phone:this.userPost.phone,email:this.userPost.email};this.userid=e,this.$axios.$patch("/users/api/update/".concat(this.userid),o).then((function(e){t.message=e.message,console.warn(userid),t.$router.push("/staff"),t.getUser()}))},deleteUser:function(e){var t=this;this.$axios.$delete("/users/api/delete/"+e).then((function(e){t.$bvToast.toast("Staff record deleted successfully",{title:"Success",autoHideDelay:2e3,solid:!0}),t.getUser()})).catch((function(e){console.warn(e)}))},modalReset:function(){this.userPost=""},showModal:function(){this.$refs["my-modal-g"].show()},hideModal:function(){this.$refs["my-modal-g"].hide()},toggleModal:function(){this.$refs["my-modal-g"].toggle("#toggle-btn")}}}),l=(o(291),o(63)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"staff-con"},[o("div",[e.message?o("p",[o("script",[e._v("\n                Swal.fire({\n                    position: '',\n                    icon: 'success',\n                    title: 'Success',\n                    text: '"+e._s(e.message)+"',\n                    showConfirmButton: false,\n                    timer: 1500\n                    })\n            ")])]):o("p")]),e._v(" "),o("div",{staticStyle:{background:"grey"}},[o("b-button",{attrs:{variant:"primary",squared:"squared"},on:{click:e.showModal}},[o("b-icon",{attrs:{icon:"plus-circle"}}),e._v(" \n                Add New Record")],1),e._v(" "),o("b-modal",{ref:"my-modal-g",attrs:{title:"Add Staff","hide-footer":"",size:"xl"}},[o("div",[e.error.length?o("div",[o("strong",{staticStyle:{color:"orange"}},[e._v("Please correct bellow errors:")]),e._v(" "),o("ul",e._l(e.error,(function(t){return o("li",{key:t.id},[e._v(e._s(t))])})),0),e._v(" "),o("hr")]):e._e()]),e._v(" "),o("b-form",{on:{submit:function(t){return t.preventDefault(),e.userpostData.apply(null,arguments)}}},[o("b-container",[o("b-row",[o("b-col",{attrs:{cols:"6"}},[o("label",[e._v("Name:")]),e._v(" "),o("b-form-input",{attrs:{type:"text",name:"fullname"},model:{value:e.userPost.fullname,callback:function(t){e.$set(e.userPost,"fullname",t)},expression:"userPost.fullname"}})],1),e._v(" "),o("b-col",{attrs:{cols:"6"}},[o("label",[e._v("Phone:")]),e._v(" "),o("b-form-input",{attrs:{type:"number"},model:{value:e.userPost.phone,callback:function(t){e.$set(e.userPost,"phone",t)},expression:"userPost.phone"}})],1)],1),e._v(" "),o("hr"),e._v(" "),o("b-row",[o("b-col",{attrs:{cols:"6"}},[o("label",[e._v("Email:")]),e._v(" "),o("b-form-input",{attrs:{type:"email"},model:{value:e.userPost.email,callback:function(t){e.$set(e.userPost,"email",t)},expression:"userPost.email"}})],1),e._v(" "),o("b-col",{attrs:{cols:"6"}},[o("label",[e._v("Gender:")]),e._v(" "),o("b-form-select",{attrs:{options:e.sex},model:{value:e.userPost.gender,callback:function(t){e.$set(e.userPost,"gender",t)},expression:"userPost.gender"}})],1)],1),e._v(" "),o("hr")],1),e._v(" "),o("br"),e._v(" "),o("b-button",{attrs:{type:"submit",variant:"warning",block:""}},[e._v("Submit")])],1)],1)],1),e._v(" "),o("table",{staticClass:"table table-hover table-bordered"},[e._m(0),e._v(" "),o("tbody",e._l(e.staffInfo,(function(t){return o("tr",{key:t.id},[o("td",[e._v(e._s(t.id))]),e._v(" "),o("td",[e._v(e._s(t.fullname))]),e._v(" "),o("td",[e._v(e._s(t.phone))]),e._v(" "),o("td",[e._v(e._s(t.email))]),e._v(" "),o("td",[o("div",[o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],on:{click:function(o){return o.preventDefault(),e.viewUser(t.id)}}},[o("b-icon",{attrs:{icon:"eye"}})],1),e._v(" "),o("b-button",{attrs:{variant:"danger"},on:{click:function(o){return o.preventDefault(),e.deleteUser(t.id)}}},[o("b-icon",{attrs:{icon:"trash"}})],1)],1)])])})),0)]),e._v(" "),o("div",[o("b-modal",{attrs:{id:"modal-1",title:"User Details"}},[o("b-container",[o("b-row",[o("b-col",{attrs:{cols:"6"}},[o("p",[o("strong",[e._v("ID: ")]),e._v(" "+e._s(e.user[0].id))]),e._v(" "),o("p",[o("strong",[e._v("Phone: ")]),e._v(" "+e._s(e.user[0].phone))]),e._v(" "),o("p",[o("strong",[e._v("Gender: ")]),e._v(" "+e._s(e.user[0].gender))]),e._v(" "),o("p",[o("strong",[e._v("Status: ")]),e._v(" "+e._s(e.user[0].status))])]),e._v(" "),o("b-col",{attrs:{cols:"6"}},[o("p",[o("strong",[e._v("Name: ")]),e._v(" "+e._s(e.user[0].fullname))]),e._v(" "),o("p",[o("strong",[e._v("Email: ")]),e._v(" "+e._s(e.user[0].email))]),e._v(" "),o("p",[o("strong",[e._v("Date: ")]),e._v(" "+e._s(e.user[0].date))])])],1)],1)],1)],1),e._v(" "),o("div",[o("b-modal",{attrs:{id:"modal-2",title:"Update User Details"}},[o("b-form",{on:{submit:function(t){return t.preventDefault(),e.userUpdate.apply(null,arguments)}}},[o("p",{staticStyle:{color:"orange"}},[e._v(e._s(e.message))]),e._v(" "),o("b-container",[o("b-row",[o("b-col",{attrs:{cols:"6"}},[o("b-form-group",{attrs:{description:e.user[0].fullname,label:"Fullname"}},[o("b-form-input",{model:{value:e.userPost.fullname,callback:function(t){e.$set(e.userPost,"fullname",t)},expression:"userPost.fullname"}})],1)],1),e._v(" "),o("b-col",{attrs:{cols:"6"}},[o("b-form-group",{attrs:{description:e.user[0].phone,label:"Phone"}},[o("b-form-input",{model:{value:e.userPost.phone,callback:function(t){e.$set(e.userPost,"phone",t)},expression:"userPost.phone"}})],1)],1)],1),e._v(" "),o("br"),e._v(" "),o("b-row",[o("b-col",{attrs:{cols:"6"}},[o("b-form-group",{attrs:{description:e.user[0].email,label:"Email"}},[o("b-form-input",{model:{value:e.userPost.email,callback:function(t){e.$set(e.userPost,"email",t)},expression:"userPost.email"}})],1)],1),e._v(" "),o("b-col",{attrs:{cols:"6"}},[o("b-form-group",{attrs:{description:e.user[0].gender,label:"Sex"}},[o("b-form-input",{model:{value:e.userPost.gender,callback:function(t){e.$set(e.userPost,"gender",t)},expression:"userPost.gender"}})],1)],1)],1)],1),e._v(" "),o("hr"),e._v(" "),o("b-button",{attrs:{type:"submit",variant:"warning",block:""}},[e._v("Submit")])],1)],1)],1)])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("th",[e._v("ID")]),e._v(" "),o("th",[e._v("Name")]),e._v(" "),o("th",[e._v("Phone")]),e._v(" "),o("th",[e._v("Email")]),e._v(" "),o("th")])}],!1,null,"3d911621",null);t.default=component.exports}}]);