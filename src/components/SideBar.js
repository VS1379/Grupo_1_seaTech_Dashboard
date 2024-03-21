import React from 'react';
import image from '../assets/images/seatech-logo-hd.png';
import ContentWrapper from './ContentWrapper';
import LastProductInDb from './LastProductInDb';
import CategoriesQuantity from './CategoriesQuantity';
import ContentRowTop from './ContentRowTop';
import Chart from './Chart';
import Products from './Products';
import Users from './Users';
import Categories from './Categories';
import ProductDetail from './ProductDetail';
import UserDetail from './UserDetail';
import { SearchMovies } from "./SearchMovies";
import NotFound from './NotFound';
import { Link, Route, Routes } from 'react-router-dom';

function SideBar() {
    return (
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center my-4   " href="/">
                    <div className="sidebar-brand-icon">
                        <div class="d-flex justify-content-center align-items-center">
                            <img className="w-50 h-50" src={image} alt="SeaTech" />
                        </div>
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

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastProductInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Ultimo Producto</span></Link>
                </li>
                {/*<!-- Nav Item - Chart -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Products">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Productos</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Users">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Users</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Categories">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Categories</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/CategoriesQuantity">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Cantidad por Categorias</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}
            <Routes>
                <Route exact path="/" element={<ContentWrapper />} />
                <Route path="/LastProductInDb" element={<LastProductInDb />} />
                <Route path="/CategoriesQuantity" element={<CategoriesQuantity />} />
                <Route path='/SearchMovies' element={<SearchMovies />} />
                <Route path='/ContentRowTop' element={<ContentRowTop />} />
                <Route path='/Chart' element={<Chart />} />
                <Route path='/Categories' element={<Categories />} />
                <Route path='/Products' element={<Products />} />
                <Route path='/ProductDetail/:id' element={<ProductDetail />} />
                <Route path='/Users' element={<Users />} />
                <Route path='/UserDetail/:id' element={<UserDetail />} />
                <Route component={NotFound} />
            </Routes>
        </>
    )
}
export default SideBar;