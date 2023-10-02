import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { HOST, PORTDB, DBNAME, USERDB, PASSDB } = process.env;
const port:number = parseInt(<string>PORTDB, 10) || 8080;

export async function Database(){
  const client = new Client({
    host: HOST,
    port: port,
    database: DBNAME,
    user: USERDB,
    password: PASSDB,
  })
  await client.connect()
  
  const res = await client.query('SELECT * FROM products')
  console.log(res);
  
  await client.end()
}