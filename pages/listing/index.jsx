import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Grid.module.scss';

export const getStaticProps = async () => {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
  );
  const data = await response.json();

  return {
    props: { cocktails: data.drinks }
  };
};

const Cocktails = ({ cocktails }) => {
  return (
    <>
      <Head>
        <title>The Cocktail Bar | Menu</title>
      </Head>
      <div>
        <main>
          <h1 className='title'>Cocktail Menu</h1>
          <h2 className='subtitle'>Our Cocktail Selection</h2>
          <div className={styles.grid}>
            {cocktails.map((cocktail) => {
              const { idDrink, strDrink, strDrinkThumb } = cocktail;
              return (
                <div key={idDrink}>
                  <Link href={'/listing/' + idDrink}>
                    <a className={styles.item}>
                      <Image
                        src={strDrinkThumb}
                        unoptimized
                        width={200}
                        height={200}
                        alt=''></Image>
                      <h3>{strDrink}</h3>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default Cocktails;
