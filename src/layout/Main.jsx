import { getDatabase, ref, get, child } from 'firebase/database';
import React, { useState } from 'react';
import styles from './Main.module.css';
import Cards from '../components/Cards/Cards';
import loader from '../assets/loader.gif';

export async function dishes() {
  const dbRef = ref(getDatabase());
  const getItem = async (item) =>
    get(child(dbRef, `/${item}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return Object.values(snapshot.val());
        }
        return {};
      })
      .catch((error) => {
        console.error(error); // eslint-disable-line no-console
      });
  const pizzas = await getItem('pizzas');
  const toppings = await getItem('toppings');
  return {
    pizzas,
    toppings,
  };
}

function Main() {
  const [pizzas, setPizzas] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [loading, setLoading] = useState(true);
  if (!pizzas.length) {
    dishes().then((result) => {
      setPizzas(result.pizzas);
      setToppings(result.toppings[0]);
      setLoading(false);
    });
  }

  return (
    <div className={styles.main}>
      <h2 className={styles.category} style={{ textAlign: 'center' }}>
        Pizzas
      </h2>
      {!loading ? (
        <Cards dishes={pizzas} toppings={toppings} />
      ) : (
        <img src={loader} alt="Loading..." className={styles.loader} />
      )}
    </div>
  );
}

export default Main;
