import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import GetingStartedScreen from "./screens/GetingStartedScreen";
import GitflowScreen from "./screens/GitflowScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import PostListScreen from "./screens/PostListScreen";
import PostScreen from "./screens/PostScreen";
import StackScreen from "./screens/StackScreen";
import TechniquesScreen from "./screens/TechniquesScreen";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="techniques" element={<TechniquesScreen/>} />
      <Route path="stack" element={<StackScreen/>} />
      <Route path="posts" element={<PostListScreen/>} />
      <Route path="techniques" element={<PostScreen/>} />
      <Route path="gitflow" element={<GitflowScreen/>} />
      <Route path="getting_started" element={<GetingStartedScreen/>} />
      <Route path="login" element={<LoginScreen/>} />

    </Routes>
    </>
  );
}

export default App;
