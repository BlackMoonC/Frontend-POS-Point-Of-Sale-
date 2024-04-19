import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CartProduct } from "../../lib/definitions";

interface Props {
  cart: CartProduct;
}

export default function CardOrder({ cart }: Props) {
  return (
    <>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 100, height: 100 }}
          image={cart.image}
          alt={cart.title}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="subtitle1" noWrap={true}>
              {cart.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div">
              {cart.quantity}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
