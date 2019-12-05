<template>
  <v-card
    max-width="600"
    class="mx-auto"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/lists/ali.png"
      height="300px"
      dark
    >
      <v-row class="fill-height">
        <v-card-title>
          <v-btn dark icon @click="redirect()">
            <v-icon  id="icons">mdi-chevron-left</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn dark icon class="mr-4">
            <v-icon id="icons">mdi-pencil</v-icon>
          </v-btn>
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-title class="white--text pl-12 pt-12">
          <div class="display-1 pl-12 pt-8"  id="card1">{{name}}</div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list two-line>
      <v-list-item >
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

      <v-list-item >
        <v-list-item-icon>
          <v-icon color="indigo">mdi-key-variant</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{password}}</v-list-item-title>
          <v-list-item-subtitle>Password</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<style scoped>
.mx-auto{
    margin-top:15px;
}
#icons{
    margin-top:-650%;
}

#card1{
    margin-top: 60%;
}
</style>

<script>
import $ from "jquery";
// import AUTH from "@/auth";

// import EditProfile from "components/EditProfile";
export default {
  name: "container",
  data() {
    return {
      image: "https://avatars2.githubusercontent.com/u/54056633?s=460&v=4",
      name: sessionStorage.getItem("Name"),
      username: sessionStorage.getItem("Username"),
      email: sessionStorage.getItem("Email"),
      password: sessionStorage.getItem("Password")
    };
  },

  methods: {
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
    redirect(router){
        this.$router.push(router);
    }
  }
};
</script>
