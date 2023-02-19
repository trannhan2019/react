import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import userApi from "../api/modules/user.api";

export default function UsersManager() {
  const [users, setUsers] = useState();
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(parseInt(newPage));
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    async function fetchDataUser() {
      const { response, error } = await userApi.getUserList({
        page,
        limit: rowsPerPage,
      });
      if (response) {
        setUsers(response.docs);
        setCount(response.totalDocs);
      }
      if (error) toast.error(error.message);
    }
    fetchDataUser();
  }, [page, rowsPerPage]);

  return (
    <Grid item xs={12}>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          {/* ////////EnhancedTableToolbar */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>BirthDay</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users &&
                  users.map((user) => (
                    <TableRow
                      key={user._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th">{user.fullName}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        {dayjs(user.birthday).format("DD/MM/YYYY")}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            count={count}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 20]}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Grid>
  );
}
