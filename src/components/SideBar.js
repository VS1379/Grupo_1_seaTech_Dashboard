import React from 'react';
import image from '../assets/images/logo-DH.png';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import ContentRowTop from './ContentRowTop';
import Chart from './Chart';
import Products from './Products';
import { SearchMovies } from "./SearchMovies";
import NotFound from './NotFound';
import { Link, Route, Routes } from 'react-router-dom';

function SideBar() {
    return (
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House" />
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - SeaTech🚢</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></Link>
                </li>
                {/*<!-- Nav Item - Chart -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Products">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Productos</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}
            <Routes>
                <Route exact path="/" element={<ContentWrapper />} />
                <Route path="/GenresInDb" element={<GenresInDb />} />
                <Route path="/LastMovieInDb" element={<LastMovieInDb />} />
                <Route path="/ContentRowMovies" element={<ContentRowMovies />} />
                <Route path='/SearchMovies' element={<SearchMovies />} />
                <Route path='/ContentRowTop' element={<ContentRowTop />} />
                <Route path='/Chart' element={<Chart />} />
                <Route path='/Products' element={<Products />} />
                <Route component={NotFound} />
            </Routes>
        </>
    )

    /*
    <Route exact path="/">
        <ContentWrapper />
    </Route>
    <Route path="/GenresInDb">
        <GenresInDb />
    </Route>
    <Route path="/LastMovieInDb">
        <LastMovieInDb />
    </Route>
    <Route path="/ContentRowMovies">
        <ContentRowMovies />
    </Route>
*/
}
export default SideBar;