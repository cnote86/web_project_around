# Project 11 checklist review

Reviewed against `Lista_de_comprobacion_Proyecto_11.pdf`.

| Checklist area | Result |
| --- | --- |
| Required files | Present under `src/`, including `page/index.css`, `page/index.js`, images, blocks, and all seven component classes. Root `index.html` redirects to the application. |
| README | Includes project name, functionality, technologies, architecture, and local launch instructions. |
| BEM and code organization | Flat block stylesheets; ES modules; one class per component file; descriptive method names and consistent nesting. |
| Initial gallery | Six cards created through JavaScript and rendered through `Section`. |
| Card actions | Chrome checks passed for like/unlike, delete, new-card prepending, and image preview. |
| Form submission | Chrome checks passed for profile save/reopen and new-card submission with Enter. Form values and resets are encapsulated in `PopupWithForms`. |
| Validation | Shared HTML5/ValidityState validation; separate submit-button state method; `setEventListener()` enables validation for both forms. Invalid inputs show errors and disable submit; reopening clears stale errors. |
| Popups | Static HTML dialogs; Chrome checks passed for close controls, Escape, outside clicks, and keeping previews open on inside clicks. Outside-click detection excludes keyboard-generated submit clicks. |
| Responsive behavior | Chrome checked page overflow and popup close-button visibility at 320×568, 375×667, 768×1024, 1280×800, and 667×320. Preview CSS preserves image proportions. |
| OOP | Required classes present; one UserInfo, one Section, one validator per form, one Card per card, and Popup subclasses per popup. Composition happens in the entry module. Popup is imported by its subclasses. |
| Safe DOM operations | User text uses textContent; no innerHTML assignments. Cards are populated before insertion. Escape listener is added on open and removed on close. |
| HTML/CSS basics | Normalize.css is the first CSS import; title, lang, and viewport are present. |
| Interface accessibility | English image alt text; labeled form fields and controls; live validation errors; hover states for application controls and card images; visible keyboard focus on buttons. |
| Runtime/assets | Chrome interaction checks completed without JavaScript exceptions or failed application asset responses. |

## Limits of verification

The PDF references a separate project brief and design. Those were not supplied,
so exact visual matching, every required design section, and class interfaces
specified only in that brief remain unverified. The checklist also says every
class is imported into index.js; the base Popup is imported by its subclasses,
where it is used, rather than adding an unused direct import.

The listed sizes are representative checks, not proof for every possible screen
resolution or browser. The live deployment has not been updated or verified.
