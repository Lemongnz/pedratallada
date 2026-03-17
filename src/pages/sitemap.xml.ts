import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';

const staticRoutes = [
  '/',
  '/arqueologia',
  '/blog',
  '/contacto',
  '/nosotros',
  '/politica-privacidad',
  '/servicios',
  '/en/',
  '/en/arqueologia',
  '/en/contacto',
  '/en/nosotros',
  '/en/politica-privacidad',
  '/en/servicios',
  '/ca/',
  '/ca/arqueologia',
  '/ca/contacto',
  '/ca/nosotros',
  '/ca/politica-privacidad',
  '/ca/servicios',
  '/llms.txt',
];

const toAbsoluteUrl = (path: string) => new URL(path, siteConfig.siteUrl).toString();

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export const GET: APIRoute = async () => {
  const projects = await getCollection('projects');
  const projectRoutes = projects.map((project) => {
    if (!project.id.includes('/')) {
      return `/${project.slug}`;
    }

    const [lang, ...slugParts] = project.id.split(/[/\\]/);
    const slugWithExt = slugParts.join('/');
    const slug = slugWithExt.replace(/\.[^/.]+$/, '');
    return `/${lang}/${slug}`;
  });

  const uniqueRoutes = Array.from(new Set([...staticRoutes, ...projectRoutes]));
  const urls = uniqueRoutes.map((route) => {
    const location = escapeXml(toAbsoluteUrl(route));
    return `<url><loc>${location}</loc></url>`;
  });

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
  ].join('');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
