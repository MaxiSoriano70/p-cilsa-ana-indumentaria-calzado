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
            <main>
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
