import { configureStore } from '@reduxjs/toolkit';

import ModalReducer from './reducers/ModalReducer';
import ShowReducer from './reducers/ShowReducer';
import UserReducer from './reducers/UserReducer';

export default configureStore({
  reducer: {
    modals: ModalReducer,
    shows: ShowReducer,
    users: UserReducer
  },
});
