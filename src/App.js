import { useState } from "react";
import { Login } from "./components/login";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();

  return (
    <div className="App">
      {user && <h1>{user.username}</h1>}
      {user ? <h1>{user.username}</h1> : <h1>Please type something</h1>}
      <Login setUser={setUser} />
    </div>
  );
};

export default App;
