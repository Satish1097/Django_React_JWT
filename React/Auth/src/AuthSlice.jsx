import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    refreshToken: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;

// Thunk to handle login
export const login = (username, password) => async dispatch => {
  dispatch(loginStart());
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/token/', { username, password });
    dispatch(loginSuccess({
      token: response.data.access,
      refreshToken: response.data.refresh,
    }));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
