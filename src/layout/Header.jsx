import styles from './Header.module.css'
import HeaderButton from '../components/HeaderButton/HeaderButton'
import CartButton from '../components/CartButton/CartButton';
import { NavLink } from 'react-router-dom'

const barButtons = [
    'menu',
    'order',
    'book',
    'profile',
]

function firstUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Header() {
    return <div className={styles.header}>
        <NavLink to='/' className={styles.name}>
            <h1>
                R e s t o p o l i s
            </h1>
        </NavLink>
        <div className={styles.buttons}>
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