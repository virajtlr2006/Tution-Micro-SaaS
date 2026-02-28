// 📦 Import Drizzle ORM types
import { bigint } from "drizzle-orm/gel-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

// 🏫 Tutions table schema - stores tuition center information
export const TutionTable = pgTable("tutions", {
  tution_id: integer().primaryKey().generatedAlwaysAsIdentity(), // 🔑 Auto-incrementing primary key
  tution_name: varchar().notNull(), // 📝 Name of the tuition center (required)
  owner_id: varchar().notNull().unique() // 👤 Unique owner identifier from Clerk (required)
});

// 👨‍🎓 Students table schema - stores student information
export const StudentTable = pgTable("students", {
  student_id: integer().primaryKey().generatedAlwaysAsIdentity(), // 🔑 Auto-incrementing primary key
  name: varchar().notNull(), // 📝 Student's full name (required)
  std: integer().notNull(), // 📚 Student's standard/grade (required)
  fees: integer().notNull(), // 💰 Fee amount (required)
  tution_id: integer().notNull(), // 🔗 Foreign key reference to tutions table (required)
  phone_no: bigint().notNull(), // 📞 Contact phone number (required)
  email: varchar().notNull() // 📧 Email address (required)
})