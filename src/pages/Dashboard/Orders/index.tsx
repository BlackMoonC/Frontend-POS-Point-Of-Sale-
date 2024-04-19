import { Container, Stack } from "@mui/material";
import ProductList from "../../../features/productList/ProductList";
import Cart from "../../../features/cart/CartList";

export default function Orders() {
  return (
    <>
      <Container>
        <Stack direction="row" spacing={2}>
          <ProductList />
          <Cart />
        </Stack>
      </Container>
    </>
  );
}
