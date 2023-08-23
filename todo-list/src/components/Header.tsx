import styles from './Header.module.css';
import RocketImg from '../assets/rocket.svg'

function Header () {
    return (
        <header className={styles.header}>
            <img src={RocketImg}/>
            <p className={styles.todo}>
                <span>to</span>
                <span>do</span>
            </p>
        </header>
    )
}

export default Header;