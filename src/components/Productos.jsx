import style from '../css/Productos.module.css';
import producto1 from '../assets/img/producto1.png';
import producto2 from '../assets/img/producto2.png';
import producto3 from '../assets/img/producto3.png';
import producto4 from '../assets/img/producto4.png';
import producto5 from '../assets/img/producto5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const listaProductos = [
    {
        id: 1,
        urlimg: producto1,
        nombre: "Zapatilla Runner Blanca",
        precio: 45999,
        descripcion: "Zapatilla deportiva liviana, ideal para uso diario y running.",
        talle: [37, 38, 39, 40, 41, 42]
    },
    {
        id: 2,
        urlimg: producto2,
        nombre: "Zapatilla Urban Negra",
        precio: 52999,
        descripcion: "Diseño urbano con suela de goma antideslizante.",
        talle: [37, 38, 39, 40, 41]
    },
    {
        id: 3,
        urlimg: producto3,
        nombre: "Blusa Fluida Dama",
        precio: 18999,
        descripcion: "Blusa liviana de tela fluida, ideal para looks casuales o de oficina.",
        talle: ["S", "M", "L", "XL"]
    },
    {
        id: 4,
        urlimg: producto4,
        nombre: "Campera Dama Acolchada",
        precio: 64999,
        descripcion: "Campera acolchada con capucha desmontable, abrigo ideal para el invierno.",
        talle: ["S", "M", "L", "XL"]
    },
    {
        id: 5,
        urlimg: producto5,
        nombre: "Zapatilla Classic Gris",
        precio: 48999,
        descripcion: "Zapatilla clásica de estilo retro, cómoda para el uso diario.",
        talle: [36, 37, 38, 39, 40, 41, 42]
    },
    {
        id: 6,
        urlimg: producto1,
        nombre: "Zapatilla Runner Blanca",
        precio: 45999,
        descripcion: "Zapatilla deportiva liviana, ideal para uso diario y running.",
        talle: [37, 38, 39, 40, 41, 42]
    },
    {
        id: 7,
        urlimg: producto2,
        nombre: "Zapatilla Urban Negra",
        precio: 52999,
        descripcion: "Diseño urbano con suela de goma antideslizante.",
        talle: [37, 38, 39, 40, 41]
    },
    {
        id: 8,
        urlimg: producto3,
        nombre: "Blusa Fluida Dama",
        precio: 18999,
        descripcion: "Blusa liviana de tela fluida, ideal para looks casuales o de oficina.",
        talle: ["S", "M", "L", "XL"]
    },
    {
        id: 9,
        urlimg: producto4,
        nombre: "Campera Dama Acolchada",
        precio: 64999,
        descripcion: "Campera acolchada con capucha desmontable, abrigo ideal para el invierno.",
        talle: ["S", "M", "L", "XL"]
    },
    {
        id: 10,
        urlimg: producto5,
        nombre: "Zapatilla Classic Gris",
        precio: 48999,
        descripcion: "Zapatilla clásica de estilo retro, cómoda para el uso diario.",
        talle: [36, 37, 38, 39, 40, 41, 42]
    },
    {
        id: 11,
        urlimg: producto1,
        nombre: "Zapatilla Runner Blanca",
        precio: 45999,
        descripcion: "Zapatilla deportiva liviana, ideal para uso diario y running.",
        talle: [37, 38, 39, 40, 41, 42]
    },
    {
        id: 12,
        urlimg: producto2,
        nombre: "Zapatilla Urban Negra",
        precio: 52999,
        descripcion: "Diseño urbano con suela de goma antideslizante.",
        talle: [37, 38, 39, 40, 41]
    },
];

const CardProducto = ({ producto }) => {
    return (
        <div className={style.cardProducto}>
            <figure className={style.contenedorImg}>
                <img className={style.imgProducto} src={producto.urlimg} alt={producto.nombre} />
                <button className={style.btnDetalleProducto}><FontAwesomeIcon icon={faPlus} /></button>
            </figure>
            <div className={style.descripcionProducto}>
                <p className={style.nombreProducto}>{producto.nombre}</p>
                <p className={style.precioProducto}>${producto.precio}</p>
            </div>
        </div>
    )
}

const Productos = () => {
    return (
        <section className={style.contenedorProductos}>
            <h4 className={style.h4Productos}>Encontrá tu próximo favorito</h4>
            <h3 className={style.h3Productos}>Especial para vos</h3>
            <div className={style.productos}>
                {listaProductos.map((producto) => (
                    <CardProducto key={producto.id} producto={producto} />
                ))}
            </div>
            <div className={style.footerProductos}>
                <button className={style.btnVerMasProductos}>Ver más productos</button>
            </div>
        </section>
    )
}

export default Productos;