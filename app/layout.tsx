import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
  title: 'Solpat/Solhub - Presentación Interactiva',
  description: 'Inteligencia Artificial Personalizada para Laboratorios Patológicos',
  icons: {
    icon: [
      { url: '/SOLWARE - 22.png', sizes: '32x32', type: 'image/png' },
      { url: '/SOLWARE - 22.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/SOLWARE - 22.png',
    apple: [
      { url: '/SOLWARE - 22.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
		<html lang="es" suppressHydrationWarning>
			<head>
				<meta charSet="utf-8" />
			</head>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
