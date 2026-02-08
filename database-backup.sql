-- NEXUS CHINA Database Backup Script
-- Generated: 2026-02-06
-- Purpose: Backup all data for migration to new Manus account

-- ============================================
-- IMPORTANT: Run this script in the NEW Manus account
-- after importing the project from GitHub
-- ============================================

-- Note: The schema (table structures) are already defined in drizzle/schema.ts
-- This script only contains data backup/restore commands

-- To EXPORT data from current account:
-- Run these commands in the current Manus webdev project:
-- SELECT * FROM users;
-- SELECT * FROM consultations;

-- To IMPORT data in new account:
-- 1. First, ensure the project is initialized and tables are created (pnpm db:push)
-- 2. Then insert the exported data using INSERT statements

-- ============================================
-- Example INSERT statements (replace with actual data):
-- ============================================

-- INSERT INTO users (id, email, name, avatar, role, created_at, updated_at) VALUES
-- ('user-id-1', 'user@example.com', 'User Name', 'avatar-url', 'user', '2026-01-01 00:00:00', '2026-01-01 00:00:00');

-- INSERT INTO consultations (id, user_id, name, email, phone, preferred_date, preferred_time, message, status, created_at, updated_at) VALUES
-- ('consultation-id-1', 'user-id-1', 'Name', 'email@example.com', '+44123456789', '2026-02-15', '10:00 - 11:00', 'Message', 'pending', '2026-02-01 00:00:00', '2026-02-01 00:00:00');

-- ============================================
-- Instructions for manual data export:
-- ============================================
-- 1. In current Manus account, use webdev_execute_sql to run:
--    SELECT * FROM users;
--    SELECT * FROM consultations;
-- 2. Save the results
-- 3. In new Manus account, convert results to INSERT statements
-- 4. Execute the INSERT statements using webdev_execute_sql

-- ============================================
-- Alternative: Automated export (if needed)
-- ============================================
-- Contact Manus support for database export/import tools
-- Or use standard MySQL dump tools with the connection string from Management UI
