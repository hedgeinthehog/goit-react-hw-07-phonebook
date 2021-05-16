import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
});

const store = createStore(rootReducer, composeWithDevTools());

const persistor = persistStore(store);

export { store, persistor };
