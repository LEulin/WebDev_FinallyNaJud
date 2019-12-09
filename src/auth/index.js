export default {
    user: null,
    username: null,
    password: null,
    email: null,
    registeredUser: [],
    setUser(user) {
        this.user = user
    },
    setUsername(username) {
        this.username = username;
    },
    setPassword(password) {
        this.password = password;
    },
    setEmail(email) {
        this.email = email;
    }, getEmail() {
        return this.email;
    },
    getPassword() {
        return this.password;
    },
    getUsername() {
        return this.username;
    },
    getUser() {
        return this.user;
    },
    register(name, uname, adds, email, password, confirmpassword) {
        if (name == '' || uname == '' || adds == '' || email == '' || password == '' || confirmpassword == '') {
            this.$router.push("/register")
            // alert("Gwapa")
        } else {
            this.registeredUser.push({
                name: name,
                username: uname,
                address: adds,
                email: email,
                password: password,
            });
            // alert("TEST")
        }
    },
    login(username, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].username === username && this.registeredUser[i].password === password) {
                return this.registeredUser[i]
            }
        }
        return null
    },
}
