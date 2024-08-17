// import query from "@/local/db";

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//    const {name, email, password} = req.body
    
//      try{
//        const querySql = "select * from users";
//        const valueParams = [];
//        const result = await query({query: querySql, values: valueParams });
//        res.status(200).json({ name: result });
//      }
//      catch(error){
//        res.status(500).json({ error: error.message });
//      }  
//    }
// }
