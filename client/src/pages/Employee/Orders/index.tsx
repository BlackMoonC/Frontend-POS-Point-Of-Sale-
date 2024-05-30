import { Box } from "@mui/material";
import Cart from "../../../features/cart/CartList";
import ListProduct from "../../../components/ListProduct";

export default function Orders() {
  return (
    <>
      <Box display="flex">
        <Box
          sx={{
            flex: "0 0 80%",
          }}>
          <ListProduct />
        </Box>
        <Box
          sx={{
            flex: "0 0 20%",
            padding: 2,
            margin: 1,
          }}>
          <Cart />
        </Box>
      </Box>
    </>
  );
}
