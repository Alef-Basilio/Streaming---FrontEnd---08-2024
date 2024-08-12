import "../globals.css";

export const metadata = {
  title: 'PPTV | Go Out',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}