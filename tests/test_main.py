from fastapi.testclient import TestClient
from src.main import app

client = TestClient(app)


def test_hello():
    response = client.get("/hello")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello, FastAPI is working!"}


def test_chat():
    res = client.post("/chat", json={"message": "Hello"})
    assert res.status_code == 200
    assert "reply" in res.json()
