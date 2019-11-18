import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 20,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 80,
    height: 100,
  },
  secNumbersContainer: {
    width: '30%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  right: {
    width: '50%',
    float: 'left',

  },
  left: {
    width: '30%',
    float: 'left',
    marginTop: 20,
  },
  clear: {
    clear: 'both',
  },

}));

export default function CardPayment() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* Card numbers section */}

      <h5>Números tarjeta de crédito/débito</h5>
      <div>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="filled-standard-basic"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            required
          />

          <TextField
            id="outlined-basic"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            required
          />

          <TextField
            id="outlined-basic"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </form>
      </div>

      {/* Security numbers section */}
      <div className={classes.secNumbersContainer}>
        <h5 className={classes.left}>Código de seguridad</h5>
        <form noValidate autoComplete="off">
          <div className={classes.right}>
            <TextField
              id="outlined-basic"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </div>
        </form>
        <div className={classes.clear} />
      </div>

      <Button>Cargar</Button>
    </div>
  );
}
