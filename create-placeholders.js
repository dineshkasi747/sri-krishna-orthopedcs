const fs = require('fs');
const path = require('path');

const base64Png = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
const bufferPng = Buffer.from(base64Png, 'base64');

// Valid 1x1 JPG
const base64Jpg = "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=";
const bufferJpg = Buffer.from(base64Jpg, 'base64');

const svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#cccccc"/></svg>`;

const files = [
  "public/images/JPG/hero-img-1.jpg", "public/images/JPG/hero-img-2.jpg",
  "public/images/JPG/about-img-1.jpg", "public/images/JPG/about-img-2.jpg", "public/images/JPG/about-video-img.jpg",
  "public/images/JPG/home-faq-img.jpg",
  "public/images/JPG/author-1.jpg", "public/images/JPG/author-2.jpg", "public/images/JPG/author-3.jpg", "public/images/JPG/author-4.jpg",
  "public/images/JPG/post-1.jpg", "public/images/JPG/post-2.jpg", "public/images/JPG/post-3.jpg",
  "public/images/PNG/contact-us-img.png", "public/images/PNG/half-shape.png", "public/images/PNG/white-dots-img.png",
  "public/images/SVG/default-logo.svg", "public/images/SVG/preloader.svg",
  "public/images/SVG/svg-1.svg", "public/images/SVG/svg-2.svg", "public/images/SVG/svg-3.svg", "public/images/SVG/svg-4.svg", "public/images/SVG/svg-5.svg",
  "public/images/SVG/svg-6.svg", "public/images/SVG/svg-7.svg", "public/images/SVG/svg-8.svg", "public/images/SVG/svg-9.svg", "public/images/SVG/svg-10.svg",
  "public/images/SVG/svg-12.svg", "public/images/SVG/svg-13.svg", "public/images/SVG/svg-16.svg",
  "public/images/SVG/svg-65.svg", "public/images/SVG/svg-66.svg", "public/images/SVG/svg-67.svg", "public/images/SVG/svg-68.svg", "public/images/SVG/svg-69.svg", "public/images/SVG/svg-70.svg"
];

files.forEach(f => {
  const ext = path.extname(f).toLowerCase();
  const fullPath = path.join(__dirname, f);
  if (!fs.existsSync(path.dirname(fullPath))) {
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  }
  if (ext === '.jpg' || ext === '.jpeg') {
    fs.writeFileSync(fullPath, bufferJpg);
  } else if (ext === '.png') {
    fs.writeFileSync(fullPath, bufferPng);
  } else if (ext === '.svg') {
    fs.writeFileSync(fullPath, svgContent);
  }
});
console.log('Placeholders created.');
