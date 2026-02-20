# Hello Ridr - Professional Transportation Service

A modern, responsive website for Hello Ridr, a professional transportation service based in London, CA.

## Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Contact Form**: Functional contact form with validation
- **Newsletter Subscription**: Email subscription functionality
- **Gallery Section**: Showcase for fleet vehicles
- **Location Information**: Contact details and location information
- **Performance Optimized**: Fast loading times and smooth user experience

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Modern Features)
- Vanilla JavaScript (No dependencies)
- Google Fonts (Poppins)

## File Structure

```
Helloridr/
├── index.html      # Main HTML file
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # Project documentation
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. No build process or dependencies required!

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    --secondary-color: #f59e0b;
    /* ... */
}
```

### Contact Information
Update contact details in `index.html`:
- Phone number in the "Call Us" button
- Email address: `info@helloridr.ca`
- Location: `LONDON, CA`

### Adding Real Images
Replace the gallery placeholders in the Gallery section with actual vehicle images:
```html
<div class="gallery-item">
    <img src="path/to/image.jpg" alt="Vehicle description">
</div>
```

### Map Integration
Add a Google Maps or Mapbox embed in the Location section:
```html
<div class="location-map">
    <!-- Add your map embed code here -->
</div>
```

## Form Integration

### Newsletter Form
The newsletter form currently logs to console. To integrate with a backend:
1. Update the `newsletterForm` submit handler in `script.js`
2. Replace the setTimeout with an actual API call:
```javascript
fetch('/api/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
})
```

### Contact Form
Similarly, update the contact form submission in `script.js` to send data to your backend API.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

- Optimize images before adding to gallery
- Consider lazy loading for images
- Minify CSS and JavaScript for production
- Use a CDN for fonts if needed

## License

© 2025 Hello Ridr. All rights reserved.

## Contact

For questions or support, contact: info@helloridr.ca

