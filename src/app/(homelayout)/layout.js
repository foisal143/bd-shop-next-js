import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import '../globals.css';
import Footer from '@/components/Footer';
import Provaider from '@/Provaider/Provaider';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BD SHOP',
  description: 'BD SHOP is an ecomarce site for world',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provaider>
          <Navbar />
          <div className="min-h-[calc(100vh-80px)]">{children}</div>
          <Footer />
        </Provaider>
      </body>
    </html>
  );
}
