const fs = require('fs');
const path = require('path');

const generateSVGPlaceholder = (text, width = 600, height = 600, bgColor = '#cbd5e1', textColor = '#475569') => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="sans-serif" font-size="${Math.min(width, height) / 10}px" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>`;
};

// Define directories
const teamDir = path.join(__dirname, 'public', 'our_team');
const detailDir = path.join(__dirname, 'public', 'ourTeam_detail');

// Ensure directories exist
const allDirs = [
  path.join(teamDir, 'JPG'),
  path.join(teamDir, 'PNG'),
  path.join(teamDir, 'SVG'),
  path.join(detailDir, 'JPG'),
  path.join(detailDir, 'PNG'),
  path.join(detailDir, 'SVG')
];

allDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Team Assets
const teamImages = {
  'JPG': ["team-1.jpg","team-2.jpg","team-3.jpg","team-4.jpg","team-5.jpg","team-6.jpg","team-7.jpg","team-8.jpg","team-9.jpg"],
  'PNG': ["half-circle-img.png"],
  'SVG': ["default-logo.svg","miciconidle.svg","miciconlistening.svg","preloader.svg","svg-3.svg","svg-4.svg","svg-5.svg","svg-6.svg","svg-7.svg","svg-8.svg"]
};

// Detail Assets
const detailImages = {
  'JPG': ["team-1.jpg"],
  'PNG': ["half-circle-img.png"],
  'SVG': ["default-logo.svg","icon-awards.svg","miciconidle.svg","miciconlistening.svg","preloader.svg","svg-1.svg","svg-4.svg","svg-5.svg","svg-6.svg","svg-7.svg","svg-8.svg","svg-9.svg"]
};

// Generate for Team
for (const [folder, files] of Object.entries(teamImages)) {
  const dirPath = path.join(teamDir, folder);
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, generateSVGPlaceholder(file));
      console.log(`Created ${filePath}`);
    }
  });
}

// Generate for Detail
for (const [folder, files] of Object.entries(detailImages)) {
  const dirPath = path.join(detailDir, folder);
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, generateSVGPlaceholder(file));
      console.log(`Created ${filePath}`);
    }
  });
}

console.log('Finished generating team page placeholders.');
