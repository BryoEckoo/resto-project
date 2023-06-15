<template>
    <img class="logo" src="../assets/resto-logo.jpg"/>
    <h1>Login</h1>
    <div class="register">
        <input type="text" v-model="email" placeholder="Enter Your Email" />
        <input type="password" v-model="password" placeholder="Enter Your Password" />
        <button v-on:click="signup" class="signupbtn">Login</button>
        <p><router-link to="/sign-up">Sign Up</router-link></p>
    </div>
</template>

<script>
export default {
    name:'LogIn'
}
</script>