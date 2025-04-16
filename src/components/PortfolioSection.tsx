import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const portfolioCategories = [
  { id: "all", label: "Все работы" },
  { id: "infographics", label: "Инфографика" },
  { id: "presentations", label: "Презентации" },
  { id: "social", label: "Для соцсетей" }
];

const portfolioItems = [
  {
    id: 1,
    title: "Визуализация данных",
    category: "infographics",
    image: "/placeholder.svg",
    tools: ["Illustrator", "Figma"]
  },
  {
    id: 2,
    title: "Презентация для стартапа",
    category: "presentations",
    image: "/placeholder.svg",
    tools: ["PowerPoint", "Photoshop"]
  },
  {
    id: 3,
    title: "Инфографика для Instagram",
    category: "social",
    image: "/placeholder.svg",
    tools: ["Illustrator", "Canva"]
  },
  {
    id: 4,
    title: "Годовой отчёт компании",
    category: "infographics",
    image: "/placeholder.svg",
    tools: ["Illustrator", "InDesign"]
  },
  {
    id: 5,
    title: "Инвестиционная презентация",
    category: "presentations",
    image: "/placeholder.svg",
    tools: ["PowerPoint", "Illustrator"]
  },
  {
    id: 6,
    title: "Серия постов для Facebook",
    category: "social",
    image: "/placeholder.svg",
    tools: ["Photoshop", "Canva"]
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-pink-lightest">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-pink-dark font-medium mb-3">Мои проекты</p>
          <h2 className="section-heading">Портфолио</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Примеры моих работ в области визуализации данных и инфографики
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex justify-center mb-10 flex-wrap bg-white/30 backdrop-blur-sm p-1 rounded-full mx-auto max-w-xl">
            {portfolioCategories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-white data-[state=active]:text-pink-dark rounded-full px-6"
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
        
        <div className="mt-16 text-center">
          <Button asChild className="bg-pink-medium hover:bg-pink-dark text-white rounded-full px-8 py-6">
            <Link to="/portfolio">Все проекты</Link>
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
  tools: string[];
}

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  return (
    <Card className="overflow-hidden border-none rounded-xl shadow-softer card-hover">
      <CardContent className="p-0">
        <div className="relative group">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
            <div className="p-6 text-white">
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-white/90">
                {portfolioCategories.find(cat => cat.id === item.category)?.label}
              </p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
          <div className="flex gap-2 mt-2">
            {item.tools.map((tool, index) => (
              <span key={index} className="text-xs bg-pink-lightest text-pink-dark px-2 py-1 rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSection;
