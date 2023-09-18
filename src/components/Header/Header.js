import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { FaBars } from 'react-icons/fa'
import logo from '../../assets/logo.svg';
import Sidebar from '../Sidebar/Sidebar';
const links = [
    {
        id: 1,
        title: 'Home',
        path: '/'
    },
    {
        id: 2,
        title: 'About',
        path: '/about'
    },
    {
        id: 3,
        title: 'Products',
        path: '/products'
    }];
const Header = () => {
    const dispatch = useDispatch();
    const { userDetails, isSideBarOpen } = useSelector((state) => {
        return state;
    })
    console.log(userDetails);
    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch({
                type: 'ADD_USER_DETAILS',
                payload: {}
            })
        }).catch((error) => {
            // An error happened.   
        });
    }
    return (
        <div className={styles.nav}>
            <div className={styles.nav_center}>
                <div className={styles.nav_header}>
                    <Link to='/'>
                        <img src={logo} alt='comfy sloth' />
                    </Link>
                    <button type='button' className={styles.nav_toggle} onClick={() => { dispatch({
                        type: 'OPEN_SIDEBAR'
                    })}}>
                        <FaBars />
                    </button>
                </div>
                <ul className={styles.nav_links}>
                    {links.map((link) => {
                        const { id, title, path } = link
                        return (
                            <li key={id}>
                                <Link to={path}>{title}</Link>
                            </li>
                        )
                    })}
                </ul>
                    <div className={styles.cart_btns}>
                        <Link to='/cart'>Cart <FaShoppingCart /></Link>
                        {userDetails.uid ? <Link onClick={handleLogOut}>LogOut <FaUserMinus /></Link> : <Link to='/login'>Login <FaUserPlus /></Link>}
                    </div>
            </div>
            {<Sidebar handleLogOut={handleLogOut} />}
        </div>
    )
}

export default Header;