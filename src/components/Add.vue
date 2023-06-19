<template>
    <Header />
    <h1>Hello, Welcome Add Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address" />
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact" />
        <button v-on:click.prevent="addRestaurant">Add Restaurant</button>
    </form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name:'AddPage',
    components:{
        Header
    },
    data(){
        return {
            restaurant :{
                name:'',
                address:'',
                contact:''
            }
        }

    },
    methods:{
        async addRestaurant()
        {
            console.warn(this.restaurant)
            const response = await axios.post('http://localhost:3000/restaurants',{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            });
            console.warn("result", response.data)
            this.restaurant.name = '';
            this.restaurant.address = '';
            this.restaurant.contact = '';
        }

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