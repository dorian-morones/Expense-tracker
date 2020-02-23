import React, { useContext} from 'react'
import { GlobalContext } from "../context/GlobalState.js"

export const TransactionItem = ({ transactions }) => {

    const { deleteTransaction } = useContext(GlobalContext);

    let sign = transactions.amount < 0 ? "minus" : "plus";
    return (
        <li className={sign}>
            {transactions.text} <span>{transactions.amount}</span>
            <button className="delete-btn" onClick={(e) => deleteTransaction(transactions.id)}>x</button>
        </li>
    )
}
