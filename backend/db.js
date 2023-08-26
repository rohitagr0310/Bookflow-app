import { createPool } from "mysql2";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "64666466j",
  database: "bookflow"
});

export default pool;
