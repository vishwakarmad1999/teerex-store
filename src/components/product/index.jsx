import React from "react";

const Product = (props) => {
  const { id, name, imageURL, currency, price, onClick, quantity } = props;

  return (
    <div className="card product row m-3">
      <img src={imageURL} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
        <div className="row card-text d-flex align-items-center mt-4">
          <div className="col-5 product-price">
            <strong>{`${currency} ${price}`}</strong>
          </div>
          <div className="col-7">
            <div className="w-100 d-grid">
              <button
                className="btn btn-primary"
                onClick={() => onClick({ id, quantity })}
              >
                Add ({quantity})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
