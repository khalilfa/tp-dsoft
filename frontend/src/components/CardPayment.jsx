import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 80,
  },
}));

export default function CardPayment() {
  const classes = useStyles();

  return (
        <div>
            <h2>Números tarjeta de crédito</h2>
            <form className={classes.container} noValidate autoComplete="off">
                <div>
                    <TextField
                    id="standard-basic"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                    id="filled-standard-basic"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    required
                    />
                </div>
                <div>
                    <TextField
                    id="outlined-basic"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    required
                    />
                </div>
                <div>
                    <TextField
                    id="outlined-basic"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    />
                </div>
                </form>
        </div>
  );
}