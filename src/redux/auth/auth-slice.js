import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from ".";

const initialState = {
  user: { name: null, email: null, balance: null },
  token: null,
  isRegistered: false, // email sent
  isVerified: false, // for email re-sending
  isLoggedIn: false,
  errorMessage: null,
  isFetchingCurrent: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth(state) {
      state.isRegistered = false;
      state.errorMessage = null;
    },
  },
  extraReducers:
    // this is working:
    (builder) => {
      builder.addCase(authOperations.register.fulfilled, (state, action) => {
        console.log("register success");
        state.isRegistered = true;
        state.isVerified = false;
        state.isLoggedIn = false;
        state.errorMessage = null;
        state.isFetchingCurrent = false;
      });

      builder.addCase(authOperations.register.rejected, (state, action) => {
        console.log("register rejeted");
        state.isRegistered = false;
        state.isVerified = false;
        state.isLoggedIn = false;
        state.errorMessage = action.payload.message;
        state.isFetchingCurrent = false;
      });

      builder.addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user.name = action.payload.data.name;
        state.user.email = action.payload.data.email;
        state.user.balance = action.payload.data.balance;
        state.token = action.payload.data.token;
        state.isRegistered = true;
        state.isVerified = action.payload.data.verify;
        state.isLoggedIn = true;
        state.errorMessage = null;
        state.isFetchingCurrent = false;
      });

      builder.addCase(authOperations.logIn.rejected, (state, action) => {
        console.log("login rejeted");
        state.isVerified = false;
        state.isLoggedIn = false;
        state.errorMessage = action.payload.message;
        state.isFetchingCurrent = false;
      });

      builder.addCase(authOperations.logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null, balance: null };
        state.token = null;
        state.isRegistered = false;
        state.isVerified = false;
        state.isLoggedIn = false;
        state.errorMessage = null;
        state.isFetchingCurrent = false;
      });

      builder.addCase(
        authOperations.fetchCurrentUser.pending,
        (state, action) => {
          state.isFetchingCurrent = true;
        }
      );

      builder.addCase(
        authOperations.fetchCurrentUser.fulfilled,
        (state, action) => {
          state.user.name = action.payload.name;
          state.user.email = action.payload.email;
          state.user.balance = action.payload.balance;
          state.isRegistered = false;
          state.isVerified = true;
          state.isLoggedIn = true;
          state.errorMessage = null;
          state.isFetchingCurrent = false;
        }
      );

      builder.addCase(
        authOperations.fetchCurrentUser.rejected,
        (state, action) => {
          state.user = { name: null, email: null, balance: null };
          state.token = null;
          state.isRegistered = false;
          state.isVerified = false;
          state.isLoggedIn = false;
          state.isFetchingCurrent = false;
        }
      );

      builder.addCase(authOperations.balanceInit.fulfilled, (state, action) => {
        console.log("balance success");
        state.user.balance = action.payload.data.balance;
      });

      builder.addCase(authOperations.balanceInit.rejected, (state, action) => {
        console.log("balance reject");
      });
    },
});
export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;
