import { useDispatch } from 'react-redux';

import { setShow } from '../reducers/ShowReducer';
import { setModal } from '../reducers/ModalReducer';

const Show = (props) => {
  const dispatch = useDispatch();

  const selectShow = (show) => {
    dispatch(setModal({modal: 'show', status: true}));
    dispatch(setShow(show));
  }

  return (
    <div className="show" onClick={() => selectShow(props.show)}>
      <div className="imageContainer" style={{backgroundImage: `url(${props.show.image.medium})`}}>
        <p className="showName">{props.show.name}</p>
        <p className="showRating">{props.show.rating.average}</p>
        <p className="showPremiered">{props.show.premiered.substring(0, 4)}</p>
      </div>
    </div>
  )
}

export default Show;
