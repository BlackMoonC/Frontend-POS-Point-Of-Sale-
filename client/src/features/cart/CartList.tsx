import { Box, Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCartItem } from "./cartSlice";
import { CartProduct } from "../../lib/definitions";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import NumberInput from "../../components/NumberInput";

export default function Cart() {
  const Cart: Array<CartProduct> = useSelector(selectCartItem);

  const deleteCartProduct = () => {
    console.log("delete");
  };

  return (
    <>
      <Box>
        <h1>Order List</h1>
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Name"
          defaultValue="Hello World"
        />

        <TableContainer sx={{ my: 2 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nama Barang</TableCell>
                <TableCell align="center">Qty</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Cart.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">
                    <NumberInput />
                  </TableCell>
                  <TableCell align="right">{row.totalPrice}</TableCell>
                  <TableCell align="center">
                    <DeleteIcon onClick={() => deleteCartProduct()} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* {Cart.map((item) => {
          return <CardOrder key={item.id} cart={item} />;
        })} */}

        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            alert("Order List");
          }}>
          Orders
        </Button>
      </Box>
    </>
  );
}
