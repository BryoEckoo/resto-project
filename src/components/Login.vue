<template>
    <img class="logo" src="../assets/resto-logo.jpg"/>
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Your Email" />
        <input type="password" v-model="password" placeholder="Enter Your Password" />
        <button class="signupbtn" v-on:click="login">Login</button>
        <p class="button"><router-link to="/sign-up">Sign Up</router-link></p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'LogIn',
    Data()
    {
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login(){
            const loginData = {
                email: this.email,
                password: this.password
            };
            //verify user from server
            axios.get('http://localhost:3000/users', { params: loginData})
            .then(response => {
          if (response.data.length > 0) {
            this.$router.push('/'); // Redirect to the Home page after successful login
          } else {
            console.log('Invalid credentials'); // Show error message for invalid credentials
          }
        })
        .catch(error => {
          console.error('Error verifying user:', error);
        });
        }
    }
};
</script>