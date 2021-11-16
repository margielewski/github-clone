declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GRAPHQL_API_URL: string;
      GITHUB_CLIENT_ID: string;
      GITHUB_CLIENT_SECRET: string;
      NEXTAUTH_URL: string;
      NEXTAUTH_JWT_SECRET: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

// convert it into a module by adding an empty export statement.
export {};
