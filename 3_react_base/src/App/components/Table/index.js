import React, { Component } from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'

import styles from './Table.module.css'

class Table extends Component {
    render() {
        return (
            <table className={ [styles.table, styles.tableProducts].join(" ") }>
                <TableHead />
                <TableBody />
            </table>
        )
    }
}

export default Table