# Prueba Técnica - No Country

Este proyecto es una prueba técnica desarrollada utilizando Next.js con TypeScript, Tailwind CSS para los estilos y Shadcn UI para los componentes de interfaz de usuario.

**Debido al tiempo disponible, el diseño implementado es básico y funcional.** El objetivo principal se centró en la correcta implementación de la estructura y la lógica solicitada.

## Tecnologías Utilizadas

* **Next.js:** Framework de React para la renderización del lado del servidor y la creación de aplicaciones web escalables.
* **TypeScript:** Superset de JavaScript que añade tipado estático para mejorar la seguridad y el mantenimiento del código.
* **Tailwind CSS:** Framework de CSS utilitario que permite un desarrollo rápido y flexible de la interfaz de usuario directamente en el HTML.
* **Shadcn UI:** Colección de componentes de interfaz de usuario reutilizables y accesibles, construidos con Radix UI y Tailwind CSS.

## Estructura del Proyecto

La estructura del proyecto se ha organizado de la siguiente manera:

* **`types/`**: Esta carpeta contiene el archivo con las definiciones de tipos utilizados en la aplicación para asegurar la coherencia y la seguridad del tipado.
* **`data/`**: Dentro de esta carpeta se encuentra el archivo que alberga los datos estáticos utilizados para la demostración. Esto permite tener datos de prueba fácilmente accesibles.
* **`components/`**: Esta carpeta contiene todos los componentes reutilizables de la interfaz de usuario. Como se puede observar en la imagen, incluye los siguientes componentes:
    * `ui/`: (componentes de Shadcn UI).
    * `InsightsCarousel.tsx`: Componente para mostrar el carrusel de insights.
    * `InsightsModal.tsx`: Componente para mostrar información detallada en una un modal.
    * `Sidebar.tsx`: Componente para la barra lateral de navegación.
    * `TeamDashboard.tsx`: Componente principal que representa el panel de control del equipo.
    * `TeamMembers.tsx`: Componente para mostrar la lista de miembros del equipo.
    * `TeamTabs.tsx`: Componente para la navegación mediante pestañas (tabs) dentro del panel del equipo.

## Consideraciones

* **Diseño Básico:** Dada la limitación de tiempo, el diseño se ha mantenido simple y funcional para asegurar la correcta implementación de la lógica y la estructura.
* **Datos Estáticos:** Los datos utilizados en la aplicación son estáticos y están definidos en la carpeta `data`. En una aplicación real, estos datos provendrían de una API o una base de datos.

## Próximos Pasos

* Mejora del diseño y la experiencia de usuario.
* Implementación de funcionalidades adicionales.
