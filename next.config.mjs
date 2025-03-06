/** @type {import('next').NextConfig} */

const allowedWordpressDomain = new URL(
  process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL
).hostname;

const nextConfig = {
  images: {
    domains: [allowedWordpressDomain],
  },
};

export default nextConfig;
