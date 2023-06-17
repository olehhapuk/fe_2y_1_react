import axios from 'axios';
import { useState, useEffect } from 'react';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get('https://pixabay.com/api/', {
        params: {
          q: 'cat',
          page: 1,
          key: '18873751-8e18f299cbfc24db3206257a6',
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      })
      .then((res) => {
        setImages(res.data.hits);
      });
  }, []);

  return (
    <div className="App">
      <Searchbar />
      <ImageGallery images={images} />
      <Loader />
    </div>
  );
}

export default App;
