import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FacturaCard from '../Components/FacturaCard';
import axios from 'axios';

const FacturaDetails = (props) => {

    const { id } = props.match.params;
    const [selectedFactura, setSelectedFactura] = useState({});

    useEffect(() => {
        axios.get("http://localhost:4000/facturas/" + id).then(r => setSelectedFactura(r.data));
    }, [id]);

    return (
        <div className="FacturaDetails">
            <Link to="/" className="ui primary button"> <i className="fa fa-chevron-left i-text"></i> Regresar </Link>
            <h1>Detalles de la factura nº{id}:</h1>
            <FacturaCard factura={selectedFactura} />

        </div>
    )
}
export default FacturaDetails;