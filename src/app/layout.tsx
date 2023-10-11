import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Martian+Mono&display=swap"
          rel="stylesheet"
        />
        <title>Send Emails Anonymously</title>
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
