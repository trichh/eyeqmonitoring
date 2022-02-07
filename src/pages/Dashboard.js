import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setShows } from '../reducers/ShowReducer';

import Admin from '../components/Admin';
import Header from '../components/Header';
import Search from '../components/Search';
import Shows from '../components/Shows';
import MenuModal from '../components/MenuModal';
import ShowModal from '../components/ShowModal';

import { getInitialShows } from '../helpers';

const Dashboard = () => {
  const admin = useSelector((state) => state.users.admin);
  const menuModalIsOpen = useSelector((state) => state.modals.menu);
  const showModalIsOpen = useSelector((state) => state.modals.show);
  const dispatch = useDispatch();

  useEffect(() => {
    getInitialShows()
    .then(response => dispatch(setShows({
      genre: null,
      shows: response
    })))
    .catch(error => alert(error));
  }, []);

  return (
    <div className="dashboard">
      { (menuModalIsOpen) ? <MenuModal /> : null }
      { (showModalIsOpen) ? <ShowModal /> : null }
      <Header />
      { (admin) ? <Admin /> : null }
      <Search />
      <Shows />
    </div>
  )
}

export default Dashboard;
