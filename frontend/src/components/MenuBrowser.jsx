import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ListGroup from 'react-bootstrap/ListGroup';
import RadioButton from './RadioButtons.jsx';


class MenuBrowser extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            menues: [],
            isLoaded: false,
            descrip1: "Min",
            descrip2: "Max",
        };
    }

    componentDidMount(){
        // json mock 
        fetch('http://www.mocky.io/v2/5dc21b1b2f000065004bde52')
            .then( res => res.json())
            .then( json => {
                this.setState({
                    isLoaded: true,
                    menues: json,
                })
            });
    }

    renderButtonsMinMax(d1,d2){
        return (
            <RadioButton descrip1={d1} descrip2={d2}/>
        );
    }

    render(){
        return (
            <div>
                <h1>Buscador de Menues</h1>
                <h2>Buscar por:</h2>
                {/* Options to filter menues */}
                <section>

                    <p>Nombre</p>
                    <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput"
                    />

                    {/* Localidades */}
                    <DropdownButton id="dropdown-basic-button" title="Localidad">
                        <Dropdown.Item href="#/action-1">Bernal </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Bera</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Quil mes</Dropdown.Item>
                    </DropdownButton>

                    {/* Categorias */}
                    <DropdownButton id="dropdown-basic-button" title="Categoria">
                        <Dropdown.Item href="#/action-1">Pizza </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Helado</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Quil mes</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Sushi</Dropdown.Item>
                    </DropdownButton>

                    <Button variant="secondary" disbled>Buscar</Button>
                </section>
            
                <ListGroup>
                    
                        {this.state.menues.map( menu => (
                            <ListGroup.Item key={menu.id}>
                                {menu.name}|
                                {menu.price}| 
                                {menu.calification} 
                            </ListGroup.Item>
                        ))}
                </ListGroup>

                {/* Ordenar por */} 
                <section>
                    <h3>Ordenar por:</h3>
                    <p>Precio</p>
                    {this.renderButtonsMinMax("Min","Max")}
                    {this.renderButtonsMinMax("Mejor","Peor")}
                    <p>Calificacion</p>
                    <RadioButton/>
                </section>
            </div>
            
        );

    }

}

function Example(){
}

export default MenuBrowser;