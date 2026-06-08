# HR Portal Database Configuration

## Setup Instructions

### 1. Set Environment Variables

Create a `.env.local` file in the root directory with the following content:

```
DATABASE_URL="postgresql://neondb_owner:npg_g2dWE5zLpMeh@ep-frosty-rice-aqpco4ss-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
```

### 2. Install Prisma Client

The `@prisma/client` dependency is already in your `package.json`. Make sure it's installed:

```bash
npm install
```

### 3. Run Database Migrations

To create the database schema:

```bash
npx prisma migrate dev --name init
```

Or if you just want to push the schema without creating a migration:

```bash
npx prisma db push
```

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Verify the Connection

Open Prisma Studio to view your database:

```bash
npx prisma studio
```

This will open an interactive UI at http://localhost:5555 where you can view and manage your database.

## Database Schema Overview

The HR Portal uses the following main tables:

- **employees** - Store employee information
- **leaves** - Track leave requests
- **leave_balances** - Maintain leave balance per employee
- **onboardings** - Track onboarding progress
- **exit_workflows** - Manage employee exit process
- **salary_records** - Store salary payment records
- **documents** - Store company documents
- **activity_logs** - Log system activities

## Connection Details

- **Provider**: PostgreSQL (Neon)
- **Host**: ep-frosty-rice-aqpco4ss-pooler.c-8.us-east-1.aws.neon.tech
- **Database**: neondb
- **User**: neondb_owner
- **Region**: US East 1 (AWS)

## Usage in Application

Import and use Prisma Client in your API routes or server actions:

```typescript
import { prisma } from '@/lib/prisma';

// Example: Create an employee
const employee = await prisma.employee.create({
  data: {
    name: 'John Doe',
    email: 'john@example.com',
    position: 'Developer',
    department: 'IT',
    joinDate: new Date(),
    salary: 85000,
  },
});

// Example: Get all employees
const employees = await prisma.employee.findMany();

// Close connection
await prisma.$disconnect();
```

## Troubleshooting

- If you get a connection error, verify the DATABASE_URL in your `.env.local` file
- Ensure your firewall allows connections to the Neon database
- Check that your IP is allowed in the database security settings
