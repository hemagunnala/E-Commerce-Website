import React from "react";
import { useSelector } from "react-redux";
import styles from './featuredProducts.module.scss';
import { Link } from "react-router-dom";
import Product from "../Product/Product";
const FeaturedProducts = () => {
    const { Products } = useSelector((state) => {
        return state;
    })

    const featuredProducts = Products.filter((product) => {
        return product.featured;
    })
    return (
        <div className={`${styles.featuredProducts} section`}>
            <div className='title'>
                <h2>featured products</h2>
                <div className='underline'></div>
            </div>
            <div className={`${styles.featured} section-center`}>
                {featuredProducts.slice(0, 3).map((product) => {
                    return (
                        <>
                            <Product {...product}/>
                        </>
                    )
                })}
            </div>
            <Link to='/products' className={`${styles.btn} btn`}>
                all products
            </Link>
        </div>
    )
}
export default FeaturedProducts;

