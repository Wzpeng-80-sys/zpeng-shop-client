import {reqCategoryList,reqBannerList,reqFloors,reqRecommends} from '@/api'

const state = {
    categoryList: [],
    bannerList: [],
    floors: [],
    recommends:[]
}

const mutations = {
    RECEIVE_CATEGORY_LIST(state, categoryList) {
        state.categoryList = categoryList.splice(0,15)
    },
    RECEIVE_BANNER_LIST(state, bannerList) {
        state.bannerList = bannerList
    },
    RECEIVE_FLOORS(state, floors) {
        state.floors = floors
    },
    RECEIVE_RECOMMENDS(state, recommends) {
        state.recommends = recommends
    },
}

const actions = {
    async getCategoryList({ commit }) {
        const result = await reqCategoryList()

        if (result.code === 200) {
            const categoryList = result.data
            commit('RECEIVE_CATEGORY_LIST',categoryList)
        }
    },
    async getBannerList({ commit }) {
        const result = await reqBannerList()

        if (result.code === 200) {
            const bannerList = result.data
            commit('RECEIVE_BANNER_LIST',bannerList)
        }
    },
    async getFloors({ commit }) {
        const result = await reqFloors()
        console.log(234);
        if (result.code === 200) {
            const floors = result.data
            commit('RECEIVE_FLOORS',floors)
        }
    },
    async getRecommends({ commit }) {
        const result = await reqRecommends()

        if (result.code === 200) {
            const recommends = result.data
            commit('RECEIVE_RECOMMENDS',recommends)
        }
    },
}

const getters = {

}


export default {
    state,
    mutations,
    actions,
    getters
}