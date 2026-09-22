# MysterBotz Events & Experiences

## Prerequisites
- Python 3.11+
- Node.js 20+
- PostgreSQL installed locally on Windows
- psql or pgAdmin for database setup

## Project structure
- backend/: FastAPI app, models, Alembic migrations, tests
- frontend/: Vite + React + TypeScript app
- netlify.toml: Netlify SPA redirect configuration

## Local PostgreSQL setup
Create the local database and app role in PostgreSQL if the role does not already exist:

```sql
CREATE ROLE mysterbotz
WITH LOGIN
PASSWORD 'REPLACE_WITH_YOUR_OWN_PASSWORD';

CREATE DATABASE mysterbotz_events
OWNER mysterbotz;
```

If the role already exists, use:

```sql
ALTER ROLE mysterbotz
WITH LOGIN
PASSWORD 'REPLACE_WITH_YOUR_OWN_PASSWORD';

ALTER DATABASE mysterbotz_events
OWNER TO mysterbotz;
```

Verify the connection:

```sql
SELECT current_database();
SELECT current_user;
```

## Backend environment configuration
Copy the example file and update the local connection string:

```bash
cp backend/.env.example backend/.env
```

Required variables:
- DATABASE_URL
- FRONTEND_ORIGIN
- ENVIRONMENT

Example:

```env
DATABASE_URL=postgresql+psycopg://mysterbotz:CHANGE_ME@localhost:5432/mysterbotz_events
FRONTEND_ORIGIN=http://localhost:5173
ENVIRONMENT=development
```

## Alembic migration commands
From the backend directory:

```bash
alembic upgrade head
```

## Backend startup
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Frontend startup
```bash
cd frontend
npm install
npm run dev
```

## Frontend environment
Create a local frontend environment file if needed:

```bash
cp frontend/.env.example frontend/.env
```

## Tests and build
```bash
cd backend
pytest
cd ../frontend
npm run lint
npm run build
```

## Official logo asset location
Use the official asset in the repository if available at `frontend/src/assets/` or a dedicated brand folder. If no asset exists, the app includes a minimal placeholder logo component and the expected asset path should be added there when the design team provides it.
