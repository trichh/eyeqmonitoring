import { useDispatch } from 'react-redux';

import { setModal } from '../reducers/ModalReducer';

import Menu from './Menu';

const MenuModal = () => {
  const dispatch = useDispatch();

  return (
    <div className="modal">
      <div className="modal-content menuModal-content">
        <span className="close" onClick={() => dispatch(setModal({modal: 'menu', status: false}))}>&times;</span>
        <Menu />
      </div>
    </div>
  )
}

export default MenuModal;
