import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
const Currency = (props) => {
    const {dispatch, currency} = useContext(AppContext);

    const [newCurrency, setCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        const selected = event.target.value;
        setCurrency(selected);
        dispatch({type: 'CHG_CURRENCY', payload: selected});
    };
    return (
    <div className='alert alert-secondary'>
        <span>Currency ({currency}) </span>
        <select className="form-select" onChange={handleCurrencyChange} value={newCurrency}>
            <option value="$" name="dollars">Dollar ($)</option>
            <option value="£" name="pounds">Pound (£)</option>
            <option value="€" name="euros">Euro (€)</option>
            <option value="₹" name="rupees">Rupee (₹)</option>
        </select>
    </div>
    );
};

export default Currency;