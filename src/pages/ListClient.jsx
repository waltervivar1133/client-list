
import { collection,  getDocs,  onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../firebase/config";

const ListClient = () => {
  const [users, setUsers] = useState([]);
  const userCollections = collection(db, "users")
  const getClients = async() => {
    
    const data = await getDocs(userCollections);
    setUsers(data.docs.map(doc => ({...doc.data(), id: doc.id})))
}

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div className="flex justify-center items-center py-10">

      <h1>Lista de clientes</h1>
      <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
        {
          users.map((user) => {
            return (    <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">

                  Nombre : <span className="text-blue-700   font-bold" >{user.name} </span> <br />
                  Apellidos :<span className="text-blue-700   font-bold" >{user.surname} </span> <br />
                  Edad :<span className="text-blue-700   font-bold" >{user.age} </span><br />
                  Fecha de nacimiento :<span className="text-blue-700   font-bold" >{user.date} </span>
            </li>
            )
          }
        )}
      </ul>
    </div>
  );
};

export default ListClient;
