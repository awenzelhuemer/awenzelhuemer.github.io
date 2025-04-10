import '@fortawesome/fontawesome-svg-core/styles.css';
import type { Metadata } from "next";
import DarkmodeToogle from "./components/darkmode-toggle";
import "./globals.css";
import { ThemeProvider } from './context/theme-context';

export const metadata: Metadata = {
  title: 'Andreas Wenzelhuemer',
  description: 'Portfolio Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>
          <DarkmodeToogle />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
