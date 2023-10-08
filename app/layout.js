import './globals.css'


export const metadata = {
  title: 'R9-AD',
  description: 'Adarsh',
}

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>{children}</body>
    </html>
  )
}
