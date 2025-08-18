from fastapi import FastAPI
from app.core.config import add_cors_middleware
from app.api.routes import router as api_router

app = FastAPI()

# Enable CORS for frontend
add_cors_middleware(app)

# Root route
@app.get("/")
def root():
    return {"message": "SmartDocQ backend is running!"}

# API routes
app.include_router(api_router, prefix="/api")