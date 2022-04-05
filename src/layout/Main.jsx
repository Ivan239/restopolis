import './Main.css'
import Cards from '../components/Cards/Cards'
import { getDatabase, ref, get, child } from "firebase/database";
import { useState } from 'react';
import loader from '../assets/loader.gif'

async function dishes() {
    const dbRef = ref(getDatabase());
    const getPizzas = get(child(dbRef, `/pizzas`)).then((snapshot) => {
        if (snapshot.exists()) {
            return Object.values(snapshot.val())
        }
    }).catch((error) => {
        console.error(error);
    });
    const pizzas = await getPizzas
    return {
        pizzas: pizzas
    }
}

function Main() {
    const [pizzas, setPizzas] = useState([])
    const [loading, setLoading] = useState(true)
    if (!pizzas.length) {
        dishes()
            .then((result) => {
                setPizzas(result.pizzas)
                setLoading(false)
            })
    }

    return <div className="main">
        <h2 className='main__category' style={{ textAlign: 'center' }}>Pizzas</h2>
        {!loading ? <Cards dishes={pizzas} /> : <img src={loader} alt='Loading...' className='main__loader' />}
    </div>
}

export default Main 