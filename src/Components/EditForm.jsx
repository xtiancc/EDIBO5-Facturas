import React from 'react';
import axios from 'axios';

const EditForm = (props) => {

    const data = props.factura;

    const editData = () => {

        const customer = document.getElementById('customer').value;
        const total = document.getElementById('total').value;
        const buyDate = document.getElementById('buyDate').value;

        const newFactura = {
            id: data.id,
            cliente: customer,
            importe: total,
            fecha: buyDate
        };

        axios.put("http://localhost:4000/facturas/" + newFactura.id, newFactura).then(() => {
            alert("Factura modificada con éxito.");
        });

    }

    return (

        <div className="ui form">

            <div className='field'>
                <label>Número de factura</label>
                <input type="text" value={data.id} disabled />
            </div>
            <div className="field">
                <label>Nombre del cliente</label>
                <input type="text" id="customer" defaultValue={data.cliente} placeholder="Indique el nombre de la empresa" required />
            </div>
            <div className="field">
                <label>Importe total</label>
                <input type="number" id="total" defaultValue={data.importe} placeholder="Cantidad exacta a pagar/pagada (En euros)" required />
            </div>
            <div className="field">
                <label>Fecha de pedido</label>
                <input type="datetime-local" id="buyDate" defaultValue={data.fecha} required />
            </div>

            <button className="ui button" id="sendButton" onClick={editData}> <i className="fa fa-floppy-o i-text"></i> Guardar </button>

        </div>

    )
}
export default EditForm;