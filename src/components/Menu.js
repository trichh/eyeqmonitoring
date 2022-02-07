import { useDispatch } from 'react-redux';

import { setUser } from '../reducers/UserReducer';
import { setShows, setKeyword } from '../reducers/ShowReducer';
import { setModal } from '../reducers/ModalReducer';

import { filterShows, getInitialShows } from '../helpers';

const Menu = () => {
  const dispatch = useDispatch();

  /* sets shows within selected genre */
  const selectGenre = (genre) => {
    filterShows(genre)
    .then((response) => {
      dispatch(setShows({
        genre: genre,
        shows: response
      }));
    })
    .catch(error => alert(error));
    dispatch(setKeyword(''));
    dispatch(setModal({modal: 'menu', status: false}));
  }

  /* sets initial shows again and also removes the genre and keyword */
  const clearShows = () => {
    getInitialShows()
    .then(response => dispatch(setShows({
      genre: null,
      shows: response
    })))
    .catch(error => alert(error));
    dispatch(setKeyword(''));
    dispatch(setModal({modal: 'menu', status: false}));
  }

  const logout = () => {
    dispatch(setUser({ user: {admin: false, emailAddress: ""}, authenticated: false}));
    dispatch(setKeyword(''));
  }

  return (
    <ul>
      <li onClick={clearShows}>Home</li>
      <li onClick={() => selectGenre('Action')}>Action</li>
      <li onClick={() => selectGenre('Drama')}>Drama</li>
      <li onClick={() => selectGenre('Horror')}>Horror</li>
      <li onClick={() => selectGenre('Romance')}>Romance</li>
      <li onClick={() => selectGenre('Science-Fiction')}>Science-Fiction</li>
      <li onClick={logout}>Logout</li>
    </ul>
  )
}

export default Menu;
