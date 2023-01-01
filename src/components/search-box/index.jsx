import { useProductInfo, useDispatch } from "@/stores";
import filterProductsPipeline from "@/helpers/utils";

const SearchBox = () => {
  const { products, searchText, selectedCheckboxes, cart } = useProductInfo();
  const dispatch = useDispatch();

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
    <input
      className="form-control search-box"
      type="search"
      placeholder="Search products"
      value={searchText}
      onChange={handleInputChange}
    />
  );
};

export default SearchBox;
