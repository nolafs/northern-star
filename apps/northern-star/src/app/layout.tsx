import './global.css';
import {Oxanium} from 'next/font/google';
import {CookieBanner} from '@northern-star/ui';
import {GoogleAnalytics} from '@northern-star/utils';


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
    <html lang="en" className={oxanium.className} data-theme="northernstar">
    <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_GOOGLE_ANALYTICS_ID || ''}/>
    <body>

    {children}
    <CookieBanner/>


    <form name="contact" data-netlify="true" hidden>
      <input type="hidden" name="form-name" value="contact"/>
      <input type="text" name="name"/>
      <input type="email" name="email"/>
      <input type="enquiryType" name="enquiryType"/>
      <input type="agreeToTerms" name="agreeToTerms"/>
      <textarea name="message"/>
    </form>
    </body>
    </html>
  );
}
