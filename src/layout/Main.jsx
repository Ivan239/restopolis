import './Main.css'
import pepperoni from '../assets/pepperoni.png'
import Cards from '../components/Cards/Cards'

const pizzas = [
    {
        name: 'Pepperoni with gold',
        img: pepperoni,
        price: 5000,
        id: 1,
    },
    {
        name: 'Pepperoni',
        img: pepperoni,
        price: 500,
        id: 2,
    },
    {
        name: 'Pepperoni with gold',
        img: pepperoni,
        price: 5000,
        id: 3,
    },
    {
        name: 'Pepperoni',
        img: pepperoni,
        price: 500,
        id: 4,
    },
    {
        name: 'Pepperoni',
        img: pepperoni,
        price: 500,
        id: 5,
    },
    {
        name: 'Pepperoni',
        img: pepperoni,
        price: 500,
        id: 6,
    },
    {
        name: 'Pepperoni',
        img: pepperoni,
        price: 500,
        id: 7,
    },
    {
        name: 'Pepperoni',
        img: pepperoni,
        price: 500,
        id: 8,
    },
    {
        name: 'Pepperoni',
        img: pepperoni,
        price: 500,
        id: 9,
    },
    {
        name: 'Pepperoni',
        img: pepperoni,
        price: 500,
        id: 0,
    },
]

function Main() {
    return <div className="main">
        <h2 className='main__category' style={{textAlign: 'center'}}>Pizzas</h2>
        <Cards dishes={pizzas} />
    </div>
}

export default Main 