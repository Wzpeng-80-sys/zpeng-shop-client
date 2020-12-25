import axios from 'axios'
import { reject, resolve } from 'core-js/fn/promise'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

/* const service = axios.create({
    baseURL: '/api',
    timeout:20000,
})

service.interceptors.request.use(config => {
    Nprogress.start()
    return config
})

service.interceptors.response.use(
    response => {
        Nprogress.done()
        return response.data
    },
    error => {
        Nprogress.done()
        alert(error.message || '未知错误')
        return Promise.reject(error)
    }
)

export default servive */

const service = axios.create({
    baseURL: '/api',
    timeout:20000
})


service.interceptors.request.use((config) => {

    Nprogress.start()

    return config
})

service.interceptors.response.use(
    response => {

        Nprogress.done()

        return response.data
    },
    error => {
        Nprogress.done()

        alert(error.message || '未知错误')

        return Promise.reject(error)
    }
)


/* Promise.resolve(config)
    .then((config) => {
    return config
    }).then((config) => {
        return new Promise((resolve, reject) => {
            resolve(response)
            reject(error)
    })
    })
    .then(
        (response) => {
            return response.data
        },
        (error) => {
            // return Promise.error
            throw error
        }
)

 */



/* Promise.resolve(config).then((config) => {
     return config
}).then((config) => {
    return new Promise((resolve, reject) => {
        resolve(response)
        reject(error)
    })
}).then(
    response => {
        return response.data
    },
    error => {
        throw error
    }
 ) */

export default service 