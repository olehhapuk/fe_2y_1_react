import styles from './Product.module.css';

function Product({ imageUrl, name, price, available }) {
  return (
    <div>
      <img src={imageUrl} alt={name} width="250" />

      <h3 className={available ? styles.nameAvailable : styles.nameUnavailable}>
        {name}
      </h3>

      <p>Price: {price}$</p>
      {available && <button>Купити</button>}
    </div>
  );
}

export default Product;
