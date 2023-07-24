import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.CLIENTID,
            clientSecret: process.env.CLIENT_SECRET
        })
    ]
})