import React from 'react'

import styles from './HeaderUser.module.css'

export default function HeaderUser() {
    return (
        <div className={styles.container}>
          <div className={styles.name}>Ф ДАЛИМОВА В. В.</div>
          <div className={styles.bonuses}>Кошелек: 0.00</div>
        </div>
    )
}
