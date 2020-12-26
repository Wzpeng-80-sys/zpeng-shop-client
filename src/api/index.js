/* 
    包含应用的所有接口的接口请求函数
    
*/

///api/product/getBaseCategoryList  GET 

import ajax from './ajax'

export function reqCategoryList() {
    // return ajax.get('/product/getBaseCategoryList')
    // return ajax('/product/getBaseCategoryList')
    return ajax({
        url: '/product/getBaseCategoryList',
        // method:'get'
    })
}

export const reqBannerList = () => ajax('/cms/banner')