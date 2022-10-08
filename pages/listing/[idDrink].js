import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Grid.module.scss';

export const getStaticPaths = async () => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
  );
  const data = await response.json();

  const paths = data.drinks.map((cocktail) => {
    return {
      params: { idDrink: cocktail.idDrink.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
};

//map data to an array of path objects with params (id)

export const getStaticProps = async (context) => {
  const id = context.params.idDrink;

  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await res.json();

  return {
    props: { cocktail: data.drinks[0] }
  };
};

const Cocktail = ({ cocktail }) => {
  const {
    strDrink,
    strCategory,
    strAlcoholic,
    strDrinkThumb,
    strInstructions,
    strGlass,
    strIngredient1,
    strIngredient2,
    strIngredient3
  } = cocktail;
  return (
    <>
      <Head>
        <title>{strDrink} | The Cocktail Bar</title>
      </Head>
      <main>
        <h1 className='title'>Your Cocktail</h1>
        <h2 className='subtitle'>{strDrink}</h2>
        <div className={styles.flex}>
          <div className={styles.itemImgContainer}>
            <Image
              src={strDrinkThumb}
              unoptimized
              width={500}
              height={500}
              alt=''></Image>
          </div>
          <div className={styles.item}>
            <p>
              <span>Category:</span> {strCategory} / {strAlcoholic}
            </p>
            <p>
              <span>Main Ingredients:</span> {strIngredient1}, {strIngredient2},{' '}
              {strIngredient3}
            </p>
            <p>
              <span>Best Served:</span> {strGlass}
            </p>
            <p>
              <span>Instructions:</span> {strInstructions}
            </p>
          </div>
          <Link href='/listing'>
            <a className={styles.button}>Back</a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Cocktail;
