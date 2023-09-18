import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from './SingleProduct.module.scss';
import PageHero from "../PageHero/PageHero";
import { formatPrice } from "../../utils/helper";
const SingleProduct = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => {
        return state;
    });
    useEffect(() => {
        const index = cart.findIndex((prod) => {
            return prod.id === product?.id;
        })
        if (index !== -1) setQuantity(cart[index].quantity);
    }, [cart, product])
    const fetchProduct = async () => {
        const res = await fetch(`https://course-api.com/react-store-single-product?id=${id}`);
        const prod = await res.json();
        setProduct(prod);
        setLoading(false);
    }
    useEffect(() => {
        fetchProduct();
    }, []);
    const handleDecrement = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1);
        }
    }
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    }
    const handleCart = () => {
        const prevCart = [...cart];
        const index = prevCart.findIndex((prod) => {
            return prod.id === product.id;
        })
        if (index === -1)
            prevCart.push({ ...product, quantity });
        else {
            prevCart[index].quantity = quantity;
        }
        dispatch({
            type: 'ADD_TO_CART',
            payload: prevCart
        })
        navigate('/cart');
    }
    if (loading) return 'Loading...';
    const {
        name,
        price,
        description,
        stock,
        id: sku,
        company,
        images,
    } = product;
    return (
        <div className={styles.singleProduct}>
            <PageHero title={name} product />

            <div className="section section-center page">
                <Link to='/products' className='btn'>
                    back to products
                </Link>
                <div className={styles['product-center']}>
                    <img src={images[0].url} alt="product_img" />
                    <section className={styles.content}>
                        <h2>{name}</h2>
                        {/* <Stars stars={stars} reviews={reviews} /> */}
                        <h5 className={styles.price}>{formatPrice(price)}</h5>
                        <p className={styles.desc}>{description}</p>
                        <p className={styles.info}>
                            <span>Available : </span>
                            {stock > 0 ? 'In stock' : 'out of stock'}
                        </p>
                        <p className={styles.info}>
                            <span>SKU :</span>
                            {sku}
                        </p>
                        <p className={styles.info}>
                            <span>Brand :</span>
                            {company}
                        </p>
                        <hr />
                        <div className={styles['btn-container']}>
                            <button className={styles['color-btn']} onClick={handleDecrement}>-</button>
                            <span>{quantity}</span>
                            <button className={styles['color-btn']} onClick={handleIncrement}>+</button>
                            <button className='btn' onClick={handleCart}>Add to Cart</button>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
export default SingleProduct;
