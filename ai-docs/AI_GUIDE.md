# AI Agent Guide

## System Overview
The system is a web application that presents an interactive gallery of space photos. The primary purpose is to provide users with a catalog of visually appealing images, allowing them to navigate through different tags and perform searches.

## Architecture
### Overall Structure
- **Main Modules:**
  - `src/components/`: Contains React components.
  - `src/services/localStorage/`: Service for manipulating Local Storage.
  - `src/pages/Home/`: Main component that renders the home page.

### Separation of Responsibilities
- **Components:** Handle UI rendering and user interactions.
- **Services:** Manage data persistence using Local Storage.
- **Pages:** Coordinate the main components to provide a cohesive user experience.

## Execution Flow
### Entry Points
- The entry point is `src/main.jsx`, which mounts the `App` component in the DOM via `ReactDOM.createRoot`.

### Main Data Flow
1. **Initialization:**
   - Starts in `main.jsx`, rendering the `App` component.
2. **Home Page:**
   - Inside `App.jsx`, the home page (`Home`) is loaded.
3. **Interactive Components:**
   - The header (`Header`) allows users to search for photos and navigate to the gallery via a magnifying glass icon.
   - The gallery (`Gallery`) filters images based on selected tags or user searches.

### Interactions Between Components
- `Home` coordinates interactions between main components (`Header`, `Gallery`, `Footer`) to provide a smooth user experience.
- `Gallery` is responsible for filtering and displaying images based on tags or searches, managing the state of favorites.

## Patterns and Conventions
### File Organization
- **Components:** Located in `src/components/`.
- **Services:** Located in `src/services/localStorage/`.

### Naming Conventions
- Files and components have descriptive names indicating their functionality.

### Architectural Patterns
- Follows a modular component-based architecture where each component has clear responsibilities and interacts with others via props and shared state.

## DO Rules (Required Practices)
1. **Follow Modular Structure:**
   - Implement new features within existing modules or create new ones following the same pattern.
2. **Use Local Storage for Persistence:**
   - Ensure that any data persistence logic uses `src/services/localStorage/`.
3. **Maintain Component Responsibilities:**
   - Keep each component responsible for a single aspect of functionality.

## DON'T Rules (Forbidden Practices)
1. **Do Not Modify Critical Components Directly:**
   - Avoid direct modifications to core components like `Header`, `Gallery`, and `Card` unless absolutely necessary.
2. **Avoid Inventing New Patterns:**
   - Do not introduce new architectural patterns or conventions that deviate from the existing structure.

## Anti-Patterns Identified
- No clear anti-patterns identified in the provided codebase.

## Modification Rules
1. **New Features Implementation:**
   - Implement new features within existing components or create new ones following the modular pattern.
2. **Avoid Duplication:**
   - Prefer extending existing modules over duplicating functionality.
3. **Preserve Boundaries:**
   - Do not modify core logic unless necessary; extend instead.

## Dependencies and Integrations
- **Local Storage:** Used for persisting favorites between user sessions.
- **React Icons:** Library providing reusable icons throughout the project.

## Critical Areas
- **Local Storage Management:** Crucial for saving favorites, must be handled carefully.
- **Interactive Components (`Header`, `Gallery`, `Card`):** Central to functionality and require careful maintenance.

## Best Practices for Changes
1. **Avoid Duplication:**
   - Extend existing components or services rather than duplicating code.
2. **Preserve Existing Boundaries:**
   - Maintain the current modular structure and component responsibilities.
3. **Minimize Regression Risk:**
   - Validate changes thoroughly to avoid breaking existing functionality.

## Feature Implementation Strategy
1. **Start Point:** Begin in `src/main.jsx` for entry point understanding.
2. **Inspect First:** Review relevant components (`Home`, `Gallery`, etc.) and services (`localStorage/index.js`).
3. **Extend Safely:**
   - Extend or create new modules following the existing patterns.
4. **Validation After Change:**
   - Validate changes using ESLint, Vite build, and manual testing.

## Bug Fixing Strategy
1. **Trace Issues:** Start in `src/main.jsx` to trace execution flow.
2. **Inspect First:** Focus on components (`Header`, `Gallery`) involved in the issue.
3. **Isolate Faulty Area:**
   - Use console logs or debugging tools to isolate faulty areas.
4. **Validate Fix:**
   - Validate fixes using ESLint and Vite build without causing collateral changes.

## Known Unknowns
- No clear steps for executing the project locally from the provided codebase.