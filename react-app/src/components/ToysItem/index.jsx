import React from 'react';
import {LocaleContext, ThemeContext, AppContext} from '../../context';
import Hover from '../Hover';
import { useContext } from 'react';
import { Card, CardHeader, CardContent, Button, CardActions, CardMedia, makeStyles} from '@material-ui/core';

export default function Toys(props) {

const {addToCart} = useContext(AppContext);
const {style} = useContext(ThemeContext);
const {language} = useContext(LocaleContext);
    
const useStyles = makeStyles({
    root: {
      width: 256,
    },
    media: {
      height: 100,
    },
  });

  const classes = useStyles();


        return (
            <Hover 
                render={isHover => (


                <div className={`toys ${style} ${isHover ? "hover" : ""}`}>   
                   <Card>
                     <CardHeader 
                        title= {props.name}
                        subheader= {props.price} 
                     />
                     <CardMedia className={classes.media} image="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/d7/44/98/d74498d6-ef9e-6560-e5b7-1da2f35ca0a3/source/256x256bb.jpg" title="toys" />

                     <CardContent>
                        <span>{props.id}. </span>
                        <span>Varsta: {props.age} ani | </span>
                        <span>Culoare: {props.culoare ? props.culoare : 'Nu exista'} </span>
                        <span>Language: {language} | </span>
                     </CardContent>
                     <CardActions>
                        <Button color="default" variant="contained" onClick={() => addToCart(props.id)}>Add to Cart</Button>
                     </CardActions>
                   </Card>
                    </div> 

                )}
            />
        );
 }
