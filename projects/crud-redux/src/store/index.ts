import { type Middleware, configureStore } from "@reduxjs/toolkit";
import usersReducer, { rollbackUser } from './users/users'
import { toast } from "sonner";

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}

const syncWithDatabaseMiddleware: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action
  const previousState = store.getState()
  const userIdToRemove = payload

  next(action)
  if (type === 'users/deleteUserById') {
    const userToRemove = previousState.users.find(user => user.id === userIdToRemove)
    fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) toast.success('usuario eliminado')
      })
      .catch(() => {
        if (userToRemove) store.dispatch(rollbackUser(userToRemove))
        console.log('error')
        toast.error(`Error al eliminar el usuario ${userIdToRemove}`)
    }
      )
  }
}

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch