import query from "@/local/db";
var CryptoJs = require("crypto-js")

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const querySql = "SELECT *  FROM users";
      const valueParams = [];
      const result = await query({ query: querySql, values: valueParams });
      res.status(200).json({ name: result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  if (req.method === "POST") {
   const {name, email, password} = req.body
    
     try{
       const querySql = "INSERT INTO users(name, email, password) values (?,?,?)";
       const valueParams = [name, email, CryptoJs.AES.encrypt(req.body.password, "secret123").toString()];
       const result = await query({query: querySql, values: valueParams });
       res.status(200).json({ name: result });
     }
     catch(error){
       res.status(500).json({ error: error.message });
     }  
   }
}
