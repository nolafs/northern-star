import './global.css';
import {Oxanium} from 'next/font/google';
import {CookieBanner} from '@northern-star/ui';
import {GoogleAnalytics} from '@northern-star/utils';
import {Suspense} from 'react';


export const metadata = {
  title: 'Northern Star',
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
    <html lang="en" className={oxanium.className} data-theme="northernstar">
    <Suspense>
     <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_GOOGLE_ANALYTICS_ID || ''}/>
    </Suspense>
    <body>

    {children}
    <CookieBanner/>
    </body>
    </html>
  );
}
