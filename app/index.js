import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { blue, red, pink } from 'material-ui/colors';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

const theme = createMuiTheme({
    palette: createPalette({
        primary: blue,
        accent: pink,
        error: red,
        type: 'light'
    })
});

render(
    <AppContainer>
        <MuiThemeProvider theme={theme}>
          <Root store={store} history={history} />
        </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const newConfigureStore = require('./store/configureStore');
        const newStore = newConfigureStore.configureStore();
        const newHistory = newConfigureStore.history;
        const NewRoot = require('./containers/Root').default;
        render(
            <AppContainer>
                <MuiThemeProvider theme={theme}>
                    <NewRoot store={newStore} history={newHistory} />
                </MuiThemeProvider>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
