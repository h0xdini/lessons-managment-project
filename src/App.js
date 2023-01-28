import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Announce from "./pages/Announce";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Announce />} />
      </Routes>
    </Router>
  );
}
export default App;
