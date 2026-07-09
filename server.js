import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const distPath = path.join(__dirname, 'dist');

console.log(`Serving static files from: ${distPath}`);
console.log(`Dist directory exists: ${fs.existsSync(distPath)}`);
console.log(`Dist contents:`, fs.readdirSync(distPath));

// Set MIME types before serving files
const mimeTypes = {
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.wasm': 'application/wasm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

// Custom middleware to handle MIME types
app.use((req, res, next) => {
  const ext = path.extname(req.path).toLowerCase();
  if (mimeTypes[ext]) {
    res.setHeader('Content-Type', mimeTypes[ext]);
  }
  next();
});

// Serve static files with explicit configuration
app.use(express.static(distPath, {
  maxAge: '1h',
  etag: false,
  redirect: false,
  fallthrough: true,
}));

// SPA routing: Serve index.html for all routes that don't match files
app.use((req, res, next) => {
  // Skip for actual assets and known file extensions
  const ext = path.extname(req.path);
  if (ext && ext !== '.html') {
    return next();
  }

  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Not Found');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✓ Server running on port ${port}`);
  console.log(`✓ Serving from: ${distPath}`);
});
