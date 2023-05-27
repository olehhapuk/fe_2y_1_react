import axios from 'axios';
import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';

import Searchbar from './components/Searchbar';
import ArticlesList from './components/ArticlesList';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get('https://hn.algolia.com/api/v1/search?query=react&page=0')
      .then((res) => {
        setArticles(res.data.hits);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Searchbar />
      <TailSpin visible={loading} />
      <ArticlesList articles={articles} />
    </div>
  );
}

export default App;
