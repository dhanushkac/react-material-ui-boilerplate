import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

function AppBarComponent() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography type="headline" color="inherit">Sample App</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

AppBarComponent.propTypes = {
    title: PropTypes.string.isRequired,
};

export default AppBarComponent;
