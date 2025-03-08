import { montserrat, poppins } from "@/styles/fonts";
import "./globals.css";
import Providers from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable}`}>
        <Providers>{children}</Providers>
      </body> 
    </html>
  );
}
