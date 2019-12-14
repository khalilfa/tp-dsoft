import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  button: {
    background: 'rgba(61, 61, 61, 0.7)',
    color: 'white',
    marginBottom: '5px',
    '&:hover': {
      background: 'rgba(103, 131, 78, 0.7)',
    },
    '&:disabled': {
      color: 'gray',
    },
  },
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
    <div className="row">
      <div className="col-md-2 offset-md-5 col-4 offset-4">
        <ButtonGroup>
          <Button
            className={classes.button}
            type="button"
            disabled={page === 0}
            onClick={(e) => changePage(e, (page - 1))}
          >
            {'<'}
          </Button>

          <Button className={classes.button} disabled type="button">{page + 1}</Button>
          <Button
            className={classes.button}
            type="button"
            disabled={(totalPages - 1) === page}
            onClick={(e) => changePage(e, (page + 1))}
          >
            {'>'}
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Pagination;
