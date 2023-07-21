import { triangulo } from "./calculos";

function CalculoImprime({calcular}) {
  
  if (calcular.length === 0) {
    return <h1>No hay datos</h1>;
  }
  const resultado =calcular[calcular.length-1];
  const perrito = triangulo()
  return (
    <div>
        <div>triangulo: {resultado.triangulo}</div>
        <div>fibonachi: {resultado.fibo}</div>
        <div>primo:{resultado.primo}</div>
        
    </div>
  );
}

export default CalculoImprime;
