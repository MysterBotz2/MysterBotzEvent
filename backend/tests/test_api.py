import os
from datetime import date

os.environ["DATABASE_URL"] = "sqlite:///./test_mysterbotz.db"

from fastapi.testclient import TestClient

from app.core.database import Base, engine
from app.main import app
from app.models.admin_user import AdminUser  # noqa: F401

Base.metadata.drop_all(bind=engine)
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


def test_admin_foundation_models_are_registered():
    from sqlalchemy import inspect

    inspector = inspect(engine)

    assert "admin_users" in inspector.get_table_names()

    admin_columns = {column["name"] for column in inspector.get_columns("admin_users")}
    assert {
        "id",
        "email",
        "password_hash",
        "is_active",
        "created_at",
        "updated_at",
    }.issubset(admin_columns)

    inquiry_columns = {column["name"] for column in inspector.get_columns("inquiries")}
    assert "admin_notes" in inquiry_columns
