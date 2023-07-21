import { useState } from "react";

function Formulario({ crearCalculo }) {
  const [number, setNumber] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    crearCalculo(number);
  };

  return (
    <form onSubmit={formSubmit}>
      <input
        type="number"
        placeholder="hola"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button>guardar</button>
    </form>
  );
}

export default Formulario;
