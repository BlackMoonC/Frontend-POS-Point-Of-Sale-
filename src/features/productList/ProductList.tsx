import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";
import { Product } from "../../lib/definitions";
import { Box } from "@mui/material";

const URL: string = "http://fakestoreapi.com/products";

export default function ProductList() {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await axios.get(URL);
        console.log(response.data);
        setProduct(response.data);
      } catch (err) {
        console.info(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  //   const { data, isLoading } = useQuery({
  //     queryFn: async () => {
  //       const response = await axios.get(URL);
  //       return response;
  //     },
  //   });

  const handleClickBuy = (product: Product) => {
    console.log("click");
    dispatch(addItemToCart(product));
  };

  return (
    <Box>
      <h1>Produk Detail</h1>
      <Grid container spacing={3}>
        {!loading ? (
          product.map((item) => (
            <Grid item xs={6} lg={3} key={item.id}>
              <Card handleClickBuy={handleClickBuy} product={item} />
            </Grid>
          ))
        ) : (
          <h1>...Loading</h1>
        )}
      </Grid>
    </Box>
  );
}
