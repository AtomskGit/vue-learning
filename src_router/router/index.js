/*
路由器对象模块
 */

import Vue from "vue";
import Router from 'vue-router'
import About from "@/views/About";
import Home from "@/views/Home";
import News from "@/views/News";
import Message from "@/views/Message";
import MessageDetail from "@/views/MessageDetail";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component:Home,
            children:[
                {
                    path:'/home/news',
                    component:News
                },
                {
                    path: 'message',
                    component: Message,
                    children:[
                        {
                            path:'/home/message/detail/:id',
                            component:MessageDetail
                        }
                    ]
                },
                {
                    path: '',
                    redirect:'news'
                }
            ]
        },
        {
            path: '/',
            redirect:'/about'
        }
    ]
})
