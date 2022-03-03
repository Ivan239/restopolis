import './Main.css'
import pepperoni from '../assets/pepperoni.png'
import Cards from '../components/Cards/Cards'

const pizzas = [
    {
        name: 'Pepperoni with gold',
        img: pepperoni,
        price: 5000,
    },
    {
        name: 'Pepperoni',
        img: pepperoni,
        price: 500,
    },
    {
        name: 'Pepperoni with gold',
        img: pepperoni,
        price: 5000,
    },
    {
        name: 'Pepperoni',
        img: pepperoni,
        price: 500,
    },
    {
        name: 'Pepperoni',
        img: pepperoni,
        price: 500,
    },
    {
        name: 'Pepperoni',
        img: pepperoni,
        price: 500,
    },
    {
        name: 'Pepperoni',
        img: pepperoni,
        price: 500,
    },
    {
        name: 'Pepperoni',
        img: pepperoni,
        price: 500,
    },
    {
        name: 'Pepperoni',
        img: pepperoni,
        price: 500,
    },
    {
        name: 'Pepperoni',
        img: pepperoni,
        price: 500,
    },
]

function Main() {
    return <div className="main">
        <h2 className='main__category' style={{textAlign: 'center'}}>Pizzas</h2>
        <Cards dishes={pizzas} />
    </div>
}

export default Main 