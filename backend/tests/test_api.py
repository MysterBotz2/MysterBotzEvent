import os
from datetime import date

os.environ["DATABASE_URL"] = "sqlite:///./test_mysterbotz.db"

from fastapi.testclient import TestClient

from app.core.database import Base, engine
from app.main import app

Base.metadata.create_all(bind=engine)
client = TestClient(app)


def test_health_endpoint():
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_services_endpoint():
    response = client.get("/api/v1/services")
    assert response.status_code == 200
    assert isinstance(response.json()["items"], list)


def test_portfolio_endpoint():
    response = client.get("/api/v1/portfolio")
    assert response.status_code == 200
    assert isinstance(response.json()["items"], list)


def test_testimonials_endpoint():
    response = client.get("/api/v1/testimonials")
    assert response.status_code == 200
    assert response.json()["items"] == []


def test_valid_inquiry_submission():
    payload = {
        "client_name": "Ava Reyes",
        "email": "ava@example.com",
        "phone": "+63 917 555 0101",
        "event_type": "Wedding",
        "event_date": str(date.today().year + 1) + "-06-15",
        "event_location": "Cebu City",
        "guest_count": 180,
        "budget_min": 250000,
        "budget_max": 450000,
        "services_needed": "Full planning",
        "message": "We need a calm, well-managed wedding weekend with strong guest experience.",
    }
    response = client.post("/api/v1/inquiries", json=payload)
    assert response.status_code == 201, response.text
    body = response.json()
    assert body["client_name"] == "Ava Reyes"
    assert body["status"] == "new"


def test_invalid_inquiry_rejected():
    payload = {
        "client_name": "A",
        "email": "not-an-email",
        "phone": "123",
        "event_type": "",
        "event_date": "2020-01-01",
        "event_location": "",
        "guest_count": 0,
        "budget_min": 500000,
        "budget_max": 400000,
        "services_needed": "",
        "message": "short",
    }
    response = client.post("/api/v1/inquiries", json=payload)
    assert response.status_code == 422
