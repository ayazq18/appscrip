'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import styles from '../(Styles)/navHorizontal.module.css'

function NavHorizontal() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Handler to toggle drawer visibility
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <div className={styles.main}>

            {isDrawerOpen && <div className={styles.drawer}>
                <div className={styles.drawerContent}>
                    <button className={styles.closeButton} onClick={() => setIsDrawerOpen(false)}>×</button>
                    <h2>Shop Ease</h2>
                    <p>Coming Soon!</p>
                </div>
                <div className={styles.overlay} onClick={() => toggleDrawer()} />
            </div>}

            <div className={styles.lorem}>
                <div className={styles.loremMain}>
                    <div className={styles.loremContainer}>
                        <Icon icon='mynaui:align-right' width="24" height="24" color='red' />
                        <span style={{ color: 'red', fontSize: '13px', fontWeight: '700' }}>Lorem ipsum dolor</span>
                    </div>

                    <div className={[styles.loremDisplay]}>
                        <Icon icon='mynaui:align-right' width="24" height="24" color='red' />
                        <span style={{ color: 'red', fontSize: '13px', fontWeight: '700' }}>Lorem ipsum dolor</span>
                    </div>

                    <div className={[styles.loremDisplay]}>
                        <Icon icon='mynaui:align-right' width="24" height="24" color='red' />
                        <span style={{ color: 'red', fontSize: '13px', fontWeight: '700' }}>Lorem ipsum dolor</span>
                    </div>
                </div>
            </div>

            <div className={styles.navBar}>
                <div className={styles.navBarContainer}>

                    <div className={styles.menuIconContainer}>

                        <Icon icon='mingcute:menu-line' className={styles.menuIcon} onClick={() => toggleDrawer()} width="24" height="24" />

                        <Icon icon='solar:star-rings-linear' width="24" height="24" />

                    </div>

                    <span style={{ fontSize: '25px', fontWeight: '800' }}>LOGO</span>

                    <div className={styles.menuIcons}>

                        <Icon icon='iconamoon:search-thin' width="24" height="24" className={styles.searchIcon} />
                        <Icon icon='ph:heart-light' width="24" height="24" className={styles.heartIcon} />
                        <Icon icon='ion:bag-remove-outline' width="24" height="24" className={styles.cartIcon} />
                        <Icon icon='fluent:person-48-regular' width="24" height="24" className={styles.profileIcon} />

                        <select className={styles.customSelect}>
                            <option>Eng</option>
                        </select>

                    </div>

                </div>
            </div>

            <div className={styles.navTabs}>
                <div className={styles.navTabsContainer}>
                    <span>SHOP</span>
                    <span>SKILLS</span>
                    <span>STORIES</span>
                    <span>ABOUT</span>
                    <span>CONTACT US</span>

                </div>
            </div>

            <div className={styles.mobileNavTabs}>
                <span style={{ color: 'gray', paddingRight: '10px', borderRight: '1px solid gray' }}>HOME</span>
                <span style={{ color: 'black' }}>SHOP</span>
            </div>

            <div className={styles.productsDiscover}>
                <div className={styles.DiscoverContainer}>
                    <h1>discover our products</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore natus eius dolore illum ad soluta aut reprehenderit, est perferendis tenetur nobis placeat eligendi laborum.</p>

                </div>
            </div>

        </div>
    )
}

export default NavHorizontal
