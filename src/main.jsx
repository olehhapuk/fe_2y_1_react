import { createRoot } from 'react-dom/client';

const rootElem = document.querySelector('#root');

// const data = {
//   name: 'Tacos',
//   price: 10.99,
//   imageUrl:
//     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
//   available: false,
// };

function Product(props) {
  return (
    <div>
      <img src={props.imageUrl} alt={props.name} width="250" />
      <h3>{props.name}</h3>
      <p>Price: {props.price}$</p>

      {/* {props.available ? <button>Купити</button> : <p>Недоступно для покупки</p>} */}
      {/* {props.available ? <button>Купити</button> : null} */}
      {props.available && <button>Купити</button>}
    </div>
  );
}

const products = (
  <div>
    <Product
      name="Tacos"
      price={10.99}
      available={true}
      imageUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
    />
    <Product
      name="Pizza"
      price={30.5}
      available={false}
      imageUrl="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg"
    />
    <Product
      name="Burger"
      price={150.999}
      available={false}
      imageUrl="https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg"
    />
  </div>
);

createRoot(rootElem).render(products);
