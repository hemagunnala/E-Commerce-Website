import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUserMinus, FaUserPlus, FaTimes } from 'react-icons/fa'
import { links } from '../../utils/constants'
import styles from './sidebar.module.scss'
import { useDispatch, useSelector } from 'react-redux'

const Sidebar = ({handleLogOut}) => {
    const { userDetails, isSideBarOpen } = useSelector((state) => {
        return state;
    })
    const dispatch = useDispatch();
    const closeSidebar = () => {
        dispatch({
            type: "CLOSE_SIDEBAR"
        })
    }
    return (
        <div className={styles.sidebar_main}>
            <aside
                className={`${isSideBarOpen ? `${styles.sidebar} ${styles.show_sidebar}` : styles.sidebar}`}
            >
                <div className={styles.sidebar_header}>
                    <img src={logo} className={styles.logo} alt='coding addict' />
                    <button className={styles.close_btn} onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>
                <ul className={styles.links}>
                    {links.map(({ id, text, url }) => {
                        return (
                            <li key={id}>
                                <Link to={url} onClick={closeSidebar}>
                                    {text}
                                </Link>
                            </li>
                        )
                    })}
                    {userDetails.uid && (
                        <li>
                            <Link to='/checkout' onClick={closeSidebar}>
                                checkout
                            </Link>
                        </li>
                    )}
                </ul>
                <div className={styles.cart_btns}>
                    <Link to='/cart' onClick={closeSidebar}><FaShoppingCart />Cart</Link>
                    {userDetails.uid ? <Link onClick={() => {handleLogOut(); closeSidebar();}}><FaUserMinus />LogOut</Link> : <Link to='/login' onClick={closeSidebar}><FaUserPlus />Login</Link>}
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
