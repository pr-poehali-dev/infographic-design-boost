import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-pink-dark flex items-center">
            <span className="mr-2">📊</span> 
            <span>Айша</span>
          </Link>
        </div>

        {/* Мобильное меню */}
        <div className="block lg:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden lg:flex items-center gap-6">
          <NavLinks />
        </nav>
      </div>

      {/* Мобильное меню (выпадающее) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ mobile, onClick }: NavLinksProps) => {
  const navItems = [
    { label: "Главная", path: "/" },
    { label: "Портфолио", path: "/portfolio" },
    { label: "Услуги", path: "/services" },
    { label: "Отзывы", path: "/testimonials" },
    { label: "Контакты", path: "/contacts" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Link 
          key={item.path}
          to={item.path} 
          className={`
            ${mobile ? "block py-2" : ""}
            font-medium hover:text-pink-dark transition-colors
          `}
          onClick={onClick}
        >
          {item.label}
        </Link>
      ))}
      <Button 
        variant="default" 
        className="bg-pink-DEFAULT hover:bg-pink-dark text-white"
        onClick={onClick}
      >
        Связаться
      </Button>
    </>
  );
};

export default Header;
