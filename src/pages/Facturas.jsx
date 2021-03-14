import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../Components/Table';

const Facturas = () => {
    return (
        <div className="Facturas">
            <h1>Facturas</h1>
            <Table />
            <Link to="/nuevo" className="ui primary button"> <i className="fa fa-plus i-text"></i> Agregar nueva </Link>
        </div>
    )
}
export default Facturas;