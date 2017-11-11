import Vue from 'vue'
import Router from 'vue-router'
import main from '../views/MainView'
import personal from '../views/personal/Personal'

Vue.use(Router)

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
        }
    ]
})
