import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    pojoTypeList: [
        {
            name: "bo",
            value: "bo"
        },
        {
            name: "vo",
            value: "vo"
        },
        {
            name: "dto",
            value: "dto"
        }

    ],
};
const getters = {
    pojoTypeList: function () {
        return state.pojoTypeList;
    }
};
const mutations = {};
const actions = {};


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
