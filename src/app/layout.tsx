import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Header from './components/Layout/Header'
import { ThemeProvider } from 'next-themes'
import Footer from './components/Layout/Footer'
import ScrollToTop from './components/ScrollToTop'

const DMSans = DM_Sans({
  variable: '--font-DM-Sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hana Medical Services',
  description: 'Medical coordination and support for patients seeking trusted care in India.',
  metadataBase: new URL('https://hanamedicalservice.com'),
  openGraph: {
    title: 'Hana Medical Services',
    description: 'Medical coordination and support for patients seeking trusted care in India.',
    siteName: 'Hana Medical Services',
    url: 'https://hanamedicalservice.com',
    type: 'website',
    images: [
      {
        url: '/images/logo/hana_logo.png',
        width: 1200,
        height: 630,
        alt: 'Hana Medical Services logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hana Medical Services',
    description: 'Medical coordination and support for patients seeking trusted care in India.',
    images: ['/images/logo/hana_logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${DMSans.variable} antialiased dark:bg-darkmode`}>
        <ThemeProvider
          attribute='class'
          enableSystem={false}
          defaultTheme='light'>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
