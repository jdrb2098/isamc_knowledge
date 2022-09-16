import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomeScreen />} />

    </Routes>
    </>
  );
}

export default App;
