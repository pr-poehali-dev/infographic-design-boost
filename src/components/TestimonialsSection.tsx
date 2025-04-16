import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Иван Петров",
    company: "ООО 'ТехноСтарт'",
    text: "Айша создала потрясающую инфографику для нашего стартапа. Благодаря ее работе, наша конверсия выросла на 25% в первый месяц!",
    avatar: "/placeholder.svg",
    initials: "ИП"
  },
  {
    id: 2,
    name: "Мария Сидорова",
    company: "Интернет-магазин 'Стиль'",
    text: "Карточки товаров, созданные Айшей, привлекают намного больше внимания на Wildberries. Видно, что она действительно понимает специфику маркетплейсов.",
    avatar: "/placeholder.svg",
    initials: "МС"
  },
  {
    id: 3,
    name: "Алексей Николаев",
    company: "Консалтинговая фирма 'Прогресс'",
    text: "Презентация для нашего инвестиционного проекта получилась выше всяких похвал. Айша учла все пожелания и внесла свои креативные идеи, которые сделали материал еще более убедительным.",
    avatar: "/placeholder.svg",
    initials: "АН"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Что говорят клиенты о работе со мной
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="text-4xl text-pink-DEFAULT opacity-50 mb-2">"</div>
                    <p className="text-gray-600 italic">{testimonial.text}</p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-pink-light text-pink-dark">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
