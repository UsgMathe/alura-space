# AI Agent Guide

## System Overview
The system is a web application that presents an interactive gallery of space photos. The primary purpose is to provide users with a catalog of images they can navigate through using tags and search functionality.

## Architecture
### Overall Structure
- **Entry Point**: `src/main.jsx`
- **Main Modules**:
  - `App.jsx`: Root component rendering the Home page.
  - `pages/Home/index.jsx`: Main component for the home page, including navigation by tags and global search.
  - `components/`: Directory containing reusable components like Banner, Footer, Gallery, Header, Nav, Populares, Card, Button, etc.
  - `services/localStorage/index.js`: Service for manipulating localStorage.

### Separation of Responsibilities
- **App.jsx**: Manages the entry point and renders the Home component.
- **Home Component**: Handles user interactions such as tag navigation and search functionality.
- **Gallery Component**: Manages image display in the gallery, including filtering by tags and global search.
- **LocalStorage Service**: Manages storage and retrieval of data from localStorage.

## Execution Flow
### Entry Points
- `src/main.jsx`: Main entry point that renders the App component.
```jsx
import App from './App.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
```

### Main Data Flow
1. **Input**: User interacts with the Header to perform searches and navigate by tags.
2. **Processing**:
   - The Home component receives input (tags, search) and passes it to the Gallery component.
   - The Gallery filters images based on tags or search terms and renders them through the Cards component.
3. **Persistence**: Favorite data is stored in localStorage using the `localStorage` service.

### Interactions Between Components
- Header sends events to Home, which updates internal states and passes them to Gallery.
- Gallery filters images based on received parameters and renders them via Cards component.
- Cards component interacts directly with the localStorage service for favoriting or unfavoriting images.

## Patterns and Conventions
### File Organization
- The project is organized into modules where each component or service is encapsulated in its own directory.
- Components are named with `index.jsx` to facilitate import through aliases configured in `jsconfig.json`.

### Naming Conventions
- Components are prefixed with `index.jsx`.
- Services and utilities are located in dedicated directories like `services/`, `utils/`, etc.

### Architectural Patterns
- **Componentization**: Each component is responsible for a specific functionality.
- **Encapsulated Services**: The localStorage service is encapsulated in its own directory (`src/services/localStorage`).

## DO Rules (Required Practices)
- Follow the modular structure and do not mix responsibilities across components or services.
- Use existing directories and file naming conventions when adding new features.
- Ensure that changes to state management are consistent with current practices, especially for localStorage interactions.

## DON'T Rules (Forbidden Practices)
- Do not create global state outside of `localStorage` unless absolutely necessary.
- Avoid duplicating logic; extend existing components or services instead.
- Do not modify core components like `Home`, `Gallery`, and `Header` directly without thorough testing.

## Anti-Patterns Identified
- **Complex Components**: The Home and Gallery components have a significant amount of logic, which can make maintenance difficult.
- **Global State Management**: Manipulating global state through localStorage requires careful handling to avoid inconsistencies.

## Modification Rules
### New Features Implementation
- Implement new routes or entry points in `src/pages/`.
- Add new business rules within the Home component (`src/pages/Home/index.jsx`) or create a new component inside `components/` if logic is specific.
- Integrate external services by encapsulating them in separate directories under `src/services/`.

### Code Duplication
- Prefer extending existing components over duplicating code.

### High-Impact Areas
- Avoid direct modifications to core components like Home, Gallery, and Header unless necessary. Ensure thorough testing after changes.

## Dependencies and Integrations
- **localStorage API**: Used for storing favorite image data.
- **react-icons**: Library used in components such as Header, Nav, and Footer.
- **Vite**: Build tool.
- **ESLint**: Code validation.
- **PostCSS**: CSS processing.
- **Tailwind CSS**: Styling framework.

## Critical Areas
- **Home Component (`src/pages/Home/index.jsx`)**: Manages user interactions and state updates for the gallery.
- **Gallery Component (`src/components/Gallery/index.jsx`)**: Handles image filtering and rendering based on tags and search terms.
- **LocalStorage Service (`src/services/localStorage/index.js`)**: Manages storage and retrieval of data in localStorage.

## Best Practices for Changes
- Avoid duplicating logic; extend existing components or services instead.
- Preserve existing boundaries to maintain consistency with the current implementation.
- Minimize regression risk by thoroughly testing changes, especially those affecting state management.

## Feature Implementation Strategy
1. **Start**: Begin by understanding the entry point (`src/main.jsx`) and main component (`App.jsx`).
2. **Inspect First**:
   - `src/pages/Home/index.jsx`: Main logic for user interactions.
   - `src/components/Gallery/index.jsx`: Image filtering and rendering.
3. **Extend Safely**: Extend existing components or services rather than duplicating code.
4. **Validate After Change**: Test changes thoroughly, especially in areas involving state management.

## Bug Fixing Strategy
1. **Trace Issues**:
   - Start by analyzing the console for errors and relevant messages.
2. **Inspect First**:
   - `src/pages/Home/index.jsx`: Main logic for user interactions.
   - `src/components/Gallery/index.jsx`: Image filtering and rendering.
3. **Isolate Faulty Area**: Identify the specific component or service causing issues.
4. **Validate Fix**: Ensure changes do not cause collateral damage by thoroughly testing.

## Known Unknowns
- The exact steps to execute the project locally are unclear from the provided code.
- There is no clear separation of layers in the codebase, making it difficult to identify distinct architectural layers.