import style from '../css/NuestrasCategorias.module.css';
import banner1 from '../assets/img/category1.png';
import banner2 from '../assets/img/category2.png';
import banner3 from '../assets/img/category3.png';

const NuestrasCategorias = () => {
    return (
        <section className={style.contenedorNuestrasCategorias}>
            <h4 className={style.h4Categorias}>Tu look completo de pies a cabeza</h4>
            <h3 className={style.h3Categorias}>Nuestras categorias</h3>
            <div className={style.contenedorImgCategorias}>
                <button className={style.btnCategoria}>
                    <img className={style.imgCategoria} src={banner1} alt="img-category" />
                    <span className={style.txtCategoria}>Lenceria</span>
                </button>
                <button className={style.btnCategoria}>
                    <img className={style.imgCategoria} src={banner2} alt="img-category" />
                    <span className={style.txtCategoria}>Zapatillas</span>
                </button>
                <button className={style.btnCategoria}>
                    <img className={style.imgCategoria} src={banner3} alt="img-category" />
                    <span className={style.txtCategoria}>Indumentaria</span>
                </button>
            </div>
        </section>
    )
}

export default NuestrasCategorias;
