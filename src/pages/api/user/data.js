import User from "../models/User";
import dbconn from "../mongoConn";
import bcrypt from "bcrypt"

const handler = async(req, res) => {
    dbconn()
    const {method} = req;

    switch (method) {
        case "GET":
            try{
                const user = await User.find();
                if(!user){
                    return res.status(404).json({message:"No users found"})
                }
                return res.status(200).json(user)
            }catch(error){
                console.log(error)
            }

            case "POST":
                let password = req.body.password;
                if (!password) {
                    return res.status(400).json({ message: "Please provide your password" });
                }
                password = await bcrypt.hash(password, 10);
                const user = await User.create({ ...req.body, password: password });
                if (!user) {
                    return res.status(401).json({ message: "Invalid Data" });
                }
                const token = jwt.sign({ email: user.email }, secret, { expiresIn: "1h" });
                return res.status(200).json({ token }); // Send only the token in the response
            
    
        default:
            break;
    }
}

export default handler