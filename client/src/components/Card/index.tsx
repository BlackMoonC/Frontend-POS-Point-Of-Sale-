import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "../../lib/definitions";

type MediaCardProps = {
  product: Product;
  handleClickBuy: (value: Product) => void;
};

const MediaCard = ({ product, handleClickBuy }: MediaCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title="image-product"
      />
      <CardContent sx={{ textOverflow: "ellipsis" }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleClickBuy(product)} size="small">
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
