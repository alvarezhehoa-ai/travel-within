# Travel Within — Design System

Stack : Astro + Tailwind CSS + Cloudflare Pages

## Colors

| Token | Hex | Usage |
|---|---|---|
| `tw-black` | `#000000` | Texte principal, fonds dark |
| `tw-green` | `#006141` | Accent principal, CTAs |
| `tw-yellow` | `#FFE01D` | Highlight, accents |
| `tw-purple` | `#3B0D6E` | Accent secondaire |
| `tw-white` | `#FFFFFF` | Fonds |
| `tw-gray-100` | `#F5F5F0` | Fonds alternés |
| `tw-gray-200` | `#E8E8E0` | Bordures |
| `tw-gray-600` | `#5C5C5A` | Texte secondaire |

## Fonts

- Oswald: body, headings, navigation (sans-serif, condensé)
- Playfair Display: highlight, quotes, emphasis (serif, élégant)

Usage CSS: `font-body` (Oswald) / `font-highlight` (Playfair Display)

## Components

- `Header.astro` — Navbar fixe, logo + liens + CTA, responsive mobile
- `Hero.astro` — Section hero fullscreen, titre en Playfair, sous-titre, CTA, image circulaire
- `PhilosophySection.astro` — 2 colonnes image/texte
- `LevelsSection.astro` — 3 cartes en horizontal scroll (Individual, Relationships, Organizations)
- `FeaturesSection.astro` — Grille 3 colonnes avec icônes
- `TestimonialsSection.astro` — Témoignages en cartes
- `CTASection.astro` — Section CTA centrée
- `Footer.astro` — 4 colonnes, fond noir

## Pages

- `/` (index.astro) — Home: Hero, Philosophy, Levels, Features, Testimonials, CTA
- `/work-with-me` — 3 niveaux détaillés, section "Is this for you?"
- `/about` — Bio, histoire, valeurs

## Créer une nouvelle page

```
Crée une nouvelle page /[nom-page] pour le site Travel Within.
Stack: Astro + Tailwind CSS
Polices: Oswald (body, headings), Playfair Display (highlight)
Couleurs: tokens tw- (configurés dans tailwind.config.mjs)
Composants disponibles: Header, Hero, PhilosophySection, LevelsSection,
FeaturesSection, TestimonialsSection, CTASection, Footer

Utilise les composants existants et adapte le contenu suivant :
[ton contenu]
```
