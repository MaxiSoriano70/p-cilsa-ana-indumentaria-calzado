import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBagShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import style from '../css/NavBar.module.css';

const NavBar = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);
    const [isMin, setIsMin] = useState(false);

    const [carrito, setCarrito] = useState([
        { id: 1, nombre: "Producto A", cantidad: 2 },
        { id: 2, nombre: "Producto B", cantidad: 1 },
    ]);

    const cantidadCarrito = carrito.reduce((total, item) => total + item.cantidad, 0);

    useEffect(() => {
        const responsiveY = () => {
            if (window.innerHeight <= 362) {
                setIsMin(menuAbierto);
            } else {
                setIsMin(false);
            }
        };

        responsiveY();
        window.addEventListener('resize', responsiveY);
        return () => window.removeEventListener('resize', responsiveY);
    }, [menuAbierto]);

    useEffect(() => {
        const responsive = () => {
            setIsMobile(window.innerWidth <= 850);
        };

        responsive();
        window.addEventListener('resize', responsive);
        return () => window.removeEventListener('resize', responsive);
    }, []);

    const toggleMenu = () => {
        setMenuAbierto(prev => !prev);
    };

    const btnSignUp = (
        <button id="btnSignUp" className={style.btnControlMenuSignUp}>Sign up</button>
    );

    const nav = (
        <nav className={`${style.menuOpciones} ${menuAbierto ? style.mostrar : ''} ${isMin ? style.min : ''}`}>
            <ul className={style.menuUl}>
                <li className={style.menuLi}>
                    <Link className={style.linkMenu} to="/">Inicio</Link>
                </li>
                <li className={style.menuLi}>
                    <Link className={style.linkMenu} to="/productos">Productos</Link>
                </li>
                <li className={style.menuLi}>
                    <Link className={style.linkMenu} to="/nosotros">Nosotros</Link>
                </li>
                <li className={style.menuLi}>
                    <Link className={style.linkMenu} to="/contacto">Contacto</Link>
                </li>

                {isMobile && (
                    <li className={style.menuLi} id="liSignUpTemp">
                        {btnSignUp}
                    </li>
                )}
            </ul>
        </nav>
    );

    return (
        <header className={style.modeLigth}>
            <section className={style.contenedor}>
                <div className={style.logo}>
                    <Link className={`${style.linkLogo} ${style.modeLigth}`} to="/">Analia Valdez</Link>
                </div>

                {!isMobile && nav}

                <div className={style.controlesUsuario}>
                    <Link className={style.iconoMenu} to="/buscar">
                        <FontAwesomeIcon className={style.iconoNavBar} icon={faMagnifyingGlass} />
                    </Link>
                    <Link className={`${style.iconoMenu} ${style.contenedorIconoCarrito}`} to="/carrito">
                        <FontAwesomeIcon className={style.iconoNavBar} icon={faBagShopping} />
                        {cantidadCarrito > 0 && (
                            <span className={style.badgeCarrito}>
                                {cantidadCarrito > 99 ? "99+" : cantidadCarrito}
                            </span>
                        )}
                    </Link>

                    {!isMobile && btnSignUp}

                    <button
                        id="btnMenu"
                        className={style.btnControlMenu + " " + style.btnMenu}
                        onClick={toggleMenu}
                        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={menuAbierto}
                    >
                        <FontAwesomeIcon className={style.iconoNavBar} icon={menuAbierto ? faXmark : faBars} />
                    </button>
                </div>
            </section>

            {isMobile && nav}
        </header>
    )
}

export default NavBar;