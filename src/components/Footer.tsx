import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">🎨</span>
              <span className="gradient-text">Милана Дизайн</span>
            </div>
            <p className="text-gray-600 mb-6">
              Создаю красивую и эффективную инфографику, которая помогает вашей аудитории легко понять сложную информацию.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-pink-lightest flex items-center justify-center text-gray-600 hover:bg-pink-light hover:text-foreground transition-colors">
                📱
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pink-lightest flex items-center justify-center text-gray-600 hover:bg-pink-light hover:text-foreground transition-colors">
                ✉️
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pink-lightest flex items-center justify-center text-gray-600 hover:bg-pink-light hover:text-foreground transition-colors">
                📷
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-dark transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-light mr-2"></span>
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-pink-dark transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-light mr-2"></span>
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-pink-dark transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-light mr-2"></span>
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-600 hover:text-pink-dark transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-light mr-2"></span>
                  Отзывы
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-600 hover:text-pink-dark transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-light mr-2"></span>
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Свяжитесь со мной</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-pink-lightest flex items-center justify-center text-xl mr-3 mt-1 flex-shrink-0">
                  📱
                </div>
                <div>
                  <h4 className="font-medium">Telegram</h4>
                  <p className="text-gray-600">milana_design</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-pink-lightest flex items-center justify-center text-xl mr-3 mt-1 flex-shrink-0">
                  📧
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">hello@milana-design.ru</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-pink-lightest flex items-center justify-center text-xl mr-3 mt-1 flex-shrink-0">
                  🕒
                </div>
                <div>
                  <h4 className="font-medium">Часы работы</h4>
                  <p className="text-gray-600">Пн-Пт: 10:00 - 19:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-pink-lightest mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Милана — Дизайнер инфографики. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
