# Portafolio — Bryan Giraldo Quintero

Portafolio académico desarrollado para el curso de Ingeniería Web de la
Universidad de Antioquia.

El proyecto presenta información personal, conocimientos, formación
académica y proyectos desarrollados durante mi formación como estudiante
de Ingeniería de Sistemas.

## Tecnologías

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React

## Características

- Diseño responsive para escritorio, tablet y dispositivos móviles.
- Barra lateral con información personal, contacto y habilidades.
- Navegación móvil adaptable.
- Sección de perfil con información personal.
- Diálogo con información ampliada sobre el perfil.
- Sección de conocimientos.
- Sección de educación.
- Portafolio de proyectos con desplazamiento horizontal.
- Diálogos con información detallada de cada proyecto.
- Enlaces a repositorios de GitHub.
- Enlaces a perfiles de GitHub y LinkedIn.
- Barras de progreso para idiomas y lenguajes de programación.
- Componentes reutilizables organizados mediante Atomic Design.

## Estructura del proyecto

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
│
└── data/
    ├── education.ts
    ├── knowledge.ts
    ├── profile.ts
    ├── projects.ts
    └── skills.ts
```

## Atomic Design

La interfaz está organizada siguiendo el enfoque Atomic Design.

### Atoms

Elementos básicos y reutilizables de la interfaz:

- `Avatar`
- `BrandIcon`
- `Button`
- `Icon`
- `ProgressBar`
- `SectionTitle`

### Molecules

Combinaciones de componentes básicos:

- `ContactItem`
- `EducationItem`
- `KnowledgeCard`
- `ProfileModal`
- `ProjectCard`
- `ProjectModal`
- `SkillItem`
- `SocialLink`

### Organisms

Secciones completas de la interfaz:

- `LeftSidebar`
- `RightSidebar`
- `MobileNavigation`
- `ProfileSection`
- `KnowledgeSection`
- `EducationSection`
- `PortfolioSection`
- `Footer`

### Template

Estructura general de la aplicación:

- `PortfolioLayout`

## Datos

La información utilizada por los componentes se encuentra separada en
archivos dentro de `src/data`.

Esto permite mantener los datos independientes de la presentación y
facilita la reutilización y modificación de la información.

Los archivos principales son:

- `profile.ts`: información personal y de contacto.
- `skills.ts`: idiomas, lenguajes de programación y habilidades adicionales.
- `education.ts`: información académica.
- `knowledge.ts`: conocimientos y áreas de formación.
- `projects.ts`: información de los proyectos del portafolio.

## Proyectos

### PokeTeam

Aplicación web que permite visualizar Pokémon de forma paginada,
realizar búsquedas dinámicas y crear un equipo personalizado de hasta
seis Pokémon.

Tecnologías:

- HTML
- CSS
- JavaScript

Repositorio:

https://github.com/Godshley/taller-html-Bryan-Giraldo-Quintero

### Registro de Tickets

Aplicación de consola desarrollada en C para el registro de tickets de
reclamación.

El sistema permite capturar información del usuario, generar un número
de radicado único y almacenar los datos en un archivo.

Tecnología:

- C

Repositorio:

https://github.com/Godshley/ticket_system

### CodeFactory

Aplicación backend desarrollada con Spring Boot para la gestión de
envíos y su seguimiento.

Mi responsabilidad principal en el proyecto fue el modelado de la base
de datos y el diseño de la arquitectura de software.

Tecnologías:

- Java
- Spring Boot
- PostgreSQL
- Flyway
- Kubernetes

Repositorio:

https://github.com/Godshley/codefactory_20261

## Ejecución local

### Requisitos

Se requiere tener instalado:

- Node.js
- npm

### Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresar al proyecto:

```bash
cd portafolio
```

Instalar las dependencias:

```bash
npm install
```

### Desarrollo

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador:

```text
http://localhost:3000
```

### Verificación de TypeScript

Para verificar que no existan errores de TypeScript:

```bash
npx tsc --noEmit
```

### Lint

Para ejecutar la revisión estática del código:

```bash
npm run lint
```

### Compilación para producción

Para generar la compilación de producción:

```bash
npm run build
```

### Ejecución en producción

Después de realizar la compilación:

```bash
npm run start
```

La aplicación estará disponible en:

```text
http://localhost:3000
```

## Diseño responsive

El portafolio está diseñado para adaptarse a diferentes tamaños de
pantalla.

En escritorio se presenta una estructura de tres zonas:

- Barra lateral izquierda con información personal y habilidades.
- Contenido principal con las diferentes secciones del portafolio.
- Barra lateral derecha con enlaces a redes sociales.

En dispositivos móviles se utiliza una navegación adaptable para
facilitar el acceso a las diferentes secciones.

## Accesibilidad

Se incorporaron algunas prácticas básicas de accesibilidad, entre ellas:

- Uso del atributo `lang="es"` en el documento HTML.
- Etiquetas semánticas para estructurar el contenido.
- Atributos `aria-label` en elementos interactivos cuando son necesarios.
- Diálogos con `role="dialog"`.
- Uso de `aria-modal="true"` en los diálogos.
- Asociación de los diálogos con sus títulos mediante `aria-labelledby`.
- Textos alternativos para imágenes.

## Organización de componentes

El proyecto utiliza componentes reutilizables para evitar duplicación de
código y facilitar el mantenimiento.

Los componentes reciben información mediante propiedades y utilizan
archivos de datos separados para representar la información del
portafolio.

Esta organización permite modificar los datos sin necesidad de cambiar
la estructura de los componentes.

## Información de contacto

**Bryan Giraldo Quintero**

Estudiante de Ingeniería de Sistemas  
Universidad de Antioquia

- Ciudad: Medellín
- Email: bryan.giraldoq@udea.edu.co
- Teléfono: +57 316 052 4966
- GitHub: https://github.com/Godshley
- LinkedIn: https://www.linkedin.com/in/bryan-giraldo-quintero/

## Autor

**Bryan Giraldo Quintero**

Estudiante de Ingeniería de Sistemas  
Universidad de Antioquia