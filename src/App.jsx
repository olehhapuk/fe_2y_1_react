import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';

import Searchbar from './components/Searchbar';
import ArticlesList from './components/ArticlesList';
import { fetchArticles } from './services/articlesService';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') {
      return;
    }

    setLoading(true);
    setError(null);

    fetchArticles(query, page)
      .then((res) => {
        setArticles((prevArticles) => [...prevArticles, ...res.hits]);
      })
      .catch((err) => {
        setError(err.message);
        console.dir(err);
      })
      .finally(() => setLoading(false));
  }, [page, query]);

  function search(newQuery) {
    setQuery(newQuery);
    setPage(0);
    setArticles([]);
    // batching - групування оновлення стану
  }

  function loadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <div>
      <Searchbar onSearch={search} />

      <p>Page: {page}</p>

      {error && <p>{error}</p>}
      {!error && articles.length > 0 && <ArticlesList articles={articles} />}

      <TailSpin visible={loading} />
      <button onClick={loadMore}>Load more</button>
    </div>
  );
}

export default App;
