import axios from 'axios';

export const getPosts = () => {
  const endpoint = 'http://localhost:3000/api/feed';

  const request = axios.get(endpoint, {
    token: localStorage.getItem('bookfaceAuthToken'),
  }).catch( (err) => {
    console.log('An error occured while fetching posts. ');
  });

  return {
    type: 'LOAD_POSTS',
    payload: request,
  };
};
