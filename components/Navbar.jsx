import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.scss';
const Navbar = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <nav>
        <Link href='/'>
          <a className={styles.logo}>
            <Image src='/logo.svg' width={100} height={100} alt='' />
          </a>
        </Link>
        <div className='nav-links'>
          <Link href='/'>
            <a className={router.pathname == '/' ? 'active' : ''}>Home</a>
          </Link>
          <Link href='/listing'>
            <a className={router.pathname == '/listing' ? 'active' : ''}>
              Listing
            </a>
          </Link>
          <Link href='/about'>
            <a className={router.pathname == '/about' ? 'active' : ''}>About</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
