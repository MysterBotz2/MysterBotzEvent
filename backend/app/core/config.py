from functools import lru_cache
from typing import List

from pydantic import AnyHttpUrl, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql+psycopg://mysterbotz:CHANGE_ME@localhost:5432/mysterbotz_events"
    FRONTEND_ORIGIN: str = "http://localhost:5173"
    ENVIRONMENT: str = "development"
    PROJECT_NAME: str = "MysterBotz Events & Experiences"
    API_V1_STR: str = "/api/v1"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore",
    )

    @field_validator("FRONTEND_ORIGIN")
    @classmethod
    def validate_frontend_origin(cls, value: str) -> str:
        if not value:
            raise ValueError("FRONTEND_ORIGIN must be set")
        return value


@lru_cache
def get_settings() -> Settings:
    return Settings()
