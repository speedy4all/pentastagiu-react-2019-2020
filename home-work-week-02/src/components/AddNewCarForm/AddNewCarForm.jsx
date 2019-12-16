import React from 'react';

import Input from './Input/Input.jsx';
import Select from './Select/Select.jsx';
import Button from './Button/Button.jsx';


const addNewCarForm = props => {

    const colors = [
        {id: 0, name: 'Blue', class: 'primary'},
        {id: 1, name: 'Yellow', class: 'warning'},
        {id: 2, name: 'Green', class: 'success'},
        {id: 3, name: 'Red', class: 'danger'},
        {id: 4, name: 'Black', class: 'dark'},
        {id: 5, name: 'Gray', class: 'secondary'},
        {id: 6, name: 'Light Blue', class: 'info'}
    ];
    
    return (
        <form onSubmit={ props.submit }>
            <Input
                label="Mark"
                type="text"
                placeholder="Mark"
                inputValue={props.values.mark}
                change={ (event) => props.change(event, 'mark') }
            />
            <Input
                label="Model"
                type="text"
                placeholder="Model"
                inputValue={props.values.model}
                change={ (event) => props.change(event, 'model') }
            />
            <Input
                label="Engine"
                type="text"
                placeholder="Engine"
                inputValue={props.values.engine}
                change={ (event) => props.change(event, 'engine') }
            />
            <Select
                label="Color"
                options={colors}
                change={ (event) => props.change(event, 'color') }
            />
            <Input
                label="Price"
                type="number"
                placeholder="Price"
                inputValue={props.values.price}
                change={ (event) => props.change(event, 'price') }
            />
            <hr />
            <Button
                type="button"
                cssClass="btn btn-outline-danger"
                inlineCss={{float: 'right'}}
                clicked={props.clicked}
            >CANCEL</Button>
            <Button
                type="submit"
                cssClass="btn btn-outline-primary"
            >ADD NEW CAR</Button>
        </form>
    );
}

export default addNewCarForm;