import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push('/');
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>Listing | 404</title>
      </Head>
      <div>
        <main>
          <h1 className='title'>404</h1>
          <h2 className='subtitle'>Whoops, that page is gone</h2>
          <p className='notfound'>
            This page is going to be redirected to the{' '}
            <Link href='/'>
              <a className='pagelink'>Homepage</a>
            </Link>
          </p>
        </main>
      </div>
    </>
  );
};

export default NotFound;
