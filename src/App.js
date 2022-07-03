import logo from "./logo.svg";
import "./App.css";

import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
      </header>
      <List />
    </div>
  );
}

export default App;
