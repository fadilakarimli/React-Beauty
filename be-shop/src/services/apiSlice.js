import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  
  if (result.error && result.error.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '/admin/login';
  }
  
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['HeroBanner', 'PromoBanner', 'ShowcaseLogo'],
  endpoints: (builder) => ({
    // Hero Banners
    getHeroBanners: builder.query({
      query: () => '/HeroBanners',
      providesTags: ['HeroBanner'],
    }),
    getHeroBannerById: builder.query({
      query: (id) => `/HeroBanners/${id}`,
      providesTags: (result, error, id) => [{ type: 'HeroBanner', id }],
    }),
    createHeroBanner: builder.mutation({
      query: (formData) => ({
        url: '/HeroBanners',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['HeroBanner'],
    }),
    updateHeroBanner: builder.mutation({
      query: ({ id, data }) => ({
        url: `/HeroBanners/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'HeroBanner', id }, 'HeroBanner'],
    }),
    deleteHeroBanner: builder.mutation({
      query: (id) => ({
        url: `/HeroBanners/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['HeroBanner'],
    }),

    // Promo Banners
    getPromoBanners: builder.query({
      query: () => '/PromoBanners',
      providesTags: ['PromoBanner'],
    }),
    getPromoBannerById: builder.query({
      query: (id) => `/PromoBanners/${id}`,
      providesTags: (result, error, id) => [{ type: 'PromoBanner', id }],
    }),
    createPromoBanner: builder.mutation({
      query: (formData) => ({
        url: '/PromoBanners',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['PromoBanner'],
    }),
    updatePromoBanner: builder.mutation({
      query: ({ id, data }) => ({
        url: `/PromoBanners/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'PromoBanner', id }, 'PromoBanner'],
    }),
    deletePromoBanner: builder.mutation({
      query: (id) => ({
        url: `/PromoBanners/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['PromoBanner'],
    }),

    // Showcase Logos
    getShowcaseLogos: builder.query({
      query: () => '/ShowcaseLogos',
      providesTags: ['ShowcaseLogo'],
    }),
    getShowcaseLogoById: builder.query({
      query: (id) => `/ShowcaseLogos/${id}`,
      providesTags: (result, error, id) => [{ type: 'ShowcaseLogo', id }],
    }),
    createShowcaseLogo: builder.mutation({
      query: (formData) => ({
        url: '/ShowcaseLogos',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['ShowcaseLogo'],
    }),
    updateShowcaseLogo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/ShowcaseLogos/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'ShowcaseLogo', id }, 'ShowcaseLogo'],
    }),
    deleteShowcaseLogo: builder.mutation({
      query: (id) => ({
        url: `/ShowcaseLogos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ShowcaseLogo'],
    }),
  }),
});

export const {
  // Hero Banners
  useGetHeroBannersQuery,
  useGetHeroBannerByIdQuery,
  useCreateHeroBannerMutation,
  useUpdateHeroBannerMutation,
  useDeleteHeroBannerMutation,

  // Promo Banners
  useGetPromoBannersQuery,
  useGetPromoBannerByIdQuery,
  useCreatePromoBannerMutation,
  useUpdatePromoBannerMutation,
  useDeletePromoBannerMutation,

  // Showcase Logos
  useGetShowcaseLogosQuery,
  useGetShowcaseLogoByIdQuery,
  useCreateShowcaseLogoMutation,
  useUpdateShowcaseLogoMutation,
  useDeleteShowcaseLogoMutation,
} = apiSlice;
