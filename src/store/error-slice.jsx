import { createSlice } from '@reduxjs/toolkit';
const errorSlice = createSlice({
  name: 'error',
  initialState: {
    errorCode: null,
    errorArray: [
      {
        id: '1',
        err: 'YOU ARE NOT LOGGED',
      },
      { id: 2, err: 'PRODUCT DOESNT EXIST' },
      { id: 3, err: 'PAGE DOESNT EXIST' },
    ],
  },
  reducers: {
    changeErrorState(state, action) {
      const errId = action.payload;
      const currentErr = state.errorArray.find((err) => err.id === errId);
      state.errorCode = currentErr.err;
    },
  },
});
export const errorActions = errorSlice.actions;

export default errorSlice;
