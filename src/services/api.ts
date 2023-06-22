import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    common: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2QyZGQxY2Q2MTU5MDdjYWFkNWRjYmRlZWZkM2ZmMyIsInN1YiI6IjY0OTMzNzYxZDIxNDdjMDBhZDUxNTJlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eOpaYEmc6LUJ3LcpRMCKGSXG8G-cozMSmGLhOg_Nkjg',
    },
  },
});

export default instance;
