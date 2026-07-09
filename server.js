import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const distPath = path.join(__dirname, 'dist');

console.log(`Serving static files from: ${distPath}`);

// Serve all static files from dist with correct MIME types
app.use(express.static(distPath, {
  maxAge: '1h',
  etag: false,
  setHeaders: (res, filePath, stat) => {
    const ext = path.extname(filePath).toLowerCase();
    
    // Explicit MIME type handling
    if (ext === '.js' || ext === '.mjs') {
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    } else if (ext === '.css') {
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
    } else if (ext === '.json') {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
    } else if (ext === '.svg') {
      res.setHeader('Content-Type', 'image/svg+xml');
    } else if (ext === '.wasm') {
      res.setHeader('Content-Type', 'application/wasm');
    } else if (ext === '.woff') {
      res.setHeader('Content-Type', 'font/woff');
    } else if (ext === '.woff2') {
      res.setHeader('Content-Type', 'font/woff2');
    } else if (ext === '.html') {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
    }
  },
}));

// SPA routing: Serve index.html for routes without file extensions
app.use((req, res) => {
  // Only serve index.html for routes without a file extension
  if (!path.extname(req.path)) {
    const indexPath = path.join(distPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.sendFile(indexPath);
    }
  }
  res.status(404).send('Not Found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✓ Server running on port ${port}`);
  console.log(`✓ Serving dist folder with correct MIME types`);
});
