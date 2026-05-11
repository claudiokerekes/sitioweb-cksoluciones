# CK Soluciones — Sitio Web

Landing page de servicios para CK Soluciones en `https://cksoluciones.com`.

## Estructura del proyecto

```
index.html       — Sitio completo (single-page, ~900 líneas)
context.md       — Fuente de verdad del contenido (servicios, casos, stack)
og-image.html    — Plantilla HTML 1200×630 para exportar og-image.png
og-image.png     — Imagen Open Graph para previews en redes y WhatsApp
sitemap.xml      — Sitemap para Google Search Console
robots.txt       — Permite indexación y apunta al sitemap
CNAME            — Dominio: cksoluciones.com
```

## Stack técnico del sitio

- HTML puro + Tailwind CDN
- Fonts: Space Grotesk (headings), DM Sans (body) vía Google Fonts
- Sin framework, sin build step — deploy directo en GitHub Pages

## Diseño

- Fondo: `#030712`
- Gradiente: `#A855F7 → #3B82F6 → #06B6D4` (purple → blue → cyan)
- Cards: glassmorphism (`backdrop-filter: blur(16px)`, `rgba(255,255,255,0.04)`)
- CTA principal: WhatsApp verde `#25D366` → `wa.me/573145678786`

## SEO implementado

- Title: "CK Soluciones | Automatización con AI y Agentes Inteligentes para Empresas"
- Meta description: incluye automatización, AI, despliegue en la nube, Colombia
- Meta keywords: 16 términos cubriendo automatización, AI, servidores, cloud, hosting, CI/CD
- Canonical: `https://cksoluciones.com/`
- Open Graph completo: og:title, og:description, og:image (1200×630), og:url, og:locale (es_CO)
- Twitter Card: summary_large_image con imagen
- Schema.org JSON-LD: tipo `ProfessionalService` con 16 serviceTypes y 4 offers
- `sitemap.xml` + `robots.txt` — registrar sitemap en Google Search Console

## Google Analytics

- Measurement ID: `G-DFQ080GJN2`
- Enhanced Measurement: activo (page views, scrolls nativos, outbound clicks)
- Eventos custom implementados en `index.html` (script al fondo):
  - `scroll_25` — usuario llega al 25% de la página
  - `scroll_50` — usuario llega al 50%
  - `scroll_75` — usuario llega al 75%
  - `whatsapp_click` — click en cualquier botón de WhatsApp
  - `navigation_click` — click en links del nav (event_label = sección)

## Secciones del sitio (anchors)

| ID | Contenido |
|---|---|
| `#servicios` | 4 servicios: Automatización, Software, AI, Despliegue Cloud |
| `#casos` | 5 casos de uso reales |
| `#proceso` | 6 pasos de metodología |
| `#stack` | 10 tecnologías (badges) |
| `#contacto` | CTA final con WhatsApp |

## Pendientes

- Registrar `https://cksoluciones.com/sitemap.xml` en Google Search Console
- Verificar og:image en producción con opengraph.xyz
