import * as React from 'react';

export default class BillItem extends React.Component {
    /*
        {
            provider: string,
            date: string,
            price: number,
            payDate: string,
        }
    */

    shouldComponentUpdate(nextProps) {
        return nextProps.provider !== this.props.provider ||
            nextProps.date !== this.props.date ||
            nextProps.price !== this.props.price ||
            nextProps.payDate !== this.props.payDate;
    }

    render() {
        return (
            <div className="item">
                <span>Furnizor: <b>{this.props.provider}</b></span>
                <span>Data: {this.props.date}</span>
                <span>Pret: {this.props.price}RON</span>
                <span>Scadenta: {this.props.payTill}</span>
                <button onClick={() => this.props.addToCart(this.props.itemId)}>Add to cart</button>
            </div>
        )
    }
}