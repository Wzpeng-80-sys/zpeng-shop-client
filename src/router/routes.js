import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
// import { search } from 'core-js/fn/symbol'

export default [
    {
        path: '/',
        component:Home
    },
    {
        name:'search',
        path: '/search/:keyword?',
        component: Search,
        props:(route) => ({keyword3:route.params.keyword,keyword4:route.query.keyword2})
    },
    {
        path: '/register',
        component:Register
    },
    {
        path: '/login',
        component:Login
    },
    
]