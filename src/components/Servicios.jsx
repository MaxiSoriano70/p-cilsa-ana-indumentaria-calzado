import style from '../css/Servicios.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faBoxesPacking, faTruck } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';

const Servicios = () => {
    return (
        <section className={style.contenedorServicios}>
            <div className={style.servicio1}>
                <div className={style.servicio}>
                    <FontAwesomeIcon className={style.iconoServicio} icon={faTruckFast} />
                    <p className={style.txtServicio}>Entrega inmediata</p>
                </div>
                <div className={style.servicio}>
                    <FontAwesomeIcon className={style.iconoServicio} icon={faBoxesPacking} />
                    <p className={style.txtServicio}>Venta mayorista y minorista</p>
                </div>
            </div>
            <div className={style.servicio2}>
                <div className={style.servicio}>
                    <FontAwesomeIcon className={style.iconoServicio} icon={faCreditCard} />
                    <p className={style.txtServicio}>Todos los medios de pago</p>
                </div>
                <div className={style.servicio}>
                    <FontAwesomeIcon className={style.iconoServicio} icon={faTruck} />
                    <p className={style.txtServicio}>Envios a todo el país</p>
                </div>
            </div>
        </section>
    )
}

export default Servicios;
