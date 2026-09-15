export const metadata = {
  title: 'نبراس القدرات',
  description: 'منصة نبراس القدرات التعليمية',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
