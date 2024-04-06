import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
const BUDGET_MAX = 20000;
const Budget = () => {
    const {budget, dispatch, expenses, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0) 
    //updates the value of newBudget when the user 
    //changes the value of the input field
    const handleBudgetChange = (event) => {
        const newBudgetValue = event.target.value;
        if(newBudgetValue > BUDGET_MAX) {
            setNewBudget(BUDGET_MAX);
            dispatch({type: 'SET_BUDGET', payload: BUDGET_MAX});
            alert("The budget cannot exceed 20000");
            return; 
        } else if(newBudgetValue < totalExpenses) {
            setNewBudget(totalExpenses);
            dispatch({type: 'SET_BUDGET', payload: totalExpenses});
            alert("You cannot reduce the budget value lower than the spending");
            return; 
        }
        setNewBudget(newBudgetValue);
        dispatch({type: 'SET_BUDGET', payload: newBudgetValue});
    }
    return (
    <div className='alert alert-secondary'>
    <span>Budget: {currency}{budget}</span>
    <input type="number" step="10" value={newBudget} onChange = {handleBudgetChange}></input>
    </div>
    );
};
export default Budget;
