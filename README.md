# Character Showcase - Interactive Gallery

A responsive, interactive character gallery with hover effects, video transitions, and smooth animations built with HTML, CSS, JavaScript, and GSAP.

## Features

- **Hover-to-Expand Effect**: Character panels expand when hovered
- **Image-to-Video Transition**: Static images transition to videos on hover
- **Animated Text Overlays**: Character descriptions appear with a smooth animation
- **Responsive Design**: Adapts to different screen sizes
- **GSAP Animations**: Uses GSAP for smooth entrance animations and transitions

## Technologies Used

- HTML5
- CSS3 (with advanced animations and transitions)
- JavaScript
- GSAP (GreenSock Animation Platform)
- Bootstrap 5

## How It Works

1. Static images are displayed initially
2. On hover, the panel expands and transitions to video
3. Text overlay animates in from the bottom
4. Videos automatically play when hovered and pause when mouse leaves

## Learning Points

This project demonstrates several CSS and animation techniques:
- CSS transitions and transforms
- Positioning with absolute and relative elements
- Z-index layering for complex overlapping elements
- Linear gradients for text readability
- GSAP for sequence animations
- Video control via JavaScript events

## Setup and Usage

Simply open `index.html` in a browser to view the project.

### Dependencies
- Bootstrap 5.3.3
- GSAP animation library (loaded via CDN)

## Project Structure

```
/
├── index.html         # Main HTML file
├── style.css          # Custom styling
├── script.js          # JavaScript animations and interactions
├── package.json       # Project dependencies
└── assets/            # Images and videos
    └── Characters/    # Character media files
```