import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Table = () => {
    const [dataTable, setDataTable] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/facturas").then(r => setDataTable([...r.data]));
    }, [])

    const deleteFactura = (id) => {

        window.confirm("Recuerde: El borrado es irreversible, ¿Desea continuar?") && axios.delete(`http://localhost:4000/facturas/${id}`).then(setDataTable(dataTable.filter(i => i.id !== id)))
    }

    return (
        <table className="ui celled table">
            <thead>
                <tr><th>ID Factura</th>
                    <th>Cliente</th>
                    <th>Importe</th>
                    <th>Fecha</th>
                    <th colSpan="2">Acciones</th>
                </tr>
            </thead>
            <tbody>

                {
                    dataTable.length === 0 &&
                    <tr>
                        <td colSpan="6" className="ui center aligned">
                            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                        </td>
                    </tr>
                }

                {
                    dataTable.map(
                        i =>
                            <tr key={i.id}>
                                <td className="ui center aligned">
                                    <Link to={`/factura/${i.id}`} className="ui green icon button">{i.id}</Link>
                                </td>
                                <td>{i.cliente}</td>
                                <td>{Number(i.importe).toFixed(2)}€</td>
                                <td>
                                    {String(i.fecha).substring(8, 10)}/
                                    {String(i.fecha).substring(5, 7)}/
                                    {String(i.fecha).substring(0, 4)}
                                </td>
                                <td className="ui center aligned">
                                    <Link to={`/editar/${i.id}`} className="ui inverted blue icon button">  <i className="fa fa-pencil-square-o"></i> </Link>
                                </td>
                                <td className="ui center aligned">
                                    <button className="ui inverted red icon button" onClick={() => deleteFactura(i.id)}> <i className="fa fa-trash"></i> </button>
                                </td>

                            </tr>
                    )
                }

            </tbody>


        </table>

    )
}
export default Table;