import { productOptions } from "../utils/product";

const ProductListingCard = () => {
  return (
    <div>
      {/* this is the filter cards */}
      {productOptions.map((item, idx) => (
        <div key={idx}>
          {idx === 0 ? (
            <div>
              {/* Render specific content for the first item */}
              <h2>{item.title}</h2>
            </div>
          ) : (
            <div>
              {/* Render content for all other items */}
              <h2>{item.title}</h2>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductListingCard;
