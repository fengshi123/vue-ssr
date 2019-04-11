import Vue from 'vue'
import Router from 'vue-router'
// import UserManage from '../views/userManage.vue'
// import MovieManage from '../views/movieManage.vue'
// import DataAnalysis from '../views/dataAnalysis.vue'

const UserManage = () => import('../views/userManage.vue')
const MovieManage = () => import('../views/movieManage.vue')
const DataAnalysis = () => import('../views/dataAnalysis.vue')

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/userManage',
                name: 'userManage',
                component: UserManage
            },
            {
                path: '/movieManage',
                name: 'movieManage',
                component: MovieManage
            },
            {
                path: '/dataAnalysis',
                name: 'dataAnalysis',
                component: DataAnalysis
            },
            {
                path: '/',
                name: 'userManage',
                component: UserManage
            },
        ]
    })
}
