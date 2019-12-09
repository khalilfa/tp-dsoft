import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
  button: {
    backgroundColor: "#fff",
  } 
});

const Pagination = ({ totalPages, page, getMenus }) => {
  const indexes = [];
  const classes = useStyles();

  for (let i = 0; i < totalPages; i += 1) {
    indexes.push(i);
  }

  const changePage = (ev, element) => {
    ev.preventDefault();
    getMenus(element);
  };


  return (
    
      <ButtonGroup className={classes.button}>
          <Button type="button" disabled={page === 0} onClick={(e) => changePage(e, (page - 1))}>{'<'}</Button>
          <Button type="button">{page + 1}</Button>
          <Button type="button" disabled={(totalPages - 1) === page} onClick={(e) => changePage(e, (page + 1))}>{'>'}</Button>
      </ButtonGroup>
  );
};

export default Pagination;
