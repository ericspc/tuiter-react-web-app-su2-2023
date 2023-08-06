import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {findTuitsThunk} from "../services/tuits-thunks";
const initialState = {
    tuits: [],
    loading: false
}

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "https://yt3.googleusercontent.com/2kw8s66dhLUegJ3XrqZSkZMfp77CRhCfYm1NurDwDB2L9sT_-CaoUix_iWjoE_t66b07JzoR=s900-c-k-c0x00ffffff-no-rj",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSliceHome = createSlice({
    name: 'tuitshome',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = [] },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }
    },
    reducers: { }
});


export const {createTuit,deleteTuit}  = tuitsSliceHome.actions;
export default tuitsSliceHome.reducer;