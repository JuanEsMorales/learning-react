import { SortBy, type User } from "../types.d"

interface Props {
  changeSorting: (sort: SortBy) => void
  deleteUser: (email: string) => void
  showColors: boolean
  users: User[]
}
export function ListOfUsers({ users, showColors, deleteUser, changeSorting }: Props) {
  if (!users) {
    return <p>Cargando...</p>; // o cualquier otro indicador de carga que desees mostrar
  }
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Foto</th>
          <th onClick={() => {changeSorting(SortBy.NAME)}}>Nombre</th>
          <th onClick={() => {changeSorting(SortBy.LAST)}}>Apellido</th>
          <th onClick={() => {changeSorting(SortBy.COUNTRY)}}>País</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          const backgroundColor = index % 2 === 0 ? '#333' : '555'
          const color = showColors ? backgroundColor : 'transparent'
          return (
            <tr key={user.email} style={{ backgroundColor: color }}>
              <td>
                <img src={user.picture.thumbnail} alt={user.name.title} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td><button onClick={() => deleteUser(user.email)}>Borrar</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
