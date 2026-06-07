# Themba Kevin Ndlondlo — IT Portfolio

> Personal portfolio website showcasing IT support, systems administration, and networking skills.

**Live site:** [https://shaix33.github.io/](https://shaix33.github.io/) *(update with your actual URL)*

---

## Overview

A fully responsive, single-page portfolio built with vanilla HTML, CSS, and JavaScript. Designed to present professional experience, technical skills, certifications, and key projects in a clean, dark-themed interface — with an interactive PowerShell terminal emulator in the hero section.

## Features

- **Animated terminal emulator** — PowerShell-style typewriter animation on load
- **Scroll-reveal animations** — staggered card entrances driven by IntersectionObserver
- **Responsive design** — mobile-first with a hamburger navigation menu
- **No frameworks** — zero dependencies; pure HTML/CSS/JS for fast load times
- **Noise texture + SVG background** — subtle depth without heavy assets

## Structure

```
├── index.html       # Markup and content
├── style.css        # All styling and animations
├── script.js        # Scroll reveal, terminal animation, mobile nav
└── images/
    └── profile.png  # Profile photo
```

## Sections

| Section | Description |
|---|---|
| Hero | Name, summary, stats, and terminal animation |
| Skills | Technical Support · Networking · Systems Admin · M365 & Dev |
| Experience | Frances Baard District Municipality · Vox Telecom · Nando's |
| Projects | Custom Helpdesk System · Web Ticketing System |
| Education | SPU Advanced Diploma · SPU Diploma in ICT |
| Certifications | CompTIA Network+ (In Progress) · 5× Cisco NetAcad |
| Contact | Email · Phone · LinkedIn · GitHub |

## Tech Stack

- **HTML5 / CSS3** — semantic markup, CSS custom properties, grid & flexbox
- **Vanilla JavaScript** — IntersectionObserver API, DOM manipulation
- **Google Fonts** — Syne (display) + DM Sans (body)
- **SVG** — background graphics

## Local Development

No build step required. Clone and open directly in a browser:

```bash
git clone https://github.com/Shaix33/<repo-name>.git
cd <repo-name>
# Open index.html in your browser, or use a local server:
npx serve .
```

---

*Built and maintained by Themba Kevin Ndlondlo*
