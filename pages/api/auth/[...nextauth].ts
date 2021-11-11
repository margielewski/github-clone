import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (user && account && account.provider === 'github')
        token.githubUserAccessToken = account.access_token;

      return Promise.resolve(token);
    },
    session: async ({ token, session }) =>
      Promise.resolve({
        ...session,
        accessToken: token.githubUserAccessToken,
      }),
  },
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
});
