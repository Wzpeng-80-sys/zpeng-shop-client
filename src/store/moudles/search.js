import {reqSearch} from '@/api'

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