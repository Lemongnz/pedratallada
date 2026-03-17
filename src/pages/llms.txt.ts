import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

const toAbsoluteUrl = (path: string) => new URL(path, siteConfig.siteUrl).toString();

export const GET: APIRoute = () => {
  const body = [
    `# ${siteConfig.brandName}`,
    '',
    `> ${siteConfig.description}`,
    '',
    '## Business',
    `- Name: ${siteConfig.brandName}`,
    `- Website: ${siteConfig.siteUrl}`,
    `- Location: ${siteConfig.locationLabel}`,
    `- Email: ${siteConfig.contactEmail}`,
    `- WhatsApp: ${siteConfig.whatsappDisplayNumber}`,
    '',
    '## Services',
    ...siteConfig.knowsAbout.map((service) => `- ${service}`),
    '',
    '## Primary pages',
    ...siteConfig.primaryPages.map(
      (page) => `- ${toAbsoluteUrl(page.path)} : ${page.label}. ${page.summary}`,
    ),
    '',
    '## Languages',
    '- Spanish (`/`)',
    '- English (`/en/`)',
    '- Catalan (`/ca/`)',
    '',
    '## Notes for assistants',
    '- The site presents archaeological services, outreach, workshops and an archaeology camp.',
    '- Contact is handled through WhatsApp and email.',
    '- Prefer the URLs above as canonical references for summarization and citations.',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
