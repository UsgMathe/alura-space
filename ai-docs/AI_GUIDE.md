# AI Agent Guide

## System Overview
The system is a web application that presents an interactive gallery of space photos. It allows users to navigate through different tags, perform global searches based on title, tag, or credits, and favorite individual photos.

## Architecture
### Overall Structure
- **Entry Point**: `src/main.jsx`
- **Application Initialization**: `src/App.jsx` renders the main component (`Home`).
- **Main Component**: `src/pages/Home/index.jsx`

### Main Modules
- **Pages**
  - `Home`: Located in `src/pages/Home/index.jsx`, it is the primary page that contains the gallery and navigation logic.
- **Components**
  - `Banner`, `Footer`, `Gallery`, `Header`, `Nav`, `Popular`, etc., located in `src/components/*`.
- **Services**
  - Local Storage: Located in `src/services/localStorage/index.js`.

### Separation of Responsibilities
- **Pages**: Handle high-level navigation and rendering.
- **Components**: Reusable UI elements with encapsulated logic.
- **Services**: Manage local storage for state persistence.

## Execution Flow
### Entry Points
- Main entry point: `src/main.jsx`
- Application initialization: `src/App.jsx`

### Main Data Flow
1. **User Interaction**:
   - User interacts with the `Header` component to perform global searches or navigate by tags.
2. **Processing**:
   - The `Gallery` component filters and displays photos based on selected tags and search queries.
3. **Persistence**:
   - Favorite photos are stored locally using the `localStorage` service.

### Interactions Between Components
- **Home**: Uses components like `Header`, `Gallery`, `Banner`, `Footer`, and `Popular`.
- **Gallery**: Interacts with `Cards` to display filtered photos.
- **Card**: Manages favorite functionality and modal opening.

## Patterns and Conventions
### File Organization
- `src/pages`: Contains main page components (e.g., `Home`).
- `src/components`: Reusable UI components (e.g., `Banner`, `Footer`, `Gallery`).
- `src/services/localStorage`: Local storage service for state management.

### Naming Conventions
- **Components**: PascalCase (e.g., `Gallery`, `Card`).
- **Services and Utilities**: Specific directories like `services/localStorage`.
- **JSON Files**: Static data stored in `src/components/Gallery/photos.json`.

### Architectural Patterns
- **Componentization**: Components are well-defined for modularity.
- **State Management**: Local state is managed using `localStorage`.

## DO Rules (Required Practices)
- Follow the existing file structure and naming conventions.
- Use local storage (`localStorage`) for managing persistent user data.
- Ensure that new features are implemented in modular components within their respective directories.

## DON'T Rules (Forbidden Practices)
- Do not create global state management systems unless necessary.
- Avoid duplicating code; extend existing modules instead.
- Do not modify the `src/services/localStorage` service without a clear need and thorough testing.

## Anti-Patterns Identified
No significant anti-patterns or technical debt were identified in the provided codebase. However, any new patterns should be carefully evaluated to avoid architectural drift.

## Modification Rules
### New Features Implementation
- Implement new features within modular components.
- Prefer extending existing modules over duplicating them.
- Avoid modifying core logic unless necessary (e.g., `Home`, `Gallery`).

### Preservation of Consistency
- Ensure that any changes align with the current codebase patterns and conventions.

## Dependencies and Integrations
- **Local Storage**: Used for storing user preferences and state (`src/services/localStorage/index.js`).
- No external services or APIs are integrated in the provided code.

## Critical Areas
### Core Logic
- `Home`: Centralizes rendering logic.
- Local Storage Service: Manages persistent data storage.

### High-Coupling Regions
- The `Home` component depends heavily on other components like `Gallery`, `Card`, and `Footer`.

## Best Practices for Changes
- Avoid duplication by extending existing modules.
- Preserve existing boundaries to minimize regression risk.
- Keep behavior consistent with the current implementation.

## Feature Implementation Strategy
1. **Start Point**: Identify where new features should be implemented (e.g., within a component).
2. **Files to Inspect First**:
   - `src/pages/Home/index.jsx`
   - Relevant components in `src/components/*`.
3. **Safe Extension**:
   - Extend existing modules rather than duplicating them.
4. **Validation After Change**: Validate changes using the provided test suite or add new tests as needed.

## Bug Fixing Strategy
1. **Trace Issues**:
   - Use browser console and React DevTools to debug issues.
2. **Inspect First**:
   - Start with `src/pages/Home/index.jsx` for core logic issues.
3. **Isolate Faulty Area**:
   - Identify the specific component or service causing the issue.
4. **Validate Fix**:
   - Ensure that changes do not cause collateral effects and validate using existing tests.

## Known Unknowns
- No external databases or services are integrated in the provided codebase, making it difficult to assess potential dependencies.
- The structure of `src` may expand with new features but this is not evident from the current code.