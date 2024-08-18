import query from "@/local/db";
var CryptoJs = require("crypto-js");
var jwt = require('jsonwebtoken');

export default async function handler(req, res) {
  if(req.method==="GET"){
    try{
      const querySql = "SELECT *  FROM users";
      const valueParams = [];
      const result = await query({query: querySql, value: valueParams });
      res.status(200).json({ name: result });
    }
    catch(error){
      res.status(500).json({ error: error.message });
    }  
  }
  l
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const querySql = "select name, email, password, userId from users";
      const valueParams = [];
      const result = await query({ query: querySql, values: valueParams });
      let user = result.find((item) => {
        if (item.email === email) {
          return item;
        } 
      });
      
      
      if (user) {
        const bytes = CryptoJs.AES.decrypt(user.password, "secret123");
      let decryptedPass = bytes.toString(CryptoJs.enc.Utf8);
      console.log(decryptedPass, "decryptedPass");
        if (user.email === email && password === decryptedPass) {
          var token = jwt.sign({ user: user.name, email: user.email  }, 'secrettoken', {expiresIn:'2d'});
          res.status(200).json({ success: true, token, userId: user.userId });
        } else {
          return res
            .status(200)
            .json({ success: false, error: "invalid credentials" });
        }
      } else if (user === undefined) {
        return res.status(200).json({ success: false, error: "No user Found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
