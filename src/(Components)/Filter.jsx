'use client'
import React, { useState } from 'react';
import styles from '../(Styles)/filter.module.css'
import { Icon } from '@iconify/react'

function Filter() {

    const [isIdealOpen, setIsIdealOpen] = useState(true);
    const [isOccasionOpen, setIsOccasionOpen] = useState(true);
    const [isWorkOpen, setIsWorkOpen] = useState(true);
    const [isFabricOpen, setIsFabricOpen] = useState(true);
    const [isSegmentOpen, setIsSegmentOpen] = useState(true);
    const [isSuitableForOpen, setIsSuitableForOpen] = useState(true);
    const [isRawMaterialsOpen, setIsRawMaterialsOpen] = useState(true);
    const [isPatternOpen, setIsPatternOpen] = useState(true);

    // Handle toggle for each section
    const handleToggle = (section) => {
        switch (section) {
            case 'ideal':
                setIsIdealOpen(!isIdealOpen);
                break;
            case 'occasion':
                setIsOccasionOpen(!isOccasionOpen);
                break;
            case 'work':
                setIsWorkOpen(!isWorkOpen);
                break;
            case 'fabric':
                setIsFabricOpen(!isFabricOpen);
                break;
            case 'segment':
                setIsSegmentOpen(!isSegmentOpen);
                break;
            case 'suitableFor':
                setIsSuitableForOpen(!isSuitableForOpen);
                break;
            case 'rawMaterials':
                setIsRawMaterialsOpen(!isRawMaterialsOpen);
                break;
            case 'pattern':
                setIsPatternOpen(!isPatternOpen);
                break;
            default:
                break;
        }
    };


    return (
        <div >

            <div className={styles.customizable}>
                <input type="checkbox" id="customizable-checkbox" className={styles.customizCheckBoz} />
                <label htmlFor={styles.customizCheckBoz}>
                    <h5>CUSTOMIZABLE</h5>
                </label>
            </div>

            <div className={styles.ideal}>
                <div className={styles.comman} onClick={() => handleToggle('ideal')}>
                    <div>
                        <h4>IDEAL FOR</h4>
                        <span>All</span>
                    </div>
                    <Icon icon="ep:arrow-down" />
                </div>


                {!isIdealOpen &&
                    <div className={styles.dropDownContainer}>
                        <h4>Unselect all</h4>
                        <div className={styles.dropDownOptions}>
                            <input type="checkbox" id="customizable-checkbox" className={styles.customizCheckBoz} />
                            <label htmlFor={styles.customizCheckBoz}>
                                <h6 style={{ fontWeight: '400' }}>MEN</h6>
                            </label>
                        </div>
                        <div className={styles.dropDownOptions}>
                            <input type="checkbox" id="customizable-checkbox" className={styles.customizCheckBoz} />
                            <label htmlFor={styles.customizCheckBoz}>
                                <h6 style={{ fontWeight: '400' }}>WOMEN</h6>
                            </label>
                        </div>
                        <div className={styles.dropDownOptions}>
                            <input type="checkbox" id="customizable-checkbox" className={styles.customizCheckBoz} />
                            <label htmlFor={styles.customizCheckBoz}>
                                <h6 style={{ fontWeight: '400' }}>BABY & KIDS</h6>
                            </label>
                        </div>
                    </div>
                }
            </div>

            <div className={styles.ideal}>
                <div className={styles.comman} onClick={() => handleToggle('occasion')}>
                    <div>
                        <h4>OCCASION</h4>
                        <span>All</span>
                    </div>
                    <Icon icon="ep:arrow-down" />
                </div>


                {!isOccasionOpen && <div className={styles.dropDownContainer}>
                    <h4>Unselect all</h4>
                    <div className={styles.dropDownOptions}>
                        <h1>Coming soon!</h1>
                    </div>
                </div>}
            </div>

            <div className={styles.ideal}>
                <div className={styles.comman} onClick={() => handleToggle('work')}>
                    <div>
                        <h4>WORK</h4>
                        <span>All</span>
                    </div>
                    <Icon icon="ep:arrow-down" />
                </div>


                {!isWorkOpen && <div className={styles.dropDownContainer}>
                    <h4>Unselect all</h4>
                    <div className={styles.dropDownOptions}>
                        <h1>Coming soon!</h1>
                    </div>
                </div>}
            </div>
            <div className={styles.ideal}>
                <div className={styles.comman} onClick={() => handleToggle('fabric')}>
                    <div>
                        <h4>FABRIC</h4>
                        <span>All</span>
                    </div>
                    <Icon icon="ep:arrow-down" />
                </div>


                {!isFabricOpen && <div className={styles.dropDownContainer}>
                    <h4>Unselect all</h4>
                    <div className={styles.dropDownOptions}>
                        <h1>Coming soon!</h1>
                    </div>
                </div>}
            </div>
            <div className={styles.ideal}>
                <div className={styles.comman} onClick={() => handleToggle('segment')}>
                    <div>
                        <h4>SEGMENT</h4>
                        <span>All</span>
                    </div>
                    <Icon icon="ep:arrow-down" />
                </div>


                {!isSegmentOpen && <div className={styles.dropDownContainer}>
                    <h4>Unselect all</h4>
                    <div className={styles.dropDownOptions}>
                        <h1>Coming soon!</h1>
                    </div>
                </div>}
            </div>
            <div className={styles.ideal}>
                <div className={styles.comman} onClick={() => handleToggle('suitableFor')}>
                    <div>
                        <h4>SUITABLE FOR</h4>
                        <span>All</span>
                    </div>
                    <Icon icon="ep:arrow-down" />
                </div>


                {!isSuitableForOpen && <div className={styles.dropDownContainer}>
                    <h4>Unselect all</h4>
                    <div className={styles.dropDownOptions}>
                        <h1>Coming soon!</h1>
                    </div>
                </div>}
            </div>
            <div className={styles.ideal}>
                <div className={styles.comman} onClick={() => handleToggle('rawMaterials')}>
                    <div>
                        <h4>RAW MATERIALS</h4>
                        <span>All</span>
                    </div>
                    <Icon icon="ep:arrow-down" />
                </div>


                {!isRawMaterialsOpen && <div className={styles.dropDownContainer}>
                    <h4>Unselect all</h4>
                    <div className={styles.dropDownOptions}>
                        <h1>Coming soon!</h1>
                    </div>
                </div>}
            </div>
            <div className={styles.ideal}>
                <div className={styles.comman} onClick={() => handleToggle('pattern')}>
                    <div>
                        <h4>PATTERN</h4>
                        <span>All</span>
                    </div>
                    <Icon icon="ep:arrow-down" />
                </div>


                {!isPatternOpen && <div className={styles.dropDownContainer}>
                    <h4>Unselect all</h4>
                    <div className={styles.dropDownOptions}>
                        <h1>Coming soon!</h1>
                    </div>
                </div>}
            </div>


        </div>
    )
}

export default Filter
