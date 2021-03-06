// import logo from './logo.svg';
// import logo from './world-map orange copy.svg';


import Navbar from "./Navbar"
import Home from "./Home"

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = { name: "yoshi", age: 30 }
  const link = "http://www.google.com";

  // const link = "http://yap79.com";


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
