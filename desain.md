# BOBBLE Editorial Experience — Design Specification

## Overview
BOBBLE is an ultra-premium, high-fashion editorial web experience for a luxury boba tea atelier. The visual language blends high-fashion magazine aesthetic, warm organic ivory tones, bold typography, asymmetric layouts, overlapping elements, and subtle micro-interactions.

---

## 1. Design System & Tokens

### Color Palette
- **Background Main (Warm Ivory)**: `#FAF6F0`
- **Background Secondary (Soft Beige)**: `#F3EDE2`
- **Background Card Accent**: `#EFE7DB`
- **Dark Primary (Espresso / Dark Brown)**: `#2A211D`
- **Text Dark**: `#1C1917`
- **Text Muted**: `#78716C`
- **Border Subtle**: `rgba(42, 33, 29, 0.12)`
- **White Pure**: `#FFFFFF`

### Typography
- **Primary Display / Serif**: `'Playfair Display'`, `'Cormorant Garamond'`, serif
- **Secondary Body / Sans**: `'Plus Jakarta Sans'`, `'Inter'`, sans-serif
- **Watermark Font**: `'Playfair Display'`, opacity 0.05 - 0.08, large tracking

### Spacing & Grid
- **Container Max-Width**: `1280px`
- **Section Padding**: `100px 24px` (Desktop), `60px 16px` (Mobile)
- **Border Radius**:
  - Cards / Images: `24px` to `32px`
  - Pill Buttons: `9999px`

---

## 2. Page Architecture & Structure

```
├── index.html              # Main single page application structure
├── css/
│   ├── main.css            # Custom styling, utilities, animations, responsive design system
└── js/
    └── main.js             # Interactive scripts, animations, floating effects, nav interaction
```

---

## 3. Detailed Component Specification

### A. Navigation Bar (Header)
- **Brand Logo**: Left aligned `-- BOBBLE` wordmark in serif uppercase.
- **Nav Links**: Center aligned: `HOME`, `MENU`, `OUR STORY`, `JOURNAL`.
- **CTA Actions**:
  - `ORDER NOW` pill button (outlined dark border, hover fill).
  - Profile/Bag icon button with smooth hover scale.
- **Behavior**: Fixed/sticky top navigation with backdrop-filter blur on scroll.

### B. Hero Section ("Sip. Bobble. Repeat.")
- **Headline**: Multi-line serif display:
  ```
  SIP.
  BOBBLE.
  REPEAT.
  ```
- **Tagline Tag**: Top left `EST. 2024` | `TRADITION REFINED`.
- **Background Watermark**: Massive soft background text `BOBBLE` spanning horizontally.
- **Hero Image Card**: Rounded image container featuring premium boba milk tea in designer glass cup.
- **Decorative Floating Elements**:
  - Isolated glossy dark tapioca pearl badge top-left.
  - Small dark tapioca pearl dot center bottom.
  - Vertical marquee ribbon right side: `Crafted with care. Beverage category quality...`
  - Floating pearl card right side.
- **Pagination Counter**: `01 OF 04 / 02` bottom left.

### C. Signature Craft Section
- **Header**: Subtitle `THE ANATOMY OF PERFECTION` above title `SIGNATURE CRAFT`.
- **Layout**: Center hero image flanked by 4 feature cards:
  - Left Top: `Premium Tea` (cold brewed organic tea leaves).
  - Left Bottom: `Fresh Milk` (locally sourced organic whole milk).
  - Right Top: `Brown Sugar` (Okinawa raw brown sugar).
  - Right Bottom: `Handcrafted Pearls` (freshly made daily).

### D. Curated Collection Section
- **Header**: `CURATED COLLECTION` + `VIEW FULL MENU ->` link.
- **Staggered 2x2 Grid**:
  - **Card 01**: `Brown Sugar Cloud` (RP 35.000) - Large wide card top left.
  - **Card 02**: `Matcha Velvet` (RP 28.000) - Medium card top right (staggered lower).
  - **Card 03**: `Strawberry Cream` (RP 30.000) - Tall card bottom left (overlapping vertically).
  - **Card 04**: `Classic Pearl Milk Tea` (RP 25.000) - Wide card bottom right.
- **Card Styling**: Rounded corners (`24px`), image background, translucent dark overlay at bottom, large semi-transparent index numbers (`01`, `02`, `03`, `04`).

### E. Ritual CTA Section
- **Container**: Soft cream card with centered typography.
- **Subtitle**: `ELEVATE YOUR EVERYDAY`.
- **Headline**: `YOUR NEW FAVORITE RITUAL.`.
- **Button**: Solid espresso dark pill button `EXPLORE OUR STORES` / `ORDER NOW`.

### F. Footer
- Minimalist centered layout: `-- BOBBLE` logo, social links (`INSTAGRAM`, `FACEBOOK`, `PINTEREST`), and copyright notice.

---

## 4. Micro-Interactions & Motion
- **Floating Pearl Animation**: Continuous subtle float keyframe animation (`translateY(-8px)` to `translateY(8px)` with ease-in-out).
- **Smooth Page Scroll**: Native smooth scrolling with intersection observer fade-in for section elements.
- **Image Hover Zoom**: Soft `scale(1.04)` transition on card hover.
- **Button Magnetic Shift**: Subtle scale and shadow transition on interactive pill buttons.
