import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export function getTasks() {
  return axios
    .get('/tasks', {
      params: {
        _sort: 'id',
        _order: 'desc',
      },
    })
    .then((res) => res.data);
}

export function createTask(data) {
  return axios.post('/tasks', data).then((res) => res.data);
}

export function updateTask(id, completed) {
  return axios.patch(`/tasks/${id}`, { completed }).then((res) => res.data);
}

export function deleteTask(id) {
  return axios.delete(`/tasks/${id}`).then((res) => res.data);
}
