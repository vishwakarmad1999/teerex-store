import { Link, Outlet } from "react-router-dom";
import { useProductInfo, useDispatch } from "@/stores";
import filterProductsPipeline from "@/helpers/utils";

const CartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
};

const TopNav = () => {
  const { searchText, selectedCheckboxes, products, cart } = useProductInfo();
  const dispatch = useDispatch();

  let totalQuantityInTheCart = Object.values(cart).reduce((a, b) => a + b, 0);
  if (totalQuantityInTheCart > 9) {
    totalQuantityInTheCart = "9+";
  }

  function handleInputChange(e) {
    const searchText = e.target.value;

    const newProducts = filterProductsPipeline({
      products,
      searchText,
      selectedCheckboxes,
      cart,
    });

    dispatch({
      type: "setSearchText",
      payload: searchText,
    });

    dispatch({
      type: "setFilteredProducts",
      payload: newProducts,
    });
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            TeeRex Store
          </Link>
          <input
            className="form-control w-50"
            type="search"
            placeholder="Search products"
            value={searchText}
            onChange={handleInputChange}
          />
          <div className="cart-container">
            <Link to="/cart">
              <button className="btn btn-light" type="submit">
                <CartIcon />
              </button>
            </Link>
            <strong className="items-count text-dark">
              {totalQuantityInTheCart ? totalQuantityInTheCart : ""}
            </strong>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default TopNav;
