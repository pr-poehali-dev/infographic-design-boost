import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Анна Миронова",
    company: "Маркетолог, ООО 'ИнноСтарт'",
    text: "Милана создала серию потрясающих инфографик для нашего годового отчета. Сложные данные превратились в понятные и привлекательные визуализации. Очень довольны результатом!",
    avatar: "/placeholder.svg",
    initials: "АМ"
  },
  {
    id: 2,
    name: "Дмитрий Соколов",
    company: "CEO, BrandEx",
    text: "Работать с Миланой — одно удовольствие. Она не только талантливый дизайнер, но и отлично разбирается в бизнес-процессах, что очень помогло при создании презентации для инвесторов.",
    avatar: "/placeholder.svg",
    initials: "ДС"
  },
  {
    id: 3,
    name: "Екатерина Волкова",
    company: "Контент-менеджер, Style Magazine",
    text: "Инфографика для нашего Instagram-аккаунта получилась выше всяких похвал! Подписчики активно делились постами, а охваты выросли на 40%. Обязательно продолжим сотрудничество.",
    avatar: "/placeholder.svg",
    initials: "ЕВ"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-lightest rounded-full blur-3xl opacity-60 -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lavender-light rounded-full blur-3xl opacity-60 -z-10 transform translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-pink-dark font-medium mb-3">Отзывы</p>
          <h2 className="section-heading">Что говорят клиенты</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мнения тех, кто уже оценил мою работу
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="border-none rounded-xl shadow-softer card-hover bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="text-5xl text-pink-light opacity-60 mb-4">"</div>
                    <p className="text-gray-600">{testimonial.text}</p>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-pink-lightest flex items-center">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-pink-lighter">
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
        
        <div className="mt-16 p-6 bg-gradient-to-r from-pink-lightest to-pink-lighter rounded-xl text-center shadow-softer">
          <p className="text-xl font-medium mb-2">Более 100 успешных проектов</p>
          <p className="text-gray-600">Присоединяйтесь к числу довольных клиентов!</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
