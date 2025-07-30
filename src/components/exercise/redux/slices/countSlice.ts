import { createSlice } from '@reduxjs/toolkit';

const initCountState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'count',
  initialState: initCountState,
  reducers: {
    increment: state => {
      state.count += 1;
    },

    decrement: state => {
      state.count -= 1;
    },

    reset: state => {
      state.count = 0;
    },
  },
});

const counterReducer = countSlice.reducer;

export const { increment, decrement, reset } = countSlice.actions;
export default counterReducer;
