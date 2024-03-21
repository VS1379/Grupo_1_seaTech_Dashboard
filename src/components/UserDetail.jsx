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
      user.image = user.image.slice(user.image.indexOf("https"), [
        -2 + user.image.length,
      ]);
      return user.image;
    }
  }

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            {user.first_name}
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              alt="Barco"
              src={imagen()}
            />
          </div>
          <p>{user.last_name}</p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            {"URL"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
