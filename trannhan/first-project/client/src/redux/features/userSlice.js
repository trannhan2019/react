import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isSignIn: false,
    user: null,
  },
  reducers: {
    setIsSignIn: (state, action) => {
      state.isSignIn = action.payload;
    },
    setUser: (state, action) => {
      if (action.payload === null) {
        localStorage.removeItem("actkn");
      } else {
        if (action.payload.token)
          localStorage.setItem("actkn", action.payload.token);
      }
      state.user = action.payload;
    },
  },
});

export const { setIsSignIn, setUser } = userSlice.actions;
export default userSlice.reducer;
