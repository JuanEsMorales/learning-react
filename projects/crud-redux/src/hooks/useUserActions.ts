import { UserId, addNewUser, deleteUserById } from "../store/users/users"
import { useAppDispatch } from "./store"

export function useUserActions() {
  const dispatch = useAppDispatch()

  const addUser = ({ name, email, github }: { name: string, email: string, github: string }) => {
    dispatch(addNewUser({ name, email, github }))
  }
  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }

  return { removeUser, addUser }
}