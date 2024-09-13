import React from 'react'
import styles from '../(Styles)/footer.module.css'
import { Icon } from '@iconify/react'

function Footer() {
    return (
        <div className={styles.main}>

            <div className={styles.containerOne}>
                <div className={styles.secOne}>
                    <h4>BE THE FIRST TO KNOW</h4>
                    <span>Sign up for updated from metta muse.</span>

                    <div className={styles.mailContainer}>
                        <input type='text' placeholder='Enter your e-mail...' />
                        <button title='Coming soon!'>Subscribe</button>
                    </div>
                </div>
                <div className={styles.secTwo}>
                    <h4 className={styles.contactUs}>CONTACT US</h4>
                    <h6>+44 221 133 5360</h6>
                    <h6>customercare@mettamuse.com</h6>
                    <h4>CURRENCY</h4>
                    <div className={styles.country}>
                        <Icon icon="twemoji:flag-india" width={20} />
                        <h1>.</h1>
                        <h5>India</h5>
                    </div>
                    <span>Transactions will be converted in Euros and a currency reference is available on hover.</span>
                </div>

                <div className={styles.callUs}>
                    <h4>CALL US</h4>
                    <span>+44 221 133 5360</span> &nbsp; &nbsp;
                    <span>customercare@mettamuse.com</span>
                </div>

                <div className={styles.mobCountry}>
                    <h4>CURRENCY</h4>
                    <div className={styles.mobCountryContainer}>
                        <Icon icon="twemoji:flag-india" width={20} />
                        <h1>.</h1>
                        <h5>India</h5>
                    </div>
                </div>
            </div>

            <div className={styles.containerTwo}>
                <div className={styles.secThree}>
                    <div className={styles.footerTitle}>
                        <h4>metta muse</h4>
                        <Icon icon="ep:arrow-down" className={styles.arrowDown} />
                    </div>
                    <h6>About Us</h6>
                    <h6>Stories</h6>
                    <h6>Artisans</h6>
                    <h6>Boutiques</h6>
                    <h6>Contact Us</h6>
                    <h6>EU Compliances Docs</h6>

                </div>

                <div className={styles.secFour}>
                    <div className={styles.footerTitle}>
                        <h4>QUICK LINKS</h4>
                        <Icon icon="ep:arrow-down" className={styles.arrowDown} />
                    </div>
                    <h6>Orders & Shipping</h6>
                    <h6>Join/Login as a Seller</h6>
                    <h6>Payment & Pricing</h6>
                    <h6>Return & Refunds</h6>
                    <h6>FAQs</h6>
                    <h6>Privacy Policy</h6>
                    <h6>Terms & Conditions</h6>
                </div>

                <div className={styles.secFive}>
                    <div className={styles.footerTitle}>
                        <h4>FOLLOW US</h4>
                        <Icon icon="ep:arrow-down" className={styles.arrowDown} />
                    </div>
                    <div className={styles.followUs}>
                        <Icon icon="f7:logo-instagram" width={20} className={styles.socialIcon} />
                        <Icon icon="mdi:linkedin" width={20} className={styles.socialIcon} />
                    </div>

                    <div className={styles.paymentMethods}>
                        <h4>metta muse ACCEPTS</h4>
                        <div className={styles.paymentCardContainer}>
                            <Icon icon="simple-icons:googlepay" className={styles.paymentCards} />
                            <Icon icon="logos:mastercard" className={styles.paymentCards} />
                            <Icon icon="logos:apple-pay" className={styles.paymentCards} />
                            <Icon icon="grommet-icons:amex" className={styles.paymentCards} />
                        </div>
                    </div>
                </div>

            </div>
            <h6 className={styles.copyRight}>Copyright 2023 mettamuse. All rights reserved</h6>
        </div>
    )
}

export default Footer
