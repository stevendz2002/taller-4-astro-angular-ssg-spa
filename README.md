# Taller 4: Astro SSG y Angular SPA

[Ver las dos demos](https://stevendz2002.github.io/taller-4-astro-angular-ssg-spa/).

El taller compara un panel generado de forma estática en `Astro-SSG` con una aplicación con navegación del lado del cliente en `Client-Angular`. Ambos proyectos requieren Node.js 24 para reproducir el entorno de CI.

- Astro: ejecuta `npm ci` y `npm run dev` dentro de `Astro-SSG`.
- Angular: ejecuta `npm ci`, `npm test -- --runInBand` y `npm start` dentro de `Client-Angular`.

El workflow compila y publica las dos aplicaciones en subdirectorios del mismo sitio de GitHub Pages. Angular usa rutas con hash; en GitHub Pages también utiliza los datos de prueba del proyecto para evitar depender de un backend local.
