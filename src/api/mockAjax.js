

import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'




const service = axios.create({
    baseURL: '/mock',
    timeout:20000
})

service.interceptors.request.use((config) => {
    NProgress.start()
    return config
})

service.interceptors.response.use(
    response => {
        NProgress.done()
        return response.data
    },
    error => {
        NProgress.done()
        alert(error.message || '未知的请求错误')
        return error.message
    }
)


export default service