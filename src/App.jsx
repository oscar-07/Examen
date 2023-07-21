import CalculoImprime from "./componentes/Imprime";
import Formulario from "./componentes/Formulario";
import { useState, useEffect } from "react";
import { calcular as data } from "./componentesNoVisuales/calculos";

function App() {
  const [calcular, setCalcular] = useState([]);

  useEffect(() => {
    setCalcular(data);
  }, []);

  function crearCalculo(number) {
    setCalcular([
      ...calcular,
      { triangulo: number, fibo: number, primo: number },
    ]);
  }

  return (
    <div>
      <Formulario crearCalculo={crearCalculo} />
      <CalculoImprime calcular={calcular} />
    </div>
  );
}

export default App;
