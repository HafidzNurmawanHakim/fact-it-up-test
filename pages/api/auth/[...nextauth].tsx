import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    id: string;
    roles: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}

const user = {
  id: "1",
  name: "Hafidz",
  email: "johndoe@example.com",
  avatar: "https://johndoe.com/avatar.png",
  bio: "johndoe@example.com",
  role: "Master Admin",
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => {
        if (
          credentials &&
          credentials.username === "masteradmin" &&
          credentials.password === "masteradmin"
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },

  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },

  secret: "test",
  jwt: {
    secret: "test",
  },
});
