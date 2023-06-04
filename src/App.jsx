import { useState } from 'react';

import Modal from './components/Modal';

function App() {
  const [images, setImages] = useState(['img-1', 'img-2', 'img-3']);
  const [activeImage, setActiveImage] = useState(null);

  function closeModal() {
    setActiveImage(null);
  }

  return (
    <div>
      {images.map((img) => (
        <button key={img} onClick={() => setActiveImage(img)}>
          {img}
        </button>
      ))}

      {activeImage && <Modal img={activeImage} onClose={closeModal} />}
    </div>
  );
}

export default App;
