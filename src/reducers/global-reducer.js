export default function (state, action) {
  switch (action.type) {
    case "setFilterData": {
      return {
        ...state,
        filterData: action.payload,
      };
    }
    case "setFilteredProducts": {
      return {
        ...state,
        filteredProducts: action.payload,
      };
    }
    case "setProducts": {
      return {
        ...state,
        products: action.payload,
      };
    }
    case "setSelectedCheckboxes": {
      return {
        ...state,
        selectedCheckboxes: action.payload,
      };
    }
    case "setSearchText": {
      return {
        ...state,
        searchText: action.payload,
      };
    }
  }
}
