import { compare } from "bcrypt";
import User from "../models/User";
import jwt from "jsonwebtoken";

const handler = async(req, res) => {
    const {method} = req;

    switch(method){
        case "POST":{
            const secret = process.env.SECRET;
            const {email, password} = req.body;
            const user = await User.findOne({email})
            if(!user){
                return res.status(400).json({message:"Invalid Email"})
            }
            
            const isPasswordValid = await compare(password, user.password);
            if(!isPasswordValid){
                return res.status(401).json({message:"Invalid password"})
            }
            // Generate JWT Token for the authenticated user and send it back to client side
            const token = jwt.sign({email: user.email}, secret, {expiresIn: "1d"})
            return res.status(200).json({message: "Login Successful", user, token})
        }
    }
}

export default handler