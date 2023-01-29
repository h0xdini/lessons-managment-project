import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Announce from "./pages/Announce";
import Discussion from "./pages/Discussion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Announce />} />
        <Route path="/discussions" element={<Discussion />} />
        <Route path="/discussions/:id" element={<Discussion />} />
      </Routes>
    </Router>
  );
}
export default App;
