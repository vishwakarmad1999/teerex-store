import { useProductInfo } from "@/stores";

const CartList = () => {
  const { cart, products } = useProductInfo();

  console.log(cart, products);

  return <div>CartList</div>;
};

export default CartList;
