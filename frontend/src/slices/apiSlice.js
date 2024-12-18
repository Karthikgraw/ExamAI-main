import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'https://examai-main-backend.onrender.com' });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  // it acts as a parent for other APIs
  endpoints: (builder) => ({}),
});
