import { Carousel } from 'react-bootstrap';
import style from '../css/CarouselAnaliaValdez.module.css';
import banner1 from '../assets/img/banner-1.jpeg';
import banner2 from '../assets/img/banner-2.jpeg';
import banner3 from '../assets/img/banner-3.jpeg';

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
                    <h2 className={style.tituloCarrusel}>
                        Bienvenido a Clinica dental, tu clinica de confianza
                    </h2>
                </div>
            </Carousel.Item>

            <Carousel.Item className={style.containerImg}>
                <img
                    src={banner2}
                    className={`d-block w-100 ${style.analiaValdezCarousel}`}
                    alt="Ortodoncia"
                />
                <div className={`d-flex align-items-center justify-content-center flex-column ${style.textCarrusel}`}>
                    <h2 className={style.tituloCarrusel}>
                        Conoce nuestros distintos servicios
                    </h2>
                </div>
            </Carousel.Item>

            <Carousel.Item className={style.containerImg}>
                <img
                    src={banner3}
                    className={`d-block w-100 ${style.analiaValdezCarousel}`}
                    alt="Placa"
                />
                <div className={`d-flex align-items-center justify-content-center flex-column ${style.textCarrusel}`}>
                    <h2 className={style.tituloCarrusel}>
                        Contamos con odontologos de gran nivel en todas nuestras especialidades
                    </h2>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselAnaliaValdez;