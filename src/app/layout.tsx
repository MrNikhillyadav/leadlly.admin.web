import type { Metadata } from "next";
// import localFont from "next/font/local";
import { cn } from '@/lib/utils';
import { Mada } from "next/font/google";
import "./globals.css";

const mada = Mada({
  variable: "--mada-font",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Leadlly | Admin",
  description: "Admin dashboard by leadlly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true}  lang="en">
      <body
          suppressHydrationWarning={true}
          className={cn(
            'font-mada antialiased',
            mada.variable,
          )}

      >
        {children}
      </body>
    </html>
  );
}
