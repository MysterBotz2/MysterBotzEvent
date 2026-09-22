from fastapi import APIRouter

router = APIRouter(tags=["public"])


SERVICES = [
    "Weddings & Celebrations",
    "Corporate Events",
    "Conferences & Institutional Events",
    "Debuts & Milestones",
    "Product Launches",
    "Private Events",
    "School & University Events",
    "Live & Experiential Events",
]

PORTFOLIO = [
    {
        "title": "Private estate celebration",
        "category": "Wedding & Celebration",
        "summary": "A quietly luxurious day paced with intention and ease.",
        "placeholder": "Event image placeholder",
    },
    {
        "title": "Regional conference",
        "category": "Corporate Event",
        "summary": "A high-stakes experience structured for flow and clarity.",
        "placeholder": "Conference image placeholder",
    },
    {
        "title": "Campus milestone evening",
        "category": "Institutional Event",
        "summary": "A polished program that kept the room relaxed and engaged.",
        "placeholder": "Campus image placeholder",
    },
]


@router.get("/services")
async def get_services():
    return {"items": SERVICES}


@router.get("/portfolio")
async def get_portfolio():
    return {"items": PORTFOLIO}


@router.get("/testimonials")
async def get_testimonials():
    return {"items": []}
