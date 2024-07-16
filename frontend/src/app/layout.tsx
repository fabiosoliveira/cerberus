import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cerberus Plataform",
  description: "Web3 Bot trading platform",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/img/brand/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/img/brand/apple-icon.png"
        />
      </head>
      <body className="text-blueGray-700 antialiased">
        {children}
        <script
          type="text/javascript"
          src="https://s3.tradingview.com/tv.js"
        ></script>
      </body>
    </html>
  );
}
