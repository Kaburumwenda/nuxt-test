<template>
    <div class="staff-con">
       <div>
            <p v-if="message">
                <script>
                Swal.fire({
                    position: '',
                    icon: 'success',
                    title: 'Success',
                    text: '{{ message }}',
                    showConfirmButton: false,
                    timer: 1500
                    })
            </script>
            </p>
            <p v-else></p>
        </div>
         <div style="background:grey">
            <b-button @click="showModal" variant="primary" squared="squared"> 
                
              <b-icon icon="plus-circle"></b-icon> 
                Add New Record</b-button> 
        
            <b-modal ref="my-modal-g" title="Add Staff" hide-footer size="xl">
                
                <div>
                    <div v-if="error.length">
                        <strong style="color:orange">Please correct bellow errors:</strong>
                        <ul>
                            <li v-for="e in error" :key="e.id">{{e}}</li>
                        </ul>
                        <hr>
                    </div>
                </div>
              <b-form @submit.prevent="userpostData">
                    <b-container>
                        <b-row>
                            <b-col cols="6">
                                <label>Name:</label>
                                <b-form-input type="text" name="fullname" v-model="userPost.fullname"></b-form-input>
                            </b-col>
                             <b-col cols="6">
                                <label>Phone:</label>
                                <b-form-input type="number"  v-model="userPost.phone"></b-form-input>
                            </b-col>
                             
                        </b-row>
                        <hr>
                        <b-row>
                             <b-col cols="6">
                                <label>Email:</label>
                                <b-form-input type="email" v-model="userPost.email"></b-form-input>
                            </b-col>
                            <b-col cols="6">
                        
                                <label>Gender:</label>
                                <b-form-select v-model="userPost.gender" :options="sex"></b-form-select>
                            </b-col>
                        </b-row>
                        <hr>
                    </b-container>
                    <br>
                    <b-button type="submit" variant="warning" block>Submit</b-button>
                </b-form>
            </b-modal> 
            <!-- <div id="StudentModal">
                <DcButton  buttonType="button" value="google" href="https://www.google.com/" squared="squared">
                <b-form @submit.prevent="userpostData">
                    <b-container>
                        <b-row>
                            <b-col cols="6">
                                <label>Name:</label>
                                <b-form-input name="fullname" v-model="userPost.fullname"></b-form-input>
                            </b-col>
                             <b-col cols="6">
                                <label>Phone:</label>
                                <b-form-input  v-model="userPost.phone"></b-form-input>
                            </b-col>
                             
                        </b-row>
                        <hr>
                        <b-row>
                             <b-col cols="6">
                                <label>Email:</label>
                                <b-form-input v-model="userPost.email"></b-form-input>
                            </b-col>
                            <b-col cols="6">
                                <label>Gender:</label>
                                <b-form-input  v-model="userPost.gender"></b-form-input>
                            </b-col>
                        </b-row>
                        <hr>
                    </b-container>
                    <br>
                    <b-button type="submit" variant="warning" block id="#btnSave">Submit</b-button>
                </b-form>
                
            </DcButton>
            </div> -->
           
       
         </div>
        <table class="table table-hover table-bordered">
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="rs in staffInfo" :key="rs.id">
                    <td>{{ rs.id }}</td>
                    <td>{{ rs.fullname }}</td>
                    <td>{{ rs.phone }}</td>
                    <td>{{ rs.email }}</td>
                    <td>
                        <!-- <DcModal lbTheme="warning" label="View" :getData="viewUser(rs.id)"></DcModal> -->
                        <!-- <b-button v-on:click="viewUser(rs.id)">view</b-button> -->
                        <div>
            
                            <b-button v-b-modal.modal-1 v-on:click.prevent="viewUser(rs.id)"> <b-icon icon="eye"></b-icon> </b-button>
                             <b-button variant="danger" v-on:click.prevent="deleteUser(rs.id)"><b-icon icon="trash"></b-icon></b-button>
                             <!-- <b-button variant="warning" v-b-modal.modal-2 v-on:click.prevent="viewUser(rs.id)">Edit</b-button> -->

                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

<!----------------------- VIEWS MODAL --->
        <div>
            <b-modal id="modal-1" title="User Details">
                <b-container>
                    <b-row>
                        <b-col cols="6">
                            <p><strong>ID: </strong> {{ user[0].id}}</p>
                            <p><strong>Phone: </strong> {{ user[0].phone}}</p>
                            <p><strong>Gender: </strong> {{ user[0].gender}}</p>
                            <p><strong>Status: </strong> {{ user[0].status}}</p>
                        </b-col>
                        <b-col cols="6">
                            <p><strong>Name: </strong> {{ user[0].fullname}}</p>
                            <p><strong>Email: </strong> {{ user[0].email}}</p>
                            <p><strong>Date: </strong> {{ user[0].date}}</p>
                        </b-col>
                    </b-row>
                </b-container>
            </b-modal>
        </div>
<!----------------------- VIEWS MODAL --->

<!----------------------- UPDATE MODAL --->
        <div>
            <b-modal id="modal-2" title="Update User Details">
                <b-form @submit.prevent="userUpdate">
                    <p style="color:orange">{{ message }}</p>

                    <b-container>
                    <b-row>
                        <b-col cols="6">
                       <b-form-group
                        :description="user[0].fullname"
                        label="Fullname"
                        >
                        <b-form-input v-model="userPost.fullname"></b-form-input>
                        </b-form-group> 
                        </b-col>
                        <b-col cols="6">
                        <b-form-group
                            :description="user[0].phone"
                            label="Phone"
                            >
                           <b-form-input v-model="userPost.phone"></b-form-input>
                         </b-form-group> 
                        </b-col>
                    </b-row>
                    <br>
                    <b-row>
                        <b-col cols="6">
                        <b-form-group :description="user[0].email" label="Email">
                           <b-form-input v-model="userPost.email" ></b-form-input>
                         </b-form-group> 
                        </b-col>
                        <b-col cols="6">
                        <b-form-group :description="user[0].gender" label="Sex">
                           <b-form-input v-model="userPost.gender" ></b-form-input>
                         </b-form-group> 
                        </b-col>
                    </b-row>
                </b-container>
                <hr>
                <b-button type="submit" variant="warning" block>Submit</b-button>
                </b-form>
            </b-modal>
        </div>
<!----------------------- UPDATE MODAL --->

    </div>
</template>
<script>
import DcButton from '../components/modal.vue';
export default {
  components: { DcButton },
    data(){
        return{
            sex:['Male', 'Female', 'Not Sure', 'Rather not to say'],
            modalShow: false,
            staffInfo:null, 
            user:'hello',
            userid:null,
            message:'',
            error:[],
            userPost:{
                gender:null,
                fullname: null,
                phone: null,
                email: null,
                
            }
        }
    },

    created(){
        this.getUser();
    },
    
    methods:{
        getUser(){
            this.$axios.$get('/users/api/gettest/')
            .then((res) =>{
                this.staffInfo = res;
            })
            .catch((errors)=>{
                this.staffInfo = 'An error Occured'+ errors;
            })
        },
        viewUser(id){
            this.$axios.$get('/users/api/getdemo/'+id)
            .then((resp) =>{
                this.user=resp;
            })
            .catch((error)=>{
                console.warn(error)
            });
        },

        async userpostData(e){
            this.error=[];
              e.preventDefault()
            
            if(!this.userPost.gender){
                this.error.push("The gender is missing")
            }
            if(!this.userPost.fullname){
                this.error.push("The  name is missing")
            }
            if(!this.userPost.phone){
                this.error.push("The Phone nunber is missing")
            }
            if(!this.userPost.email){
                this.error.push("The email address is missing")
            }

             if(!this.error.length){
                 const formData = {
                     gender:this.userPost.gender,
                     fullname:this.userPost.fullname,
                     phone: this.userPost.phone,
                     email: this.userPost.email,
                  }
               await this.$axios.$post('/users/api/createtest/', formData)
                .then((res) =>{
                    // this.userPost='';
                    this.hideModal();
                    // this.modalShow = false;
                    this.getUser();
                    this.message = 'Your work have been saved successfully';
                    // this.$router.push({ path : '/staff' });
                    
                })
                
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.error.push(`${property}: ${error.response.data[property]}`)
                        }

                        console.log(JSON.stringify(error.response.data))
                    } else if (error.message) {
                        this.error.push('Something went wrong. Please try again')
                        
                        console.log(JSON.stringify(error))
                    }
                })
            }
        },


   
        userUpdate(id){
        //   const id = this.userid;
           const formData = {
                     gender:this.userPost.gender,
                     fullname:this.userPost.fullname,
                     phone: this.userPost.phone,
                     email: this.userPost.email,
                  }
            this.userid = id;

          this.$axios.$patch(`/users/api/update/${this.userid}`, formData)
            .then((rest) =>{
                this.message=rest.message;
                console.warn(userid)
               this.$router.push('/staff');
               this.getUser();
               
            });        
        },

        deleteUser(id){
          this.$axios.$delete('/users/api/delete/'+id)
            .then((rest) =>{
                // this.message = 'Staff record deleted successfully'
                 this.$bvToast.toast('Staff record deleted successfully', {
                    title: 'Success',
                    autoHideDelay: 2000,
                    solid: true
                    })
                this.getUser();
            })
            .catch((error)=>{
                console.warn(error)
            });
        },
        modalReset(){
            this.userPost = ''
        },
        showModal() {
        this.$refs['my-modal-g'].show()
        },
        hideModal() {
            this.$refs['my-modal-g'].hide()
        },
        toggleModal() {
            this.$refs['my-modal-g'].toggle('#toggle-btn')
        }
       }
}
</script>

<style scoped>
.staff-con{
    margin: 20px 40px 20px 40px;
}
.hidden{
    display: none;
}
</style>