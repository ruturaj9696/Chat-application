import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Home />
      </div>
    </>
  );
}

export default App;
