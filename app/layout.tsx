import  "bootstrap/dist/css/bootstrap.min.css"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <title>Penerimaan Negara</title>
        <body>{children}</body>
      </html>
    )
  }