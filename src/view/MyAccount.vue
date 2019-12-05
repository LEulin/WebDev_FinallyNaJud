<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{on}">
      <v-card max-width="600" class="mx-auto">
        <v-row class="mb-6" no-gutters>
          <v-col sm="5" md="6">
            <v-card class="pa-2" outlined tile>
              <v-card height="50vh" max-width="50hv">
                <center>
                <v-img :src="img" class="picture" @click="$refs.file.click()" dark></v-img>
                <input ref="file" type="file" style="display:none" @change="onFileChange()">
                </center>
              </v-card>
            </v-card>
          </v-col>
          <v-col sm="5" offset-sm="2" md="6" offset-md="0">
            <v-card class="pa-2" outlined tile>
              <v-list two-line>
                <h1 class="name" text-align="center">{{name}} </h1>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">mdi-account</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{username}}</v-list-item-title>
                    <v-list-item-subtitle>Username</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">mdi-email</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{email}}</v-list-item-title>
                    <v-list-item-subtitle>Email</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">mdi-key-variant</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{password}}</v-list-item-title>
                    <v-list-item-subtitle>Password</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
               <v-btn class="ma-2" v-on="on"  tile outlined color="success">
                  <v-icon left>mdi-pencil</v-icon>Edit
                </v-btn>
                <v-btn class="ma-2" tile outlined color="error" @click="cancel()">
                  <v-icon left>mdi-pencil</v-icon>Cancel
                </v-btn>
            </v-card>
          </v-col>
        </v-row>

        <!-- </v-row> -->
      </v-card>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Username*" v-model="EditUsername" required>{{username}}</v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password*" v-model="EditPassword" type="password" required>{{password}}</v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text  @click="dialog = false" >Close</v-btn>
        <v-btn color="blue darken-1" text  @click="UpdateAccount()" >Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.name{
  text-align: center;
}
.picture {
  height: 50vh;
  width: 50vh;
}
.mx-auto {
  margin-top: 15px;
}
#icons {
  margin-top: -650%;
}

#card1 {
  margin-top: 60%;
}
</style>

<script>
import axios from "axios"
import $ from "jquery";
export default {
  components: {
    //   EditProfile
  },
  data() {
    return {
      img: require("@/assets/back.jpg"),
      username:this.EditUsername,
      password: this.EditPassword,
      modal: false,
      dialog: false,
      EditPassword:'',
      EditUsername:'',

    };
  },

  methods: {
    UpdateAccount(){
      var data={
        username:this.username,
        password:this.password
      }
       axios.post('http://localhost:5000/event/create',data)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          }); 
    },
    onFileChange() {
      this.file = this.$refs.file.files[0];
      this.img = URL.createObjectURL(this.file);
    },
    cancel(){
      this.$router.push("dashboard")
    },
    onSelect() {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = this.$refs.file.files[0];
      this.file = file;
      if (!allowedTypes.includes(file.type)) {
        this.message = "Filetype is wrong!!";
      }
      if (file.size > 500000) {
        this.message = "Too large, max size allowed is 500kb";
      }
      var img = URL.createObjectURL(file);
      //this.file = img;
      $("#img").attr("src", img);
    },
    redirect(router) {
      this.$router.push(router);
    }
  }
};
</script>
