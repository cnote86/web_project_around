# TripleTen – Around the U.S. Project

Around the U.S. is a responsive web application that allows users to browse, add, remove, and like photos of national parks. The project features a fully adaptive layout built with relative units and media queries, ensuring a consistent experience across all screen sizes.

The application was refactored using **object-oriented programming (OOP)** principles and **ES6 module syntax** (export/import). The codebase is organized into reusable, modular classes that keep the code clean and maintainable.

## Technologies Used

- Semantic HTML5
- BEM methodology
- Flexbox & CSS Grid
- Responsive design with media queries and relative units
- JavaScript (ES6+)
- Object-Oriented Programming (OOP)
- ES6 Modules (export/import)

## Project Architecture

The JavaScript code is structured around the following classes:

- **Card** – Renders each image card and handles like/delete functionality
- **FormValidator** – Manages real-time form validation logic
- **Popup** – Base class for all modal popups
- **PopupWithForms** – Extends Popup to handle form submissions (edit profile, add new card)
- **PopupWithImage** – Extends Popup for full-size image preview
- **Section** – Handles rendering and prepending card elements to the page
- **UserInfo** – Manages user profile data display and updates

All modules are imported and coordinated in `index.js`, following a clean separation of concerns.

## Live Site

https://cnote86.github.io/web_project_around/
