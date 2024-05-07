import './global.css';
import {Oxanium} from 'next/font/google';



export const metadata = {
  title: 'Welcome to northern-star',
  description: 'Games',
};



const oxanium = Oxanium({
  subsets: ['latin'],
  variable: "--font-oxanium",
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={oxanium.className}>
      <body>{children}</body>
    </html>
  );
}
