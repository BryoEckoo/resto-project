<template>
    <img class="logo" src="../assets/resto-logo.jpg"/>
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Your Email" />
        <input type="password" v-model="password" placeholder="Enter Your Password" />
        <button class="signupbtn" v-on:click="Login">Login</button>
        <p class="button"><router-link to="/sign-up">Sign Up</router-link></p>
    </div>
</template>

<script>
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
        Login()
        {
            console.warn(this.email,this.password)
        }
    }
};
</script>