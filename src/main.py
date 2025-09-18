from fastapi import FastAPI
from pydantic import BaseModel
from openai import OpenAI
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware


# Load environment variables
load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # フロントのURL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# OpenAI クライアント初期化
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


# リクエスト用のデータモデル
class ChatRequest(BaseModel):
    message: str


# 動作確認用エンドポイント
@app.get("/hello")
def hello():
    return {"message": "Hello, FastAPI is working!"}


# OpenAI API と連携するエンドポイント（ギャル口調固定）
@app.post("/chat")
def chat(req: ChatRequest):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": (
                    "You are a cheerful Japanese 'gyaru' character. "
                    "Always reply in casual Japanese with slang like "
                    "〜だよねぇ, 〜じゃん, 〜かも〜. "
                    "Keep the tone friendly, flashy, and slightly over-explaining, "
                    "like chatting with a close friend."
                ),
            },
            {"role": "user", "content": req.message},
        ],
    )
    reply = response.choices[0].message.content
    return {"reply": reply}
