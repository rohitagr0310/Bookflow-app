import { createPool } from "mysql";

const pool = createPool({
  host: "localhost",
  user: "Rohit2610",
  password: "Rohit@2610",
  database: "bookflow"
});

export default pool;
