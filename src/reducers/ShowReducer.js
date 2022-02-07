import { createSlice } from '@reduxjs/toolkit';

export const ShowReducer = createSlice({
  name: 'shows',
  initialState: {
    genre: null,
    keyword: '',
    show: null,
    shows: [],
    showCount: 0,
  },
  reducers: {
    setShows: (state, action) => {
      state.genre = action.payload.genre;
      state.shows = action.payload.shows;
      state.showCount = 10;
    },
    setShow: (state, action) => {
      state.show = action.payload;
    },
    setShowCount: (state) => {
      state.showCount += 10;
    },
    setKeyword: (state, action) => {
      state.keyword = action.payload
    }
  },
});

export const { setShows, setShow, setShowCount, setKeyword } = ShowReducer.actions;

export default ShowReducer.reducer;
