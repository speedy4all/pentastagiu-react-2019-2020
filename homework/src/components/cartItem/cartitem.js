import React, { Component } from "react";
import { ThemeContext } from "../../context";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Chip from "@material-ui/core/Chip";

class CartItem extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.name !== this.props.name ||
      nextProps.description !== this.props.description ||
      nextProps.color !== this.props.color ||
      nextProps.price !== this.props.price ||
      (nextProps.count && nextProps.count !== this.props.count) ||
      nextProps.type !== this.props.type ||
      nextProps.theme !== this.props.theme
    );
  }
  render() {
    //console.log(this.props);
    const { name, description, color, price, itemId, count, type } = this.props;

    return (
      <ThemeContext.Consumer>
        {themeValue => (
          <Card
            style={{
              margin: 10,
              maxWidth: 200
            }}
          >
            <CardActionArea>
              <Chip
                size="small"
                label="X"
                color="secondary"
                onClick={() => this.props.removeFromCart(itemId)}
              ></Chip>

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {color}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {type}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                variant="outlined"
                onClick={() => this.props.add(itemId)}
              >
                +
              </Button>
              <Badge badgeContent={count} color="secondary"></Badge>
              <Button
                size="small"
                color="primary"
                variant="outlined"
                onClick={() => this.props.decreaseCount(itemId)}
              >
                -
              </Button>
            </CardActions>
          </Card>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default CartItem;
