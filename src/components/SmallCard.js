import React, { useEffect, useState } from 'react';
import { CategoriesAPI } from '../services/CategoriesAPI';
import PropTypes from 'prop-types';

function SmallCard({ name, id }) {
    let [categoriesInfo, SetCategoriesInfo] = useState([]);

    useEffect(() => {
        let fetchInfo = async (id) => {
            try {
                let info = await CategoriesAPI.getById(id);
                SetCategoriesInfo(info.meta.total)
            } catch (error) {
                console.log("Error al obtener detalle de categoria:", error);
            }
        };
        fetchInfo(id)
    }, [])
    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left- shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row  align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-success text-uppercase mb-1`}> {name}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{categoriesInfo}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas fa-solid fa-anchor fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

SmallCard.defaultProps = {
    title: 'No Title',
    color: 'success',
    cuantity: 'No cuatity',
    icon: 'fa-clipboard-list'
}

/* PROPTYPES */

SmallCard.propTypes = {
    atritutes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        cuantity: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        icon: PropTypes.string.isRequired
    })
}



export default SmallCard;