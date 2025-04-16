import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Увеличиваю продажи вашего бизнеса с помощью
              <span className="text-pink-dark"> эффективной инфографики</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Создаю уникальный дизайн, который подчеркивает ваши конкурентные преимущества 
              и превращает посетителей в клиентов.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-pink-DEFAULT hover:bg-pink-dark text-white">
                <Link to="/portfolio">Посмотреть портфолио</Link>
              </Button>
              
              <Button asChild variant="outline" className="border-pink-DEFAULT text-pink-DEFAULT hover:bg-pink-light">
                <Link to="/contacts">Связаться со мной</Link>
              </Button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/placeholder.svg" 
              alt="Дизайн инфографики" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
