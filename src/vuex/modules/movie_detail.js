import {movieDetailMutation} from '../mutations';

const state = {
    isLoading: true,
    detail: {}
}

export default {
    namespace: true,
    state,
    mutations: movieDetailMutation
}