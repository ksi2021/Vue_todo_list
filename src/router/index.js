import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Task from '../views/Create_task'
import List from '../views/Create_list'
import Error from '../views/Error'
import Lists from '../views/Lists'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: "/create_task",
        name: "task",
        component: Task
    },
    {
        path: "/create_list",
        name: "list",
        component: List
    },
    {
        path: "*",
        name: "error",
        component: Error
    },
    {
        path: "/collestions",
        name: "lists",
        component: Lists
    }

]

const router = new VueRouter({
    routes
})

export default router