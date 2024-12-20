import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

// Set the base URL to your backend's Render URL
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://examai-main-backend.onrender.com', // Replace with your backend URL
  prepareHeaders: (headers, { getState }) => {
    // If you need to include an authorization token, you can add it here
    const token = getState().auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});
