export const siteConfig = {
  siteUrl: 'https://anthropos-arch.com',
  brandName: 'Pedra Tallada',
  description:
    'Arqueologia profesional, divulgacion arqueologica, talleres educativos y campamento de arqueologia en Altea y Alicante.',
  contactEmail: 'arqueopedratallada@gmail.com',
  whatsappNumber: '34687196748',
  whatsappDisplayNumber: '+34 687 196 748',
  locationLabel: 'Altea, Alicante, Espana',
  sameAs: [
    'https://www.facebook.com/profile.php?id=100093317785372&locale=es_ES',
    'https://www.instagram.com/pedra_tallada/',
    'https://www.researchgate.net/profile/Juan-Pablo-Donadei/research',
  ],
  knowsAbout: [
    'arqueologia preventiva',
    'divulgacion arqueologica',
    'arqueologia experimental',
    'patrimonio cultural',
    'talleres educativos',
    'campamento de arqueologia',
  ],
  primaryPages: [
    { path: '/', label: 'Inicio', summary: 'Portada y vision general del proyecto.' },
    { path: '/arqueologia', label: 'Arqueologia', summary: 'Servicios tecnicos y cientificos de arqueologia.' },
    { path: '/educacion', label: 'Educacion', summary: 'Talleres y divulgacion para centros educativos.' },
    { path: '/campamento-arqueologia', label: 'Campamento', summary: 'Campamento arqueologico y actividades experienciales.' },
    { path: '/nosotros', label: 'Nosotros', summary: 'Perfil del equipo y contexto profesional.' },
    { path: '/contacto', label: 'Contacto', summary: 'Contacto por WhatsApp y correo electronico.' },
  ],
} as const;
