<template>
    <Header />
    <h1>Hello {{userName}}, Welcome To Home Page</h1>
    <table border="1">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in restaurants" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.contact }}</td>
                <td>{{ item.address }}</td>
                <td class="td">
                    <button class="update"><router-link :to="'/update/' + item.id">Update</router-link></button>
                    <button class="delete" @click="deleteRestaurant(item.id)">Delete</button>
                </td>
                
        </tr>
        </tbody>
        
    </table>
</template>

<script> 
 
import Header from './Header.vue'
import axios from "axios"
export default {
    name:'HomePage',
    data(){
        return {
            userName:'',
            restaurants:[]
        };
    },
    created() {
        this.fetchUserName();  // Fetch the user's name when the component is created
    },
    components:{
        Header
    },
    async mounted() {
        try {
            const response = await axios.get('http://localhost:3000/restaurants');
            this.restaurants = response.data;
            console.log(this.restaurant.id)
        } catch (error) {
            console.error(error);
        }

    },
    methods: {
        fetchUserName() {
            //retrieve user's name from server
            const userMe = {name:this.name};
            axios.get('http://localhost:3000/users', {params: userMe})
        .then(response => {
            if (response.data.length > 0) {
                this.userName = response.data[0].name; // Assign the user's name to the userName property
                console.log(this.userName);
            }else{
                this.userName = '';
            }
        })
        .catch(error => {
          console.error('Error fetching user name:', error);
        });

    },
    async fetchRestaurants() {
            try {
                const response = await axios.get('http://localhost:3000/restaurants');
                this.restaurants = response.data;
            } catch (error) {
                console.error(error);
            }
        },
    async deleteRestaurant(id) {
            try {
                await axios.delete(`http://localhost:3000/restaurants/${id}`);
                await this.fetchRestaurants();
            } catch (error) {
                console.error(error);
            }
        }

   /** fetchData() {
            axios.get('http://localhost:3000/restaurants')
                .then(response => {
                    this.restaurant = response.data;
        })
        .catch(error => {
          console.error(error);
        });
        }**/
    }
}
</script>
<style>
td{
    width:160px;
    height:40px;
}
.delete, .update {
    width: 200px;
    height: 30px;
    padding-left: 20px;
    display: block;
    margin-bottom: 10px;
    margin-right: auto;
    margin-left: auto;
    background: skyblue;
    color: white;
    border: 1px solid skyblue;
    cursor: pointer;
    text-decoration: none;
    
}

</style>