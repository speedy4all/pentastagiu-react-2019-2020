import React, { Component } from "react";
import { LocalContext } from "../../context";
import { ThemeContext } from "../../context";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Laptop extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.name !== this.props.name ||
      nextProps.description !== this.props.description ||
      nextProps.color !== this.props.color ||
      nextProps.price !== this.props.price ||
      nextProps.type !== this.props.type
    );
  }

  //static contextType = LocalContext;

  render() {
    const { name, description, color, price, addToCart } = this.props;

    return (
      <ThemeContext.Consumer>
        {themeValue => (
          <LocalContext.Consumer>
            {contextValue => (
              <Card style={{ maxWidth: "200px", margin: 10 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {description}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {color}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {price}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {contextValue.type}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => addToCart(this.props.itemId)}
                  >
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            )}
          </LocalContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Laptop;
