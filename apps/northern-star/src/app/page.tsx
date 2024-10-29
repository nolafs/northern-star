import styles from './page.module.css';
import {Footer} from '@northern-star/features';
import Logo from './assets/image_2024_10_29T10_23_34_703Z.png';
import Image from 'next/image';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>

      <div className={'absolute w-full bottom-0 text-white z-20'}>
        <Footer/>
      </div>

      <div className="absolute z-10 w-full h-dvh max-w-none flex flex-col justify-center items-center">
          <Image src={Logo} alt="Dog on mars" />
      </div>


    </div>
  );
}
