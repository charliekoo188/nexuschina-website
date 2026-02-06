import { eq } from "drizzle-orm";
import { applications, InsertApplication } from "../drizzle/schema";
import { getDb } from "./db";

export async function createApplication(data: InsertApplication) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.insert(applications).values(data);
  return result;
}

export async function getApplicationsByUserId(userId: number) {
  const db = await getDb();
  if (!db) return [];
  
  return await db.select().from(applications).where(eq(applications.userId, userId));
}

export async function getAllApplications() {
  const db = await getDb();
  if (!db) return [];
  
  return await db.select().from(applications);
}
