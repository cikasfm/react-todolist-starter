import Requirements from "./Requirements";
import "./styles.css";
import { getTasks, addTask, removeTask, setTasks } from "./todo.service";

export default function App() {
  return (
    <div className="App">
      <Requirements />
    </div>
  );
}
