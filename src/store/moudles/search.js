import {reqSearch} from '@/api'
// import { delete } from 'vue/types/umd'
// import { delete } from 'vue/types/umd'

const state = {
    productList : {}
}


const mutations = {
    RECEVICE_PRODUCT_LIST(state, productList){
        state.productList = productList
    }
}

const actions={
    async getProductList({ commit }, searchParams) {
        // searchParams = {...searchParams}
        // Object.keys(searchParams).forEach(key => {
        //     if (searchParams[key] === '' || (Array.isArray(searchParams[key]) && searchParams[key].length === 0)) {
        //         delete searchParams[key]
        //     }
        // })

        // searchParams = { ...searchParams }
        // Object.keys(searchParams).forEach(key => {
        //     if (searchParams[key] === '' || (Array.isArray(searchParams[key]) && searchParams[key].length === 0)) {
        //         delete searchParams[key]
        //     }
        // })
        // searchParams = { ...searchParams }
        // Object.keys(searchParams).forEach(key => {
        //     if (searchParams[key] === '' || (Array.isArray(searchParams[key]) && searchParams[key].length === 0)) {
        //         delete searchParams[key]
        //     }
        // })
        searchParams = { ...searchParams }
        Object.keys(searchParams).forEach(key => {
            if (searchParams[key] === '' || (Array.isArray(searchParams[key]) && searchParams[key].length === 0)) {
                delete searchParams[key]
            }
        })

        const result = await reqSearch(searchParams)
        if (result.code === 200) {
            commit('RECEVICE_PRODUCT_LIST',result.data)
        }
    }
    
}


const getters = {
    goodsList(state) {
        return state.productList.goodsList || []
    },
    trademarkList(state) {
        return state.productList.trademarkList || []
    },
    attrsList(state) {
        return state.productList.attrsList || []
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}