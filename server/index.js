// import express from 'express';
// import cors from 'cors';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const DB_PATH = path.join(__dirname, 'database.json');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Initialize DB if not exists
// if (!fs.existsSync(DB_PATH)) {
//   fs.writeFileSync(DB_PATH, JSON.stringify({ users: [] }, null, 2));
// }

// function readDB() {
//   const data = fs.readFileSync(DB_PATH, 'utf-8');
//   return JSON.parse(data);
// }

// function writeDB(data) {
//   fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
// }

// // Authentication Routes
// app.post('/api/auth/register', (req, res) => {
//   const { id, password, fullName, role } = req.body;
//   if (!id || !password || !fullName || !role) {
//     return res.status(400).json({ error: 'Tous les champs sont requis.' });
//   }

//   const db = readDB();
  
//   // Check if user already exists for this role
//   const exists = db.users.find(u => u.id === id && u.role === role);
//   if (exists) {
//     return res.status(409).json({ error: 'Cet identifiant est déjà utilisé pour ce rôle.' });
//   }

//   // Create new user
//   const newUser = { id, password, fullName, role, createdAt: new Date().toISOString() };
//   db.users.push(newUser);
//   writeDB(db);

//   return res.status(201).json({ message: 'Compte créé avec succès.', user: { id, fullName, role } });
// });

// app.post('/api/auth/login', (req, res) => {
//   const { id, password, role } = req.body;
  
//   if (!id || !password || !role) {
//     return res.status(400).json({ error: 'Identifiant et mot de passe requis.' });
//   }

//   const db = readDB();
//   const user = db.users.find(u => u.id === id && u.password === password && u.role === role);

//   if (!user) {
//     return res.status(401).json({ error: 'Identifiant ou mot de passe incorrect.' });
//   }

//   return res.status(200).json({ message: 'Connexion réussie.', user: { id: user.id, fullName: user.fullName, role: user.role } });
// });

// const PORT = 5001;
// app.listen(PORT, () => {
//   console.log(`Backend Server running locally on http://localhost:${PORT}`);
// });

const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));
app.get('*', (req, res) => res.sendFile(path.join(distPath, 'index.html')));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});