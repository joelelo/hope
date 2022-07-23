import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    CredentialProvider({
      name: "Admin Password",
      credentials: {
        password: { label: "Admin Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials.password === process.env.ADMIN_PASSWORD) {
          return {
            name: "admin",
          };
        }
        return null;
      },
    }),
  ],
};
export default NextAuth(authOptions);
