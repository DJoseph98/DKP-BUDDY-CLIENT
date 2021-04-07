import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import { Link }  from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div >
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title}/>
                    <Link to="/">Home</Link>
                    <Link to="/items">Items</Link>
                    <Link to="/admin">Admin</Link>
                    <Link to="/liens">Liens</Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;