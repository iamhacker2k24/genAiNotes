# Modern React Portfolio Website

A high-performance, modern personal portfolio website built with **React**, **Vite**, and responsive CSS. Features smooth glassmorphism styling, interactive project filters, skills progression bars, career experience timeline, live theme switcher (Dark / Light mode), and contact inquiry form.

---

## 🌟 Key Features

- **Responsive & Modern Design**: Clean glassmorphism aesthetic with responsive layouts for mobile, tablet, and desktop.
- **Dark / Light Theme Toggle**: Seamless mode switching with persistent local storage saving user preference.
- **Interactive Projects Showcase**: Real-time filtering by category (AI & Cloud, Full Stack, Frontend) and live search query with detail popups.
- **Skills & Stack Matrix**: Skill proficiency percentages categorized with dynamic filter tabs.
- **Career Timeline**: Visual milestones showcasing work history, achievements, and core tech stacks.
- **Testimonials Section**: Client and manager reviews with ratings and responsive cards.
- **Contact Form**: Interactive validation and simulated transmission with direct contact channels.
- **Zero Heavy External UI Dependencies**: Clean native React components without bloated CSS frameworks, ensuring instant loading and top performance.

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── favicon.svg           # Custom vector favicon
├── src/
│   ├── components/
│   │   ├── About.jsx         # Biography, core tenets, and service pillars
│   │   ├── Contact.jsx       # Contact details and interactive submission form
│   │   ├── Experience.jsx    # Work history and career timeline
│   │   ├── Footer.jsx        # Navigation links, credits, and back-to-top trigger
│   │   ├── Hero.jsx          # Hero presentation, status pill, CTA, and terminal preview
│   │   ├── Icons.jsx         # Modular SVG icon system
│   │   ├── Navbar.jsx        # Fixed glass header with mobile drawer & theme switcher
│   │   ├── Projects.jsx      # Filterable & searchable showcase with modal details
│   │   ├── Skills.jsx        # Technical proficiency meters with category filter
│   │   └── Testimonials.jsx  # Recommendations and rating cards
│   ├── data/
│   │   └── portfolioData.js  # Centralized portfolio data (skills, projects, bio)
│   ├── App.jsx               # Application root with theme management
│   ├── index.css             # Design tokens, gradients, glassmorphism, responsive styles
│   └── main.jsx              # React DOM entry point
├── index.html                # HTML5 template with Google Fonts
├── package.json              # Project dependencies and npm scripts
├── vite.config.js            # Vite bundler configuration
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** / **pnpm**

### 2. Installation
Navigate into the `portfolio` folder:
```bash
cd portfolio
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port specified in terminal).

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist` folder.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Customization

To personalize the portfolio with your own details:
1. Open `src/data/portfolioData.js`.
2. Update `personalInfo` (name, bio, email, socials, stats).
3. Update `skillsData` with your technical proficiencies.
4. Update `projectsData` with your own project descriptions, links, and tags.
5. Update `experienceData` and `testimonialsData`.
