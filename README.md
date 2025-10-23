# AiDD-jakechoi-lab01
My first AIDD GitHub repo  
Jake Choi 8/26/2025

## Docker Todo App 🐳

This repository contains a Docker-based Todo application with custom messaging. Perfect for learning Docker containerization!

### 🚀 Quick Start with GitHub Codespaces

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/jakechoi-lab/AiDD-jakechoi-lab01)

1. **Click the badge above** or go to your repo → Code → Codespaces → Create codespace
2. **Wait for setup** (automatic npm install)
3. **Run the app:**
   ```bash
   # Build Docker image
   docker build -t my-todo-app .
   
   # Run container
   docker run -d -p 3000:3000 my-todo-app
   ```
4. **Open the app** - Codespaces will auto-detect port 3000 and show a popup to open it

### 🏠 Local Development

```bash
# Clone the repository
git clone https://github.com/jakechoi-lab/AiDD-jakechoi-lab01.git
cd AiDD-jakechoi-lab01

# Build and run with Docker
docker build -t my-todo-app .
docker run -d -p 3000:3000 my-todo-app

# Or run locally with Node.js
npm install
npm run dev
```

### ✨ Features
- **Custom messaging**: "You have no todo items yet! Add one above!"
- **Dockerized**: Production-ready container setup
- **Node.js/Express**: RESTful API backend
- **SQLite database**: Persistent todo storage
- **Responsive UI**: Clean React frontend

### 🛠 Tech Stack
- Node.js + Express
- SQLite database
- Docker containerization
- React frontend
- Bootstrap styling

Original Docker tutorial: https://github.com/docker/getting-started
