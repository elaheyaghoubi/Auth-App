# Simple Authentication System (Next.js + TypeScript + SCSS Modules)

This project implements a simple authentication flow using Next.js (App Router), TypeScript, and SCSS modules, following the given task requirements.

---

## Project Overview

This app contains two main pages:

- **/auth**:  
  A login page with a phone number input (Iran phone validation) and a login button.  
  On clicking "Login":  
  - Sends a GET request to the [Random User API](https://randomuser.me/api/?results=1&nat=us)  
  - Stores user data in `localStorage`  
  - Redirects to the `/dashboard` page  

- **/dashboard**:  
  A simple dashboard page that shows a welcome message.  
  If the user is not logged in (no user data in `localStorage`), it redirects back to `/auth`.

---

## Features

- Phone input validation for Iran phone number format (frontend validation only)  
- Responsive design with SCSS modules and nested styles  
- API call to external random user endpoint on login  
- Client-side redirect guard to protect dashboard page  
- Use of Next.js App Router with `'use client'` directives where needed  
- TypeScript for type safety  

---

## Technologies Used

- Next.js (v13+ with App Router)  
- React 18  
- TypeScript  
- Sass (SCSS modules with nesting)  
- Fetch API for HTTP request  

---

## Installation and Setup

1. **Clone the repository:**

```
   git clone https://github.com/elaheyaghoubi/Auth-App.git
   cd my-auth-dashboard 
```
2. **Install dependencies:**
```
npm install
```
3. **Run the development server:**
 ```
 npm run dev
 ```
4. **Open the app in your browser:**
```
http://localhost:3000/auth
```
---
##Folder Structure
/app
  /auth
    page.tsx            # Auth page component
    Auth.module.scss    # Styles for auth page
  /dashboard
    page.tsx            # Dashboard page component
    Dashboard.module.scss # Styles for dashboard page
/components
  /Input                # Custom Input component
  /Button               # Custom Button component
/styles                 # Global styles (if any)


