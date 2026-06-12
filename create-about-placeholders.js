const fs = require('fs');
const path = require('path');

const aboutDir = path.join(__dirname, 'public', 'about');
const dirs = ['JPG', 'PNG', 'SVG'].map(d => path.join(aboutDir, d));

// Create directories if they don't exist
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const generateSVGPlaceholder = (text, width = 800, height = 600, bgColor = '#cbd5e1', textColor = '#475569') => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="sans-serif" font-size="${Math.min(width, height) / 10}px" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>`;
};

const images = {
  'JPG': [
    "about-footer-img.jpg",
    "author-1.jpg", "author-2.jpg", "author-3.jpg", "author-4.jpg",
    "improving-img.jpg",
    "page-about-us-img-1.jpg", "page-about-us-img-2.jpg",
    "post-1.jpg", "post-2.jpg", "post-3.jpg",
    "team-1.jpg", "team-2.jpg", "team-3.jpg", "team-4.jpg"
  ],
  'PNG': [
    "about-bg.png",
    "half-circle-2.png",
    "half-circle-img.png",
    "signature.png"
  ],
  'SVG': [
    "default-logo.svg",
    "miciconidle.svg", "miciconlistening.svg",
    "preloader.svg",
    "svg-1.svg", "svg-2.svg", "svg-3.svg", "svg-4.svg",
    "svg-7.svg", "svg-8.svg", "svg-11.svg",
    "svg-60.svg", "svg-61.svg", "svg-62.svg",
    "svg-63.svg", "svg-64.svg", "svg-65.svg"
  ]
};

for (const [folder, files] of Object.entries(images)) {
  const dirPath = path.join(aboutDir, folder);
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    if (!fs.existsSync(filePath)) {
      // For PNGs and JPGs, we'll just write an SVG and pretend it's a PNG/JPG for placeholder purposes
      // Next.js Image component might complain if it's strictly checking headers, but for <img> it works
      const svg = generateSVGPlaceholder(file);
      fs.writeFileSync(filePath, svg);
      console.log(`Created ${filePath}`);
    }
  });
}
console.log('Finished generating about page placeholders.');
