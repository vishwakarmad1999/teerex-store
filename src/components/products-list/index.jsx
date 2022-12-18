import { useEffect } from "react";

import { useProductInfo, useDispatch } from "@/stores";
import Product from "../product";
import http from "@/helpers/http";

const ProductsList = ({ dataUri, onProductsFetch }) => {
  const { products } = useProductInfo();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const products = await http(dataUri);
    setProducts(products);
    onProductsFetch(products);
  }

  function setProducts(products) {
    dispatch({
      type: "setProducts",
      payload: products,
    });
  }

  function handleProductClick(id) {
    console.log(id);
  }

  // TODO: Replace it with dynamic UI
  if (!products) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} {...product} onClick={handleProductClick} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
