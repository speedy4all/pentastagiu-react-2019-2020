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
                <span>Titlu: <b>{this.props.movieTitle}</b></span>
                <span>Data: {this.props.date}</span>
                <span>Pret: {this.props.price}RON</span>
                <button onClick={() => this.props.addToCart(this.props.itemId)}>Add to cart</button>
            </div>
        )
    }
}