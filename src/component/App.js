import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../styles/style.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import RalewayWoff2 from '../fonts/lifecraft_font-webfont.woff2';
import AppRouter from '../routers/AppRouter';

const lifecraftregular = {
    fontFamily: 'lifecraftregular',
    fontStyle: 'normal',
    fontWeight: 400,
    src: `
      url(${RalewayWoff2}) format('woff2')
    `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
    typography: {
        fontFamily: 'lifecraftregular, Arial',
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [lifecraftregular],
            },
        },
    },
});

const App = () => {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="xl">
                    <Typography component="div" className="bg-greyWow" style={{ height: '100vh' }}>
                        <AppRouter />
                    </Typography>
                </Container>
            </ThemeProvider>

        </React.StrictMode>
    );
};

export default App;