import React, { Component } from 'react'
import TV from './TV/TV';

export default class TVs extends Component {

    state = {
        TVs: [
            { id: 0, brand: "Samsung", model: "50NU7092", resolution: "3840 x 2160", price: 2999 },
            { id: 1, brand: "LG", model: "A8", resolution:"3840 x 2160", price: 2499 },
            { id: 2, brand: "Sony", model: "", resolution:"	3840 x 2160", price: 5999 },
            { id: 3, brand: "Philips", model: "55PUS7304/12", resolution: "3840 x 2160" , price: 3449 }
        ]
    }

    renderTVs = () => {
        return this.state.TVs.map(tv => <TV
            key={tv.id}
            brand={tv.brand}
            model={tv.model}
            resolution={tv.resolution}
            price={tv.price} />)
    }

    render() {
        return (
            <div className="TV-item">
                {this.renderTVs()}
            </div>
        );
    }
}
