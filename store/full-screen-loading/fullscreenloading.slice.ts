import { createSlice } from '@reduxjs/toolkit';

interface FullScreenLoadingState {
  isLoading: boolean;
}

const initialState: FullScreenLoadingState = {
  isLoading: false,
};

export const fullScreenLoadingSlice = createSlice({
  name: 'full-screen-loading',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, stopLoading } = fullScreenLoadingSlice.actions;

export default fullScreenLoadingSlice.reducer;
