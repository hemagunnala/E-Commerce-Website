import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Products.module.scss';
import { Link } from 'react-router-dom';
import PageHero from '../PageHero/PageHero';
import Product from '../Product/Product';
import { formatPrice } from '../../utils/helper';
import { BsFillGridFill, BsList } from 'react-icons/bs'

const Products = () => {
    const { Products } = useSelector((state) => {
        return state;
    })
    const [style, setStyle] = useState('grid');
    const [searchedValue, setSearchedValue] = useState('');
    const [searchcategory, setSearchCategory] = useState('all');
    const [searchCompany, setSearchCompany] = useState('');
    const [filterProducts, setFilteredProducts] = useState(Products)
    const [sort, setSort] = useState('');
    useEffect(() => {
        let filtered;
        const searchedProducts = Products.filter((prod) => {
            return prod.name.includes(searchedValue);
        })
        filtered = searchedProducts
        if (searchcategory !== 'All') {
            const searchedProducts = filtered.filter((prod) => {
                return prod.category.includes(searchcategory);
            })
            filtered = searchedProducts;
        }
        if (searchCompany !== 'All') {
            const searchedProducts = filtered.filter((prod) => {
                return prod.company.includes(searchCompany);
            })
            filtered = searchedProducts;
        }

        filtered.sort((a, b) => {
            if (sort === 'price-lowest')
                return a.price - b.price;
            else
                return b.price - a.price;
        })
        setFilteredProducts(filtered);
    }, [searchedValue, searchcategory, searchCompany, sort])
    useEffect(() => {
        setFilteredProducts(Products);
    }, [Products])

    const clearAllFilters = () => {
        setSearchCategory('');
        setSearchCompany('');
        setSearchedValue('');
    }

    const category = Products.map((prod) => {
        return prod.category;
    })
    const uniqueCategory = ['All', ...new Set(category)];

    const companies = Products.map((prod) => {
        return prod.company;
    })

    const uniqueCompanies = ['All', ...new Set(companies)];

    return (
        <>
            <PageHero title='products' />
            <div className={`page`}>
                <div className={`${styles.products} section-center`}>
                    <div className={styles.filters}>
                        <div className={styles.content}>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className={styles.form_control}>
                                    <input
                                        type='text'
                                        name='text'
                                        value={searchedValue}
                                        placeholder='search'
                                        onChange={(e) => setSearchedValue(e.target.value)}
                                        className={styles.search_input}
                                    />
                                </div>
                                <div className={styles.form_control}>
                                    <h5>category</h5>
                                    <div>
                                        {uniqueCategory.map((c, index) => {
                                            return (
                                                <button
                                                    key={index}
                                                    onClick={() => setSearchCategory(c)}
                                                    type='button'
                                                    name='category'
                                                    className={`${searchcategory === c.toLowerCase() ? styles.active : null
                                                        }`}
                                                >
                                                    {c}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className={styles.form_control}>
                                    <h5>company</h5>
                                    <select
                                        name='company'
                                        value={searchCompany}
                                        onChange={(e) => setSearchCompany(e.target.value)}
                                        className={styles.company}
                                    >
                                        {companies.map((c, index) => {
                                            return (
                                                <option key={index} value={c}>
                                                    {c}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </form>
                            <button type='button' className='clear-btn' onClick={clearAllFilters}>
                                clear filters
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className={styles.sort_container}>
                            <div className={styles.btn_container}>
                                <button
                                    onClick={() => setStyle('grid')}
                                    className={`${style === 'grid' ? styles.active : null}`}
                                >
                                    <BsFillGridFill />
                                </button>
                                <button
                                    onClick={() => setStyle('list')}
                                    className={`${style === 'list' ? styles.active : null}`}
                                >
                                    <BsList />
                                </button>
                            </div>
                            <p>{filterProducts.length} products found</p>
                            <hr />
                            <form>
                                <label htmlFor='sort'>sort by</label>
                                <select
                                    name='sort'
                                    id='sort'
                                    value={sort}
                                    onChange={(e) => setSort(e.target.value)}
                                    className={styles.sort_input}
                                >
                                    <option value='price-lowest'>price (lowest)</option>
                                    <option value='price-highest'>price (highest)</option>
                                </select>
                            </form>
                        </div>
                        {filterProducts.length < 1 ? (
                            <h5 style={{ textTransform: 'none' }}>
                                Sorry, no products matched your search.
                            </h5>
                        ) : style === 'grid' ? (
                            <div className={styles.grid_view}>
                                <div className={styles.products_container}>
                                    {filterProducts.map((product) => {
                                        return <Product {...product} />
                                    })}
                                </div>
                            </div>
                        ) : (
                            <div className={styles.list_view}>
                                {filterProducts.map((product) => {
                                    const { id, image, name, price, description } = product
                                    return (
                                        <article key={id}>
                                            <img src={image} alt={name} />
                                            <div>
                                                <h4>{name}</h4>
                                                <h5 className='price'>{formatPrice(price)}</h5>
                                                <p>{description.substring(0, 150)}...</p>
                                                <Link to={`/products/${id}`} className='btn'>
                                                    Details
                                                </Link>
                                            </div>
                                        </article>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;