import { useProductInfo, useDispatch } from "@/stores";
import filterProductsPipeline from "@/helpers/utils";

const TopNav = () => {
  const { searchText, selectedCheckboxes, products } = useProductInfo();
  const dispatch = useDispatch();

  function handleInputChange(e) {
    const searchText = e.target.value;

    const newProducts = filterProductsPipeline({
      products,
      searchText,
      selectedCheckboxes,
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
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          TeeRex Store
        </a>
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search products"
          value={searchText}
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-light" type="submit">
          Cart
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
