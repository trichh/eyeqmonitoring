import { createSlice } from '@reduxjs/toolkit';

export const UserReducer = createSlice({
  name: 'users',
  initialState: {
    authenticated: false,
    admin: false,
    emailAddress: "",
    users: [
      {"emailAddress": "tyler@gmail.com", "password": "password", admin: false},
      {"emailAddress": "admin@gmail.com", "password": "adminpassword", admin: true}
    ]
  },
  reducers: {
    setUser: (state, action) => {
      state.authenticated = action.payload.authenticated;
      state.admin = action.payload.user.admin;
      state.emailAddress = action.payload.user.emailAddress;
    }
  },
});

export const { setUser } = UserReducer.actions;

export default UserReducer.reducer;
