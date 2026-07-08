import style from '../css/Descripcion.module.css';
import logo from '../assets/img/logoAna.png';

const Descripcion = () => {
    return (
        <section className={style.contenedorDescripcion}>
            <figure className={style.fLogo}>
                <img className={style.logoDescripcion} src={logo} alt="logo" />
            </figure>
            <article className={style.aDescripcion}>
                <h3 className={style.h3Descripcion}>Analía Valdez: Inspirando tu estilo de pies a cabeza</h3>
                <h4 className={style.h4Descripcion}>El alma de la marca</h4>
                <p className={style.txtDescripcion}>Desde Rosario, Santa Fe, nació un proyecto impulsado por la pasión de acercarte lo mejor de la moda. Somos un emprendimiento pensado para quienes buscan marcar la diferencia a través de detalles únicos, ofreciendo una cuidada selección de calzado importado premium para ambos sexos y una línea completa de indumentaria femenina seleccionada con dedicación.</p>
                <p className={style.txtDescripcion}>Creemos que vestir de calidad es una forma de expresión. Por eso, combinamos las últimas tendencias con la calidez de una atención personalizada. Seleccioná tus favoritos en nuestro catálogo y coordinemos juntos tu pedido de forma directa.</p>
            </article>
        </section>
    )
}

export default Descripcion;
