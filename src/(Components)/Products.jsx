'use client'
import { GetAllProducts, GetAllProductsById } from '@/(Api)/ProductsApi'
import React, { useEffect, useState } from 'react';
import styles from '../(Styles)/products.module.css';
import Image from 'next/image';
import { Icon } from '@iconify/react';

function Products({ isFilterOpen }) {

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const despatch = useDespatch
    const GetProducts = async () => {
        const data = await GetAllProducts()
        if (data || data.data) {
            setProducts(data.data)
        }
    }

    const GetProductById = async (id) => {
        const data = await GetAllProductsById(id)
        if (data || data.data) {
            setProduct(data.data)
            setIsModalOpen(true);
        }
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        GetProducts()
    }, [])


    return (
        <div className={isFilterOpen ? styles.main : styles.mainCollapse}>
            <div className={styles.gridContainer}>
                {products?.map(({ id, price, title, image, description, category, rating }) => (
                    <div key={id} className={styles.card} onClick={() => GetProductById(id)}>
                        <div className={styles.cardImg}>
                            <img
                                src={image}
                                alt='product'
                            />
                        </div>

                        <div className={styles.infoContainer}>
                            <h4>{title}</h4>

                            <div className={styles.desc}>
                                <h6>{description}</h6>
                                <Icon icon='ph:heart-light' width="24" height="24" className={styles.heartIcon} />
                            </div>

                            <div className={styles.pricing}>
                                <h6>₹{price}</h6>
                                <span>{rating.rate}/5</span>
                            </div>
                        </div>

                        <div className={styles.category}>
                            <span>{category}</span>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h3>{product.title}</h3>
                            <button onClick={handleCloseModal}>Close</button>
                        </div>
                        <div className={styles.modalBody}>
                            <img src={product.image} alt={product.title} width={200} height={200} />
                            <p>{product.description}</p>
                            <h4>Price: ₹{product.price}</h4>
                            <h4>Rating: {product.rating?.rate}/5</h4>
                        </div>
                        <div className={styles.cart}>
                            <button title='Feature coming soon'>Add to cart</button>
                            <button title='Feature coming soon'>Add to wishlist</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Products
