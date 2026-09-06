import './globals.css';

export const metadata = {
  title: 'Pangasinan Heritage Digital Showcase',
  description: 'A mobile-first heritage showcase for Pangasinan.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
