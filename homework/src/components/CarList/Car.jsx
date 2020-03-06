import React from 'react';
import Col from 'react-bootstrap/Col';
import { LocaleContext, ThemeContext } from '../../context';
import Hover from '../Hover';

export class Car extends React.PureComponent {

    // varianta in care folosesc un singur context, iar valoarea contextului in cazul de fata o accesez cu: this.context.language

    /*
    static contextType = LocaleContext;
    */

    // varianta in care nu folosim React.PureComponent

    /*
    shouldComponentUpdate(nextProps) {
        return nextProps.brand !== this.props.brand ||
        nextProps.model !== this.props.model ||
        nextProps.cm3 !== this.props.cm3 ||
        nextProps.color !== this.props.color ||
        nextProps.description !== this.props.description ||
        nextProps.price !== this.props.price
    }
    */

    // utilizarea componentei Hover, varianta in care folosim children 

    
render() {
    const { brand, model, cm3, color, description, price, addToCart, carId } = this.props;

        return(
            <ThemeContext.Consumer>
                { ({style}) => (            
                    <LocaleContext.Consumer>
                    {({language}) => (            
                        <Col sm={6} lg={4}>
                        <Hover >
                                {isHover => {
                                return(
                                    <div className={`car-container ${style} ${isHover ? "hover" : ""}`}>
                                        <span className="brand-model">{brand}</span>
                                        <span className="brand-model">{model}</span>
                                        <div>Caracteristici:</div>
                                        <div>Motorizare: {cm3} cm3 </div>
                                        <div>Culoare: {color} </div>
                                        <div>Descriere: {description ? description : "Nu exista descriere disponibila."}</div>
                                        <div>Pret: {price} euro</div>
                                        <div>Language: {language}</div>
                                        <div className="clearfix">
                                            <button className="btn btn-primary float-right" onClick={ addToCart.bind(this, carId)} >Add to cart</button>
                                        </div>
                                    </div>
                                );
                            }} 
                        </Hover>
                        </Col>
                    )}
                    </LocaleContext.Consumer>
                )}
            </ThemeContext.Consumer>
        );
    }
}
