import Navbar from '@/component/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Manage Tasks',
  description: 'Manage tasks for user',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="w-full container mx-auto items-center justify-between mt-0 py-2">
          {children}
        </div>
      </body>
    </html>
  )
}
