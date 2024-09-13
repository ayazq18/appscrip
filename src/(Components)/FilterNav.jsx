import React, {useState} from 'react'
import styles from '../(Styles)/filterNav.module.css'
function FilterNav({toggleFilter, isFilterOpen}) {
    return (
        <div className={styles.main}>

            <div className={styles.mobileFilterControl}>
                <h6>FILTER</h6>
            </div>

            <div className={styles.filterControl}>
                <h5>3425</h5>
                <h6 onClick={()=>toggleFilter()}>{!isFilterOpen ? "<" : ">"} &nbsp; {!isFilterOpen ? 'HIDE FILTERS' : 'SHOW FILTERS'}</h6>
            </div>

            <select className={styles.customSelect}>
                <option>RECOMMENDED</option>
            </select>
        </div>
    )
}

export default FilterNav
