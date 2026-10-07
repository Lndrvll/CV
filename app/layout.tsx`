import { Auth0Provider } from "@auth0/auth0-react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jeremie Landreville | Professional Portfolio",
  description: "Multi-disciplinary technical professional specializing in IAM and AV Infrastructure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Auth0Provider
          domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
          clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
          authorizationParams={{
            redirect_uri: typeof window !== "undefined" ? window.location.origin : "http://localhost:3000",
          }}
        >
          {children}
        </Auth0Provider>
      </body>
    </html>
  );
}
