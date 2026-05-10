import './globals.css'

export const metadata = {
  title: 'Raj Pattnaik — Backend Engineer',
  description: 'Backend & AI Engineer building resilient, scalable systems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
