import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InsertForm = () => {

    // ¿Utilidad de Hook?
    const [dataForm, setDataForm] = useState({});

    // Recupera el último ID
    useEffect(() => {
        axios.get("http://localhost:4000/facturas").then(r => setDataForm({ id: r.data[r.data.length - 1].id + 1 }));
    }, []);

    const addFactura = () => {

        const customer = document.getElementById('customer').value;
        const total = document.getElementById('total').value;
        const buyDate = document.getElementById('buyDate').value;

        const newFactura = {
            id: dataForm.id,
            cliente: customer,
            importe: total,
            fecha: buyDate
        };

        axios.post("http://localhost:4000/facturas", newFactura).then(() => {
            alert("Factura creada con éxito.");
            document.getElementById('sendButton').disabled = true;
        });

    }

    return (
            <div className="ui form">
                {dataForm.id &&
                    <div className='field'>
                        <label>Número de factura</label>
                        <input type="text" value={dataForm.id} disabled />
                    </div>

                }
                <div className="field">
                    <label>Nombre del cliente</label>
                    <input type="text" id="customer" placeholder="Indique el nombre de la empresa" required />
                </div>
                <div className="field">
                    <label>Importe total</label>
                    <input type="number" id="total" placeholder="Cantidad exacta a pagar/pagada (En euros)" required />
                </div>
                <div className="field">
                    <label>Fecha de pedido</label>
                    <input type="datetime-local" id="buyDate" required />
                </div>

                <button className="ui button" id="sendButton" onClick={addFactura}> <i className="fa fa-floppy-o i-text"></i> Guardar </button>

            </div>
    )
}

export default InsertForm