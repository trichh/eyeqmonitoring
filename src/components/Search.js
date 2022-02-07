import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosSearch } from "react-icons/io";

import { setShows, setKeyword } from '../reducers/ShowReducer';

import { searchShows } from '../helpers';

const Search = () => {
  const genre = useSelector((state) => state.shows.genre);
  const keyword = useSelector((state) => state.shows.keyword);
  const dispatch = useDispatch();

  const search = (e) => {
    if (e.key === "Enter") {
      searchShows(keyword, genre)
      .then(response => dispatch(setShows({
        genre: genre,
        shows: response
      })))
      .catch(error => alert(error));
    }
  }

  return (
    <div className="search">
      <h1>Search {genre} TV Shows</h1>
      <div className="searchInput">
        <IoIosSearch color="#9EA0A4" size="1.5em" />
        <input type='text' name='keyword' placeholder='Search by Show Name' value={keyword} onChange={(e) => dispatch(setKeyword(e.target.value))} onKeyPress={e => search(e)} />
      </div>
    </div>
  )
}

export default Search;
