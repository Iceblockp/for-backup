import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { productApi } from "../api/product";
import Product from "./Product";
import ProductLoader from "./ProductLoader";
import { DataContext } from "../context/DataContext";

const ProductGroup = () => {
  const [ready, setReady] = useState(false);
  const {products,setProduct} = useContext(DataContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productApi.get("/");
      setProduct(res.data);
      setReady(true);
    };

    fetchProduct();
  }, []);

  return (
    <section className="product-list mb-10">
      <Container>
        <div
          id="productList"
          className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
        >
          {!ready && (
           <>
           <ProductLoader />
           <ProductLoader />
           <ProductLoader />
           <ProductLoader />
           <ProductLoader />
           <ProductLoader />
           </>
          )}
          
          {ready &&
            products.map((product, id) => (
              <Product key={id} product={product} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductGroup;
