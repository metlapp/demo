import { createMuiTheme } from '@material-ui/core/styles';
import {cyan, green} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: cyan[500],
        },
    },
});

export default theme;

