import { Board } from "./components/Board";
import { Requirements } from "./Requirements";
import "./styles.scss";

export default function App() {
  return (
      <div className="App">
        <Requirements />
        <Board/>
      </div>
  );
}
