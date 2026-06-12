const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'public', 'services');
const dirs = ['JPG', 'PNG', 'SVG'].map(d => path.join(servicesDir, d));

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
    "cultuer-1.jpg", "cultuer-2.jpg", "cultuer-3.jpg", "cultuer-4.jpg", "cultuer-5.jpg",
    "cultuer-6.jpg", "cultuer-7.jpg", "cultuer-8.jpg", "cultuer-9.jpg", "cultuer-10.jpg",
    "team-1.jpg", "team-2.jpg", "team-3.jpg", "team-4.jpg"
  ],
  'PNG': [
    "app-download-1.png",
    "app-store-img.png",
    "google-play-img.png",
    "half-circle-img.png"
  ],
  'SVG': [
    "default-logo.svg",
    "miciconidle.svg", "miciconlistening.svg",
    "preloader.svg",
    "svg-1.svg", "svg-2.svg", "svg-3.svg", "svg-4.svg", "svg-5.svg",
    "svg-7.svg", "svg-8.svg", "svg-9.svg", "svg-10.svg",
    "svg-14.svg", "svg-15.svg", "svg-16.svg", "svg-17.svg", "svg-18.svg", "svg-19.svg"
  ]
};

for (const [folder, files] of Object.entries(images)) {
  const dirPath = path.join(servicesDir, folder);
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    if (!fs.existsSync(filePath)) {
      const svg = generateSVGPlaceholder(file);
      fs.writeFileSync(filePath, svg);
      console.log(`Created ${filePath}`);
    }
  });
}
console.log('Finished generating services page placeholders.');
