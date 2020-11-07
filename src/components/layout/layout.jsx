import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from '../header/header';
import Footer from '../footer/footer';
import { theme, useStyle } from '../../assets/styles/layoutStyles';

export default function Layout(props) {
  const { children } = props;
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/> <Header/>
      <div className={classes.root}>
        <Paper className={classes.paper}>{children}</Paper>
      </div>
      <Footer />
    </ThemeProvider>
  );
}