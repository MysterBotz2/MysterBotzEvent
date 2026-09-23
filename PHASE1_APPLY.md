# MysterBotz Admin Service — Phase 1 Database Foundation

This patch adds the database foundation only. It does not add login routes, JWTs, password hashing endpoints, or admin UI.

## Changes

- Adds `admin_users` SQLAlchemy model.
- Adds `admin_notes` to `Inquiry`.
- Registers `AdminUser` with Alembic metadata.
- Adds migration `20260923_admin_foundation` after `20260922_initial`.
- Adds a database-model smoke test.

## Apply

Copy the `backend/` files in this patch over the matching files in your project.

From the project backend directory, with the virtual environment active:

```powershell
python -m pytest tests/test_api.py -q
python -m alembic upgrade head
python -m alembic current
python -m alembic check
```

Expected migration head:

```text
20260923_admin_foundation (head)
```

## Supabase

After validating locally, set `DATABASE_URL` temporarily to the same working Supabase Session Pooler connection string you used previously, then run:

```powershell
python -m alembic upgrade head
python -m alembic current
```

Do not create an admin password manually in SQL and do not seed plaintext credentials. Admin bootstrap and password hashing belong to Phase 2.
