# RAID Blogs

[Live Site](https://aisocietyiitj.github.io/blogs-raid/)

The official blog of RAID, the AI & ML society at IIT Jodhpur. Built with [Astro](https://astro.build/), this site hosts articles, tutorials, and updates on artificial intelligence, machine learning, and data science from the RAID community.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Contribution Guidelines](#contribution-guidelines)
- [Project Structure](#project-structure)
- [Credits](#credits)

---

## Features

- Minimal, performant Astro-based blog
- SEO-friendly (OpenGraph, canonical URLs, sitemap, and RSS feed)
- Markdown & MDX support for writing posts
- Styled with TailwindCSS
- Responsive and accessible design

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/AISocietyIITJ/blogs-raid.git
   cd blogs-raid
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site should now be available at [http://localhost:4321](http://localhost:4321).

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview your build**
   ```bash
   npm run preview
   ```

---

## Contribution Guidelines

We welcome contributions! Please follow these guidelines to keep our community constructive and inclusive.

### Code of Conduct

- Be respectful and considerate.
- Assume good intent and offer constructive feedback.
- Harassment or inappropriate behavior will not be tolerated.

### How to Contribute

#### 1. Fork the repository

Click “Fork” on the top right of the main repository page.

#### 2. Clone your fork

```bash
git clone https://github.com/YOUR-USERNAME/blogs-raid.git
cd blogs-raid
```

#### 3. Create a new branch

Name your branch descriptively:

```bash
git checkout -b fix/correct-footer-link
# or
git checkout -b feat/add-new-blog-template
```

#### 4. Make your changes

- Keep code clean and comment where needed.
- Follow existing code style.

#### 5. Commit with a detailed message

```bash
git commit -m "fix: corrected footer Github link to point to organization"
```

#### 6. Push to your fork

```bash
git push origin your-branch-name
```

#### 7. Open a Pull Request (PR)

- Go to your fork on GitHub and click “Compare & pull request”.
- Fill in a **detailed title** and **thorough description** of your changes.
- Be polite and constructive in your comments and code reviews.

**Example of a good PR title and description:**

> **Title:**  
> `fix: correct LinkedIn link in footer`
>
> **Description:**  
> The footer LinkedIn icon was pointing to a personal profile. Updated it to point to the RAID IITJ organization page. Also added a hover effect for better UX.

**All PRs must:**
- Be respectful and constructive.
- Clearly describe what and why you changed.
- Reference related issues (e.g., `Closes #6`).

---

## Project Structure

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

- **src/pages/**: Route-based content (blog, about, etc.)
- **src/components/**: Reusable UI components
- **src/layouts/**: Blog and page layouts
- **src/content/**: Markdown posts

---

## Credits

This project is based on the [Astro Blog Starter Kit](https://github.com/withastro/astro/tree/latest/examples/blog) and inspired by [Bear Blog](https://github.com/HermanMartinus/bearblog/).

---

For more, visit [Astro documentation](https://docs.astro.build).

---

> _Maintained by RAID, IIT Jodhpur. Contributions welcome!_
