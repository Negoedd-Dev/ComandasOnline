import Database from "better-sqlite3";

const db = new Database("./src/database/atendeon.db");

db.pragma("journal_mode = WAL");

export default db;
