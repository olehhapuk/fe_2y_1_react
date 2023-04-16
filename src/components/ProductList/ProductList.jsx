import Product from '../Product';

const ProductList = ({ productsData }) => (
  <div>
    {productsData.map((product) => (
      <Product
        key={product.name}
        name={product.name}
        price={product.price}
        available={product.available}
        imageUrl={product.imageUrl}
      />
    ))}
  </div>
);

export default ProductList;
