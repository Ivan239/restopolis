import './Header.css'
import HeaderButton from '../components/HeaderButton/HeaderButton'
import CartButton from '../components/CartButton/CartButton';
import { NavLink } from 'react-router-dom'

const barButtons = [
    'menu',
    'delivery',
    'book',
    'profile',
]

function firstUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Header() {
    return <div className="header">
        <NavLink to='/' className='header__name'>
            <h1>
                R e s t o p o l i s
            </h1>
        </NavLink>
        <div className='header__buttons'>
            {barButtons.map((elem) => {
                return elem === 'menu' ?
                <NavLink to={`/`} key={elem}>
                    <HeaderButton >{firstUpper(elem)}</HeaderButton>
                </NavLink> : 
                <NavLink to={`/${elem}`} key={elem}>
                    <HeaderButton>{firstUpper(elem)}</HeaderButton>
                </NavLink>
            })}
            <CartButton />
        </div>
    </div>
}

export default Header