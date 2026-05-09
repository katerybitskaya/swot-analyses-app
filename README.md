# SWOT Analysis Web Application

## Project Description

This project is an interactive web application designed for conducting a comprehensive SWOT Analysis (evaluating Strengths, Weaknesses, Opportunities, and Threats). It provides users with a convenient, step-by-step questionnaire tool that automatically calculates weights and generates final analysis results.

The application includes a fully functional authentication system featuring user registration, secure login, password recovery, and email verification mechanisms. In the latest updates, the project's aesthetics were completely revamped to offer a premium, modern experience.

### Core Features:
* **Authentication System (`index.html`, `script.js`):** Secure login, account creation, encrypted passwords, and password resets.
* **Main Dashboard (`main.html`):** The primary user hub after a successful login, complete with a sidebar and profile management.
* **Analysis Module (`analysis.html`, `questions.js`):** The core section providing the interface to answer SWOT/TOWS evaluation questions.
* **Results Display (`result.html`, `result.js`, `weight.js`):** A data visualization page summarizing the completed analysis with dynamic tables and charts.

---

## Modern Aesthetics & Design System

The application's UI/UX has been heavily upgraded to offer a visually stunning, state-of-the-art experience without relying on heavy frontend frameworks:
* **Glassmorphism:** Navigation bars and content panels utilize advanced `backdrop-filter: blur(12px)` technology to create a sleek frosted-glass effect.
* **Premium Typography:** Integrated the modern **Inter** font family via Google Fonts for enhanced readability and a clean look.
* **Dynamic Animations:** Interactive elements feature smooth micro-animations, glowing hover shadows, and gradient transitions (`--primary-gradient`, `--success-gradient`, etc.).
* **Unified CSS Variables:** A consistent color token system ensures visual harmony across all application modules.

---

## Technologies Used

The project is built on a pure Vanilla Stack, prioritizing lightweight performance and maximum structural control over third-party dependencies.

### 🎨 Frontend (Client-side)
* **HTML5:** Provides the semantic structure across all application pages.
* **CSS3 (Vanilla):** Modular stylesheets (`style.css`, `main.css`, `analysis.css`, `result.css`) enriched with custom properties (CSS variables), Flexbox/Grid layouts, and modern pseudo-selectors.
* **JavaScript (Vanilla JS):** Handles all client-side logic:
  * Asynchronous server requests (Fetch API).
  * Dynamic DOM updates without full page reloads.
  * Complex scoring calculations and flow logic (`weight.js`, `questions.js`).

### ⚙️ Backend (Server-side)
* **PHP (Vanilla):** Implements business logic and serves as the bridge to the database.
  * `user_api.php` — API handling all authorization and registration requests.
  * `send_verification.php` / `send_verificationADD.php` — Logic for dispatching email verification codes.
  * Secure database interactions using the modern **PDO (PHP Data Objects)** extension.

### 🗄️ Database
* **MySQL:** A relational database management system.
  * Safely stores user data (usernames, hashed passwords, email addresses).
  * Connection parameters are securely isolated in a designated configuration file (`config.php`).
  * Default database name: `swot_db`.
