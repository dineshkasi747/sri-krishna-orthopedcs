const fs = require('fs');
const path = require('path');

const generateSVGPlaceholder = (text, width = 800, height = 449, bgColor = '#cbd5e1', textColor = '#475569') => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="sans-serif" font-size="${Math.min(width, height) / 10}px" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>`;
};

// Define directories
const blogDir = path.join(__dirname, 'public', 'blog');
const blogDetailDir = path.join(__dirname, 'public', 'blog-detail');

// Ensure directories exist
const allDirs = [
  path.join(blogDir, 'JPG'),
  path.join(blogDir, 'PNG'),
  path.join(blogDir, 'SVG'),
  path.join(blogDetailDir, 'JPG'),
  path.join(blogDetailDir, 'PNG'),
  path.join(blogDetailDir, 'SVG')
];

allDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Blog Assets
const blogImages = {
  'JPG': ["post-1.jpg", "post-2.jpg", "post-3.jpg", "post-4.jpg", "post-5.jpg", "post-6.jpg"],
  'PNG': ["half-shape.png"],
  'SVG': ["default-logo.svg", "miciconidle.svg", "miciconlistening.svg", "preloader.svg", "svg-3.svg", "svg-4.svg", "svg-5.svg", "svg-6.svg", "svg-7.svg", "svg-8.svg"]
};

// Blog Detail Assets
const blogDetailImages = {
  'JPG': ["post-1.jpg"],
  'PNG': ["half-shape.png"],
  'SVG': ["default-logo.svg", "miciconidle.svg", "miciconlistening.svg", "preloader.svg", "svg-3.svg", "svg-4.svg", "svg-5.svg", "svg-6.svg", "svg-7.svg", "svg-8.svg"]
};

// Generate for Blog
for (const [folder, files] of Object.entries(blogImages)) {
  const dirPath = path.join(blogDir, folder);
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, generateSVGPlaceholder(file));
      console.log(`Created ${filePath}`);
    }
  });
}

// Generate for Blog Detail
for (const [folder, files] of Object.entries(blogDetailImages)) {
  const dirPath = path.join(blogDetailDir, folder);
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, generateSVGPlaceholder(file));
      console.log(`Created ${filePath}`);
    }
  });
}

console.log('Finished generating blog page placeholders.');
