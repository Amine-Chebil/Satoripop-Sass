# Satoripop-Sass

A modern web project built with Vite, SCSS, and Bootstrap. Features responsive design, interactive components, and custom styling.

## Project Structure

```
Satoripop-Sass/
├── index.html          # Main HTML entry point
├── main.js             # Entry point (imports Bootstrap & SCSS)
├── js/
│   └── script.js       # Interactive features (cards, slider, navbar)
├── scss/
│   ├── style.scss      # Main stylesheet
│   └── libs/
│       ├── mixins.scss # Text styling utilities
│       └── responsive.scss # Mobile breakpoints
├── fonts/              # Custom fonts
├── img/                # Images
├── public/             # Static assets
└── package.json        # Dependencies & scripts
```

## Prerequisites

**Node.js** (v14+)

Install via package manager:
```bash
# macOS (using Homebrew)
brew install node

# Windows (using Chocolatey)
choco install nodejs

# Linux (Ubuntu/Debian)
sudo apt install nodejs npm
```

Or [download directly](https://nodejs.org/)

## Installation

```bash
# Clone the repository
git clone https://github.com/Amine-Chebil/Satoripop-Sass.git
cd Satoripop-Sass

# Install dependencies
npm install
```

## Development

```bash
# Start dev server
npm run dev
```

## Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Dependencies

- **vite** ^4.4.0 - Build tool & dev server
- **sass** ^1.63.6 - SCSS compiler
- **bootstrap** ^5.3.0 - CSS framework
