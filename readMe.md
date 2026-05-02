# Pratham Prajapati Portfolio

A personal portfolio rebuilt with **Node.js**, **Express**, and **EJS** using an MVC-style folder structure. The frontend uses **Bootstrap 5**, custom CSS, Font Awesome icons, and a clean dark "Minimalist Digital Garden" visual style with a bento grid for the tech stack.

## Features

- Express server with EJS view rendering
- MVC-style organization with routes, controllers, models, and views
- Dynamic projects section rendered from model data
- Bootstrap 5 responsive layout
- Dark mode aesthetic with custom bento-grid styling
- Resume download route that serves a PDF from the server
- Contact form that posts to Express and logs submitted data
- Environment config support using `dotenv`
- MongoDB connection setup prepared with `mongoose`

## Contact Links

| Platform | Link |
| --- | --- |
| Email | [pratham.prajapati2409@gmail.com](mailto:pratham.prajapati2409@gmail.com) |
| Phone | [+91 94093 27965](tel:+919409327965) |
| GitHub | [github.com/pratham-9029](https://github.com/pratham-9029) |
| Location | [Gujarat, India](https://www.google.com/maps/place/Gujarat,+India) |
| Resume | [Download from portfolio app](http://localhost:3000/download-resume) |

## Project Structure

```txt
Portfolio/
├── app.js
├── package.json
├── package-lock.json
├── readMe.md
├── .env
├── .gitignore
├── config/
│   ├── dotenv.js
│   └── databse.js
├── controllers/
│   └── portfolioController.js
├── models/
│   └── portfolioModel.js
├── routes/
│   └── indexRoutes.js
├── views/
│   ├── index.ejs
│   ├── 404.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
└── public/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    ├── images/
    │   ├── profile.jfif
    │   ├── img.png
    │   ├── img-3.png
    │   └── image.png
    └── resume/
        └── Pratham-Prajapati-Resume.pdf
```

The older static files such as `index.html`, `styles.css`, and `Assets/` may still exist as reference files from the previous version.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Template Engine:** EJS
- **Architecture:** MVC-style structure
- **Frontend:** Bootstrap 5, custom CSS, Font Awesome
- **Config:** dotenv
- **Database Ready:** Mongoose and MongoDB connection setup
- **Development Tool:** Nodemon

## Installation

Install dependencies:

```bash
npm install
```

Create or update the `.env` file:

```env
PORT=3000
MONGODB_URL=your_mongodb_connection_string
```

Start the project:

```bash
npm start
```

Start in development mode with auto-reload:

```bash
npm run dev
```

Open the app in your browser:

```txt
http://localhost:3000
```

If port `3000` is already in use, either stop the old server with `Ctrl + C` or run the app on another port:

```bash
PORT=3001 npm run dev
```

## Main Routes

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/` | Renders the portfolio homepage |
| `GET` | `/download-resume` | Downloads the resume PDF |
| `POST` | `/contact` | Handles contact form submissions |

## MVC Flow

1. `app.js` configures Express, EJS, middleware, static files, and routes.
2. `routes/indexRoutes.js` maps URLs to controller methods.
3. `controllers/portfolioController.js` prepares page data, serves the resume, and handles contact form posts.
4. `models/portfolioModel.js` stores portfolio content such as profile details, stats, tech stack, and projects.
5. `views/index.ejs` renders the UI with EJS loops and Bootstrap components.

## Core Files

### `app.js`

The main entry point. It configures:

- EJS view engine
- `views/` path
- URL-encoded and JSON request parsing
- `public/` static assets
- Main portfolio routes
- 404 fallback page
- Server port from `.env`

### `controllers/portfolioController.js`

The main controller contains:

- `getHomePage` for rendering the homepage with dynamic model data
- `downloadResume` for serving `public/resume/Pratham-Prajapati-Resume.pdf`
- `submitContactForm` for reading form data and logging submissions

### `models/portfolioModel.js`

This file contains editable portfolio data:

- Profile information
- Stats
- Tech stack bento cards
- Project cards

Update this file when you want to add, remove, or edit portfolio content without changing the EJS template.

## Updating Projects

Add new projects inside `models/portfolioModel.js`:

```js
{
  title: 'Project Name',
  description: 'Short project description.',
  image: '/images/project-image.png',
  technologies: ['Node.js', 'Express', 'MongoDB'],
  liveUrl: 'https://example.com',
  sourceUrl: 'https://github.com/username/repo'
}
```

The projects section in `views/index.ejs` loops through this data automatically.

## Resume Download

The resume button uses this route:

```txt
/download-resume
```

The PDF file should be placed here:

```txt
public/resume/Pratham-Prajapati-Resume.pdf
```

Replace the placeholder PDF with the final resume using the same filename.

## Contact Form

The contact form posts to:

```txt
POST /contact
```

Current behavior:

- Reads `name`, `email`, `subject`, and `message`
- Logs the submission on the server
- Redirects back to the contact section with a success state

Future upgrade idea:

- Connect the form to Nodemailer
- Store submissions in MongoDB
- Add server-side validation and spam protection

## Database Config

MongoDB setup is prepared in:

```txt
config/databse.js
```

Environment variables are loaded from:

```txt
config/dotenv.js
```

Use `MONGODB_URL` in `.env` for the database connection string. If you want the portfolio to actively connect to MongoDB on startup, import the database config in `app.js`.

## Development Notes

- Keep route definitions inside `routes/`
- Keep request handling inside `controllers/`
- Keep editable portfolio data inside `models/`
- Keep reusable page pieces inside `views/partials/`
- Keep CSS, JavaScript, images, and PDF files inside `public/`
- Do not commit `node_modules/` or private `.env` values

## Changelog

- Rebuilt the portfolio from a static HTML/CSS site into a Node.js, Express, and EJS MVC application.
- Added Bootstrap 5 based responsive UI.
- Added dark digital-garden styling and bento-grid tech stack.
- Added dynamic projects from model data.
- Added resume download route.
- Added contact form POST handling.
- Added dotenv and MongoDB connection configuration.
