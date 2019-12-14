import React from 'react';
import '../css/provider.css';
import { makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Popup from 'reactjs-popup';
import editButton from '../resources/edit-button.jpg';
import deleteButton from '../resources/delete-button.png';
import CreateMenu from './CreateMenu';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  row: {
    width: '25%',
  },
});

const ServicesList = ({ menuList, deleteMenu, updateMenu, t }) => {
  const classes = useStyles();
  const list = menuList
    ? (
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.row}>{t('Name')}:</TableCell>
              <TableCell className={classes.row}>{t('Price')}:</TableCell>
              <TableCell className={classes.row}>{t('Max')}:</TableCell>
              <TableCell className={classes.row}>{t('Options')}:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {menuList.map((menu) => (
              <TableRow key={menu.name}>
                <TableCell component="th" scope="name">{menu.name}</TableCell>
                <TableCell>{menu.price}</TableCell>
                <TableCell>{menu.maxSales}</TableCell>
                <TableCell>
                  <div className="menu-column-value col-sm-3">
                    <input
                      type="image"
                      className="button"
                      src={deleteButton}
                      alt="delete button"
                      onClick={() => deleteMenu(menu.id)}
                    />
                    <Popup
                      modal
                      trigger={(
                        <input type="image" className="button" src={editButton} alt="edit button" />
                        )}
                    >
                      {(close) => (
                        <CreateMenu
                          t={t}
                          close={close}
                          idMenu={menu.id}
                          updateMenu={updateMenu}
                          {...menu}
                        />
                      )}
                    </Popup>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
    : <h1>{t('Loading')}...</h1>;
  return list;
};

export default ServicesList;
