import { useState } from "react";
import { FaSearch, FaBell, FaHeart, FaShoppingCart, FaUserCircle, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-green-600">
          Shopz
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-green-600 transition">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition">Man</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition">Woman</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition">Kids</a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <FaSearch className="text-gray-700 cursor-pointer hover:text-green-600 transition" />
          <FaBell className="text-gray-700 cursor-pointer hover:text-green-600 transition" />
          <FaHeart className="text-gray-700 cursor-pointer hover:text-green-600 transition" />
          <FaShoppingCart className="text-gray-700 cursor-pointer hover:text-green-600 transition" />
          <FaUserCircle className="text-gray-700 cursor-pointer hover:text-green-600 text-2xl transition" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-white shadow-md p-4">
          <a href="#" className="block text-gray-700 hover:text-green-600 transition">Home</a>
          <a href="#" className="block text-gray-700 hover:text-green-600 transition">Man</a>
          <a href="#" className="block text-gray-700 hover:text-green-600 transition">Woman</a>
          <a href="#" className="block text-gray-700 hover:text-green-600 transition">Kids</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
