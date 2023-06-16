<template>
    <Header />
    <h1>Hello k {{user}}, Welcome To Home Page</h1>
</template>

<script>
import Header from './Header.vue'
import axios from "axios"
export default {
    name:'HomePage',
    data(){
        return {
            name:''
        }
    },
    components:{
        Header
    },
    methods: {
        fetchData() {
        axios.get(`http://localhost:3000/users`)
        .then(response => {
          this.name = response.user;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
    },
    mounted()
    {
        let user= localStorage.getItem('user-info');
        this.name =  axios.get(`http://localhost:3000/users`)
        .then(response => {
          this.name = response.user;
        });
        if(user)
        {
            this.$router.push({name:'SignUp'})
        }
    }
}
</script>