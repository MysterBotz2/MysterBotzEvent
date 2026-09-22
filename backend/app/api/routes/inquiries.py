from datetime import UTC, datetime

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.inquiry import Inquiry
from app.schemas.inquiry import InquiryCreate, InquiryResponse

router = APIRouter(tags=["inquiries"])


@router.post("/inquiries", response_model=InquiryResponse, status_code=status.HTTP_201_CREATED)
async def create_inquiry(payload: InquiryCreate, db: Session = Depends(get_db)):
    inquiry = Inquiry(
        client_name=payload.client_name.strip(),
        email=payload.email.lower().strip(),
        phone=payload.phone.strip(),
        event_type=payload.event_type.strip(),
        event_date=payload.event_date,
        event_location=payload.event_location.strip(),
        guest_count=payload.guest_count,
        budget_min=payload.budget_min,
        budget_max=payload.budget_max,
        services_needed=payload.services_needed.strip(),
        message=payload.message.strip(),
        status="new",
        created_at=datetime.now(UTC),
        updated_at=datetime.now(UTC),
    )

    db.add(inquiry)
    db.commit()
    db.refresh(inquiry)
    return inquiry
