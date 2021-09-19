console.log("Hello")
const { Client } = require('pg')
const { mainModule } = require('process')
async function main() 
{
    const client = new Client({user:"dhanur",password:"turbo",database:"stock"})
    await client.connect()
    const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    console.log(res.rows[0].message) // Hello world!
    await client.end()
}
main()