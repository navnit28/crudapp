import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
const useStyle = makeStyles({
    header: {
        background: '#06f1e6',
    },
    tabs: {
        color : '#111111',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20,
    }
});

const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="./" exact>
                    Home Page
                </NavLink>
                <NavLink className={classes.tabs} to="./all" exact>
                    All users
                </NavLink>
                <NavLink className={classes.tabs} to="./add" exact>
                    Add user
                </NavLink>
            </Toolbar>
        </AppBar>
    );
};
export default NavBar;
