import React from 'react';
import '../css/indexGrid.css';
import Grid from '@material-ui/core/Grid';
import Checked from '../resources/check-mark.png';
import RightSideImg from '../resources/hamburger.png';
import Login from './Login';

const CheckedIcon = () => (
  <span><img src={Checked} className="checkedIcon" alt="Check" /></span>
);

const Index = ({ t }) => (
  <Grid container className="wrapper">
    <Grid className="left" item xs={6}>
      <Login t={t} />
    </Grid>
    <Grid className="right" item xs={6}>
      <div className="textContainer">
        <p><CheckedIcon />{t('Make your menu order and we will send it to you by delivery')}</p>
        <p><CheckedIcon />{t('Search your menu by location, category or price you want')}</p>
        <p><CheckedIcon />{t('We have a wide variety of beer, you know')}</p>
      </div>
      <img className="hamburgerImg" src={RightSideImg} alt="hamburger" />
    </Grid>
  </Grid>
);

export default Index;
