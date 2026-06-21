# 🔗 Enrollment Portal App

A React application designed to demonstrate core React concepts including hooks, controlled and uncontrolled forms, API consumption with Axios, validation with Yup, state lifting, and reusable component design.

===========================================================================================

# 👨‍💻 Author

Developed by: Sarah Malwil
Course: React Intermediate Assignment: Stage-3 Assessment - Enrollment Form: June 2026

===========================================================================================

# 🚀 Live Demo

(https://kode-camp-6-0-enrollment-portal.vercel.app/)

===========================================================================================

# 🛠️ Built With

React vite
CSS3
Vanilla JavaScript (ES6+)
Axios
Serverless Functions (Vercel)
no-auth API

===========================================================================================

# 📘 Stage 4 Task Implementations

## ➕ Component Additions

- 🧾 RosterFooter — used as a child component inside StudentList
- 🔐 ProtectedRoute — wrapper component used to protect the EnrollPage with fake - authentication (using localStorage)

## 📄 Pages Setup

- 🏠 HomePage — combines the student list and enroll form
- 📝 EnrollPage — protected route using a fake login flow implemented with localStorage
- 🔑 LoginPage — fake authentication login page
- 🧩 MainLayoutPage — layout wrapper for routes using <Outlet /> from react-router-dom
- ❌ NotFoundPage — handles invalid URLs (404 page)
- 👤 StudentDetailPage — dynamic route page for individual students using useParams()

### These pages were structured to support efficient browser navigation using React Router.

- 🧭 React Router Features Implemented
- 🔄 Browser navigation using useNavigate()
- 📍 Dynamic routing with useParams()
- 🔗 Route awareness with useLocation()
- 🔍 Query filtering using useSearchParams()
- 🚪 Protected routing using Navigate() for redirects

===========================================================================================

## 🏗️ Component-Based Architecture

Component-based architecture is a software design approach where the user interface is built from small, reusable pieces called components. Each component is responsible for a specific part of the UI and can be reused throughout the application.

In this project, components such as `Header`, `StudentList`, `StudentCard`, `EnrollForm`, `Button`, and `ClassButton` were created independently and combined to build the complete application. This approach improves code organization, reusability, maintainability, and scalability.

---

## ⚛️ Virtual DOM

The Virtual DOM is a lightweight copy of the actual browser DOM maintained by React.

When the application's state changes, React first updates the Virtual DOM and compares it with the previous version using a process called reconciliation. React then updates only the parts of the real DOM that have changed instead of re-rendering the entire page.

Benefits of the Virtual DOM include:

- 🚀 Faster UI updates
- ⚡ Improved application performance
- 🔄 Efficient rendering of dynamic data
- 🧠 Simplified state-driven user interfaces

---

## 🌐 API Integration and Error Handling

This application uses the **Random User API** to generate student records.

API Endpoint:

```text
https://randomuser.me/api/?results=6&nat=us,gb
```

### How the API was used

- Axios was used to perform asynchronous GET requests.
- Data returned from the API was transformed into the student object structure required by the application.
- Additional properties such as score and track were generated dynamically before storing the data in state.

### Loading State

While data is being fetched:

- The `loading` state is set to `true`.
- A loading component (`StatusMessage`) is displayed to inform users that data is being retrieved.

### Error Handling

If the API request fails:

- The error is caught using a `try...catch` block.
- The error is stored in state.
- An error message component is rendered to notify the user.

This ensures a better user experience and prevents application crashes caused by failed network requests.

---

## 📝 Controlled vs Uncontrolled Forms

This project demonstrates both controlled and uncontrolled form inputs.

### Controlled Components

Controlled components store form values in React state and update that state through event handlers.

Examples used in this project:

- First Name
- Last Name
- Track
- Score

Characteristics:

- 🎯 React fully controls the input value.
- 🔄 UI updates automatically whenever state changes.
- ✅ Easier validation and live previews.
- 📊 Ideal for complex forms and dynamic interfaces.

### Uncontrolled Components

Uncontrolled components store their values directly in the DOM and are accessed using refs.

Examples used in this project:

- Email
- Active Status Checkbox

Characteristics:

- 🔗 Values are accessed using `useRef`.
- ⚡ Requires less state management.
- 📝 Useful for simple inputs or integrating with non-React code.
- 🚫 Not suitable when real-time validation or UI updates are required.

### When to Use Each

| Controlled Components | Uncontrolled Components     |
| --------------------- | --------------------------- |
| Complex forms         | Simple forms                |
| Real-time validation  | Minimal validation          |
| Live previews         | Access value only on submit |
| State-driven UI       | DOM-driven inputs           |

This project intentionally uses both approaches to demonstrate understanding of React form management techniques.

===========================================================================================

## ✨ Features

### 📚 Student Data Management

- 🌐 Fetches student data from the Random User API using Axios.
- 🔄 Transforms API responses into a standardized student data structure.
- 📋 Displays students in a roster/list view.
- 📊 Calculates and displays the average score across all students.

### 🎓 Student Enrollment

- ➕ Add new students through an enrollment form.
- ⚡ Newly enrolled students are added to the roster instantly without page refresh.
- 🆔 Automatically generates a unique ID for each new student.
- 🛤️ Supports assignment of learning tracks and student status.

### 📝 Form Handling

- 🎛️ Demonstrates both controlled and uncontrolled form components.
- ✅ Controlled Inputs:
  - 👤 First Name
  - 👤 Last Name
  - 🛤️ Track
  - 🎯 Score
- 🔗 Uncontrolled Inputs using `useRef`:
  - 📧 Email
  - ☑️ Active Status (Checkbox)

### 🛡️ Form Validation

- ✔️ Validation implemented using Yup.
- 🚨 Required field validation.
- 📧 Email format validation.
- 🎯 Score validation (must be between 0 and 100).
- ⚠️ Displays validation messages before submission.

### 🏆 Student Performance Tracking

- 🎓 Automatically assigns grades based on score:
  - 🟢 A (90–100)
  - 🔵 B (80–89)
  - 🟡 C (70–79)
  - 🟠 D (60–69)
  - 🔴 F (0–59)
- 📌 Displays active/inactive enrollment status.

### ⚛️ React Component Architecture

- 🔹 Functional Components implementation.
- 🔸 Class-Based Components implementation.
- 🔘 Reusable Button components in both functional and class-based formats.
- 📦 Props destructuring and default props usage.
- ⬆️ State lifting through callback props (`onEnroll`).

### 🎨 User Experience

- ⏳ Loading state displayed while fetching student data.
- ❌ Error state displayed when API requests fail.
- 👀 Live preview of controlled form data while typing.
- 🧹 Form fields automatically reset after successful enrollment.
- 🔄 Refresh button to reload student data from the API.

### 🎲 Dynamic Data Generation

- 🎯 Random score generation for fetched students.
- 🛤️ Random track assignment from predefined learning tracks.
- 🖼️ Random avatar/profile image generation.

### 🧠 Technical Concepts Demonstrated

- ⚛️ React Hooks (`useState`, `useEffect`, `useRef`)
- 🖱️ Event handling
- 🔀 Conditional rendering
- 📑 List rendering with unique keys
- 🛡️ Form validation with Yup
- 🌐 API integration with Axios
- 📊 State management
- 🎛️ Controlled vs Uncontrolled Components
- 🧩 Component composition and prop drilling

===========================================================================================

# 📁 Project Structure

.
├── public
│ └── vite.svg
├── src
│ ├── components
│ │ ├── Button.jsx
│ │ ├── ClassButton.jsx
│ │ ├── EnrollForm.jsx
│ │ ├── Header.jsx
│ │ ├── StudentCard.jsx
│ │ └── StudentList.jsx
│ ├── App.jsx
│ ├── App.css
│ ├── main.jsx
│ └── index.css
├── package.json
├── vite.config.js
└── README.md

===========================================================================================

# 🔌 API Used

This project uses the no-auth API to load the initial roster:

GET https://randomuser.me/api/?results=6&nat=us,gb

===========================================================================================

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
