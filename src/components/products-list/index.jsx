import { useEffect } from "react";

import { useProductInfo, useDispatch } from "@/stores";
import Product from "../product";
import http from "@/helpers/http";

const ProductsList = ({ dataUri, onProductsFetch }) => {
  const { filteredProducts, cart } = useProductInfo();
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

    dispatch({
      type: "setFilteredProducts",
      payload: products,
    });
  }

  function handleProductClick({ id, quantity }) {
    if (quantity === 0) {
      dispatch({
        type: "setErrorMessage",
        payload: "The product is out of stock!",
      });
    } else {
      let newCart = null;

      if (cart[id]) {
        newCart = {
          ...cart,
          [id]: cart[id] + 1,
        };
      } else {
        newCart = {
          ...cart,
          [id]: 1,
        };
      }

      const newProducts = filteredProducts.map((prod) => {
        if (prod.id === id) {
          return {
            ...prod,
            quantity: prod.quantity - 1,
          };
        }
        return prod;
      });

      dispatch({
        type: "setFilteredProducts",
        payload: newProducts,
      });

      dispatch({
        type: "setCart",
        payload: newCart,
      });
    }
  }

  // TODO: Replace it with dynamic UI
  if (!filteredProducts) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="row">
        {filteredProducts.map((product) => (
          <Product key={product.id} {...product} onClick={handleProductClick} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
