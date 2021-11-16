import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getCommentsAsync: any = createAsyncThunk(
    'getCommets',
    async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments', requestOptions);
        if (resp.ok) {
            const response = await resp.json();
            return response;
        }
    }
);

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: { comments: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCommentsAsync.fulfilled, (state: any, { payload }) => {
            state.comments   = payload;
        })
        
    }
});

export default commentsSlice;
