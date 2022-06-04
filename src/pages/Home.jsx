import { addDoc, collection } from "firebase/firestore";
import React from 'react'
import Form from '../components/Form'
import db from "../firebase/config";


const Home = () => {
  const addData = async (objectData) => {
    await addDoc(collection(db, "users"), objectData);
    console.log("nueva tarea agregada");
  };
  return (
    
      <section className="max-w-5xl mx-auto py-16">
        <h1 className="text-3xl font-bold  text-white my-10">
          Formulario de registro de clientes
        </h1>
        <Form addData={addData} />
      </section>
  )
}

export default Home