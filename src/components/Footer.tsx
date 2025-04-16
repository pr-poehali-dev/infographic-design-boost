import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">📊</span>
              <span>Айша</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Увеличиваю продажи вашего бизнеса с помощью эффективного визуального контента!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-DEFAULT transition-colors">
                📱
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-DEFAULT transition-colors">
                ✉️
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-DEFAULT transition-colors">
                📷
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-pink-DEFAULT transition-colors">Главная</Link></li>
              <li><Link to="/portfolio" className="text-gray-600 hover:text-pink-DEFAULT transition-colors">Портфолио</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-pink-DEFAULT transition-colors">Услуги</Link></li>
              <li><Link to="/testimonials" className="text-gray-600 hover:text-pink-DEFAULT transition-colors">Отзывы</Link></li>
              <li><Link to="/contacts" className="text-gray-600 hover:text-pink-DEFAULT transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-1">📞</span>
                <span className="text-gray-600">Telegram: yu1rtq</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">📧</span>
                <span className="text-gray-600">Email: info@example.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">🕒</span>
                <span className="text-gray-600">Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Айша - Дизайнер инфографики. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
