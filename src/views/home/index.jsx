import { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { useProductInfo, useDispatch } from "@/stores";
import ProductList from "@/components/products-list";
import ProductFilter from "@/components/products-filter";

const Home = () => {
  const { filterData } = useProductInfo();
  const dispatch = useDispatch();

  const PRODUCTS_URI =
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

  function handleCheckboxClick(payload) {
    console.log(payload);
  }

  function extractFilterDataFromTheProduct(products) {
    const keysToLookup = Object.keys(filterData);

    const itemsPerKey = {};
    products?.forEach((product) => {
      keysToLookup.forEach((key) => {
        if (!itemsPerKey[key]) {
          itemsPerKey[key] = new Set([product[key]]);
        } else {
          itemsPerKey[key].add(product[key]);
        }
      });
    });

    const newFilterData = { ...filterData };

    let nextId = 0;
    for (let key in newFilterData) {
      let items = Array.from(itemsPerKey[key]);
      items = items.sort((a, b) => {
        if (a > b) return 1;
        return -1;
      });

      const newItems = [];
      for (let item of items) {
        newItems.push({
          id: ++nextId,
          text: item,
        });
      }
      newFilterData[key].items = newItems;
    }

    dispatch({
      type: "setFilterData",
      payload: newFilterData,
    });
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <ProductFilter
            metadata={filterData}
            onCheckboxClick={handleCheckboxClick}
          />
        </div>
        <div className="col-10">
          <ProductList
            dataUri={PRODUCTS_URI}
            onProductsFetch={extractFilterDataFromTheProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
