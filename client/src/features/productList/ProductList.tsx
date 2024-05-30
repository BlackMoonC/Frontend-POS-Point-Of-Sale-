import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";
import { Product } from "../../lib/definitions";
import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import React from "react";

const URL: string = "http://fakestoreapi.com/products";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductList() {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // Tabs
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

  const handleClickBuy = (product: Product) => {
    console.log("click");
    dispatch(addItemToCart(product));
  };

  return (
    <Box>
      <h1>Produk Detail</h1>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 1 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example">
          <Tab label="ATK" {...a11yProps(0)} />
          <Tab label="Sembako" {...a11yProps(1)} />
          <Tab label="Bahan & Alat Kebersihan" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Typography sx={{ mb: 2 }} variant="h6">
        Produk{" "}
        <span style={{ fontWeight: "normal", fontSize: "12px" }}>
          (44 Produk)
        </span>
      </Typography>
      <Paper elevation={2} sx={{ p: 4 }}>
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
      </Paper>
    </Box>
  );
}
