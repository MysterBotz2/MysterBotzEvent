"""admin foundation

Revision ID: 20260923_admin_foundation
Revises: 20260922_initial
Create Date: 2026-09-23 00:00:00.000000
"""

from alembic import op
import sqlalchemy as sa


revision = "20260923_admin_foundation"
down_revision = "20260922_initial"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "admin_users",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("email", sa.String(length=255), nullable=False),
        sa.Column("password_hash", sa.String(length=255), nullable=False),
        sa.Column("is_active", sa.Boolean(), nullable=False),
        sa.Column("created_at", sa.DateTime(), nullable=False),
        sa.Column("updated_at", sa.DateTime(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(
        op.f("ix_admin_users_email"),
        "admin_users",
        ["email"],
        unique=True,
    )
    op.add_column(
        "inquiries",
        sa.Column("admin_notes", sa.Text(), nullable=True),
    )


def downgrade() -> None:
    op.drop_column("inquiries", "admin_notes")
    op.drop_index(op.f("ix_admin_users_email"), table_name="admin_users")
    op.drop_table("admin_users")
