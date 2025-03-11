import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">
          Hello, Tailwind CSS v4!
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
