import { UserId, deleteUserById } from "../store/users/users"
import { useAppDispatch } from "./store"

export function useUserActions() {
  const dispatch = useAppDispatch()

  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }

  return { removeUser }
}