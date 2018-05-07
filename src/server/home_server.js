import {getDataByServer} from '@/common/fetchData';
import * as configs from '@/common/config';
import * as types from '@/vuex/types';
import store from '@/vuex/store';
import {data} from '@/common/testData';

export const requestHotMovie = (isLoading, isRefreshing) => {
    store.commit({type: types.REQUEST_HOT, isLoading, isRefreshing});
    getDataByServer(configs.SERVER_BASE + configs.HOT_MOVIE, null).then(res => {
        store.commit({type: types.GET_HOT, hotData: res});
    })
}

export const requestSoonMovie = (isLoading, isRefreshing, successBK, errorBK) => {
    store.commit({type: types.REQUEST_SOON, isLoading, isRefreshing});
    console.log(configs.SERVER_BASE + configs.SOON_MOVIE)
    getDataByServer(configs.SERVER_BASE + configs.SOON_MOVIE, null).then(res => {
        store.commit({type: types.GET_SOON, soonData: res});
    })
    .catch(e => {
        errorBK && errorBK(e);
    })
}