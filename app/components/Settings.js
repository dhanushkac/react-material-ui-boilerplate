import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const Settings = () =>
    <div>
        Hey! Thanks for using this page!
        <div>
            <TextField label="With placeholder" placeholder="Placeholder"/>
            <Button color="primary" raised>Default</Button>
        </div>
    </div>;


export default Settings;
