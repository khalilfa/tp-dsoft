import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';
import '../css/client.css';
import pizzaIcon from '../resources/pizza-icon.png';
import beerIcon from '../resources/beer-icon.png';
import empanadaIcon from '../resources/empanada-icon.png';
import hamburguerIcon from '../resources/hamburguer-icon.png';
import icecreamIcon from '../resources/icecream-icon.png';
import sushiIcon from '../resources/sushi-vegan-icon.png';
import veganIcon from '../resources/fruit.png';

const useStyles = makeStyles({
    select: {
        
    },
    img: {
        width: 30,
        marginLeft: 5
    }
})

export default function FilterByCategory( {t,filterByCategory}){

    const classes = useStyles();
    const [category,setCategory] = React.useState('Vegan');
                
    const handleChange = event =>{
        setCategory(event.target.value);
        filterByCategory();
    }

    return (
        <FormControl className={classes.select}>
            <InputLabel>{t("Categories")}</InputLabel>
            <Select
                value={category}
                onChange={(e) => handleChange(e)}
            >
                    <MenuItem value="Vegan">{t("Vegan")}<img className={classes.img} src={veganIcon} /></MenuItem>
                    <MenuItem value="Sushi">Sushi<img className={classes.img} src={sushiIcon} /></MenuItem>
                    <MenuItem value="Pizza">Pizza<img className={classes.img} src={pizzaIcon} /></MenuItem>
                    <MenuItem value="Empanada">Empanada<img className={classes.img} src={empanadaIcon} /></MenuItem>
                    <MenuItem value="Ice Cream">{t("Ice cream")}<img className={classes.img} src={icecreamIcon} /></MenuItem>
                    <MenuItem value="Beer">{t("Beer")}<img className={classes.img} src={beerIcon} /></MenuItem>
                    <MenuItem value="Hambuerguer">{t("Hamburguer")}<img className={classes.img} src={hamburguerIcon} /></MenuItem>
            </Select>
        </FormControl>
    );
}