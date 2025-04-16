import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Свяжитесь со мной</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Расскажите о вашем проекте, и я предложу оптимальное решение
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Мой подход к работе</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 flex-shrink-0 bg-pink-light rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Анализ ниши и конкурентов</h4>
                  <p className="text-gray-600">
                    Изучаю ваш бизнес, целевую аудиторию и конкурентов для создания эффективной инфографики.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex-shrink-0 bg-pink-light rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Подбор референсов и создание ТЗ</h4>
                  <p className="text-gray-600">
                    Вместе подбираем примеры и составляем детальное техническое задание для проекта.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex-shrink-0 bg-pink-light rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Создание дизайна и внесение правок</h4>
                  <p className="text-gray-600">
                    Разрабатываю дизайн с учетом ваших пожеланий и вношу необходимые корректировки.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">📱</span>
                      <div>
                        <h4 className="font-medium">Telegram</h4>
                        <p className="text-gray-600">yu1rtq</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">📧</span>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-600">info@example.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">🕒</span>
                      <div>
                        <h4 className="font-medium">Часы работы</h4>
                        <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Напишите мне</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Ваше имя *
                      </label>
                      <Input id="name" placeholder="Введите ваше имя" required />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email *
                      </label>
                      <Input id="email" type="email" placeholder="Введите ваш email" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Телефон
                    </label>
                    <Input id="phone" placeholder="Введите ваш телефон" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Тема *
                    </label>
                    <Input id="subject" placeholder="Тема сообщения" required />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Сообщение *
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о вашем проекте..." 
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-pink-DEFAULT hover:bg-pink-dark text-white">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
