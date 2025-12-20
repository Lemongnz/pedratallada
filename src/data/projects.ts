import educacionBanner from '../assets/images/educacion-banner.jpg';
import museosBanner from '../assets/images/museos-banner.jpg';
import genericArch from '../assets/images/generic-archaeology.webp';
import fortBernia from '../assets/images/fort-bernia.jpg';

export const projects = [
  {
    id: 'educacion',
    title: 'Educación y Divulgación',
    description: 'Nuestros servicios pretenden abrir una ventana al pasado para mostrar cómo vivían en la prehistoria. A través de la ciencia y la experimentación, nuestro equipo ofrece actividades didácticas.',
    image: educacionBanner,
    tags: ['Educación', 'Talleres'],
    date: 'En curso'
  },
  {
    id: 'museos',
    title: 'Museos y Patrimonio',
    description: 'Este proyecto nace como resultado de la pasión que sentimos por la arqueología y la divulgación. Nuestro objetivo es hacer accesible a todo el mundo los avances de nuestra sociedad desde una perspectiva antropológica.',
    image: museosBanner,
    tags: ['Museos', 'Conservación'],
    date: 'Permanente'
  },
  {
    id: 'generic',
    title: 'Investigación Arqueológica',
    description: 'Análisis de yacimientos y estudio de materiales. Nuestra labor nos permite profundizar en el apasionante viaje de la evolución humana de la mano de expertos.',
    image: genericArch,
    tags: ['Investigación', 'Excavación'],
    date: '2024 - 2025'
  },
  {
    id: 'fort-bernia',
    title: 'Fort de Bernia',
    description: 'Exploración y documentación de estructuras históricas en la sierra de Bernia. Un recorrido por la historia militar y social del siglo XVI.',
    image: fortBernia,
    tags: ['Historia', 'Rutas'],
    date: '2023 - 2024'
  }
];
