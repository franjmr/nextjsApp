import '../styles/globals.css'
import { Navigation } from './components/Navigation'

export default function RootLayout({
children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Dashboard-UnitTesting</title>
      </head>
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}