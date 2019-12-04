import React from 'react'
import { Link} from 'react-router-dom';

class MainPageClient extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>un slider con boludeces</h1>
                <h3>Most request menus</h3>
                <button><Link to="/client/:idClient">Browse Menus</Link></button>
            </div>
        );
    }
}

export default MainPageClient;

