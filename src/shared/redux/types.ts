/* eslint-disable boundaries/element-types */
import { store } from '~/app/redux-store'

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
