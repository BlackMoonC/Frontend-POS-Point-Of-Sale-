import { Box } from "@mui/material";
import CardOrder from "../../components/Card/CardOrder";
import { useSelector } from "react-redux";
import { selectCartItem } from "../../features/cart/cartSlice";
import { CartProduct } from "../../lib/definitions";

export interface ICartProps {}

export default function Cart() {
  const Cart: Array<CartProduct> = useSelector(selectCartItem);

  console.log(Cart);
  return (
    <>
      <Box>
        <h1>Order List</h1>
        {Cart.map((item) => {
          return <CardOrder key={item.id} cart={item} />;
        })}
      </Box>
    </>
  );
}
