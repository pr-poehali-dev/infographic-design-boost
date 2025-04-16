import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: "📊",
    title: "Инфографика для маркетплейсов",
    description: "Создание привлекательных и конвертирующих карточек товаров для Wildberries, Ozon и других площадок."
  },
  {
    icon: "📱",
    title: "Презентации и слайды",
    description: "Разработка презентаций для бизнеса, которые эффективно представляют ваши идеи и предложения."
  },
  {
    icon: "🎨",
    title: "Брендинг и фирменный стиль",
    description: "Создание уникального визуального образа, который выделит вас среди конкурентов."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Мои услуги</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Предлагаю комплексные решения для визуального представления вашего бизнеса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6 text-pink-dark">СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ:</h3>
          <ul className="space-y-2 max-w-2xl mx-auto">
            <li className="bg-white p-4 rounded-lg shadow-sm">
              При заказе от 9 слайдов – 1 слайд в подарок!
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm">
              Особые условия для крупных заказов
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm">
              При заказе от 10 слайдов 15% скидка!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
