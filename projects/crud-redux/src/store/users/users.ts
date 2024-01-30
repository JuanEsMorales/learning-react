import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
  {
    id: "1",
    name: "Juan Morales",
    email: "juanchito89768@gmail.com",
    github: "JuanEsMorales",
  },
  {
    id: "2",
    name: "Roman Pierce",
    email: "roman9768@gmail.com",
    github: "roman",
  },
  {
    id: "3",
    name: "Jhon Smith",
    email: "jhon68@gmail.com",
    github: "jhon",
  },
  {
    id: "4",
    name: "Miguel Angel",
    email: "migan68@gmail.com",
    github: "midudev",
  },
]

export type UserId = string

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: UserId
}

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__');
  if (persistedState) {
    return JSON.parse(persistedState).users;
  }
  return DEFAULT_STATE
})();



export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser : (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()
      state.push({id, ...action.payload})
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id)
    },
    rollbackUser: (state, action: PayloadAction<UserWithId>) => {
      const isUserAlreadyDefined = state.some(user => user.id === action.payload.id)
      if (!isUserAlreadyDefined) {
        state.push(action.payload)
      }
    }
  }
})

export default usersSlice.reducer 

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions