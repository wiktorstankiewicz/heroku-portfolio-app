import React from 'react';
import styles from "./SiteUnderConstruction.module.css"

function SiteUnderConstruction(props) {
    return (
        <div className={styles.container}>
            <article>

            This website is under construction
            
            </article>
            <footer>
                <div className={styles.footerContent}>
                    <span>Created by Wiktor Stankiewicz</span>
                    <span>Contact me at wiktorstankiewicz24@gmail.com</span>
                </div>
                
            </footer>
        </div>
    );
}

export default SiteUnderConstruction;