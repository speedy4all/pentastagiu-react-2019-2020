import React from 'react';


const select = ({ changeCurrency }) => {

    return (
        <div className="form-group">
            <select className="form-control" onChange={ changeCurrency }>
                <option value="€">Choose currency:</option>
                <option value="€">Euro</option>
                <option value="$">Dolar</option>
                <option value="₤">Lira</option>
                <option value="₿">Bitcoin</option>
            </select>
        </div>
    );
}

export default select;