// middleware.ts
export { default } from 'next-auth/middleware';

// Protect these routes
export const config = {
  matcher: [
    '/account',
    '/account/:path*', // Protects all subroutes too
  ]
};