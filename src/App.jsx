import "./App.css";
import { Header } from "./components/Header";
import routes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="page">{routes}</div>
      </Router>
    </>
  );
}

export default App;
