import   connect  from "@/utils/db"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import User from "@/models/User"
import bcrypt from "bcryptjs"

const handler= NextAuth({   
    
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                await connect()
                try {
                    const user=User.findOne({email:credentials.email})
                   console.log(user)  
                    if(user){
                        const isPasswordCorret=await bcrypt.compare(
                            credentials.password,
                            user.password
                        )
                        if(isPasswordCorret){
                            return user;
                        }
                        else{
                            throw new Error("wrong Credentials!")
                        }
                    }
                    else{
                        throw new Error("User not found")
                    }
                } catch (err) {
                 
                    throw new Error(err)
                }
              const user = {
                /* add function to get user */
              }
              return user
            }})
    ],
    pages:{
        error:"/dashboard/login"
    }
    
})

export {handler as GET,handler as POST}
