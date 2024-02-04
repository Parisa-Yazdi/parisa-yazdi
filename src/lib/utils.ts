import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import config from '@/config';

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

export async function fetchArticles() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(`${config.api}/api/articles?populate=*`, reqOptions);
  const response = await request.json();

  return response;
}

export async function fetchArticleBySlug(slug: string) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(
    `${config.api}/api/articles?populate=*&filters[slug][$eq]=${slug}`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchVideos() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(`${config.api}/api/videos?populate=*`, reqOptions);
  const response = await request.json();

  return response;
}

export async function fetchVideoBySlug(slug: string) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(`${config.api}/api/videos?filters[slug][$eq]=${slug}`, reqOptions);
  const response = await request.json();

  return response;
}

export async function fetchCategories() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(`${config.api}/api/categories?populate=*`, reqOptions);
  const response = await request.json();

  return response;
}

// fetch subcategories

export async function fetchArticleBySubCategory(slug: string) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(
    `${config.api}/api/articles?populate=*&filters[sub_category][$eq]=${slug}`,
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

  const request = await fetch(`${config.api}/api/sub-categories?populate=deep`, reqOptions);
  const response = await request.json();

  return response;
}

export async function fetchArticlesBySubcategory(subCategory: string) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
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
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(`${config.api}/api/books?populate=*`, reqOptions);
  const response = await request.json();

  return response;
}

export async function fetchClasses() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(`${config.api}/api/classes?populate=*`, reqOptions);
  const response = await request.json();

  return response;
}

export async function fetchClassBySlug(slug: string) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(
    `${config.api}/api/classes?populate=*&filters[slug][$eq]=${slug}`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchCourses() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(`${config.api}/api/courses?populate=*`, reqOptions);
  const response = await request.json();

  return response;
}

export async function fetchCourseBySlug(slug: string) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(
    `${config.api}/api/courses?populate=*&filters[slug][$eq]=${slug}`,
    reqOptions
  );
  const response = await request.json();

  return response;
}
