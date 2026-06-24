# DESIGN.md - CV Interactivo Odontológico (Nur Cheikh Waez)

## 1. Visual Theme & Atmosphere
- **Atmósfera:** Clínica, higiénica, profesional, luminosa y empática. Debe transmitir confianza y serenidad.
- **Filosofía de Diseño:** Minimalismo cálido. A diferencia del modo oscuro tecnológico, aquí dominan los blancos rotos, la luz, los espacios abiertos y las formas suaves. Light-mode por defecto.
- **Densidad:** Muy espaciosa. Márgenes amplios que den sensación de "respiración" y limpieza.

## 2. Color Palette & Roles
- **Backgrounds (Fondos):**
  - Base: `#FAFAFA` (Blanco médico/nieve - Fondo principal de la web)
  - Surface 1: `#FFFFFF` (Blanco puro para tarjetas y contenedores)
  - Surface 2: `#F1F5F9` (Slate-100, para hover states o fondos de etiquetas)
- **Text (Texto):**
  - Primary: `#1E293B` (Slate-800, azul muy oscuro para máxima legibilidad sin ser negro puro).
  - Secondary: `#64748B` (Slate-500, para fechas, ubicaciones y texto de apoyo).
- **Accents (Acentos):**
  - Primary Accent (Dental Teal): `#0D9488` (Teal-600) - Color que evoca salud, uniformes médicos y limpieza. Para botones primarios y enlaces.
  - Secondary Accent (Soft Mint): `#CCFBF1` (Teal-50) - Para fondos de etiquetas o para resaltar suavemente información médica.

## 3. Typography Rules
- **Sans-serif (UI & Headings):** `Outfit`, `Figtree` o la fuente del sistema (`system-ui`).
  - Pesos: 300 (Light para subtítulos elegantes), 400 (Cuerpo), 500 (Botones), 600 (Títulos).
  - Tracking (Espaciado): Normal a ligeramente holgado en mayúsculas para dar aire de clínica premium.
- NO se utilizan fuentes Monospace en este proyecto.

## 4. Component Stylings
- **Tarjetas (Surfaces):**
  - Fondo: Surface 1 (`#FFFFFF`).
  - Borde: Muy sutil, 1px sólido `#E2E8F0` (Slate-200).
  - Sombras (Shadows): Se permite el uso de sombras muy suaves y difusas (`shadow-sm` o `shadow-md` de Tailwind con color de sombra `#0f172a0a`) para hacer flotar los elementos sobre el fondo y dar sensación física de limpieza.
  - Radio de borde (Border-radius): `16px` o `24px` (formas redondeadas y amables, evitando picos agresivos).
- **Botones:**
  - Primario: Fondo Primary Accent (`#0D9488`), texto blanco puro (`#FFFFFF`), bordes muy redondeados (`rounded-full`).
  - Secundario: Fondo transparente, texto Primary Accent, borde 1px sólido `#0D9488`.
- **Etiquetas / Habilidades (Pills):**
  - Fondo Secondary Accent (`#CCFBF1`), texto Primary Accent (`#0D9488`).
  - Bordes redondeados (`rounded-full`), padding interior generoso para un tacto suave.

## 5. Layout Principles
- **Respiración (Whitespace):** Uso extremadamente generoso de padding. Las secciones deben estar muy separadas (`py-24` o `py-32`) para imitar la estética de una sala de espera de alto nivel.
- **Alineación:** Centrado para titulares principales, alineación izquierda para bloques de texto de lectura.

## 6. Fotografía e Imágenes
- Las fotografías (como el retrato) deben tener un tratamiento limpio, preferiblemente con fondos neutros o recortadas con formas orgánicas (círculos o elipses suaves).