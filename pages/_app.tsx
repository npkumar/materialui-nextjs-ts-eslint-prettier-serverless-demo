import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Container, Grid } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import TimelineIcon from '@material-ui/icons/Timeline';
import Link from 'next/link';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
            marginLeft: drawerWidth,
        },
    }),
);

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;
    const classes = useStyles();

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            Permanent drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <div className={classes.toolbar}>
                        <Grid container alignContent="center" className={classes.toolbar}>
                            <Grid item xs={12}>
                                <Typography variant="h5" align="center" component="div">
                                    KAKAKU
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <Divider />
                    <List>
                        <Link href="/">
                            <ListItem button key="Home">
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                        </Link>
                        <Link href="/stats">
                            <ListItem button key="Stats">
                                <ListItemIcon>
                                    <EqualizerIcon />
                                </ListItemIcon>
                                <ListItemText primary="Stats" />
                            </ListItem>
                        </Link>
                        <Link href="/revenue">
                            <ListItem button key="Future Revenue">
                                <ListItemIcon>
                                    <TimelineIcon />
                                </ListItemIcon>
                                <ListItemText primary="Future Revenue" />
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>

                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Container>
                        <Component {...pageProps} />
                    </Container>
                </main>
            </ThemeProvider>
        </React.Fragment>
    );
}
