export const siteConfig = {
  siteUrl: 'https://anthropos-arch.com',
  brandName: 'Pedra Tallada',
  description:
    'Arqueologia profesional, divulgacion arqueologica, talleres educativos y campamento de arqueologia en Altea y Alicante.',
  contactEmail: 'arqueopedratallada@gmail.com',
  whatsappNumber: '34604443380',
  whatsappDisplayNumber: '+34 604 44 33 80',
  locationLabel: 'Altea, Alicante, Espana',
  sameAs: [
    'https://www.facebook.com/profile.php?id=100093317785372&locale=es_ES',
    'https://www.instagram.com/pedra_tallada/',
    'https://www.researchgate.net/profile/Juan-Pablo-Donadei/research',
    'https://orcid.org/0000-0003-3130-8537',
    'https://eraseunavezerase.academia.edu/JuanPabloDonadei',
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
    { path: '/museos', label: 'Museos', summary: 'Talleres y actividades de divulgacion para museos.' },
    { path: '/campamento-arqueologia', label: 'Campamento', summary: 'Campamento arqueologico y actividades experienciales.' },
    { path: '/nosotros', label: 'Nosotros', summary: 'Perfil del equipo y contexto profesional.' },
    { path: '/contacto', label: 'Contacto', summary: 'Contacto por WhatsApp y correo electronico.' },
  ],
} as const;
