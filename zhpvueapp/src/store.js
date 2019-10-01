import axios from "axios";
import {
    API_URL
} from "./constans"

const state = {
    rankList: [],
    changedRank: 0
};
const getters = {
    rankListGenerator(state) {
        return state.rankList;
    },
    fetchDisplayRank(state) {
        return state.rankList[state.changedRank]
    }
};
const mutations = {
    UPDATE_RANK_LIST(state, payload) {
        state.rankList = payload;
    },
    UPDATE_CHANGED_RANK(state, payload) {
        state.changedRank = payload;
    }
};
const actions = {
    async fetchRankList(context) {
        const {
            data
        } = await axios.get(`${API_URL}/ranks`);
        context.commit('UPDATE_RANK_LIST', data)
    },
    updateChangedRank(context, id) {
        context.commit('UPDATE_CHANGED_RANK', id)
    }
};


export {
    state,
    getters,
    mutations,
    actions
}