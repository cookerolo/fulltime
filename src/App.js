import "./App.css";
import Navbar from "./Navbar";
import DataFetching from "./DataFetching";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <DataFetching />
      </div>
    </div>
  );
}

export default App;
