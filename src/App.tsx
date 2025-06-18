import ContadorRed from "./components/ContadorRed";
import Counter from "./components/Counter";
import Formulario from "./components/Formulario";
import Formulario2 from "./components/Formulario2";
import TimerPadre from "./components/TimerPadre";
import Usuario from "./components/Usuario";

function App() {
  return (
    <>
      <h1>React + Typecript</h1>
      <hr />

      <Counter />

      <Usuario />

      <h2>UseEffet - useRef</h2>
      <hr />
      <TimerPadre />

      <h2>UseReducer</h2>
      <hr />
      <ContadorRed />

      <h2>CustomHooks</h2>
      <hr />
      <Formulario />

      <br />
      
      <Formulario2 />

    </>
  );
}

export default App;
