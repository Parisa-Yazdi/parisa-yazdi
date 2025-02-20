import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import config from '@/config';
import { cache } from 'react';
import { revalidatePath } from 'next/cache';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseUrl(url: string) {
  return url
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/ /g, '-')
    .replace(/'/g, '')
    .replace(/,/g, '');
}

export async function fetchAuthor() {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(`${config.api}/api/authors?populate=*`, reqOptions);
  const response = await request.json();

  return response;
}

export async function fetchArticles() {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(
    `${config.api}/api/articles?populate=*&sort=createdAt:desc`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchArticleBySlug(slug: string) {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };
  const request = await fetch(
    `${config.api}/api/articles?populate=*&filters[slug][$eq]=${slug}`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchBookBySlug(slug: string) {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };
  const request = await fetch(
    `${config.api}/api/books?populate=*&filters[slug][$eq]=${slug}`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchVideos() {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(
    `${config.api}/api/videos?populate=*&pagination[pageSize]=100&sort=createdAt:desc`,
    reqOptions
  );
  const response = await request.json();
  response.data.forEach((video: any) => {
    console.log('🚀 ~ video:', video);
  });

  return response;
}

export async function fetchVideoBySlug(slug: string) {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(`${config.api}/api/videos?filters[slug][$eq]=${slug}`, reqOptions);
  const response = await request.json();

  return response;
}

export async function fetchCategories() {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(
    `${config.api}/api/categories?populate[0]=sub_categories&populate[1]=sub_categories.thumbnail`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

// fetch subcategories

export async function fetchArticleBySubCategory(slug: string) {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(
    `${config.api}/api/articles?populate=*&filters[sub_category][$eq]=${slug}`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchVideosBySubcategory(subCategory: string) {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(
    `${config.api}/api/videos?filters[sub_category][name][$eq]=${subCategory}&populate=*`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchSubCategory() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store',
      cache: 'no-store'
    }
  };

  const request = await fetch(
    `${config.api}/api/sub-categories?populate[0]=articles&populate[1]=category`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchArticlesBySubcategory(subCategory: string) {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(
    `${config.api}/api/articles?filters[sub_category][name][$eq]=${subCategory}&populate=*`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchBooks() {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(`${config.api}/api/books?populate=*&sort=createdAt:desc`, reqOptions);
  const response = await request.json();

  return response;
}

export async function fetchClasses() {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(
    `${config.api}/api/classes?populate=*&sort=createdAt:desc`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchReadings() {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(
    `${config.api}/api/readings?populate=*&sort=createdAt:desc`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchClassBySlug(slug: string) {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(
    `${config.api}/api/classes?filters[slug][$eq]=${slug}&populate=*`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export const fetchCourses = cache(async () => {
  const reqOptions = {
    next: { revalidate: 60 }, // Ensures SSR data refreshes every 60s
    headers: {
      cache: 'no-store', // Prevents stale browser cache
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(`${config.api}/api/courses?populate=*`, reqOptions);
  const response = await request.json();

  // Ensure sorting happens here to avoid hydration mismatches
  const sortedCourses = [...response.data].sort((a, b) => {
    return new Date(b.attributes.createdAt).getTime() - new Date(a.attributes.createdAt).getTime();
  });

  return { ...response, data: sortedCourses };
});

export async function fetchCourseBySlug(slug: string) {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(
    `${config.api}/api/courses?filters[slug][$eq]=${slug}&populate=*`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchReadingBySlug(slug: string) {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(
    `${config.api}/api/readings?filters[slug][$eq]=${slug}&populate=*`,
    reqOptions
  );
  const response = await request.json();

  return response;
}
export async function fetchGallery() {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(
    `${config.api}/api/galleries?populate=*&sort=createdAt:desc`,
    reqOptions
  );
  const response = await request.json();

  const missingMedium = response.data.filter((gallery: any) =>
    gallery.attributes.art.data.some((art: any) => !art.attributes.formats?.small)
  );

  console.log(
    '🚀 ~ Galleries missing medium:',
    missingMedium.length > 0 ? missingMedium : 'All have medium'
  );

  return response;
}

export async function fetchAuthorSubCategories(category = 'Personal Journals') {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store',
      cache: 'no-store'
    }
  };

  const request = await fetch(
    `${config.api}/api/sub-categories?filters[category][name][$eq]=${category}&populate=*`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchSocialMedias() {
  const reqOptions = {
    next: { revalidate: 60 },
    headers: {
      cache: 'no-store',

      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };

  const request = await fetch(`${config.api}/api/social-medias?populate=*`, reqOptions);
  const response = await request.json();

  return response;
}
