# AI Agent Guide

## System Overview
The system is a web application that presents an interactive gallery of space photos, allowing users to navigate through images filtered by tags and perform searches. The primary purpose is to provide an engaging and visually appealing catalog of space photographs.

## Architecture
### Overall Structure
- **Entry Point**: `src/main.jsx`
- **Components Directory**: Contains reusable React components.
- **Services Directory**: Contains services for manipulating the localStorage.

### Main Modules
- **Pages (`src/pages`)**: Contains main application pages, such as `Home`.
- **Components (`src/components`)**: Reusable React components like `Banner`, `Footer`, `Nav`, and `Gallery`.
- **Services (`src/services/localStorage`)**: Provides functions for manipulating the localStorage.

### Separation of Responsibilities
- **Pages**: Handle routing and main application logic.
- **Components**: Provide reusable UI elements with specific responsibilities.
- **Services**: Manage data persistence using localStorage.

## Execution Flow
### Entry Points
- The entry point is `src/main.jsx`, which renders the React application through the `App` component.

```jsx
import App from './App.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
```

### Main Data Flow
1. **Initialization**: The application initializes in `src/main.jsx`, rendering the `App` component.
2. **Component App**: The `App` component imports and renders the `Home` page.
3. **Component Home**: The `Home` component contains the main logic for gallery navigation, global search, and favorites management.

### Interactions Between Components
- **Home** interacts with components like `Banner`, `Footer`, `Nav`, and `Gallery`.
- **Gallery** uses localStorage service to save and retrieve favorite items.
- **Card** and **ModalImage** are used within the `Gallery` component.

## Patterns and Conventions
### File Organization
- `src/pages`: Contains main application pages.
- `src/components`: Reusable React components.
- `src/services/localStorage`: Service for manipulating localStorage.

### Naming Conventions
- Descriptive file names that reflect their functionality (e.g., `Banner`, `Footer`).

### Architectural Patterns
- Component-based architecture with reusable UI elements and encapsulated services.

## DO Rules (Required Practices)
- **Follow the existing modular structure**.
- **Use the provided directories for new components or services**.
- **Maintain consistent naming conventions**.
- **Ensure that changes to critical areas are thoroughly tested**.
- **Preserve the current flow of data and interactions between components**.

## DON'T Rules (Forbidden Practices)
- **Do not introduce external dependencies without explicit approval**.
- **Avoid duplicating existing functionality**.
- **Do not modify core logic in `Gallery` or related services directly unless necessary**.
- **Do not change file organization or naming conventions arbitrarily**.

## Anti-Patterns Identified
- **LocalStorage Dependency**: The use of localStorage for storing favorites can be risky due to browser limitations and lack of persistence guarantees.
- **Centralized Logic**: The logic for filtering by tag and global search is centralized in the `Gallery` component, which may require careful maintenance.

## Modification Rules
### New Features Implementation
- Implement new features within existing components or services as appropriate.
- Prefer extending functionality over duplicating code.
- Avoid modifying high-risk areas unless necessary.

### Extension Points
- **Components**: Extend functionality by adding new methods or properties to existing components.
- **Services**: Add new functions to the `localStorage` service for additional data management needs.

### Areas to Preserve
- **Critical Logic**: Do not modify core logic in `Gallery`, `Home`, and related services unless necessary.
- **Data Flow**: Ensure that changes do not disrupt the current flow of data between components.

## Dependencies and Integrations
- **LocalStorage**: Used for storing user favorites.

## Critical Areas
- **LocalStorage Service (`src/services/localStorage`)**: Central point for managing persistent storage.
- **Gallery Component Logic (`src/components/Gallery/index.jsx`)**: Handles filtering, searching, and favorite management.

## Best Practices for Changes
- **Avoid Duplication**: Extend existing components or services rather than duplicating code.
- **Preserve Boundaries**: Maintain the current modular structure and component interactions.
- **Minimize Regression Risk**: Thoroughly test changes to ensure they do not break existing functionality.
- **Consistency**: Keep new implementations consistent with existing patterns.

## Feature Implementation Strategy
1. **Start Point**: Begin by understanding the `Home` page logic in `src/pages/Home/index.jsx`.
2. **Inspect Files**:
   - `src/components/Gallery/index.jsx`
   - `src/services/localStorage/index.js`
3. **Extend Safely**: Add new features within existing components or services.
4. **Validation**: Test changes locally and ensure no regression issues.

## Bug Fixing Strategy
1. **Trace Issues**: Start by analyzing the component where the issue occurs.
2. **Inspect First**:
   - `src/pages/Home/index.jsx`
   - Affected components (e.g., `Gallery`, `Card`).
3. **Isolate Faulty Area**: Use console logs and debugging tools to isolate the problematic area.
4. **Validate Fix**: Ensure that changes do not affect other parts of the application.

## Known Unknowns
- The exact structure of data sources or external integrations for images and tags is unclear from the provided code.
- Details on how the JSON files (`photos.json`, `popularPhotos.json`) are updated or maintained are missing.