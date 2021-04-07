import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 5
    }
}));

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div >
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} />
                    <Button color="inherit" onClick={() => history.push('/')}>Home</Button>
                    <Button color="inherit" onClick={() => history.push('/items')}>Items</Button>
                    <Button color="inherit" onClick={() => history.push('/admin')}>Admin</Button>
                    <Button color="inherit" onClick={() => history.push('/liens')}>Liens</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;