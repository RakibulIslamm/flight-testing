import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ContextProvider from './context/ContextProvider'
import NavBar from './components/shared/NavBar'
import "primereact/resources/themes/lara-light-teal/theme.css";
import "primereact/resources/primereact.min.css";
import Footer from './components/shared/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flight Testing App',
  description: 'Flight testing app created by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-50 text-gray-600 min-h-screen max-w-[1920px] mx-auto">
          <ContextProvider>
            <NavBar />
            {children}
            <Footer/>
          </ContextProvider>
        </div>
      </body>
    </html>
  )
}
