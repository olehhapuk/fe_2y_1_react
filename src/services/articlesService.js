import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

// export function fetchArticles(query, page) {
//   return axios
//     .get('/search', {
//       params: {
//         query,
//         page,
//       },
//     })
//     .then((res) => res.data);
// }

export async function fetchArticles(query, page) {
  const res = await axios.get('/search', {
    params: {
      query,
      page,
    },
  });

  return res.data;
}
