import styles from './page.module.css';
import {Footer} from '@northern-star/features';
import DialogComponent from '../../../../libs/shared/features/src/lib/dialog/dialog';
import ContactForm from '../../../../libs/shared/features/src/lib/contact-form/contact-form';


export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>

      <div className={'absolute w-full bottom-48 text-white z-20 flex justify-center'}>
        <DialogComponent
          dialogTitle={'Contact Us'}
          label={'Contact Us'}
          hasIcon={true}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512">
              <path
                d="M64 80c-26.5 0-48 21.5-48 48v28.2L220.8 321.4c20.5 16.5 49.8 16.5 70.3 0L496 156.2V128c0-26.5-21.5-48-48-48H64zM16 176.7V384c0 26.5 21.5 48 48 48H448c26.5 0 48-21.5 48-48V176.7L301.2 333.8c-26.4 21.3-64 21.3-90.4 0L16 176.7zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
            </svg>
          }
        >
          <ContactForm/>
        </DialogComponent>
      </div>

      <div className={'absolute w-full bottom-0 text-white z-20'}>
        <Footer/>
      </div>

      <div className="absolute z-10 w-full h-full max-w-none">
        <video playsInline={true} muted={true} autoPlay={true} loop={true}
               className="object-cover w-full h-full"
        >
          <source src="/videos/6s_loop_20mbs.webm" type="video/webm"/>
          <source src="/videos/6s_loop_20mbs.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>

      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name"/>
        <input type="email" name="email"/>
        <input type="enquiryType" name="enquiryType"/>
        <input type="agreeToTerms" name="agreeToTerms"/>
        <textarea name="message"/>
      </form>
    </div>
  );
}
