import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/Link";

const Footer = () => {

  return (
    <div className={styles.conta}>
      <div className={styles.item}>
      <img />
        <Image src="/img/b.svg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h5 className={styles.motto}>
            <h4 className={styles.title}>About Us</h4>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </h5>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>My Account</h1>
          <p className={styles.text}>
          <ul className={styles.list}>
          <li className={styles.fooo}><Link href="/">Home</Link></li>
          
          </ul>
          </p>
          
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.text}>
             
          <Image src="/img/j.svg" alt="" width="20" height="20" /> 9878/25 sec 9 rohini 35
          </p>
          <p className={styles.text}>
          <Image src="/img/k.svg" alt="" width="20" height="20" /> +91-9999878398
          </p>
          <p className={styles.text}>
          <Image src="/img/mm.svg" alt="" width="30" height="30" /> info@example.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;