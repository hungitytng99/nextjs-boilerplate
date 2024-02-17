'use client'

import { persistor, reduxStore } from '@/lib/redux/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export const StoreProvider = (props: React.PropsWithChildren) => {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  )
}
