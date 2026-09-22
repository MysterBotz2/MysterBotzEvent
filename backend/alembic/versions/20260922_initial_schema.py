"""initial schema

Revision ID: 20260922_initial
Revises: 
Create Date: 2026-09-22 00:00:00.000000
"""

from alembic import op
import sqlalchemy as sa


revision = '20260922_initial'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'inquiries',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('client_name', sa.String(length=255), nullable=False),
        sa.Column('email', sa.String(length=255), nullable=False),
        sa.Column('phone', sa.String(length=50), nullable=False),
        sa.Column('event_type', sa.String(length=100), nullable=False),
        sa.Column('event_date', sa.Date(), nullable=False),
        sa.Column('event_location', sa.String(length=255), nullable=False),
        sa.Column('guest_count', sa.Integer(), nullable=False),
        sa.Column('budget_min', sa.Integer(), nullable=False),
        sa.Column('budget_max', sa.Integer(), nullable=False),
        sa.Column('services_needed', sa.String(length=255), nullable=False),
        sa.Column('message', sa.Text(), nullable=False),
        sa.Column('status', sa.String(length=50), nullable=False),
        sa.Column('created_at', sa.DateTime(), nullable=False),
        sa.Column('updated_at', sa.DateTime(), nullable=False),
        sa.PrimaryKeyConstraint('id'),
    )
    op.create_index(op.f('ix_inquiries_id'), 'inquiries', ['id'], unique=False)


def downgrade() -> None:
    op.drop_index(op.f('ix_inquiries_id'), table_name='inquiries')
    op.drop_table('inquiries')
