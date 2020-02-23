import React, { Fragment, useState, useContext} from 'react'
import { GlobalContext } from "../context/GlobalState.js"

export const AddTransaction = () => {

    const [ text, setText] = useState('');
    const [ type, setType] = useState('');
    const [ amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);
    //     Math.abs(num) => Always positive
// -Math.abs(num) => Always negative

    const onSubmit = e => {

        let amountType = type === "income" ? Math.abs(amount) : -Math.abs(amount)

        e.preventDefault();
        const newTransaction ={
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: amountType
        }
        addTransaction(newTransaction);
    }

    return (
        <Fragment>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={onSubmit}>
                <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Transaction Name..." />
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="" defaultValue disabled hidden>Choose Transaction Type</option>
                    <option value="income">Income</option>
                    <option value="exponse">Expense</option>
                </select>
                <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                <button className="btn">Add transaction</button>
            </form>
        </Fragment>
    )
}
