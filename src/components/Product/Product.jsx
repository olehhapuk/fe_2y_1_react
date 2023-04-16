import './Product.css';

function Product({ imageUrl, name, price, available }) {
  return (
    <div>
      <img src={imageUrl} alt={name} width="250" />
      <h3 className="product__name">{name}</h3>
      <p>Price: {price}$</p>
      {available && <button>Купити</button>}
    </div>
  );
}

export default Product;
