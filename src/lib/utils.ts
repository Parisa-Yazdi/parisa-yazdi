import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import config from '@/config';

export async function fetchArticleBySlug(slug: string) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(
    `${config.api}/api/aritcles?populate=*&filters[slug][$eq]=${slug}`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchArticles() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      'Cache-Control': 'no-store'
    }
  };

  const request = await fetch(`${config.api}/api/aritcles?populate=*`, reqOptions);
  const response = await request.json();

  return response;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
