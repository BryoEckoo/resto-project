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
    data()
    {
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login()
        {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&passwords=${this.password}`)

            if(result.status==200)
            {
                localStorage.getItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'HomePage'})
            }
        }
    }
};
</script>