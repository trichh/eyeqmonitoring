import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setShowCount } from '../reducers/ShowReducer';

import { alignColumns } from '../helpers';

import Show from './Show';

const Shows = () => {
  const shows = useSelector((state) => state.shows.shows);
  const showCount = useSelector((state) => state.shows.showCount);
  const genre = useSelector((state) => state.shows.genre);
  const dispatch = useDispatch();

  useEffect(() => {
    alignColumns();
  });

  return (
    <div className="shows">
      <h1>{genre} TV Shows</h1>
      <div className="showContainer">
        { (shows.length > 0) ? shows.slice(0, showCount).map((value, iteration) =>
            (value.image) ? <Show show={value} key={iteration} /> : null
          ) : <p>No TV Shows Found</p>
        }
      </div>
      { (shows.slice(0, showCount).length % 10 === 0 && shows.slice(0, showCount).length !== shows.length) ? <p onClick={() => dispatch(setShowCount())}>View More +</p> : null }
    </div>
  )
}

export default Shows;
