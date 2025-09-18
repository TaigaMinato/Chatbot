# Chatbot

## Purpose 
- Build a simple chatbot UI in the local environment.  
- Understand the connection between **frontend (Next.js)** and **backend (FastAPI)**.  
- Keep the project minimal: no database, local only.  

---

## Background
This is a practice project before releasing the public MVP.  
The goal is to experience:
- GitHub Flow  
- CI (pytest + ruff on GitHub Actions)  
- Frontend ↔ Backend integration  

---

## Tech Stack

### Backend
- **FastAPI (Python)** with **Uvicorn**  
- Endpoints:  
  - `/hello` for health check  
  - `/chat` for OpenAI integration  
- **OpenAI API** (GPT-4o-mini / GPT-3.5)  
- **python-dotenv** for API key management  

### Frontend
- **Next.js** (App Router, JavaScript)  
- **Tailwind CSS** for styling (soft beige theme, DM-style UI)  
- Features:  
  - User ↔ Assistant chat bubbles  
  - Messages persist during use (frontend state only)  
  - Typing indicator animation (`...`)  

### Other
- **pytest** / **ruff**  
- **GitHub Actions** CI workflow  

---

## Setup

### 1. Clone & Install
```bash
git clone https://github.com/TaigaMinato/Chatbot.git
cd Chatbot
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### 2. Environment Variables
Create .env in the project root:
```bash
OPENAI_API_KEY=sk-xxxxxx
```

### 3. Run Backend
```bash
uvicorn src.main:app --reload
```

### 4. Run Frontend
```bash
cd frontend
npm install
npm run dev
```

## Features
- Simple chat interface
- Animated typing indicator (three dots, Instagram DM style)
- Tested with pytest and checked with ruff
- CI on GitHub Actions