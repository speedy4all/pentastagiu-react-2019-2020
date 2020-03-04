import { createMuiTheme } from "@material-ui/core";
import { red, lightGreen, indigo } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette:{
        default: {
            main: indigo[500]
        },
        primary: {
            main: lightGreen[500]
        },
        secondary: {
            main: red[900]
        },
    }
}

);

export default theme;
