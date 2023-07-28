import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: { tuits: tuits }
    // initialState: tuitsArray
});

export default tuitsSlice.reducer;