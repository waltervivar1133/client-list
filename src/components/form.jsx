import React, { useState } from "react";

const Form = ({addData}) => {
  const initialState = {
    name: "",
    surname: "",
    date: "",
    age: "",
  };
  const [values, setvalues] = useState(initialState);

  const handleChange = (e) => {
    const {name , value } = e.target;
    setvalues({ ...values, [name]: value});

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values)

    addData(values)

    setvalues()

    e.target.reset();

  };
  return (
    <form onSubmit={handleSubmit} >
      <div className="mb-4">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="name"
        >
          Nombres
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="name"
          type="text"
          placeholder="Nombres"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="surname"
        >
          Apellidos
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="surname"
          type="text"
          placeholder="Apellidos"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="age"
        >
          Edad
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="age"
          type="text"
          placeholder="Edad"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="date"
        >
          Fecha de nacimiento
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="date"
          type="text"
          placeholder="Fecha de nacimiento"
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-1/2 mx-auto focus:shadow-outline my-10"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default Form;
