<template>
    <img class="logo" src="../assets/resto-logo.jpg"/>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Your Name" />
        <input type="text" v-model="email" placeholder="Enter Your Email" />
        <input type="password" v-model="password" placeholder="Enter Your Password" />
        <button v-on:click="signup" class="signupbtn">Sing Up</button>
        <router-link to="/log-in">Login</router-link>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name :'SignUp',
    data()
    {
        return {
            name:'',
            email:'',
            password:''
        };
    },
    methods:{
        async signup() {
            const userData = {
                name:this.name,
                email:this.email,
                password:this.password
            };
        //Save user data to the JSON server    
        axios.post("http://localhost:3000/users", userData)
        .then(() => {
          this.$router.push('/'); // Redirect to the Login page after successful sign up
        })
        .catch(error => {
            console.error('Error saving user data:', error);
        });
        }
    },
    /**mounted()
    {
        let user=localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'HomePage'})
        }
    }**/
}
</script>

<style>

</style>