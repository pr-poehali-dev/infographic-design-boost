import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: "📊",
    title: "Инфографика для бизнеса",
    description: "Визуализация данных, превращение сложной информации в понятные и привлекательные графики."
  },
  {
    icon: "📱",
    title: "Презентации и слайды",
    description: "Разработка стильных презентаций, которые эффективно донесут ваши идеи до аудитории."
  },
  {
    icon: "🎨",
    title: "Маркетинговые материалы",
    description: "Создание инфографики для социальных сетей, веб-сайтов и печатных материалов."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-lightest rounded-full blur-3xl opacity-60 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavender-light rounded-full blur-3xl opacity-60 -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-pink-dark font-medium mb-3">Что я предлагаю</p>
          <h2 className="section-heading">Мои услуги</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Превращаю сложные данные в красивые и понятные визуальные истории
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-softer rounded-xl hover:shadow-soft transition-all hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-pink-lightest flex items-center justify-center text-4xl mb-4">
                  {service.icon}
                </div>
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
        
        <div className="mt-16 p-8 bg-gradient-to-r from-pink-lightest to-lavender-light rounded-2xl shadow-softer">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-pink-dark">Специальные предложения</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-softer card-hover">
              <div className="text-2xl mb-2">✨</div>
              <h4 className="font-medium mb-2">Первый заказ</h4>
              <p className="text-gray-600">Скидка 10% на первый заказ любой инфографики</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-softer card-hover">
              <div className="text-2xl mb-2">🎁</div>
              <h4 className="font-medium mb-2">Комплексный заказ</h4>
              <p className="text-gray-600">При заказе от 5 слайдов — один в подарок</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-softer card-hover">
              <div className="text-2xl mb-2">🔄</div>
              <h4 className="font-medium mb-2">Постоянным клиентам</h4>
              <p className="text-gray-600">Специальные условия для долгосрочного сотрудничества</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
