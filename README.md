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
