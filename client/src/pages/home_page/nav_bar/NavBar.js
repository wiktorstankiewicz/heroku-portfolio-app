import React from 'react';
import styles from "./NavBar.module.css"
function NavBar(props) {
    return (
        <div className={styles.container}>
            <div className={styles.nameAndSurname}> <span>Wiktor Stankiewicz</span></div>
            <div className={styles.navBarButton + " " + styles.push}><span>Portfolio</span></div>
            <div className={styles.navBarButton}><span>Kontakt</span></div>
            <div className={styles.navBarButton}><span>O mnie</span></div>
            <div className={styles.navBarButton}><span>Galeria</span></div>
            <div className ={styles.navBarButton}> <span>text</span> </div>
        </div>
    );
}

export default NavBar;