# Análisis Técnico: Estructura de Rutas e Internacionalización (i18n)

## 1. Configuración de Astro (`astro.config.mjs`)

El archivo de configuración actual es mínimo y **no utiliza el módulo nativo de i18n de Astro**.

```javascript
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://anthropos-arch.com',
  vite: {
    plugins: [tailwindcss()]
  }
});
```
*   **i18n**: No definido (Gestión manual de rutas).
*   **base**: No definido (raíz `/`).
*   **trailingSlash**: No definido (por defecto `ignore`).

## 2. Estructura de Directorios (`src/pages`)

El proyecto utiliza una estrategia de **enrutamiento híbrido**: archivos estáticos para el idioma por defecto (Español) y una carpeta dinámica `[lang]` para el resto.

```text
src/pages/
├── index.astro                 (Home - ES)
├── nosotros.astro              (ES)
├── servicios.astro             (ES)
├── politica-privacidad.astro   (ES)
├── contacto.astro              (ES)
├── proyectos/
│   └── [id].astro              (Detalle Proyectos - ES -> /proyectos/educacion)
└── [lang]/                     (Rutas Dinámicas EN/CA)
    ├── nosotros.astro
    ├── servicios.astro
    ├── politica-privacidad.astro
    └── proyectos/
        └── [id].astro          (Detalle Proyectos - EN/CA -> /en/proyectos/education)
```

**Observación Crítica**: Actualmente las URLs de proyectos incluyen el segmento `/proyectos/` (ej: `/proyectos/campamento-arqueologia`). Para lograr tu objetivo de URLs planas (`/campamento-arqueologia`), es necesario mover la lógica de `proyectos/[id].astro` a la raíz, pero esto causaría conflicto con las otras páginas estáticas si no se maneja con cuidado en `getStaticPaths`.

## 3. Middleware

**No existe archivo `src/middleware.ts`**.
Toda la lógica de redirección o detección de idioma se está realizando en tiempo de construcción (SSG) mediante la estructura de carpetas, o manualmente en los componentes. No hay interceptación de peticiones en el servidor.

## 4. Componentes y Layouts

*   **Detección de Idioma**: Se realiza manualmente en cada página o layout usando una utilidad propia `getLangFromUrl(Astro.url)`.
*   **Layout Principal (`Layout.astro`)**:
    *   Recibe el idioma calculándolo de la URL.
    *   Utiliza una función `localizePath` local para generar enlaces menú.
    *   **Problema Detectado**: `localizePath` hardcodea prefijos. Si cambias la estructura de rutas (ej: quitar `/proyectos/`), tendrás que actualizar manualmente esta función o los enlaces del nav.

---

## Plan de Acción Recomendado

Para lograr la estructura `/campamento-arqueologia` (sin `/proyectos/`) y `/en/campamento-arqueologia`:

1.  **Refactorizar Rutas de Proyectos**:
    *   Mover `src/pages/proyectos/[id].astro` a `src/pages/[slug].astro`.
    *   Mover `src/pages/[lang]/proyectos/[id].astro` a `src/pages/[lang]/[slug].astro`.
    *   **Importante**: `getStaticPaths` en estos archivos debe filtrar explícitamente las rutas que *ya existen* (como `nosotros`, `servicios`) para evitar conflictos de colisión de nombres.

2.  **Actualizar Datos**: Asegurar que los IDs en `projects.ts` coincidan con el slug deseado.

3.  **Actualizar Utils**: La función `getRouteFromUrl` en `i18n/utils.ts` necesitará ser robusta para manejar rutas raíz y no confundir un slug de proyecto con un código de idioma.
