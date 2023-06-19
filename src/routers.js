import HomePage from "./components/Home.vue"
import SignUp from "./components/SignUp.vue"
import { createRouter, createWebHistory } from "vue-router"
import LogIn from "./components/LogIn.vue"
import UpdatePage from "./components/Update.vue"
import AddPage from "./components/Add.vue";
const routes=[
    {path:'/', name:'HomePage', component:HomePage },
    {path:'/sign-up', name:'SignUp', component: SignUp },
    {path:'/log-in', name:'LogIn',component: LogIn },
    {path:'/update/:id', name:'UpdatePage',component: UpdatePage },
    {path:'/add', name:'AddPage',component: AddPage },
];

const router=createRouter({
    history:createWebHistory(),
    routes,
});

export default router;