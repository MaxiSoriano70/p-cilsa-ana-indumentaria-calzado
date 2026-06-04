import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import style from '../css/NavBar.module.css';

const NavBar = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);
    const [isMin, setIsMin] = useState(false);

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
                    <Link className={style.iconoMenu} to="/carrito">
                        <FontAwesomeIcon className={style.iconoNavBar} icon={faBagShopping} />
                    </Link>

                    {!isMobile && btnSignUp}

                    <button id="btnMenu" className={style.btnControlMenu + " " + style.btnMenu} onClick={toggleMenu}>
                        <FontAwesomeIcon className={style.iconoNavBar} icon={faBars} />
                    </button>
                </div>
            </section>

            {isMobile && nav}
        </header>
    )
}

export default NavBar;