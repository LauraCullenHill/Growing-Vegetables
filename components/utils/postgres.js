import postgres from "postgres";

const sql = postgress(process.env.POSTGRES_CONNECTION_STRING);

export default sql;