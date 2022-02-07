import { useDispatch } from 'react-redux';
import { IoIosMenu } from "react-icons/io";

import { setShows, setKeyword } from '../reducers/ShowReducer';
import { setModal } from '../reducers/ModalReducer';

import Menu from './Menu';

import { getInitialShows } from '../helpers';

const Header = () => {
  const dispatch = useDispatch();

  /* sets initial shows again and also removes the genre and keyword */
  const clearShows = () => {
    getInitialShows()
    .then(response => dispatch(setShows({
      genre: null,
      shows: response
    })))
    .catch(error => alert(error));
    dispatch(setKeyword(''));
  }

  return (
    <div className="header">
      <img src="imgs/eyeq-monitoring-logo.png" width="200px" alt="Eye Q Monitoring Logo" onClick={clearShows} />
      <IoIosMenu color="#1F72BD" size="3em" onClick={() => dispatch(setModal({modal: 'menu', status:true}))} />
      <Menu />
    </div>
  )
}

export default Header;
