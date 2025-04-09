
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white shadow-md py-2"
      : "bg-transparent py-4"
  }`;

  const navItems = [
    { name: "Ana Sayfa", href: "#hero" },
    { name: "Hakkımızda", href: "#about" },
    { name: "Hizmetlerimiz", href: "#services" },
    { name: "Galeri", href: "#gallery" },
    { name: "İletişim", href: "#contact" },
  ];

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-autocare-800">APEX</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="navbar-link"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-autocare-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-autocare-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
