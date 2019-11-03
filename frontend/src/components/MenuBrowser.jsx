import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


class MenuBrowser extends React.Component {
    constructor(props) { 
        super(props)
        this.state = {

        }
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
                {/* Given menu list after aplicate filter */}
                <section >
                
                </section>
            
            </div>
            
        );

    }

}

function Example(){
}

export default MenuBrowser;