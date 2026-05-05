import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvoiceTax AI — Auto-Categorize Contractor Invoices for Taxes",
  description: "Upload contractor invoices and let AI automatically categorize expenses with IRS tax codes. Built for freelancers and small business owners."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="49f7c3bf-18a5-4f77-aa63-8c9846d69f2d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
