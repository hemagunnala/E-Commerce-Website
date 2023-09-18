import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from './Cart.module.scss';
import PageHero from "../PageHero/PageHero";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helper";
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const { cart } = useSelector((state) => {
        return state;
    });
    const dispatch = useDispatch();

    const handleDecrement = (itemId) => {
        const prevCart = [...cart];
        const newCart = (prevCart || []).map((item) => {
            return item.id === itemId && item.quantity >= 1 ? { ...item, quantity: item.quantity - 1 } : item;
        })
        dispatch({
            type: 'UPDATE_CART',
            payload: newCart
        })
    }
    const handleIncrement = (itemId) => {
        const prevCart = [...cart];
        const newCart = (prevCart || []).map((item) => {
            return item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item;
        })
        dispatch({
            type: 'UPDATE_CART',
            payload: newCart
        })
    }
    const handleDelete = (itemId) => {
        const prevCart = [...cart];
        const index = prevCart.findIndex((item) => {
            return item.id === itemId;
        })
        prevCart.splice(index, 1);
        dispatch({
            type: 'UPDATE_CART',
            payload: prevCart
        })
    }

    const handleClearCart = () => {
        dispatch({
            type: 'UPDATE_CART',
            payload: [],
        })
    }
    useEffect(() => {
        calculateTotalPrice();
    }, [cart]);

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach(({ quantity, price }) => {
            totalPrice += quantity * price;
        })
        setTotalPrice(totalPrice);
    }
    return (
        <>
            <PageHero title='Cart' />
            <div className={`page`}>
                <div className={`${styles.cart_content} section section-center`}>
                    <div className={styles.cart_columns}>
                        <div className={styles.content}>
                            <h5>item</h5>
                            <h5>price</h5>
                            <h5>quantity</h5>
                            <h5>subtotal</h5>
                            <span></span>
                        </div>
                        <hr />
                    </div>
                    <div className={styles.cart_items}>
                        {cart && cart.map(({ name, id, price, quantity, images, color }) => {
                            return (
                                <>
                                    <div className={styles.title}>
                                        <img src={images[0].url} alt={name} />
                                        <div>
                                            <h5 className={styles.name}>{name}</h5>
                                            <h5 className={styles.price_small}>{formatPrice(price)}</h5>
                                        </div>
                                    </div>
                                    <h5 className={styles.price}>{formatPrice(price)}</h5>
                                    <div className={styles.amount_btns}>
                                        <button type='button' className={styles.amount_btn} onClick={() => handleDecrement(id)}>
                                            <FaMinus />
                                        </button>
                                        <h2 className={styles.amount}>{quantity}</h2>
                                        <button type='button' className={styles.amount_btn} onClick={() => handleIncrement(id)}>
                                            <FaPlus />
                                        </button>
                                    </div>
                                    <h5 className={styles.subtotal}>{formatPrice(price * quantity)}</h5>
                                    <button className={styles.remove_btn} onClick={() => handleDelete(id)}>
                                        <FaTrash />
                                    </button>
                                </>
                            )
                        })}
                    </div>
                    {cart.length > 0 && <>
                        <div>Total Price : {formatPrice(totalPrice)}</div>
                        <div className={styles.link_container}>
                            <Link to='/products' className={styles.link_btn}>
                                continue shopping
                            </Link>
                            <button
                                type='button'
                                className={`${styles.link_btn} ${styles.clear_btn}`}
                                onClick={handleClearCart}
                            >
                                clear shopping cart
                            </button>
                        </div>
                    </>}
                </div>
            </div>
        </>
    )
}
export default Cart;