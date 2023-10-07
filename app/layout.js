import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ThemeContextProvider from './context/ThemeContext'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'miInmueble',
  description: 'Somos una agencia de bienes raices. Encuentra casas y departamentos en venta o renta.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeContextProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeContextProvider>
        </body>
    </html>
  )
}
