import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'


export default [
    {
        path: '/',
        component:Home
    },
    {
        path: '/login',
        component:Login
    },
    {
        path: '/register',
        component:Register
    },
    {
        name:'search',
        path: '/search/:keyword?',
        component: Search,
        props:(route)=>({keyword3:route.params.keyword,keyword4:route.query.keyword2})
    },
    {
        path: '/',
        redirect:Home
    }

]