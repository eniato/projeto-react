import React, { useState } from 'react';
import './App.css';


function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (event) => {
    event.preventDefault();

    const alturaMetros = altura / 100;
    const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(imcCalculado);

    if (imcCalculado < 17) {
      setClassificacao('Muito abaixo do peso');
    } else if (imcCalculado >= 17 && imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado >= 18.5 && imcCalculado < 25) {
      setClassificacao('Peso normal');
    } else if (imcCalculado >= 25 && imcCalculado < 30) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado >= 30 && imcCalculado < 35) {
      setClassificacao('Obesidade grau I');
    } else if (imcCalculado >= 35 && imcCalculado < 40) {
      setClassificacao('Obesidade grau II');
    } else {
      setClassificacao('Obesidade grau III');
    }
  };

  return (
    <div className="App">
      <header className="App-header">

        <h1 className="titulo">Calculadora de IMC</h1>

        <form onSubmit={calcularIMC}>

          <div>
            <label>
              Altura (cm):
              <input
                className="inputBox"
                type="text"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Peso (kg):
              <input
                className="inputBox"
                type="text"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                required
              />
            </label>
          </div>

          <button type="submit">Calcular IMC</button>

        </form>
        {imc && (
          <div>
            <h2>Seu IMC é: {imc}</h2>
            <h3>Classificação: {classificacao}</h3>
          </div>
        )}

        <table>

          <thead>
            <tr>
              <th>IMC</th>
              <th>Classificação</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Menor que 17</td>
              <td>Muito abaixo do peso</td>
            </tr>
            <tr>
              <td>17 a 18.49</td>
              <td>Abaixo do peso</td>
            </tr>
            <tr>
              <td>18.5 a 24.99</td>
              <td>Peso normal</td>
            </tr>
            <tr>
              <td>25 a 29.99</td>
              <td>Sobrepeso</td>
            </tr>
            <tr>
              <td>30 a 34.99</td>
              <td>Obesidade grau I</td>
            </tr>
            <tr>
              <td>35 a 39.99</td>
              <td>Obesidade grau II</td>
            </tr>
            <tr>
              <td>Maior ou igual a 40</td>
              <td>Obesidade grau III</td>
            </tr>
          </tbody>

        </table>
      </header>
    </div>
  );
}

export default App;
