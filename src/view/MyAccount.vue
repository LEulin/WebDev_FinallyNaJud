<template>
<v-card class="mx-auto" max-width="1000">
    <v-row justify="space-around">
        <div>
            <input type="file" ref="file" name="file" class="choose" @change="onSelect()">
        </div>
        <div>
            <v-avatar size="250" class="profile">
                <img id="img" :src="image" />
            </v-avatar>
        </div>
    </v-row>

    <v-card class="mx-auto1" dark max-width="470">
        <div class="jumbotron">
            <v-card-title>
                <span class="per">My Account</span>
            </v-card-title>
        </div>
        <v-card-text>
            <br>
            <h2>Name:</h2>
            <hr>
            <br>
            <br>
            <h2>Username: {{username}}</h2>
            <hr>
            <br>
            <br>
            <h2>Email:</h2>
            <hr>
            <br>
            <br>
            <h2>Password: {{password}}</h2>
            <hr>
            <br>
            <br>
        </v-card-text>
        <br>
        <v-btn large color="primary" class="button1">Edit</v-btn>
    </v-card>
</v-card>
</template>

<style scoped>
.mx-auto {
    margin-top: 5%;
    height: 500px;
    width: 900px;
    background-color: #e5e5e5;
}

.profile {
    margin-top: 20%;
    margin-left: -205%;
}

.title {
    font-size: 20px;
}

.button {
    margin-top: 8%;
    margin-left: -170%;
}

.button1 {
    margin-top: -20%;
    margin-left: 45%;
}

.mx-auto1 {
    margin-top: -38.5%;
    margin-left: 48%;
    height: 500px;
    width: 500px;
    background-color: white;
}

h2 {
    font-family: cursive;
    color: #000;

}

.choose {
    margin-top: 120%;
}

.per {
    font-family: cursive;
    color: white;
    font-size: 1.2em;
}

hr {
    width: 70%;
    margin-left: 25%;

}

img{
    height:auto;
    width:100%;
}

.jumbotron {
    padding: -800%;
    text-align: center;
    background-color: brown;
}

#cam {
    margin-right: 55%;
    margin-top: 20%;
}
</style>

<script>
import $ from 'jquery';
// import EditProfile from "components/EditProfile";

export default {
    components: {
    // EditProfile
    
  },
    data() {
        return {
            image: "https://avatars2.githubusercontent.com/u/54056633?s=460&v=4"
            
            }

            // username.credentials.getItem("Username"),
            // password.credentials.getItem("Password")
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
        }

    }
}
</script>
