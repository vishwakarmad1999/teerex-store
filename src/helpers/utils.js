const keysToLookup = ["color", "type", "name", "price"];

export default function filterProductsPipeline({
  products,
  searchText,
  selectedCheckboxes,
  cart,
}) {
  // First: filter the products using the checkboxes selected (if any)
  const keys = Object.keys(selectedCheckboxes);
  let newProducts = products.filter((product) => {
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

  // Second: filter the products using the search term
  const cleanedSearchText = searchText.trim();
  if (cleanedSearchText) {
    const searchTextInLowerCase = cleanedSearchText.toLowerCase();
    newProducts = newProducts.filter((product) => {
      for (let i = 0; i < keysToLookup.length; i++) {
        const key = keysToLookup[i];
        if (
          product[key]?.toString().toLowerCase().includes(searchTextInLowerCase)
        ) {
          return true;
        }
      }
      return false;
    });
  }

  // Third: adjust the product's quantity w.r.t the cart
  if (Object.keys(cart).length) {
    newProducts = newProducts.map((product) => {
      const quantityInTheCart = cart[product.id];
      if (quantityInTheCart) {
        return {
          ...product,
          quantity: product.quantity - quantityInTheCart,
        };
      }
      return product;
    });
  }

  return newProducts;
}
