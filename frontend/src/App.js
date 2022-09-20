import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GetingStartedScreen from "./screens/GetingStartedScreen";
import GitflowScreen from "./screens/GitflowScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import PostListScreen from "./screens/PostListScreen";
import PostScreen from "./screens/PostScreen";
import StackScreen from "./screens/StackScreen";
import TechniquesScreen from "./screens/TechniquesScreen";
import icon from "./assets/isamcFavicon.png";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const favicon = document.getElementById("favicon");
    favicon.setAttribute("href", icon);
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="techniques" element={<TechniquesScreen />} />
          <Route path="stack" element={<StackScreen />} />
          <Route path="posts" element={<PostListScreen />} />
          <Route path="post/:id" element={<PostScreen />} />
          <Route path="techniques" element={<TechniquesScreen />} />
          <Route path="gitflow" element={<GitflowScreen />} />
          <Route path="getting_started" element={<GetingStartedScreen />} />
          <Route path="login" element={<LoginScreen />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
