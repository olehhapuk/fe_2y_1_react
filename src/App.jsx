import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useInView } from 'react-intersection-observer';

import Searchbar from './components/Searchbar';
import ArticlesList from './components/ArticlesList';
import { fetchArticles } from './services/articlesService';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const [page, setPage] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);

  const { ref } = useInView({
    threshold: 0,
    onChange: (inView) => {
      console.log('inView', inView);

      if (inView && query) {
        loadMore();
      }
    },
  });

  useEffect(() => {
    if (query === '') {
      return;
    }

    setLoading(true);
    setError(null);

    const controller = new AbortController();

    fetchArticles(query, page, controller)
      .then((res) => {
        setArticles((prevArticles) => [...prevArticles, ...res.hits]);
        setPagesCount(res.nbPages);
        setPage(res.page);
      })
      .catch((err) => {
        if (err.code === 'ERR_CANCELED') {
          console.dir(err);
          setError(null);
        } else {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [page, query]);

  function search(newQuery) {
    setQuery(newQuery);
    setArticles([]);
    setPage(0);
    setPagesCount(0);
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

      {loading && !error && <TailSpin />}
      {!loading && !error && page < pagesCount && (
        <button ref={ref} onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
}

export default App;
