# Construction Company Website

A modern, responsive React-based website for a construction company, showcasing services, projects, company information, and HSE (Health, Safety, and Environment) details.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices with custom SCSS styling.
- **Interactive Elements**: 
  - Mobile-friendly navbar with hamburger menu.
  - Image galleries for certificates and projects with modal views.
  - Contact form with email integration.
  - Smooth scrolling and animations.
- **SEO-Friendly**: Configured with proper meta tags, PWA manifest, and routing.
- **Accessibility**: Keyboard navigation support.

## Technologies Used

- **Frontend Framework**: React 18 with Create React App
- **Routing**: React Router DOM v6
- **Styling**: SCSS (Sass) with modular CSS modules
- **UI Components**: React Slick for carousels, React Toastify for notifications
- **Forms & Email**: EmailJS for contact form submissions

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vigilantv/construction-company.git
   cd construction-company
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The app will run at `http://localhost:3000/construction-company/`.

## Deployment

The project is configured for deployment on GitHub Pages.

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

The live site is available at: [https://vigilantv.github.io/construction-company/](https://vigilantv.github.io/construction-company/)

## Project Structure

```
construction-company/
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # PWA manifest
│   └── favicon.ico         # App icon
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Shared components (Navbar, Footer, etc.)
│   │   └── main pages/     # Page-specific components
│   ├── data information/   # Static data for services, projects, etc.
│   ├── images/             # Assets for certificates, projects, icons
│   ├── styles/             # SCSS stylesheets
│   ├── App.jsx             # Main app component with routing
│   └── index.jsx           # App entry point
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Contributing

Feel free to fork the repository and submit pull requests for improvements.