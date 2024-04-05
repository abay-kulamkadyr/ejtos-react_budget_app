import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    //updates the value of newBudget when the user 
    //changes the value of the input field
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
    <div className='alert alert-secondary'>
    <span>Budget: £{budget}</span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
    );
};
export default Budget;
