# Professional Portfolio - Setup Instructions

## Overview
This is a modern, responsive professional portfolio website for Nethmi Chamathka. The portfolio showcases skills, experience, projects, and education with a professional design.

## Features
- ✨ Modern, responsive design
- 📱 Mobile-friendly interface
- 🎨 Smooth animations and transitions
- 🧭 Smooth navigation
- 📧 Contact form
- ⚡ Fast performance

## Files Included
- `index.html` - Main HTML structure
- `styles.css` - Complete styling and responsive design
- `script.js` - Interactive features and animations
- `profile.jpg` - Your profile photo (needs to be added)

## Getting Started

### 1. Add Your Profile Photo
Replace `profile.jpg` with your actual profile photo in the portfolio folder. The image should be at least 400x400 pixels for best quality.

**Note:** The profile image is currently referenced but needs to be placed in the portfolio folder.

### 2. Customize Your Information

Edit the following sections in `index.html` to match your actual information:

#### Hero Section
- Change the title "Nethmi Chamathka" to your name
- Update the subtitle and description
- Update social media links (LinkedIn, GitHub, Email)

#### About Section
- Update the about text with your personal statement
- Modify the stats (years of experience, projects, technologies)

#### Skills Section
- Replace skills with your actual technical skills
- Update categories as needed (Frontend, Backend, Databases, Tools)

#### Experience Section
- Add your actual job titles and companies
- Update dates and descriptions
- Add or remove timeline items as needed

#### Projects Section
- Replace project titles and descriptions
- Update project tags with technologies used
- Add links to your actual projects
- Replace placeholder images with real project screenshots

#### Education Section
- Update with your actual education information
- Modify institution name, degree, and dates
- Update description

#### Contact Section
- Update email address: Change `nethmi@example.com` to your actual email
- Update phone number
- Update location
- Update form action (currently has a basic alert)

### 3. Optional Enhancements

#### A. Connect Contact Form to Email Service
To actually send emails from the contact form, you can use services like:
- **Formspree** (https://formspree.io/)
- **EmailJS** (https://www.emailjs.com/)
- **Netlify Forms** (if hosting on Netlify)

Update the form in the HTML accordingly.

#### B. Deploy Your Portfolio
You can deploy this portfolio for free on:
- **Vercel** (https://vercel.com/) - Recommended
- **Netlify** (https://netlify.com/)
- **GitHub Pages** (https://pages.github.com/)
- **Firebase Hosting** (https://firebase.google.com/products/hosting)

#### C. Custom Domain
Consider purchasing a custom domain (like yourname.com) from:
- GoDaddy
- Namecheap
- Domain.com

### 4. Testing Locally

To test the portfolio before uploading:
1. Open `index.html` directly in your web browser by double-clicking it
2. Or use a local server (Python, Node.js, or VS Code Live Server extension)

**Using Python:**
```bash
cd /path/to/portfolio
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

**Using Node.js (with http-server):**
```bash
npm install -g http-server
cd /path/to/portfolio
http-server
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization Tips

### Colors
The portfolio uses a primary color scheme of purple (#667eea) and blue (#764ba2). To change this:
1. Open `styles.css`
2. Replace `#667eea` with your preferred primary color
3. Replace `#764ba2` with your preferred secondary color
4. Search and replace all occurrences

### Fonts
The portfolio uses 'Segoe UI' font family. To change:
1. Open `styles.css`
2. Modify the font-family in the `body` selector
3. Or add Google Fonts for more options

### Content Updates
Make sure to update:
- Social media links to your actual profiles
- Email address for contact
- Phone number (optional)
- All project information
- All experience information
- All skills

## Performance Optimization
The portfolio is already optimized with:
- Minimal CSS and JavaScript
- Lazy loading for images (can be added)
- Mobile-first responsive design
- Smooth animations with CSS transitions

## SEO Basics
Consider adding:
1. Meta description in the HTML head
2. Keywords meta tag
3. Open Graph tags for social sharing
4. Structured data (JSON-LD)

## Support & Troubleshooting

### Images not showing
- Ensure image files are in the same folder as `index.html`
- Check file names match exactly (case-sensitive on Unix/Mac)
- Verify image formats are supported (JPG, PNG, WebP)

### Links not working
- Check that href attributes are correct
- Ensure section IDs match the navigation links

### Styles not applying
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check that `styles.css` is in the same folder as `index.html`
- Verify CSS file path in the HTML link tag

### Contact form not working
- Check browser console for errors (F12 → Console)
- Ensure form service is properly configured

## Next Steps
1. ✅ Add your profile photo
2. ✅ Update all personal information
3. ✅ Add project details and screenshots
4. ✅ Test on various devices and browsers
5. ✅ Deploy to a hosting service
6. ✅ Share your portfolio link

---

**Version:** 1.0
**Created:** 2024
**Last Updated:** March 2024

Happy sharing! 🚀
