//Слайс який зберігає інформацію, що юзер вже залогінівся при оновленні сторінки, та дає змогу вийти з данного профілю
import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'user',
  initialState: { userIsLogged: false, userData: [] },
  reducers: {
    toggleUser(state, action) {
      const isUser = action.payload;
      state.userIsLogged = isUser;
    },
    exitUser(state) {
      state.userIsLogged = false;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
