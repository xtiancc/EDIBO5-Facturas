import React, { useState, useEffect } from 'react';
import EditForm from '../Components/EditForm';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FacturaEdit = (props) => {

    const { id } = props.match.params;
    const [factura, setFactura] = useState({});

    useEffect(() => {
        axios.get("http://localhost:4000/facturas/" + id).then(r => setFactura(r.data));
    }, [id]);

    return (
        <div className="FacturaEdit">
            <Link to="/" className="ui primary button"> <i className="fa fa-chevron-left i-text"></i> Regresar </Link>
            <h1>Editar registro existente</h1>
            <EditForm factura={factura} />
        </div>
    )
}
export default FacturaEdit;