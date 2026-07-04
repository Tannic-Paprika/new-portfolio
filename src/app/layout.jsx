import './globals.css'
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Raj Pattnaik — Backend Engineer',
  description: 'Backend & AI Engineer building resilient, scalable systems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
