import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Card from "../../../components/Card";
import Grid from "@mui/material/Grid";
import axios from "axios";

const URL: string = "http://fakestoreapi.com/products";

export default function Orders() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await axios.get(URL);
        setProduct(response.data);
      } catch (err) {
        console.info(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={6} lg={3}>
            <Card />
          </Grid>
          <Grid item xs={6} lg={3}>
            <Card />
          </Grid>
          <Grid item xs={6} lg={3}>
            <Card />
          </Grid>
          <Grid item xs={6} lg={3}>
            <Card />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
