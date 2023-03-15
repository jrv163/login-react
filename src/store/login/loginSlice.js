
import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isAuthenticated: 'checking', // 'authenticated', 'not-authenticated',
        user:{},
        errorMessage: undefined
    },
    reducers: {
      onAuthenticated: ( state ) => {
        state.isAuthenticated = 'checking';
        state.user = {};
        state.errorMessage = undefined;
      },

      onLogin: ( state, { payload } ) => {
        state.isAuthenticated = 'authenticated';
        state.user = payload;
        state.errorMessage = undefined;
      },

      onLogout: ( state, { payload } ) => {
        state.isAuthenticated = 'not-authenticated';
        state.user = {};
        state.errorMessage = payload;
      },

      clearErrorMessage: ( state ) => {
          state.errorMessage = undefined;
      }
    }
});


// Action creators are generated for each case reducer function
export const { onAuthenticated, onLogin, onLogout, clearErrorMessage } = loginSlice.actions;