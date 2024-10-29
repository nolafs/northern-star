/* eslint-disable-next-line */
import {Footer} from '@northern-star/features';
import Logo from '../assets/image_2024_10_29T10_23_34_703Z.png';
import Image from 'next/image';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <div className={'flex flex-col space-y-10 container'}>
      <main>
        <div className={'relative flex justify-center items-center'}>
          <Image src={Logo} alt="Dog on mars"/>
        </div>
        <div className={'relative z-10 mt-48'}>
          {children}
        </div>
      </main>
      <Footer/>
    </div>
  );
}
