const ProductsFilter = ({ metadata, onCheckboxClick }) => {
  return (
    <div className="filter-container mt-3">
      <ul>
        {Object.keys(metadata).map((key) => (
          <div key={key} className="mt-4">
            <h6>{metadata[key]?.title}</h6>
            {metadata[key]?.items.map((item) => (
              <div key={key + item.id} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value={item.text}
                  id={key + item.id}
                  onChange={() => {
                    onCheckboxClick({ key, value: item.text });
                  }}
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
