import query from "@/local/db";

export default async function handler(req, res) {  
  
if (req.method === "POST") {
  const {email, product_id,} = req.body
   try{
     const querySql = "INSERT INTO products (title, about, img, category, size, color, price, availableQty) values (?,?,?,?,?,?,?,?)";
     const valueParams = [title, about, img,category, size, color, price, availableQty];
     const result = await query({query: querySql, values: valueParams });
     res.status(200).json({ name: result });
   }
   catch(error){
     res.status(500).json({ error: error.message });
   }  
 }
 
}
