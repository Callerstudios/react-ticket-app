# TicketApp – React Implementation

This repository contains the **React version** of the Multi-Framework Ticket Management Web App, part of the Frontend Stage 2 assignment. The app provides a fully functional ticket system with authentication, dashboard, and CRUD operations for tickets.

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Frameworks & Libraries Used](#frameworks--libraries-used)  
4. [Setup & Installation](#setup--installation)  
5. [Running the App](#running-the-app)  
6. [UI & State Structure](#ui--state-structure)  
7. [Authentication & Protected Routes](#authentication--protected-routes)  
8. [Accessibility Considerations](#accessibility-considerations)  
9. [Test User Credentials](#test-user-credentials)  
10. [Known Issues](#known-issues)  

---

## Project Overview

TicketApp is a **robust ticket management system** built in React. Users can:

- Log in and sign up (simulated via `localStorage` session token)
- View a dashboard with ticket statistics
- Manage tickets with full **CRUD** functionality (Create, Read, Update, Delete)
- Receive **real-time feedback** via inline messages and toast notifications

The layout follows a **consistent design language** used across Vue.js and Twig implementations:

- Wave hero section on landing page
- Decorative circles and card-style components
- Max-width of 1440px, fully responsive design
- Color-coded ticket statuses: Open (Green), In Progress (Amber), Closed (Gray)

---

## Features

- **Landing Page:** Hero section with wave SVG, decorative elements, responsive layout  
- **Authentication:** Login & Signup forms, validation, and simulated session token  
- **Dashboard:** Stats overview (Total, Open, In Progress, Closed tickets)  
- **Ticket Management Screen:** Full CRUD, validation, confirmation prompts, toast notifications  
- **Responsive Design:** Works across mobile, tablet, and desktop devices  
- **Accessibility:** Semantic HTML, alt text, visible focus states, sufficient color contrast  

---

## Frameworks & Libraries Used

- **React 18** (Functional components & hooks)  
- **React Router** (for routing and protected routes)  
- **LocalStorage** (for authentication simulation and storing tickets)  
- Optional: CSS or SCSS for styling  

---

## Setup & Installation

1. **Clone the repository**  

```bash
git clone <your-react-repo-url>
cd ticketapp-react
```
2. **Install dependencies**  

```bash
npm install
```
3. **Start development server**  

```bash
npm run dev
```

## Running the App

- Open [http://localhost:3000](http://localhost:3000) in your browser
- Use the **Login** or **Signup** pages to access the dashboard
- Navigate to the **Ticket Management** page to create, edit, or delete tickets

## UI & State Structure

**Components:**

- **LandingPage.jsx** – Hero section, features, and call-to-action buttons
- **Login.jsx / Signup.jsx** – Authentication forms with validation and feedback
- **Dashboard.jsx** – Stats overview of total, open, in-progress, and closed tickets
- **Tickets.jsx** – Ticket CRUD interface, including modals and toast notifications

**State Management:**

- Local state using `useState` for tickets, form inputs, and modal visibility
- Session stored in `localStorage` under the key `ticketapp_session`

## Authentication & Protected Routes

- Only authenticated users can access **Dashboard** and **Ticket Management** pages
- Unauthorized access redirects to `/auth/login`
- Clicking **Logout** clears the session and redirects to the landing page

## Accessibility Considerations

- Semantic HTML tags used (`<header>`, `<main>`, `<section>`, etc.)
- Visible focus states for interactive elements
- Color contrast follows **WCAG standards**
- Descriptive alt text provided for decorative images

## Test User Credentials

Since authentication is simulated via `localStorage`:

- Signup with any email & password
- Example test credentials:
  - **Email:** testuser@example.com
  - **Password:** password123

## Known Issues

- Tickets are stored in `localStorage`; data will reset if cleared
- No backend integration yet; authentication is fully simulated
- Mobile navigation toggle may require minor CSS adjustments
