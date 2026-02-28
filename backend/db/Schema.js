import { bigint } from "drizzle-orm/gel-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const TutionTable = pgTable("tutions", {
  tution_id: integer().primaryKey().generatedAlwaysAsIdentity(),
  tution_name: varchar().notNull(),
  owner_id:varchar().notNull().unique()
});

export const StudentTable = pgTable("students", {
  student_id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name:varchar().notNull(),
  std: integer().notNull(),
  fees: integer().notNull(),
  tution_id:integer().notNull(),
  phone_no: bigint().notNull(),
  email: varchar().notNull()
})