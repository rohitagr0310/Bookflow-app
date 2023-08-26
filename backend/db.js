import { createPool } from "mysql2";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "dhanawat@0811",
  database: "bookflow"
});

export default pool;
