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
    <html lang="en" suppressHydrationWarning>
      <head>

      {/* <style>
        {

          
          `
            --background-dark: #0d1117;
  --background-light: #ffffff;
          
          .dark body {
  background-color: var(--background-dark);
  color: var(--text-dark);
}

.light body {
  background-color: var(--background-light);
  color: var(--text-light);
}`
        }
      </style> */}
      </head>
      <body>
        <ThemeProvider>
          <DarkmodeToogle />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
