<template>
    <Header />
    <h1>Hello User, Welcome Add Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" />
        <input type="text" name="address" placeholder="Enter Address" />
        <input type="text" name="contact" placeholder="Enter Contact" />
        <button>Add Restaurant</button>
    </form>
</template>

<script>
import Header from './Header.vue'
export default {
    name:'AddPage',
    components:{
        Header
    },
    mounted()
    {
        let user= localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'SignUp'})
        }
    }
}
</script>