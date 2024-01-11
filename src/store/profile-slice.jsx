import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'user',
  initialState: { userIsLogged: false, userData: [] },
  reducers: {
    toggleUser(state) {
      state.userIsLogged = true;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
