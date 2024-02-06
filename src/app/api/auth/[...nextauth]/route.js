import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import connectMongoDB from "@/libs/mongodb"
import User from "@/models/user"

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    jwt: true
  },
  callbacks: {
    async session({session}, user) {

        await connectMongoDB()

        const { name, email, image } = session.user

        const existingUser = await User.findOne({ email })

        if (!existingUser) {
            await User.create({
                name,
                email,
                image
            })
        }

        return Promise.resolve(session);
    }
  }
})

export { handler as GET, handler as POST }