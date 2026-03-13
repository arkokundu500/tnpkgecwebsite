# KGEC Training & Placement Cell — Website

Full-stack website for the Training & Placement Cell of Kalyani Government Engineering College.

Deployed link :- https://tnpkgecwebsite.vercel.app/

## Architecture

```
├── client/    → Next.js frontend (deploy on Vercel)
└── server/    → Express.js backend (deploy on Vercel)
```

## Quick Start (Local Development)

### 1. Server (Express + MongoDB)

```bash
cd server
bun install            # or npm install
cp .env.example .env   # fill in your MongoDB URI, JWT_SECRET, etc.
bun run dev            # starts on http://localhost:5000
```

### 2. Client (Next.js)

```bash
cd client
bun install            # or npm install
cp .env.example .env   # set NEXT_PUBLIC_API_URL=http://localhost:5000
bun run dev            # starts on http://localhost:3000
```

## Deployment

| Layer    | Platform | Root Directory |
|----------|----------|----------------|
| Frontend | Vercel   | `client/`      |
| Backend  | Vercel   | `server/`      |
| Database | MongoDB Atlas | — (cloud)  |

### Environment Variables

**Server (Vercel):**
| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for JWT tokens |
| `PORT` | Port (vercel sets this automatically) |
| `CLIENT_URL` | Deployed frontend URL (for CORS) |

**Client (Vercel):**
| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Deployed backend URL (vercel) |
| `GMAIL_USER` | Gmail address for contact form |
| `GMAIL_PASS` | Gmail app password |
| `CONTACT_TO` | Email to receive contact submissions |

### Deployment Flow

```
User → Frontend (Vercel) → Backend API (Vercel) → MongoDB Atlas
```

1. Push to GitHub
2. Deploy `client/` on Vercel → set `Root Directory` to `client`
3. Deploy `server/` on vercel → set `Root Directory` to `server`
4. Set env vars on same platform but on client and server differently
5. Update `CLIENT_URL` on Vercel to your Vercel URL
6. Update `NEXT_PUBLIC_API_URL` on Vercel to your Vercel URL
