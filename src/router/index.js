import Vue from 'vue'
import Router from 'vue-router'
import main from '../views/MainView'
import personal from '../views/personal/Personal'
import address from '../views/personal/address/Address.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: main
        },
        {
            path: '/personal',
            name: 'personal',
            component: personal
        },
        {
            path: '/personal/address',
            name: 'address',
            component: address
        }
    ]
})
