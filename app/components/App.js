import React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import { footer } from '../styles/footer.scss';
import Routes from '../routes';
import AppBarComponent from './AppBar';

const App = () =>
    <div>
        <AppBarComponent title = "FLAD - Framework for Linguistic Application Development" />
        <Grid container spacing={24}>
            <Grid item xs={2} />
            <Grid item xs={8}>
                { Routes }
            </Grid>
            <Grid item xs={2} />
        </Grid>

        <footer className={footer}>
            <Link to="/">Dashboard</Link>
            <Link to="/about">About</Link>
            <Link to="/settings">Settings</Link>
        </footer>
    </div>;

export default App;
