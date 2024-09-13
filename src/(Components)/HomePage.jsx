'use client'
import React, {useState} from 'react'
import styles from '../(Styles)/home.module.css'
import FilterNav from './FilterNav'
import Filter from './Filter'
import Products from './Products'
import Footer from './Footer'

function HomePage() {

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prevState) => !prevState);
  };
  console.log(isFilterOpen)

  return (
    <div className={styles.main}>

      <FilterNav toggleFilter={toggleFilter} isFilterOpen={isFilterOpen}/>

      <div className={styles.filterProducts}>
        <div className={!isFilterOpen ? styles.filter : styles.filterCollapse}>
          <Filter isFilterOpen={isFilterOpen} />
        </div>

        <Products />
      </div>

      <Footer />
    </div>
  )
}

export default HomePage
