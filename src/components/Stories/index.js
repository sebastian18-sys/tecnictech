import React from 'react'
import "./stories.css"
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

export default function Stories() {

    const styleCard = (image) => ({
        background: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%'
    })

  return (
    <div className='stories'>
        <div className="stories__title"> 
            <h2>Proyectos de mejora.</h2>
            <p>Confiable y Eficiente.</p>
        </div>
        <section className='stories__container'>
            <article className='stories__card'>
                <div style={styleCard("https://www.eactivo.es/wp-content/uploads/2020/02/cabecera_stock.png")}></div>
                <div className='stories__info'>
                    <WarehouseIcon />
                    <p>Sistema de gestión de almacenes</p>
                </div>
            </article>
            <article className='stories__card'>
                <div style={styleCard("https://i.ytimg.com/vi/m-gj-4mT2E8/maxresdefault.jpg")}></div>
                <div className='stories__info'>
                    <AttachMoneyIcon />
                    <p>Sistema de ventas</p>
                </div>
            </article>
            <article className='stories__card'>
                <div style={styleCard("https://i.ytimg.com/vi/2C_faqgFtjI/maxresdefault.jpg")}></div>
                <div className='stories__info'>
                    <PointOfSaleIcon />
                    <p>Sistema de facturación</p>
                </div>
            </article>
            <article className='stories__card'>
                <div style={styleCard("https://i.ytimg.com/vi/oTHtrjPJAJc/maxresdefault.jpg")}></div>
                <div className='stories__info'>
                    <DirectionsBusIcon />
                    <p>Sistema de transporte</p>
                </div>
            </article>
        </section>
    </div>
  )
}
