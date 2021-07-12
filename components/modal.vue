<template>
  <div>
 <div v-if="buttonType==='modal'">
    <b-button
      @click="showModal"
      id="show-btn" 
      :disabled="disabled"
      :variant="lbTheme"
      :pill="modalpill"
      :squared="modalsquared"
      >{{ label }}
      </b-button>
      <!-- <p>v-b-modal.modal-scrollable </p> -->
      <!-- <p>@click="showModal"</p> -->
<!-- <p>id="modal-scrollable"</p> -->
    <b-modal  scrollable ref="my-modal" hide-footer 
       :title="modaltitle"
       :size="modalsize"
       :id="'modal-'+effect"
       >
      <b-container fluid>
          <div class="d-block text-left">
                <div v-if="mode === 'form'">
                    <b-form @submit="formSubmit">
                    <div>
                        <b-row v-for="rs in formFields" :key="rs">
                            <b-col cols="3"><label class="form-label">{{rs}}</label></b-col>
                            <b-col cols="9">
                                <b-form-input class="form-input" type="text" :v-model="rs" :placeholder="'Enter ' + rs">
                                    </b-form-input></b-col>
                        </b-row>
            
                    </div>
                    <br>
                    <!-- <b-form-select
                    v-model="formSelectItem"
                    :options="formSelect"
                    ></b-form-select> -->
                    <b-button class="mt-3" :variant="sbTheme" :block="sbBlock" :type="sbType">{{ sbTitle }}</b-button>
                    </b-form>                             
                </div>

                <div v-else-if="mode==='custom'">
                    <slot> 
                        <p style="color:orange">Design form fields</p> 
                        </slot>
                </div>

                <div v-else>
                    <slot> <p style="color:orange">{{ content }}</p></slot>
                </div>
        <!-- <p class="my-4" v-for="i in 10" :key="i">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p> -->
      </div>
      </b-container>

    </b-modal>
      </div>
      <div v-else-if="buttonType==='button'">
            <b-button 
            :to="to"
            :href="href"
            :type="type"
            :title="title"
            :value="value"
            :icon="icon"
            :variant="variant"
            :size="size"
            :block="block"
            :active="active"
            :pill="pill"
            :squared="squared"
            :disabled="disabled"
            :target="target"
            >
            <b-icon :icon="icon"></b-icon>
            <component :is="type" v-html="value" :right="right"/>
            </b-button>
      </div>

      <div v-else></div>
    
  </div>
</template>

<script>
  export default {
      name:"DcButton",
    data(){
        return{
            formSelectItem:'',
        }
    },
    props:{
        getData:{default:null},
        formSubmit:{
            default:null
        },
        buttonType:{
            type:String,
            default:'button'
        },
        content:{
            default:'Enter modal body content'
        },
        effect:{
            type:String,
            default:null
        },
        label:{
            type:String,
            default:'modal Label'
        },
        modaltitle:{
            type:String,
            default:'Modal Title'
        },
        mode:{
            type:String,
            default:null
        },
        formFields:{
            type:[],
            default:null
        },
        formSelect:{
            type:[],
            default:null
        },
        disabled:{
            type:Boolean,
            default:false
        },
        lbTheme:{
            type:String,
            default:'info'
        },
        modalpill:{
            type:String,
            default:null
        },
        modalsquared:{
            type:String,
            default:null
        },
        modalsize:{
            type:String,
            default:'md'
        },
        sbTitle:{
            type:String,
            default:'Submit'
        },
        sbTheme:{
            type:String,
            default:'info'
        },
        sbBlock:{
            type:Boolean,
            default:true
        },
        sbType:{
            type:String,
            default:'submit'
        },

        title:{
            type:String,
            default:'hello'
        },
        icon:{
            type:String,
            default:null
        },
        value:{
            type:String,
            default:null
        },
        to:{
            type:String,
            default:''
        },
        href:{
            type:String,
            default:''
        },
        type:{
            type:String,
            default:'button'
        },
        variant:{
            type:String,
            default:'success'
        },
        size:{
            type:String,
            default:'md'
        },
        pill:{
            type:Boolean,
            default:false
        },
        squared:{
            type:Boolean,
            default:false
        },
        disabled:{
            type:Boolean,
            default:false
        },
        block:{
            type:Boolean,
            default:false
        },
        target:{
            type:String,
            default:''
        },
        active:{
            type:Boolean,
            default:false
        },

    },  
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        this.$refs['my-modal'].toggle('#toggle-btn')
      }
    },
    computed:{
    type (){
        if(this.value){
            return 'span';
        }
        else{
            return ''
        }
    }
}
  }
</script>

<style scoped>
.form-input{
    margin-top: 10px !important;
}
.form-label{margin-top: 10px !important;}
</style>