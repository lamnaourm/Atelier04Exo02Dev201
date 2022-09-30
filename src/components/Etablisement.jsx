import React, { Component } from 'react';
import Stagiaire from './Stagiaire';

class Etablisement extends Component {

    constructor(props){
        super(props)

        this.state = {
            stags : this.props.stagiaires
        }
    }
    render() {
        return (
            <div className='etab'>
                <h1>Le nombre de stgiaires : {this.state.stags.length}</h1>
                {this.state.stags.map(item => 
                    <Stagiaire key={item.id} nom={item.nom}  age={item.age} filiere={item.filiere} image={item.image}/>
                    )}

                    <div className='buttons'>
                        <button onClick={() => this.setState({stags: []})}>Clear ALL</button>
                        <button onClick={() => this.setState({stags: this.props.stagiaires})}>ALL</button>
                        <button onClick={() => this.setState({stags: this.props.stagiaires.filter(item => item.filiere === 'TDI')})}>Filiere TDI</button>
                        <button onClick={() => this.setState({stags: this.props.stagiaires.filter(item => item.filiere === 'TRI')})}>Filiere TRI</button>
                    </div>
            </div>
        );
    }
}

export default Etablisement;
