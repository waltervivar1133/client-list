import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import Form from "./components/form";
import db from "./firebase/config";

function App() {

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, "users"));
      console.log(data.docs[0].data());
    };

    getData();
  }, []);

  return (
    <main className="w-full mx-auto bg-gray-900 h-screen px-4 md:px-0">
      <section className="max-w-5xl mx-auto py-16">
        <h1 className="text-3xl font-bold  text-white my-10">
          Formulario de registro de clientes
        </h1>

        <Form />
      </section>
    </main>
  );
}

export default App;
