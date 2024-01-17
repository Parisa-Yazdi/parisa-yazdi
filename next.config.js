/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'imgur.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.womenshistory.org',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'i.huffpost.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'uxwing.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'mysecondchancenj.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'icons.veryicon.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'influencermarketinghub.com',
        pathname: '/**'
      }
      // 127.0.0.1 mysecondchancenj images.unsplash.com icons.veryicon.com influencermarketinghub.com
    ]
  }
};
