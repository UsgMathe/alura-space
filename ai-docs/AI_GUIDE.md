# AI Agent Guide

## System Overview
The system is a web application that presents an interactive gallery of space photos. The primary purpose is to provide users with a visually appealing catalog of images, featuring functionalities such as filtering by tags and searching for text in any field (title, credits).

## Architecture
### Overall Structure
- **src/**: Contains the main components, services, and files.
  - **components/**: Directory for reusable React components.
    - Subdirectories like `Gallery`, `Header`, etc., contain complex components.
  - **pages/**: Directory for primary pages.
    - `Home/`: Main page component.
  - **services/**: Directory for auxiliary services.

### Main Modules
- **Components**: Reusable UI elements such as `Banner`, `Button`, `Card`, `Footer`, `Gallery`, and `Header`.
- **Pages**: Primary entry points like the home page (`Home`).
- **Services**: Auxiliary services, including local storage management.

### Separation of Responsibilities
- Components handle UI logic.
- Pages manage routing and main application flow.
- Services provide utility functions for data persistence (e.g., `localStorage`).

## Execution Flow
### Entry Points
- The entry point is `src/main.jsx`, which renders the root component (`App`) in the DOM.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### Main Data Flow
1. **Initialization**: The application starts in `main.jsx`, rendering the root component (`App`).
2. **Home Page**: The `Home` page is loaded and displays the photo gallery.
3. **User Interactions**:
   - Filters and searches are applied to display filtered or searched images.
   - Users can add photos to their favorites list.
4. **Local Storage Persistence**: Changes in favorites are saved using local storage.

### Interactions Between Components
- `Home` uses components like `Banner`, `Footer`, `Gallery`, `Header`, and `Nav`.
- `Gallery` interacts with the service for saving and retrieving favorites from local storage.
- `Card` and `ModalImage` are used within `Gallery`.

## Patterns and Conventions
### File Organization
- Components are organized in `src/components/` with subdirectories for complex components like `Gallery`.
- Pages are located in `src/pages/`.
- Services are encapsulated in `src/services/`.

### Naming Conventions
- **Alias**: The project uses aliases (`@`) to simplify imports.
- **Component Structure**: Components are grouped within directories, and complex components have subdirectories.

### Architectural Patterns
- Modular structure with clear separation of concerns between components, pages, and services.

## DO Rules (Required Practices)
- Use the existing modular structure for new features.
- Implement new business logic inside relevant React components or in `src/services/`.
- Utilize local storage through the provided service (`localStorage`).

## DON'T Rules (Forbidden Practices)
- Do not create unnecessary layers or controllers that are not supported by the current codebase.
- Avoid duplicating existing functionality; extend and modify existing modules instead.

## Anti-Patterns Identified
No clear anti-patterns identified from the provided code. The structure is modular and consistent, with no visible technical debt or risky structures.

## Modification Rules
### New Features Implementation
- Implement new features in `src/pages/` for pages.
- Extend components within `src/components/`.
- Add utility functions to `src/services/`.

### Code Duplication
- Prefer extending existing modules over duplicating code.
- Ensure consistency with the current implementation when modifying or adding functionality.

### High-Impact Areas
- Avoid direct modifications in core logic areas such as `Home/index.jsx` and `services/localStorage/index.js`.
- Preserve boundaries between components, pages, and services to maintain separation of concerns.

## Dependencies and Integrations
- **Local Storage**: Utilized for data persistence through the service module (`localStorage`).

## Critical Areas
### Core Logic
- `src/pages/Home/index.jsx`: Centralizes main interactions like gallery display and favorite management.
- `src/services/localStorage/index.js`: Manages local storage operations.

## Best Practices for Changes
- Avoid duplicating existing functionality; extend or modify existing modules instead.
- Preserve the modular structure to maintain separation of concerns.
- Minimize regression risk by thoroughly testing changes, especially in areas involving local storage persistence.

## Feature Implementation Strategy
1. **Start with**: `src/pages/Home/index.jsx` and relevant components (`Gallery`, `Card`, etc.).
2. **Inspect First**: Ensure understanding of the current implementation before making modifications.
3. **Extend Safely**: Use existing patterns to extend functionality without disrupting existing flows.
4. **Validate Changes**:
   - Test manually after changes, especially in areas involving local storage.

## Bug Fixing Strategy
1. **Trace Issues**: Use browser console logs and breakpoints to trace execution flow.
2. **Inspect First**: Focus on `Home/index.jsx` for main logic issues.
3. **Isolate Faulty Area**:
   - Identify the problematic component or service function.
4. **Validate Fixes**:
   - Test changes thoroughly without causing collateral damage.

## Known Unknowns
- No clear separation of layers (controllers, services) as all business logic is integrated within React components.
- Lack of detailed information on production configurations and build processes.