import { useProductInfo, useDispatch } from "@/stores";
import CartProduct from "../cart-product";

const CartList = () => {
  const { cart, filteredProducts } = useProductInfo();
  const dispatch = useDispatch();

  let totalAmount = 0;
  let currency = null;

  function handleQuantityDecrease({ id, quantity }) {
    if (quantity > 1) {
      const newCart = {
        ...cart,
        [id]: quantity - 1,
      };

      const newProducts = filteredProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });

      dispatch({
        type: "setCart",
        payload: newCart,
      });

      dispatch({
        type: "setFilteredProducts",
        payload: newProducts,
      });
    }
  }

  function handleQuantityIncrease({ id, quantityLeft, quantity }) {
    if (quantityLeft > 0) {
      const newCart = {
        ...cart,
        [id]: quantity + 1,
      };

      const newProducts = filteredProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });

      dispatch({
        type: "setCart",
        payload: newCart,
      });

      dispatch({
        type: "setFilteredProducts",
        payload: newProducts,
      });
    }
  }

  function handleProductDelete(id) {
    const newCart = { ...cart };
    const quantityInTheCart = newCart[id];
    delete newCart[id];

    const newProducts = filteredProducts.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + quantityInTheCart,
        };
      }
      return product;
    });

    dispatch({
      type: "setCart",
      payload: newCart,
    });

    dispatch({
      type: "setFilteredProducts",
      payload: newProducts,
    });
  }

  const productsInTheCart = [];
  filteredProducts.forEach((product) => {
    const quantity = cart[product.id];
    if (quantity) {
      productsInTheCart.push({
        ...product,
        quantity: quantity,
        quantityLeft: product.quantity,
      });
      totalAmount += quantity * product.price;
      if (!currency) currency = product.currency;
    }
  });

  if (!totalAmount) {
    return <h2 className="text-center mt-5">No items in the cart</h2>;
  }

  return (
    <div className="cart d-flex align-items-center flex-column">
      {productsInTheCart.map((product) => (
        <CartProduct
          {...product}
          key={product.id}
          onQuantityDecrease={handleQuantityDecrease}
          onQuantityIncrease={handleQuantityIncrease}
          onProductDelete={handleProductDelete}
        />
      ))}
      <strong className="mt-4">{`Total Amount = ${currency} ${totalAmount}`}</strong>
    </div>
  );
};

export default CartList;
