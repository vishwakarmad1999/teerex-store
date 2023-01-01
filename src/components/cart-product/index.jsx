import React from "react";

const CartProduct = (props) => {
  const {
    id,
    name,
    imageURL,
    currency,
    price,
    quantity,
    quantityLeft,
    onQuantityDecrease,
    onQuantityIncrease,
    onProductDelete,
  } = props;

  return (
    <div className="cart-product mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <img src={imageURL} width="100" />
        <div className="d-flex flex-column description">
          <strong className="">{name}</strong>
          <strong>{currency + " " + price}</strong>
        </div>
        <div className="quantity-container">
          <button
            className="qty-btn"
            onClick={() => {
              onQuantityDecrease({ id, quantityLeft, quantity });
            }}
          >
            -
          </button>
          <strong>{quantity}</strong>
          <button
            className="qty-btn"
            onClick={() => {
              onQuantityIncrease({ id, quantityLeft, quantity });
            }}
          >
            +
          </button>
        </div>
        <button
          className="btn btn-outline-danger ms-4"
          onClick={() => {
            onProductDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
