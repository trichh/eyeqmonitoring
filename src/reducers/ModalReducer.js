import { createSlice } from '@reduxjs/toolkit';

export const ModalReducer = createSlice({
  name: 'shows',
  initialState: {
    menu: false,
    show: false
  },
  reducers: {
    setModal: (state, action) => {
      state[action.payload.modal] = action.payload.status;
    }
  },
});

export const { setModal } = ModalReducer.actions;

export default ModalReducer.reducer;
