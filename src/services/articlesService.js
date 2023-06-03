import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

export async function fetchArticles(query, page, controller) {
  const res = await axios.get('/search', {
    params: {
      query,
      page,
    },
    signal: controller.signal,
  });

  return res.data;
}
