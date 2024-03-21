import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersAPI } from "../services/UsersAPI";

function UserDetail() {
  const [user, SetUser] = useState([]);

  const id = useParams();

  useEffect(() => {
    console.log("Montado");
    const fetchdata = async () => {
      try {
        let data = await UsersAPI.getById(id.id);
        SetUser(data.data);
      } catch (error) {
        console.error("Error al obtener el Usuario:", error);
      }
    };
    fetchdata();
  }, []);
  useEffect(() => {
    console.log("Actualizado");
  }, [user]);

  function imagen() {
    if (user.image) {
      return JSON.parse(user.image).url;
    }
  }

  return (
    <div className="col-lg-11 h-100 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800 text-center">
            {user.first_name}
          </h5>
          <h5 className="m-0 font-weight-bold text-gray-800 text-center">
            {user.last_name}
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 25 + "rem" }}
              alt="Foto Persona"
              src={imagen()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
