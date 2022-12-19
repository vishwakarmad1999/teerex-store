import { useProductInfo, useDispatch } from "@/stores";

const ProductsFilter = () => {
  const { filterData, selectedCheckboxes, products } = useProductInfo();
  const dispatch = useDispatch();

  function filterProducts(selectedCheckboxes) {
    const keys = Object.keys(selectedCheckboxes);

    const newProducts = products.filter((product) => {
      for (let i = 0; i < keys?.length; i++) {
        const key = keys[i];
        const value = product[key];

        if (
          selectedCheckboxes[key]?.size &&
          !selectedCheckboxes[key].has(value)
        ) {
          return false;
        }
      }
      return true;
    });

    dispatch({
      type: "setFilteredProducts",
      payload: newProducts,
    });
  }

  function handleCheckboxClick(payload) {
    const { key, value } = payload;

    const newSelectedCheckboxes = { ...selectedCheckboxes };
    if (newSelectedCheckboxes[key].has(value)) {
      newSelectedCheckboxes[key].delete(value);
    } else {
      newSelectedCheckboxes[key].add(value);
    }

    dispatch({
      type: "setSelectedCheckboxes",
      payload: newSelectedCheckboxes,
    });

    filterProducts(newSelectedCheckboxes);
  }

  return (
    <div className="filter-container mt-3">
      <ul>
        {Object.keys(filterData).map((key) => (
          <div key={key} className="mt-4">
            <h6>{filterData[key]?.title}</h6>
            {filterData[key]?.items.map((item) => (
              <div key={key + item.id} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={selectedCheckboxes?.[key]?.has(item.text)}
                  value={item.text}
                  id={key + item.id}
                  onChange={() =>
                    handleCheckboxClick({ key, value: item.text })
                  }
                />
                <label className="form-check-label" htmlFor={key + item.id}>
                  {item.text}
                </label>
              </div>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductsFilter;
