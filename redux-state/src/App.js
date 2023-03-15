import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";
import { decrement } from "./actions";
import { setUser } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>React redux</h1>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      {!user && (
        <button onClick={() => dispatch(setUser({ id: 1, name: "Sam" }))}>
          Set User
        </button>
      )}

      {user && <p>{user.name}</p>}
    </div>
  );
}

export default App;
