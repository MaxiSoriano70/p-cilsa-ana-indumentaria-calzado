import { Carousel } from 'react-bootstrap';
import style from '../css/CarouselAnaliaValdez.module.css';
import banner1 from '../assets/img/banner1.png';
import banner2 from '../assets/img/banner2.png';
import banner3 from '../assets/img/banner1.png';
import { Link } from 'react-router-dom';

const CarouselAnaliaValdez = () => {
    return (
        <Carousel fade id="carouselAnaliaValdez">
            <Carousel.Item className={style.containerImg}>
                <img
                    src={banner1}
                    className={`d-block w-100 ${style.analiaValdezCarousel}`}
                    alt="Odontologo-placa"
                />
                <div className={`d-flex align-items-center justify-content-center flex-column ${style.textCarrusel}`}>
                    <h4 className={style.h4TituloCarrusel}>Nuevos productos para vos</h4>
                    <h3 className={style.h3TituloCarrusel}>
                        Diseños que te acompañan, Calidad que te hace brillar
                    </h3>
                    <Link className={style.btnCarrusel}>Ver Productos</Link>
                </div>
            </Carousel.Item>

            <Carousel.Item className={style.containerImg}>
                <img
                    src={banner2}
                    className={`d-block w-100 ${style.analiaValdezCarousel}`}
                    alt="Ortodoncia"
                />
                <div className={`d-flex align-items-center justify-content-center flex-column ${style.textCarrusel}`}>
                    <h4 className={style.h4TituloCarrusel}>Descuentos y ofertas</h4>
                    <h3 className={style.h3TituloCarrusel}>
                        El regalo perfecto para tu papá esta aca
                    </h3>
                    <Link className={style.btnCarrusel}>Ver Ofertas</Link>
                </div>
            </Carousel.Item>

            <Carousel.Item className={style.containerImg}>
                <img
                    src={banner3}
                    className={`d-block w-100 ${style.analiaValdezCarousel}`}
                    alt="Placa"
                />
                <div className={`d-flex align-items-center justify-content-center flex-column ${style.textCarrusel}`}>
                    <h4 className={style.h4TituloCarrusel}>Nuevos productos para vos</h4>
                    <h3 className={style.h3TituloCarrusel}>
                        Diseños que te acompañan, Calidad que te hace brillar
                    </h3>
                    <Link className={style.btnCarrusel}>Ver Productos</Link>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselAnaliaValdez;