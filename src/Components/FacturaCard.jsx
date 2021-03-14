import React from 'react';

const FacturaCard = (props) => {

    const facturaData = props.factura;

    const [dia, mes, año, hora] = [
        String(facturaData.fecha).substring(8, 10),
        String(facturaData.fecha).substring(5, 7),
        String(facturaData.fecha).substring(0, 4),
        String(facturaData.fecha).substring(11, 16)
    ];

    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <div className="header">
                        <i className="fa fa-briefcase i-text"></i> {facturaData.cliente}
                    </div>
                    <div className="meta">
                        Importe total: {Number(facturaData.importe).toFixed(2)}€
                    </div>
                    <div className="description">
                        Pedido realizado el {dia}/{mes}/{año} a las {hora}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FacturaCard;