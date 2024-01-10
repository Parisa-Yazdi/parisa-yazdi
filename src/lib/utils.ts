import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import config from "@/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchArticles() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      "Cache-Control": "no-store",
    },
  };

  const request = await fetch(
    `${config.api}/api/aritcles?populate=*`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchArticleBySlug(slug: string) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      "Cache-Control": "no-store",
    },
  };

  const request = await fetch(
    `${config.api}/api/aritcles?populate=*&filters[slug][$eq]=${slug}`,
    reqOptions
  );
  const response = await request.json();

  return response;
}

export async function fetchVideos() {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      "Cache-Control": "no-store",
    },
  };

  const request = await fetch(
    `${config.api}/api/videos?populate=*`,
    reqOptions
  );
  const response = await request.json();

  return response;
}
