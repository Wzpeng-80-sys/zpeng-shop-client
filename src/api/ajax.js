// /* 
//     axios的二次封装

// */

// import axios from 'axios'
// // import { reject } from 'core-js/fn/promise'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

// const service = axios.create({
//     baseURL: 'http://39.99.186.36/api',
//     timeout:20000
// })

// service.interceptors.request.use((config) => {

//     NProgress.start()

//     return config
// })

// service.interceptors.response.use(
//     response => {

//         NProgress.done()

//         return response.data
//     },
//     error => {

//         NProgress.done()

//         alert(error.message || '未知的请求错误')

//         //throw error
//         return Promise.reject(error)
//     }
    
// )


// // Promise.resolve(config)
// //     .then((config) => {
// //     return config
// //     })
// //     .then((config) => {
// //         return new Promise((resolve, reject) => {
// //             resolve(response)
// //             reject (error)
// //     })
// //     })
// //     .then(
// //         (response) => {
// //             return response.data
// //         },
// //         (error) => {
// //             throw error
// //         }
// // )

// export default service


import axios from 'axios'
// import { reject, resolve } from 'core-js/fn/promise'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import { config } from 'vue/types/umd'

// const service = axios.create({
//     baseURL: '/api',
//     timeout:20000,
    
// })

// service.interceptors.request.use((config) => {
//     NProgress.start()
//     return config
// })

// service.interceptors.response.use(
//     response => {
//         NProgress.done()
//         return response.data
//     },
//     error => {
//         NProgress.done()

//         alert(error.message || '未知错误')
//         return error.message
//     }
// )

// export default service


const service = axios.create({
    baseURL: '/api',
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

// Promise.resolve(config)
//     .then((config) => {
//     return config
// })
//     .then((config) => {
//         return new Promise((resolve, reject) => {
//             resolve(response)
//             reject(error)
//     })
//     })
//     .then(
//         (response) => {
//             return response.data
//         }
//         (error) => {
//             // return error.message
//             throw error
//         }
// )


/* Promise.resolve(config)
    .then((config) => {
    return config
    })
    .then((config) => {
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
            // return error.message
            throw error
        }
) */
export default service