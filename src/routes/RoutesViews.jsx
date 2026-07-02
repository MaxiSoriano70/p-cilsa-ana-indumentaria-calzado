import style from '../css/RoutesViews.module.css'
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { routes } from '../assets/utils/routes';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';

const RoutesViews = () => {
    return (
        <>
            <NavBar/>
                <main className={style.mainPrincipal + " " +style.ligth}>
                    <Routes>
                        <Route path={routes.home} element={<Home/>}/>
                        <Route path={routes.notFound} element={<Error404/>}/>
                    </Routes>
                </main>
            <Footer/>
        </>
    )
}

export default RoutesViews;
