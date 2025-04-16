import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-lightest rounded-full blur-2xl opacity-60 -z-10"></div>
            
            <p className="text-pink-dark font-medium mb-4">Креативный дизайнер инфографики</p>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Превращаю данные в
              <span className="gradient-text"> красивую историю</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Создаю уникальную инфографику, которая помогает вашей аудитории легко понять 
              сложную информацию и принять правильное решение.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-pink-medium hover:bg-pink-dark text-white rounded-full px-8 py-6">
                <Link to="/portfolio">Мои работы</Link>
              </Button>
              
              <Button asChild variant="outline" className="border-pink-light text-foreground hover:bg-pink-lightest rounded-full px-8 py-6">
                <Link to="/contacts">Обсудить проект</Link>
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-lavender-DEFAULT flex items-center justify-center text-sm font-medium">К</div>
                <div className="w-10 h-10 rounded-full bg-mint-DEFAULT flex items-center justify-center text-sm font-medium">А</div>
                <div className="w-10 h-10 rounded-full bg-pink-light flex items-center justify-center text-sm font-medium">М</div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-medium">100+</span> счастливых клиентов
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-lighter rounded-full blur-3xl opacity-40 -z-10"></div>
            
            <div className="bg-white rounded-2xl p-2 shadow-soft relative animate-float">
              <img 
                src="/placeholder.svg" 
                alt="Дизайн инфографики" 
                className="w-full h-full object-cover rounded-xl"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-3 shadow-soft">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="font-bold">4.9/5.0</p>
                    <p className="text-xs text-gray-500">150+ отзывов</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-white rounded-lg p-3 shadow-soft">
                <div className="flex items-center justify-center w-12 h-12 bg-pink-lightest rounded-full">
                  <span className="text-2xl">🎨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
