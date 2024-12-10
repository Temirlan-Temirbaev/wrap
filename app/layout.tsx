import "./globals.css";
import {Space_Grotesk, Unbounded} from "next/font/google";
import QueryProvider from "@/src/app/QueryProvider";

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});
export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <QueryProvider>
      <body className={`${unbounded.variable} ${spaceGrotesk.variable}`}>
      {children}
      </body>
    </QueryProvider>
    </html>
  );
}
