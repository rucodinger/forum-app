from uvicorn import run as uvicorn_run
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from passlib.context import CryptContext
from pydantic import BaseModel

from User import User

app = FastAPI()

# CORS для React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # твой React порт
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Локальный MongoDB
MONGO_URI = "mongodb://localhost:27017"
client = AsyncIOMotorClient(MONGO_URI)
db = client["forum"]  # база данных
users_collection = db["users"]  # коллекция пользователей

# Пароли через bcrypt
pwd_context = CryptContext(schemes=["sha256_crypt", "md5_crypt"])

def hash_password(password: str):
    return pwd_context.hash(password)

# Pydantic модели
class RegisterRequest(BaseModel):
    name: str
    username: str
    email: str
    password: str

class UserResponse(BaseModel):
    id: str
    username: str
    email: str

# Проверка подключения к MongoDB
@app.on_event("startup")
async def startup_db_client():
    try:
        await client.admin.command("ping")
        print("MongoDB connected locally!")
    except Exception as e:
        print("MongoDB connection failed:", e)

# Тестовый маршрут
@app.get("/")
def root():
    return {"status": "Backend is running"}

# Регистрация
@app.post("/register", response_model=UserResponse)
async def register(data: RegisterRequest):
    try:
        # Проверка email
        if await users_collection.find_one({"email": data.email}):
            raise HTTPException(status_code=400, detail="Email already exists")

        # Проверка username
        if await users_collection.find_one({"username": data.username}):
            raise HTTPException(status_code=400, detail="Username already exists")


        user = User(name=data.name, username=data.username, email=data.email, password=hash_password(data.password))
        result = await users_collection.insert_one(user.to_dict())
        user.setId(str(result.inserted_id))

        return {
            "_id": user._id,
            "name": user.name,
            "username": user.username,
            "email": user.email
        }

    except Exception as e:
        print("ERROR in /register:", e)
        raise HTTPException(status_code=500, detail="Server error")

if __name__ == "__main__":
    uvicorn_run(app, host="localhost", port=8000)
