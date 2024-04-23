import React, { useState } from 'react';
import "./app.css";


const App = ({ setGreen, setRed }) => {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [respuestaUsuario, setRespuestaUsuario] = useState('');
  const [mensajeCorreccion, setMensajeCorreccion] = useState('');
  const [operacion, setOperacion] = useState('');
  const [operacionActual, setOperacionActual] = useState('');

  const nuevaSuma = () => {
    const n1 = Math.floor(Math.random() * 10);
    const n2 = Math.floor(Math.random() * 10);
    setNum1(n1);
    setNum2(n2);
    setOperacionActual('+');
    setOperacion('+');
    setRespuestaUsuario('');
  };

  const nuevaResta = () => {
    const n1 = Math.floor(Math.random() * 5 + 5);
    const n2 = Math.floor(Math.random() * 5);
    setNum1(n1);
    setNum2(n2);
    setOperacionActual('-');
    setOperacion('-');
    setRespuestaUsuario('');
  };

  const nuevoProducto = () => {
    const n1 = Math.floor(Math.random() * 10);
    const n2 = Math.floor(Math.random() * 10);
    setNum1(n1);
    setNum2(n2);
    setOperacionActual('*');
    setOperacion('x');
    setRespuestaUsuario('');
  };

  const nuevaDivision = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const divisores = [];
    for (let i = 1; i <= n1; i++) {
      if (n1 % i === 0) {
        divisores.push(i);
      }
    }
    const pos = Math.floor(Math.random() * divisores.length);
    const n2 = divisores[pos];
    setNum1(n1);
    setNum2(n2);
    setOperacionActual('/');
    setOperacion('/');
    setRespuestaUsuario('');
  };

  const corregir = () => {
    if (!respuestaUsuario) return;
    let solucion;
    const operacionString = `${num1}${operacionActual}${num2}`;
    solucion = eval(operacionString);
    if (parseInt(respuestaUsuario) === solucion) {
      setMensajeCorreccion('Correcto');
      setGreen();
    } else {
      setMensajeCorreccion('Incorrecto');
      setRed();
    }
    switch (operacionActual) {
      case '+':
        nuevaSuma();
        break;
      case '-':
        nuevaResta();
        break;
      case '*':
        nuevoProducto();
        break;
      case '/':
        nuevaDivision();
        break;
      default:
        break;
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      corregir();
    }
  };

  const activarBoton = (idBoton) => {
    const buttons = ['suma', 'resta', 'producto', 'division'];
    buttons.forEach((button) => {
      const btn = document.getElementById(button);
      btn.classList.remove('activado');
    });
    const activeBtn = document.getElementById(idBoton);
    activeBtn.classList.add('activado');
  };

  return (
    <div className='math-box'>
      <div className='op-box'>
        <button onClick={() => nuevaSuma()} id="suma">
          +
        </button>
        <button onClick={() => nuevaResta()} id="resta">
          -
        </button>
        <button onClick={() => nuevoProducto()} id="producto">
          x
        </button>
        <button onClick={() => nuevaDivision()} id="division">
          /
        </button>
      </div>
      <div>
        <div className="problema">
          <span id="num1">{num1}</span>
          <span id="operacion">{operacion}</span>
          <span id="num2">{num2}</span>
        </div>
        <div className="respuesta">
          <input
            type="text"
            id="respuesta_usuario"
            value={respuestaUsuario}
            onChange={(e) => setRespuestaUsuario(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <button onClick={() => corregir()}>Corregir</button>
        </div>
      </div>
      

    </div>
  );
}

export default App;

