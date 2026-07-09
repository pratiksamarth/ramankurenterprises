import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const distPath = path.join(__dirname, 'dist');

// Middleware to set correct MIME types
app.use((req, res, next) => {
  const filePath = path.join(distPath, req.path);
  
  if (filePath.endsWith('.js') || filePath.endsWith('.mjs')) {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  } else if (filePath.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css; charset=utf-8');
  } else if (filePath.endsWith('.json')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
  } else if (filePath.endsWith('.svg')) {
    res.setHeader('Content-Type', 'image/svg+xml');
  } else if (filePath.endsWith('.wasm')) {
    res.setHeader('Content-Type', 'application/wasm');
  }
  
  next();
});

// Serve static files from dist directory
app.use(express.static(distPath, {
  maxAge: '1d',
  etag: false,
}));

// Handle asset requests (with aggressive caching)
app.use('/assets/', express.static(path.join(distPath, 'assets'), {
  maxAge: '1y',
  etag: false,
}));

// Serve index.html for all non-asset routes (SPA routing)
app.use((req, res) => {
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
  console.log(`Server running on port ${port}`);
});
