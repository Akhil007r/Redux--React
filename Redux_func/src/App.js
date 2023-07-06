import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Decrement, Increment, Login } from "./redux/actions";
function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

    return (
    <div className="App">
     <p>Counter : {counter}</p>
     <button onClick={()=>dispatch(Increment(2))}>+</button>
     <button onClick={()=>dispatch(Decrement(2))}>-</button>
     <button onClick={()=>dispatch(Login("Akhilesh"))}>{isLogged?"Logout":"Login"}</button>
     {isLogged && <h3> Welcome Akhilesh</h3>}
    </div>
  );
}

export default App;
