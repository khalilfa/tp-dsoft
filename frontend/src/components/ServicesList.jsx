import React from 'react';
import MenuEditRow from './MenuEditRow';
import '../css/provider.css';
import { makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ServicesList = ({ menuList, deleteMenu, updateMenu, t }) => {
  const list = menuList
    ? (
      <div className="menus-container col">
        <div className="menu-edit-column row">
          <div className="menu-column-title col-sm-3">{t('Name')}:</div>
          <div className="menu-column-title col-sm-3">{t('Price')}:</div>
          <div className="menu-column-title col-sm-3">{t('Max')}:</div>
          <div className="menu-column-title col-sm-3">{t('Options')}:</div>
        </div>
        {menuList.map((individualMenu, key) => (
          <MenuEditRow
            t={t}
            individualMenu={individualMenu}
            key={key}
            keyId={key}
            deleteMenu={deleteMenu}
            updateMenu={updateMenu}
          />
        ))}
      </div>
    )
    : <h1>{t('Loading')}...</h1>;
  return list;
};


export  {ServicesList};

const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
})

const ServicesListBis =({menuList, deleteMenu, updateMenu, t }) =>{
  const classes = useStyles();
  const list = menuList
  ? (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{t('Name')}:</TableCell>
            <TableCell align="right">{t('Price')}:</TableCell>
            <TableCell align="right">{t('Max')}:</TableCell>
            <TableCell align="right">{t('Options')}:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menuList.map(menu => (
            <TableRow>
              <TableCell>{menu.name}</TableCell>
              <TableCell>{menu.price}</TableCell>
              <TableCell>{menu.maxSales}</TableCell>
              <TableCell>foo</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper> 
    ):
      <h1>{t('Loading')}...</h1>;
    return list;
}

export {ServicesListBis};
