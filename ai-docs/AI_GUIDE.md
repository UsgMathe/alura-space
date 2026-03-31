# AI Agent Guide

## System Overview
The system is a web application that displays a gallery of space photos, allowing users to navigate through images and filter by tags. The primary purpose is to provide an interactive and visually appealing catalog of space photographs.

## Architecture
### Overall Structure
- **Entry Point**: `src/main.jsx`
- **Components**:
  - `App.jsx`: Root component that renders the application.
  - `Home.jsx`: Main page component containing the gallery, header, navigation, footer, and banner.
  - Various reusable components in `src/components/`.
- **Services**:
  - Local storage functions for managing favorites: `src/services/localStorage/index.js`

### Main Modules
- **Pages**: Contains main application pages such as `Home.jsx` located at `src/pages/Home`.
- **Components**: Reusable UI elements like `Header`, `Nav`, `Gallery`, and `Footer` are in `src/components/`.
- **Services**: Local storage functions for managing favorites.

### Separation of Responsibilities
- **Pages** handle the overall layout and orchestration.
- **Components** provide reusable UI elements with specific functionalities.
- **Services** manage local data persistence.

## Execution Flow
### Entry Points
- The main entry point is `src/main.jsx`, which renders the application using React DOM.

```jsx
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### Main Data Flow
1. **Home Page**: The main page (`src/pages/Home/index.jsx`) coordinates the display of the gallery and child components.
2. **Gallery Component**: Manages image filtering by tag, global search, and favorite management.

### Interactions Between Components
- `Home` utilizes various child components such as `Header`, `Nav`, `Gallery`, `Banner`, and `Footer`.
- `Gallery` interacts with local storage to manage favorites.
- Child components of `Gallery` (e.g., `Cards`) receive functions for adding, removing, and checking favorites.

## Patterns and Conventions
### File Organization
- **Components**: Reusable UI elements are in `src/components/`.
- **Pages**: Main application pages are in `src/pages/`.
- **Services**: Local storage functions are in `src/services/localStorage`.

### Naming Conventions
- **Component Names**: Use camelCase (e.g., `Header`, `Gallery`).
- **Service Directory**: Located in `src/services/`.

## DO Rules (Required Practices)
- Follow the existing modular structure and naming conventions.
- Implement new features within the appropriate components or services directories.
- Ensure that any changes to local storage functions are consistent with current practices.

## DON'T Rules (Forbidden Practices)
- Do not introduce new routing mechanisms unless necessary.
- Avoid duplicating logic; extend existing components or create new ones as needed.
- Do not modify critical configuration points without thorough testing and validation.

## Anti-Patterns Identified
No clear anti-patterns can be identified from the provided codebase. However, avoid overcomplicating the `Gallery` component by adding too many features that could make it brittle.

## Modification Rules
### New Features Implementation
- Implement new features within existing components or services directories.
- Prefer extending current functionality rather than duplicating logic.
- Avoid modifying critical areas unless necessary and thoroughly tested.

### Preservation of Consistency
- Ensure any changes maintain consistency with the existing codebase.
- Follow established patterns for file organization, naming conventions, and component interactions.

## Dependencies and Integrations
- **Local Storage**: Used to manage user favorites (`src/services/localStorage/index.js`).

## Critical Areas
- **Gallery Component**: Manages filtering, searching, and favorite management. Any changes here should be carefully tested.
- **LocalStorage Functions**: Manage persistence of user data; ensure any modifications do not break existing functionality.

## Best Practices for Changes
- Avoid duplication by extending or reusing existing components.
- Preserve established boundaries to maintain consistency with the current implementation.
- Minimize regression risk through thorough testing and validation after changes.

## Feature Implementation Strategy
1. **Start Point**: Identify where new features should be implemented within existing components or services directories.
2. **Files/Modules Inspection**:
   - `src/pages/Home/index.jsx`: Main page component.
   - `src/components/Gallery/index.jsx`: Gallery component for filtering and searching.
3. **Safe Extension**:
   - Extend functionality by adding new methods or props to existing components.
4. **Validation**: Test changes thoroughly using `npm run dev` before committing.

## Bug Fixing Strategy
1. **Trace Issues**: Use console logs or breakpoints in Chrome DevTools starting from the main entry point (`src/main.jsx`) and follow the flow to relevant components.
2. **Inspect First**:
   - Focus on the `Gallery` component for filtering, searching, and favorite management issues.
3. **Isolate Faulty Area**: Identify problematic areas by adding logs or breakpoints in suspected modules.
4. **Validate Fix**: Ensure changes do not cause collateral damage through thorough testing.

## Known Unknowns
- No clear details about production environment setup or deployment procedures.
- Lack of information on persistent storage beyond local storage for favorites.