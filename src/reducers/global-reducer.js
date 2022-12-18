export default function (state, action) {
  switch (action.type) {
    case "setFilterData": {
      return {
        ...state,
        filterData: action.payload,
      };
    }
    case "setProducts": {
      return {
        ...state,
        products: action.payload,
      };
    }
  }
}
