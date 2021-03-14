import React from 'react';
import { Link } from 'react-router-dom';
import InsertForm from '../Components/InsertForm';

const FacturaForm = () => {

    return (
        <div className="FacturaForm">
            <Link to="/" className="ui primary button"> <i className="fa fa-chevron-left i-text"></i> Regresar </Link>
            <h1>Insertar nuevo registro</h1>
            <InsertForm />
        </div>
    )
}
export default FacturaForm;