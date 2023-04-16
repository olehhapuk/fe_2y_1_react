import ProductList from './ProductList';

const productsData = [
  {
    name: 'Tacos',
    price: 10.99,
    available: true,
    imageUrl:
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
  },
  {
    name: 'Pizza',
    price: 30.5,
    available: false,
    imageUrl:
      'https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg',
  },
  {
    name: 'Burger',
    price: 150.999,
    available: false,
    imageUrl:
      'https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg',
  },
  {
    name: 'Burger Copy',
    price: 1.01,
    available: true,
    imageUrl:
      'https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg',
  },
];

function App() {
  return (
    <div>
      <ProductList productsData={productsData} />
    </div>
  );
}

export default App;
