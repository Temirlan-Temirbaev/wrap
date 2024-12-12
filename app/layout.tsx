import "./globals.css";
import {Space_Grotesk, Unbounded} from "next/font/google";
import QueryProvider from "@/src/app/QueryProvider";
import { Header, Footer } from "@/src/shared/ui";

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  fallback : ["semibold", "regular"]
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  fallback : ["semibold", "regular", "light"]
});
export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <QueryProvider>
      <body className={`${unbounded.variable} ${spaceGrotesk.variable} relative min-h-screen`}>
        <Header />
        {children}
        <div className={"mt-20"}>
          <Footer />
        </div>
      </body>
    </QueryProvider>
    </html>
  );
}
