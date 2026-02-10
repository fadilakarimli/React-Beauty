// RTK Query API Slice
export { apiSlice } from './apiSlice';

// RTK Query Hooks
export {
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
} from './apiSlice';
