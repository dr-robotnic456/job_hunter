import Category from "../models/category";
import dbconn from "../mongoConn";

const handler  = async (req, res) => {
    dbconn()
    const {method} = req;

    switch (method) {
        case "POST":
            const category = await Category.create({...req.body});
            if(!category){
                return res.status(400).json({message:"Kindly provide category"})
            }
            return res.status(200).json({message: "category successfully created", category})
            
        case "GET":
            try{
                const categories = await Category.find()
                if(!categories){
                    return res.status(400).json({message: "No data found"})
                }
                return res.status(200).json(categories)
            }catch (error){
                return res.status(500).json("server error")
            }

        default: 
            return res.status(405).json({message: "Method not allowed"})
    }
}

export default handler