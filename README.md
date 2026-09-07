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

## Run Locally

From the project directory, run `python3 -m http.server 8000`, then open
`http://localhost:8000`. The root entry redirects to `src/index.html` so the
existing static-hosting entry point continues to work. No build step is required.

## Source Structure

- `src/index.html`: page, forms, dialogs, and card template.
- `src/page/index.js` and `src/page/index.css`: application entry points.
- `src/components/`: the seven required JavaScript classes.
- `src/blocks/`: flat BEM structure, with a stylesheet for each block.
- `src/images/` and `src/vendor/`: images, fonts, and Normalize.css.
- `src/utils.js`: initial card data and shared validation settings.

Form popups collect values and reset their forms internally. Submission callbacks
connect them to `UserInfo` and `Section`. Validation starts through
`FormValidator.setEventListener()`. `Section.renderItems()` calls the supplied
renderer, and `addItem()` inserts cards. Classes do not instantiate other classes.

See [CHECKLIST.md](./CHECKLIST.md) for verification results and remaining limits.
