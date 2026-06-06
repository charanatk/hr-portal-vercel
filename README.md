
# Startup HR Portal

## Features
- Employee onboarding
- Exit management
- Salary reminder dashboard
- Employee listing

## Run locally

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

## Deploy to Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Add DATABASE_URL environment variable
4. Deploy

Recommended free DB:
- Supabase PostgreSQL
- Neon PostgreSQL
