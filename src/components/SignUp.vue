<template>
    <img class="logo" src="../assets/resto-logo.jpg"/>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" placeholder="Enter Your Name" />
        <input type="text" placeholder="Enter Your Email" />
        <input type="password" placeholder="Enter Your Password" />
        <button class="signupbtn">Sing Up</button>
    </div>
</template>
<script>
export default {
    name :'SignUp'
}
</script>

<style>
.logo {
    width:300px
}

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.signupbtn{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    background: skyblue;
    color: white;
    border: 1px solid skyblue;
}
</style>