
import {pool} from '../db/index.js' 


export async function getCus() {
    const result = await pool.query (`SELECT * FROM customers`);
    const cArray = result.rows;
    return cArray
}


export async function cusById(id){
    const result = await pool.query (`SELECT * FROM customers WHERE customer_id = $1`,[id]);
    const cus = result.rows
    return cus;
}

export async function createCus(body){
    const result = await pool.query (`INSERT INTO customers (first_name,last_name,pass,email, user_name) VALUES ($1, $2,$3,$4,$5)`,[body.first_name, body.last_name, body.pass, body.email, body.user_name]);
    const cus = result.rows
    return cus;
}

//  async function create(){
//     const result = await query ('INSERT INTO ')
//  }


