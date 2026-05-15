🧠 SmartDocQ – Your AI Assistant for Smarter Document Q&A

SmartDocQ is an AI-powered document question-answering system that transforms static documents into interactive knowledge assistants. Users can upload documents (PDF, DOCX, TXT) and ask questions in natural language. The system retrieves relevant information using semantic search and generates intelligent responses using Google Gemini AI.

🚀 Features
📄 Upload and process PDF, DOCX, and TXT documents
🤖 AI-powered Question & Answering using Google Gemini
🔍 Semantic search using Vector Databases (FAISS / Pinecone)
🧠 ChatGPT-like long-term conversation memory
🔐 JWT Authentication & Role-Based Access Control (RBAC)
☁️ Cloud deployment support
📊 API testing and Selenium UI testing
🎨 Modern React + Tailwind CSS frontend
⚡ FastAPI backend for high performance APIs
🏗️ Project Architecture
Frontend (React + Tailwind CSS)
        ↓
FastAPI Backend (Python)
        ↓
Document Parsing & AI Processing
        ↓
Vector Database (FAISS / Pinecone)
        ↓
Google Gemini API
        ↓
Response Generation
unknown
11 lines, 212 characters
Copy code
unknown
11 lines, 212 characters
Copy code
🛠️ Tech Stack
Frontend
React.js
Tailwind CSS
Axios
React Router DOM
Backend
FastAPI
Python
JWT Authentication
bcrypt Password Hashing
Database
Firebase Firestore / MongoDB
FAISS / Pinecone Vector Database
AI & NLP
Google Gemini API
Semantic Search
Retrieval-Augmented Generation (RAG)
Testing
Postman
Selenium
📂 Project Structure
SmartDocQ/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── .env
│
└── README.md
unknown
21 lines, 301 characters
Copy code
unknown
21 lines, 301 characters
Copy code
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/SmartDocQ.git
cd SmartDocQ
unknown
2 lines, 69 characters
Copy code
unknown
2 lines, 69 characters
Copy code
🖥️ Backend Setup
Create Virtual Environment
python -m venv venv
unknown
1 line, 19 characters
Copy code
unknown
1 line, 19 characters
Copy code
Activate Environment
Windows
.\venv\Scripts\Activate.ps1
unknown
1 line, 27 characters
Copy code
unknown
1 line, 27 characters
Copy code
Linux / Mac
source venv/bin/activate
unknown
1 line, 24 characters
Copy code
unknown
1 line, 24 characters
Copy code
Install Dependencies
pip install -r requirements.txt
unknown
1 line, 31 characters
Copy code
unknown
1 line, 31 characters
Copy code
Run Backend Server
uvicorn app.main:app --reload
unknown
1 line, 29 characters
Copy code
unknown
1 line, 29 characters
Copy code

Backend will run at:

http://127.0.0.1:8000
unknown
1 line, 21 characters
Copy code
unknown
1 line, 21 characters
Copy code
🌐 Frontend Setup
Install Dependencies
npm install
unknown
1 line, 11 characters
Copy code
unknown
1 line, 11 characters
Copy code
Run Frontend
npm run dev
unknown
1 line, 11 characters
Copy code
unknown
1 line, 11 characters
Copy code

Frontend runs at:

http://localhost:5173
unknown
1 line, 21 characters
Copy code
unknown
1 line, 21 characters
Copy code
🔑 Environment Variables

Create a .env file in backend folder:

GEMINI_API_KEY=your_api_key
JWT_SECRET=your_secret_key
MONGO_URI=your_database_uri
DB_NAME=smartdocq
unknown
4 lines, 100 characters
Copy code
unknown
4 lines, 100 characters
Copy code
📡 API Endpoints
Endpoint	Method	Description
/signup	POST	Register new user
/login	POST	Authenticate user
/upload	POST	Upload document
/ask	POST	Ask questions from uploaded docs
/sessions/create	POST	Create new chat session
/sessions/{id}/messages	GET	Retrieve chat history
🧪 Testing
Unit Testing
File upload validation
Login & signup testing
AI query validation
API Testing
Performed using Postman
UI Testing
Selenium automation for frontend workflows
Regression Testing
Re-tested modules after code changes
🔐 Security Features
JWT-based Authentication
Password Hashing using bcrypt
Role-Based Access Control (RBAC)
Protected API Endpoints
CORS Configuration
☁️ Deployment

SmartDocQ can be deployed using:

Render
Railway
Vercel (Frontend)
AWS / Azure / GCP
📸 Screenshots

Add your project screenshots here:

Login Page
Upload Page
Q&A Interface
API Testing
Database Collections
🔮 Future Enhancements
🗣️ Voice-based interaction
📚 Multi-document summarization
🧠 Advanced long-term memory
🌍 Multi-language support
📱 Mobile application support
👨‍💻 Contributors
Deepthi Chekuri
Team Members
📚 References
FastAPI Documentation – https://fastapi.tiangolo.com
Google Gemini API – https://ai.google.dev
React Documentation – https://react.dev
MongoDB Atlas – https://www.mongodb.com
FAISS Documentation – https://faiss.ai
⭐ Acknowledgements

Special thanks to our mentors, faculty members, and open-source communities for supporting the development of SmartDocQ.

📜 License

This project is developed for educational and research purposes.
