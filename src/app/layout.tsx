import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import Navbar from '@/components/navbar'

import './globals.css'
import Footer from '@/components/footer'
import ModalProvider from '@/providers/modal-provider'
import ToasterProvider from '@/providers/toast-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lemon store',
  description: 'Lemon store made by me',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <ToasterProvider />
        <ModalProvider />
        {children}
        <Footer />
      </body>
    </html>
  )
}
