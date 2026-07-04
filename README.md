TripleTen – Around the U.S. Project
Around the U.S. is a responsive web project that allows users to add, remove, and like photos. The layout is fully adaptable to various screen sizes, using relative units and media queries to ensure the design stays consistent across different breakpoints without breaking. JavaScript is used to bring interactive functionality to the page elements.

Technologies used:
Semantic HTML5
BEM methodology
Flexbox
CSS Grid
Text overflow handling
Hover effects
Pseudo-classes
Relative units
Media queries
JavaScript
Live site: https://cnote86.github.io/web_project_around/

Programación Orientada a Objetos y Módulos ES6:
El proyecto fue refactorizado utilizando principios de programación orientada a objetos (POO) y sintaxis de módulos ES6 (export/import). El código está organizado en clases reutilizables:

• Card – maneja el renderizado de cada tarjeta de imagen, incluyendo la funcionalidad de dar like y eliminar
• FormValidator – gestiona la lógica de validación de formularios
• Popup – clase base para todos los popups/modales
• PopupWithForms – extiende Popup para formularios (editar perfil, agregar nueva tarjeta)
• PopupWithImage – extiende Popup para la vista previa de imágenes
• Section – maneja el renderizado de los elementos de tarjeta en la página
• UserInfo – gestiona la visualización y actualización de los datos del perfil del usuario

Estos módulos son importados y coordinados en index.js, manteniendo el código limpio, modular y fácil de mantener.
