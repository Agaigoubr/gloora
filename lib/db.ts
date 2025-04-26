import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'shopdb',
  password: '0000', // si tu as défini un mot de passe, mets-le ici
  port: 5432,
});

export default pool;
