import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Badge from './Badge'
import { Edit } from "./Edit"
import { Delete } from "./Delete"

import { useAppSelector } from "../hooks/store" 
import { useUserActions } from "../hooks/useUserActions"

export function LIstOfUsers() {
  const users = useAppSelector((state => state.users))
  const { removeUser } = useUserActions()
  return (
    <>
    <Badge quantity={users.length} />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <img
                  src={`https://unavatar.io/github/${row.github}`}
                  alt={row.name}
                  style={{ width: "32px", height: "32px", borderRadius: "50%" }}
                />
                {row.name}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
                <Edit/>
                <Delete handleRemoveUser={() => removeUser(row.id)}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
