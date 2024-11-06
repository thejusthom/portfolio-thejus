# Personal Portfolio Website

A modern, responsive portfolio website built with React showcasing skills, projects, and professional experience.

## Live Demo
Visit the live website: [thejusthomson.netlify.app](https://thejusthomson.netlify.app/)

## Features
- Responsive design
- Skills showcase with interactive icons
- Project portfolio
- Professional experience timeline
- Contact information

## Tech Stack
- React.js
- CSS3 
- React Icons
- React Router

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation
1. Clone the repository
```bash
git clone https://github.com/thejusthom/portfolio-thejus.git
cd portfolio-thejus
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm start
```

The site will be available at `http://localhost:3000`.

### Building for Production
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment to Netlify

### Method 1: Continuous Deployment (Recommended)

1. Push your code to GitHub

2. Log in to [Netlify](https://app.netlify.com)

3. Click "Add A New Project"

4. Connect to GitHub and select your repository

5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

6. Click "Deploy site

### Method 2: Manual Deploy

1. Build your project
```bash
npm run build
```

2. Drag and drop the `build` folder to Netlify's deploy area

## Customization
- Edit `src/components` to modify sections
- Update `src/styles` to change styling
- Modify icons in `SkillCard.js` to showcase different technologies

## Credits

The UI design of this website is inspired by the portfoli of [Hamish Walton](https://hamishw.com/).
