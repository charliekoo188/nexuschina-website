import { eq } from "drizzle-orm";
import { consultations, InsertConsultation } from "../drizzle/schema";
import { getDb } from "./db";

export async function createConsultation(data: InsertConsultation) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.insert(consultations).values(data);
  return result;
}

export async function getConsultationsByUserId(userId: number) {
  const db = await getDb();
  if (!db) return [];
  
  return await db.select().from(consultations).where(eq(consultations.userId, userId));
}

export async function getAllConsultations() {
  const db = await getDb();
  if (!db) return [];
  
  return await db.select().from(consultations);
}
