import './global.css'
export const metadata = {
  title: 'Agende AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}