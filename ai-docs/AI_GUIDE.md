# AI Agent Guide

## System Overview
The system is a web application that presents an interactive gallery of space photos. It allows users to navigate through different categories, perform global searches, and favorite their preferred images.

## Architecture
### Overall Structure
- **Entry Point**: `src/main.jsx`
- **Main Modules**:
  - `App.jsx`: Root component rendering the Home page.
  - `pages/Home/index.jsx`: Main logic for navigation, search, and favoriting photos.
  - `components/`: Contains reusable components like Banner, Footer, Gallery, Header, Nav, Populares, Card, Button, etc.
- **Services**:
  - `src/services/localStorage/index.js`: Handles data persistence in localStorage.

### Separation of Responsibilities
- **App.jsx**: Orchestrates the rendering of the Home component.
- **Home Component (`pages/Home/index.jsx`)**: Manages navigation, search functionality, and favoriting photos.
- **Components**:
  - `Banner`, `Footer`, `Gallery`, `Header`, `Nav`, `Populares`, `Card`, `Button`: Reusable UI components with specific responsibilities.

## Execution Flow
### Entry Points
- The entry point is `src/main.jsx` which renders the App component, and subsequently the Home page.
  
### Main Data Flow
1. **User Interaction**:
   - User interacts with the Header to perform searches or navigate through categories.
2. **Component Interactions**:
   - `Home` component manages state for search queries and selected tags.
   - `Gallery` component filters photos based on these states and displays them.
3. **Data Persistence**:
   - Favorited photos are stored in localStorage using the service located at `src/services/localStorage/index.js`.

### Interactions Between Components
- The Home component interacts with Gallery, Banner, Nav, and Populares components to manage navigation and display logic.
- The Gallery component handles filtering of images based on tags or search queries.

## Patterns and Conventions
### File Organization
- **Components**: Located in `src/components/`.
- **Pages**: Located in `src/pages/Home/index.jsx`.
- **Services**: Located in `src/services/localStorage`.

### Naming Conventions
- Components are named as `index.jsx` within their respective directories.
- Services are located under `src/services/`.

### Architectural Patterns
- Componentization: Each component is responsible for a specific functionality and can be reused across the application.

## DO Rules (Required Practices)
1. **Follow Componentization**: Ensure each new feature or modification adheres to the existing pattern of modular components.
2. **Use Existing Services**: For data persistence, use `src/services/localStorage/index.js` instead of creating new services unless necessary.
3. **Maintain State Management in Home Component**: Any changes related to navigation, search, and favoriting should be managed within the `Home` component.
4. **Preserve UI Logic in Components**: Keep UI logic encapsulated within components rather than mixing it with business logic.

## DON'T Rules (Forbidden Practices)
1. **Avoid Direct Manipulation of State Outside Home Component**: Do not directly modify state outside the `Home` component unless there is a clear need for decoupling.
2. **Do Not Create New Services Arbitrarily**: Avoid creating new services unless it simplifies or encapsulates complex logic effectively.

## Anti-Patterns Identified
- **Strong Coupling in Home Component**: The `Home` component is tightly coupled with other components like Gallery, Banner, and Nav, making isolated changes difficult.
  
## Modification Rules
1. **New Features**:
   - Implement new features within the existing modular structure.
   - Prefer extending or modifying existing components rather than duplicating them.
2. **Avoid Direct Modifications**:
   - Do not modify core logic in `Home` unless necessary to avoid architectural drift.
3. **Preserve Consistency**:
   - Ensure any changes align with the current implementation and do not introduce new patterns.

## Dependencies and Integrations
- **LocalStorage**: Used for storing favorited photos.
  
## Critical Areas
1. **Component Home (`src/pages/Home/index.jsx`)**: Centralizes navigation, search, and favoriting logic.
2. **Service Local Storage (`src/services/localStorage/index.js`)**: Manages data persistence.

## Best Practices for Changes
- **Avoid Duplication**: Extend existing components or services rather than duplicating them.
- **Preserve Boundaries**: Maintain the separation of responsibilities between components and services.
- **Minimize Regression Risk**: Validate changes thoroughly to ensure no unintended side effects occur.

## Feature Implementation Strategy
1. **Start with Home Component**:
   - Inspect `src/pages/Home/index.jsx` for existing logic related to new features.
2. **Extend Components Safely**:
   - Extend or modify components as needed, ensuring consistency with the current implementation.
3. **Validate Changes**:
   - Test changes manually and ensure no unintended side effects.

## Bug Fixing Strategy
1. **Trace Issues**:
   - Start by tracing execution from `src/main.jsx` to identify faulty areas.
2. **Inspect Components First**:
   - Focus on the Home component (`pages/Home/index.jsx`) for issues related to navigation, search, and favoriting.
3. **Isolate Faulty Area**:
   - Use breakpoints or console logs in relevant components to isolate the issue.
4. **Validate Fix**:
   - Validate changes by testing affected features manually.

## Known Unknowns
- No clear evidence of traditional layer separation (controllers, services, repositories).
- Lack of information on production setup and deployment procedures.