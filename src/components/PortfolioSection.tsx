import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const portfolioCategories = [
  { id: "all", label: "Все работы" },
  { id: "marketplace", label: "Маркетплейсы" },
  { id: "presentations", label: "Презентации" },
  { id: "branding", label: "Брендинг" }
];

const portfolioItems = [
  {
    id: 1,
    title: "Инфографика Wildberries",
    category: "marketplace",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Презентация для стартапа",
    category: "presentations",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Брендбук компании",
    category: "branding",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Карточка товара на Ozon",
    category: "marketplace",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Инвестиционная презентация",
    category: "presentations",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Логотип и фирменный стиль",
    category: "branding",
    image: "/placeholder.svg"
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Портфолио</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ознакомьтесь с примерами моих работ в различных сферах дизайна инфографики
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex justify-center mb-8 flex-wrap">
            {portfolioCategories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-pink-light data-[state=active]:text-pink-dark"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Вкладка "Все работы" */}
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map(item => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          {/* Вкладки по категориям */}
          {portfolioCategories.slice(1).map(category => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems
                  .filter(item => item.category === category.id)
                  .map(item => (
                    <PortfolioCard key={item.id} item={item} />
                  ))
                }
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-pink-DEFAULT hover:bg-pink-dark text-white">
            <Link to="/portfolio">Смотреть все работы</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-0">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
          <p className="text-sm text-gray-500">
            {portfolioCategories.find(cat => cat.id === item.category)?.label}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSection;
