import axios from 'axios';
import { useState, useEffect } from 'react';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Modal from './components/Modal';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }

    setLoading(true);

    axios
      .get('https://pixabay.com/api/', {
        params: {
          q: query,
          page: 1,
          key: '18873751-8e18f299cbfc24db3206257a6',
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      })
      .then((res) => {
        setImages(res.data.hits);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  function search(newQuery) {
    setQuery(newQuery);
  }

  function openModal(image) {
    setActiveImage(image);
  }

  function closeModal() {
    setActiveImage(null);
  }

  return (
    <div className="App">
      {activeImage && <Modal activeImage={activeImage} onClose={closeModal} />}

      <Searchbar onSearch={search} />
      <ImageGallery images={images} onOpen={openModal} />
      {loading && <Loader />}
    </div>
  );
}

export default App;
