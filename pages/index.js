import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Cocktail Bar | Home</title>
      </Head>
      <div>
        <main>
          <h1 className='title'>Next.JS - React Framework</h1>
          <h2 className='subtitle'>Getting started Application</h2>
          <ul className='pagelist'>
            <li>Create a Next.js App & setup</li>
            <li>Pages & routes</li>
            <li>Adding components</li>
            <li>Linking between pages</li>
            <li>Creating a Layout file</li>
            <li>Adding styles</li>
            <li>Custom 404 page</li>
            <li>Redirecting users</li>
            <li>Images and metadata</li>
          </ul>

          <ul className='pagelist'>
            <li>Fetching data (API)</li>
            <li>Dynamic routes</li>
            <li>Fetching a single item</li>
            <li>Deployment</li>
          </ul>
        </main>
      </div>
    </>
  );
}
