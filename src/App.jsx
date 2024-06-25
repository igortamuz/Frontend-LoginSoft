import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./assents/styles/GlobalStyle";
import Login from "../src/pages/Login/index"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

