let initialState = {
  filterData: {
    color: {
      title: "Color",
      items: [],
    },
    gender: {
      title: "Gender",
      items: [],
    },
    price: {
      title: "Price",
      items: [],
    },
    type: {
      title: "Type",
      items: [],
    },
  },
  products: [],
  filteredProducts: [],
  searchText: "",
  cart: {},
  errorMessage: null,
};

const selectedCheckboxes = {};
Object.keys(initialState.filterData).forEach((key) => {
  selectedCheckboxes[key] = new Set();
});
initialState = {
  ...initialState,
  selectedCheckboxes,
};

export default initialState;
