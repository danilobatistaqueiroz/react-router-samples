import { PrismaClient } from "@prisma/client";

// This would expose database credentials on the client
const db = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export { db };