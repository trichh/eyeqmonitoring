import { useSelector, useDispatch } from 'react-redux';

import { setShow } from '../reducers/ShowReducer';
import { setModal } from '../reducers/ModalReducer';

const ShowModal = () => {
  const show = useSelector((state) => state.shows.show);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setModal({modal: 'show', status: false}));
    dispatch(setShow(null));
  }

  return (
    <div className="modal">
      <div className="modal-content showModal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <img src={show.image.medium} alt={show.name} />
        <h1>{show.name}</h1>
        <p>{show.summary.replace(/<(.|\n)*?>/g, '')}</p>
        <button type="button">Watch Now</button>
      </div>
    </div>
  )
}

export default ShowModal;
