import Vue from 'vue'
import Router from 'vue-router'

import About from '@/views/About'
import Home from '@/views/Home'
import Detail from '@/views/Detail'
import Episodes from '@/views/Episodes'
Vue.use(Router)

export default new Router({
    mode: 'history',

    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path: '/about',
            name:'about',
            component:About
        },
        {
            path:'/detail/:id',
            name: 'detail',
            component: Detail
        },

        {
            path: '/episodes',
            name:'episodes',
            component: Episodes
        }

        
    ]
})