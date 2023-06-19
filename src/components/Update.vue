<template>
    <Header />
    <h1>Hello User, Welcome To Update Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address" />
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact" />
        <button v-on:click.prevent="updateRestaurant">Update Restaurant</button>
    </form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
    name:'UpdatePage',
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
        async updateRestaurant()
        {
            console.warn(this.restaurant)
            const response = await axios.put('http://localhost:3000/restaurants/'+this.$route.params.id,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            });
            if(response.status==200)
            {
                this.$router.push({name:'HomePage'})
            }
        }
    },
    async mounted()
    {
        let user= localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'SignUp'})
        }
        const result = await axios.get('http://localhost:3000/restaurants/'+this.$route.params.id)
        console.warn(result);
        this.restaurant = result.data;
    }
}
</script>