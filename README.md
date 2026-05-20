# Terracotta Reserve 🏠✨

Bienvenue sur la plateforme **Terracotta Reserve**, une application de gestion immobilière ultra-premium et hautement performante. L'application est séparée en 3 portails connectés :
1. **Agent Elite** : Gestion des biens, des leads, des visites et des commissions.
2. **Propriétaire (Client)** : Interface "L'Habitation" et "LuxEstate" pour le suivi de rentabilité et la validation des dossiers.
3. **Locataire (Guest)** : "Dressrosa", le parcours immersif de réservation avec KYC, visite virtuelle 3D et signature de bail.

L'application utilise :
- **Frontend** : React 19 + Vite + Tailwind CSS + Framer Motion (Interface fluide et moderne).
- **Backend** : Node.js (Express) gérant une base locale en JSON pour le système d'authentification partagé entre les acteurs.

---

## 🚀 Lancer le projet en Local (Développement)

Pour travailler sur le projet ou le tester sur votre propre machine, le backend et le frontend tournent en parallèle.

### 1. Installation des dépendances
Ouvrez votre terminal à la racine du projet et tapez :
```bash
npm install
```

### 2. Démarrer le Backend (API Express)
Ouvrez un terminal et lancez le serveur backend. Il écoutera sur le port `5001`.
```bash
npm run server
```

### 3. Démarrer le Frontend (Vite)
Ouvrez un second terminal (en laissant tourner le premier) et lancez l'interface. Elle s'ouvrira sur le port `3000` (ou `3001` si occupé).
```bash
npm run dev
```

> **Note :** En local, le frontend est configuré pour interroger `http://localhost:5001` pour la connexion.

---

## 🌍 Déployer en Ligne (Production pour les testeurs)

Le projet a été pensé et optimisé pour être hébergé **en un seul bloc** (le serveur Node sert à la fois l'API backend ET l'interface compilée). Cela empêche les problèmes de CORS et rend l'hébergement gratuit/facile.

Nous recommandons d'utiliser **Render.com** ou **Railway.app** pour ce type de projet.

### Instructions pour Render.com (Gratuit & Rapide)

1. **Héberger le code sur GitHub :**
   Créez un dépôt GitHub et envoyez-y tout le code du dossier `terracotta-reserve`.

2. **Créer le projet sur Render :**
   - Connectez-vous sur [Render.com](https://render.com/).
   - Cliquez sur **New +** puis choisissez **Web Service**.
   - Connectez votre compte GitHub et sélectionnez votre dépôt `terracotta-reserve`.

3. **Configurer le Web Service :**
   - **Name** : `terracotta-reserve-app` (ou autre)
   - **Environment** : `Node`
   - **Build Command** : `npm install && npm run build`
   - **Start Command** : `npm start`

4. **Lancer le déploiement :**
   - Cliquez sur **Create Web Service**. 
   - Render va télécharger le code, exécuter la commande de build (qui compile React dans le dossier `/dist`), puis démarrer le backend Node (`npm start`) qui servira à la fois l'API et le site final !

### 🔐 Déploiement : Explication technique
- En production, la variable `API_BASE_URL` bascule automatiquement en relatif (`/api/auth/...`).
- Le serveur Express (dans `server/index.js`) détecte la présence du dossier `/dist` et sert les fichiers statiques de React automatiquement. S'il ne trouve pas la route dans `/api`, il renvoie `index.html` pour laisser React Router gérer l'affichage. Vous n'avez strictement aucun problème de ports en ligne !

---

## 🛠️ Outils & Technologies
- **Vite** : Bundleur ultra rapide
- **React 19** : Interface utilisateur
- **Tailwind v4** : Styles et CSS inline (Utility First)
- **Framer Motion** : Animations fluides des fenêtres
- **Express / Node.js** : API d'authentification
- **JSON File** : Persistance légère pour les tests bêta (`server/database.json`)

Bon développement et excellents tests avec vos bêta-testeurs ! 🎉
