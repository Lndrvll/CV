import { Auth0Provider } from "@auth0/auth0-react";

export const auth0Config = {
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: typeof window !== "undefined" ? window.location.origin : "",
  },
};
