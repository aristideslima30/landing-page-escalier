import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import handler from './contact';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist')));

app.post('/api/contact', (req, res) => {
  return handler(req, res);
});

app.options('/api/contact', (req, res) => {
  return handler(req, res);
});

// All other requests get the index.html (SPA fallback)
// Fix for path-to-regexp v8 error: use array syntax for catch-all
app.get(['/', '/:slug*'], (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = process.env.PORT ? Number(process.env.PORT) : 3001;
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
