import gsap from "gsap";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main className="flex flex-col w-full h-full">
      <Navbar />
      <Home />
    </main>
  );
}

export default App;
