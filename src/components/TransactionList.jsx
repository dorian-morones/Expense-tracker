import React, { Fragment, useContext} from 'react'
import { TransactionItem } from './TransactionItem.jsx'
import { GlobalContext } from "../context/GlobalState.js"

export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext)

    return (
        <Fragment>
            <h3>History</h3>
            <ul id="list" className="list">
                { transactions.map( transactions => (
                    <TransactionItem key={transactions.id} transactions={transactions}/>
                ))}
                 
            </ul>
        </Fragment>
    )
}
