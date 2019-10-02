import Vue from 'vue'
import Router from 'vue-router'
import Pojo from "@/components/design/Pojo";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/sys/setting/doc',
            name: 'document',
            component: () => import('./components/setting/Document')
        },
        {
            path: "/design/pojo",
            name: "pojo",
            component: () => import('./components/design/Pojo')
        }
    ]
})
