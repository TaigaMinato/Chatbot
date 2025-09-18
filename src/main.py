import os
from fastapi import FastAPI
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


class ChatRequest(BaseModel):
    message: str


@app.get("/hello")
def hello():
    return {"message": "Hello, FastAPI is working!"}


@app.post("/chat")
def chat(req: ChatRequest):
    """Receive user message, send to OpenAI API, return reply"""
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": req.message}],
    )
    return {"reply": response.choices[0].message.content}
