import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { startDB } from "@utils/databse";
import User from "@models/userModel";

const handler = nextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID, 
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],

    callbacks: {
        async session({ session }){
            const sessionUser = await User.findOne({email : session.user.email})
            session.user.id = sessionUser._id.toString()
            return session
        },  
    
        async signIn({ profile }) {
            try {
                await startDB()
                
                const exists = await User.findOne({email: profile.email})
    
                if(!exists){
                    await User.create({email: profile.email, username: profile.name.replace(" ", "").toLowerCase(), image: profile.picture})
                }
    
                return true
            } catch (error) {
                console.log(error)
                return false
                
            }
        } 
    },
    // site: 'https://promptopiabyanav.netlify.app/',
 })

 export { handler as GET, handler as POST }