from datetime import date, datetime

from pydantic import BaseModel, ConfigDict, EmailStr, Field, field_validator


class InquiryBase(BaseModel):
    client_name: str = Field(..., min_length=2, max_length=255)
    email: EmailStr
    phone: str = Field(..., min_length=7, max_length=50)
    event_type: str = Field(..., min_length=2, max_length=100)
    event_date: date
    event_location: str = Field(..., min_length=2, max_length=255)
    guest_count: int = Field(..., ge=1, le=50000)
    budget_min: int = Field(..., ge=0)
    budget_max: int = Field(..., ge=0)
    services_needed: str = Field(..., min_length=2, max_length=255)
    message: str = Field(..., min_length=10, max_length=2000)

    @field_validator("client_name", "event_type", "event_location", "services_needed")
    @classmethod
    def clean_text(cls, value: str) -> str:
        return value.strip()

    @field_validator("phone")
    @classmethod
    def normalize_phone(cls, value: str) -> str:
        return value.strip()

    @field_validator("budget_max")
    @classmethod
    def validate_budget_range(cls, value: int, info):
        if "budget_min" in info.data and info.data["budget_min"] > value:
            raise ValueError("budget_max must be greater than or equal to budget_min")
        return value

    @field_validator("event_date")
    @classmethod
    def validate_event_date(cls, value: date) -> date:
        if value < date.today():
            raise ValueError("event_date must be today or in the future")
        return value


class InquiryCreate(InquiryBase):
    pass


class InquiryResponse(InquiryBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    status: str
    created_at: datetime
    updated_at: datetime
