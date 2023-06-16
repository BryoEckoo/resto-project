<template>
    <Header />
    <h1>Hello {{userName}}, Welcome To Home Page</h1>
    <table>
        <tr v-for="item in restaurant" :key="item.id">
            <td>hello</td>
            <td>{{ item.name }}</td>
        </tr>
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
            restaurants:[],
        };
    },
    created() {
        this.fetchUserName();  // Fetch the user's name when the component is created
    },

    
    components:{
        Header
    },
    methods: {
        fetchUserName() {
            //retrieve user's name from server
            const userMe = {name:this.name};
            axios.get('http://localhost:3000/users', {params: userMe})
        .then(response => {
            if (response.data.length > 0) {
                this.userName = response.data[0].name; // Assign the user's name to the userName property
            }
        })
        .catch(error => {
          console.error('Error fetching user name:', error);
        });
    }
    },
    async mounted()
    {
        /**let user= localStorage.getItem('user-info');
        this.name =  axios.get(`http://localhost:3000/users`)
        .then(response => {
          this.name = response.user;
        });
        if(user)
        {
            this.$router.push({name:'SignUp'})
        }**/
        let result = await axios.get('http://localhost:3000/restaurants');
        console.warn(result)
        this.restaurant = result.data;
    }
}
</script>