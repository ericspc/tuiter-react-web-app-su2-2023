import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuit-summary-list/tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "https://yt3.googleusercontent.com/2kw8s66dhLUegJ3XrqZSkZMfp77CRhCfYm1NurDwDB2L9sT_-CaoUix_iWjoE_t66b07JzoR=s900-c-k-c0x00ffffff-no-rj"
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

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: { tuits: tuits },
    reducers: {
        createTuit(state, action) {
            state.tuits.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;