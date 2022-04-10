import {
  getDatabase, ref, get, child,
} from 'firebase/database';
import React, { useState } from 'react';
import styles from './Main.module.css';
import Cards from '../components/Cards/Cards';
import loader from '../assets/loader.gif';

async function dishes() {
  const dbRef = ref(getDatabase());
  const getPizzas = get(child(dbRef, '/pizzas')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return {};
  }).catch((error) => {
    console.error(error); // eslint-disable-line no-console
  });
  const pizzas = await getPizzas;
  const getToppings = get(child(dbRef, '/toppings/toppings')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return {};
  }).catch((error) => {
    console.error(error); // eslint-disable-line no-console
  });
  const toppings = await getToppings;
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
    dishes()
      .then((result) => {
        setPizzas(result.pizzas);
        setToppings(result.toppings);
        setLoading(false);
      });
  }

  return (
    <div className={styles.main}>
      <h2 className={styles.category} style={{ textAlign: 'center' }}>Pizzas</h2>
      {!loading ? <Cards dishes={pizzas} toppings={toppings} /> : <img src={loader} alt="Loading..." className={styles.loader} />}
    </div>
  );
}

export default Main;
