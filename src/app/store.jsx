import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { rootReducer } from '../app/rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { PersistGate } from 'redux-persist/integration/react'
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ["app"],
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
 })
})

let persistor = persistStore(store)
const  StoreProvider = ({children})=><Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {children}
      </PersistGate>
   </Provider>

export default StoreProvider