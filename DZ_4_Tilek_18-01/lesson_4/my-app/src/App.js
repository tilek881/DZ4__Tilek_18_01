import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import UserPage from "./pages/userPage/UserPage";
import UserPageClass from "./pages/userPageClass/UserPageClass";

function App() {
  return (
    <div className="App">
      {/*<MainPage/>*/}
      {/*  <AboutPage/>*/}
        <UserPage/>
      {/*  <UserPageClass/>*/}
    </div>
  );
}

export default App;
