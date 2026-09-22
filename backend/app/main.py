from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from app.api.routes import health, inquiries, public_content
from app.core.config import get_settings
from app.core.database import engine

settings = get_settings()


@asynccontextmanager
async def lifespan(app: FastAPI):
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))
    except Exception:
        pass
    yield


app = FastAPI(
    title="MysterBotz Events & Experiences",
    version="1.0.0",
    description="MVP public-facing API for MysterBotz events management.",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_ORIGIN],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api/v1")
app.include_router(public_content.router, prefix="/api/v1")
app.include_router(inquiries.router, prefix="/api/v1")


@app.get("/")
async def root():
    return {"message": "MysterBotz Events & Experiences API"}
