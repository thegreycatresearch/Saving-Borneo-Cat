# Saving Borneo Cat

Sitio web estático bilingüe para presentar el proyecto Saving Borneo Cat y recibir colaboraciones para la protección del gato de Borneo.

## Uso local

Abre `index.html` directamente en el navegador o sirve la carpeta con cualquier servidor estático:

```bash
python3 -m http.server 8000
```

Después visita `http://localhost:8000`.

## Publicación

El sitio no requiere build ni dependencias. Puede publicarse en GitHub Pages, Netlify, Cloudflare Pages o cualquier hosting estático. Para conectar una plataforma de donaciones real, sustituye el enlace `mailto:` de `index.html` por la URL de la cuenta de donaciones y actualiza el correo de contacto.

## Publicar gratis con GitHub Pages

1. En GitHub abre el repositorio y entra en **Settings > Pages**.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Elige la rama `main` y la carpeta `/ (root)`, pulsa **Save**.
4. Espera unos minutos y abre `https://thegreycatresearch.github.io/Saving-Borneo-Cat/`.

## Indexar en Google gratis

1. Abre [Google Search Console](https://search.google.com/search-console) con una cuenta de Google.
2. Añade la propiedad **URL prefix**: `https://thegreycatresearch.github.io/Saving-Borneo-Cat/`.
3. Verifica la propiedad siguiendo el método que te ofrece Google. Para una URL de GitHub Pages suele ser sencillo usar la etiqueta HTML o Google Analytics.
4. En **Sitemaps**, envía `sitemap.xml`.
5. En **Inspección de URLs**, introduce la URL completa del sitio y pulsa **Solicitar indexación**.

La indexación puede tardar desde unos días hasta varias semanas. No hay garantía de aparecer inmediatamente ni de ocupar una posición concreta. Compartir el sitio desde redes sociales y conseguir enlaces desde páginas relacionadas ayuda a que Google lo descubra y lo considere relevante.
