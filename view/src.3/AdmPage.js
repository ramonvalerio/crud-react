import React from "react";
import { Link } from 'react-router-dom';

export default class AdmPage extends React.Component{
    render(){
        return (
            <div>
                <h1>Olá AdmPage!</h1>

                <Link to="/">
                    <button>Ir para Home</button>
                </Link>
            </div>   
        );
    }
}