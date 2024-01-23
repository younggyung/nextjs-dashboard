import '@/app/ui/global.css';
import { inter } from '@/app/ui/font';
import Provider from './components/ThemeProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </Provider>
    </html>
  );
}
