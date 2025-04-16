import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-20 bg-pink-lightest relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-light rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-pink-dark font-medium mb-3">Контакты</p>
          <h2 className="section-heading">Давайте работать вместе</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Расскажите о вашем проекте, и я помогу визуализировать ваши идеи
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 gradient-text">Как я работаю</h3>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="mr-5 flex-shrink-0 bg-white rounded-full w-14 h-14 flex items-center justify-center text-xl shadow-softer">
                  <span className="gradient-text font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-3">Обсуждение идеи</h4>
                  <p className="text-gray-600">
                    Мы начинаем с детального обсуждения вашего проекта, целей и ожиданий.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-5 flex-shrink-0 bg-white rounded-full w-14 h-14 flex items-center justify-center text-xl shadow-softer">
                  <span className="gradient-text font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-3">Концепция и эскизы</h4>
                  <p className="text-gray-600">
                    Создаю первые концепции и эскизы, которые мы вместе обсуждаем и корректируем.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-5 flex-shrink-0 bg-white rounded-full w-14 h-14 flex items-center justify-center text-xl shadow-softer">
                  <span className="gradient-text font-bold">03</span>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-3">Финальная реализация</h4>
                  <p className="text-gray-600">
                    Готовлю финальную версию проекта с учетом всех правок и пожеланий.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
              <Card className="border-none shadow-softer rounded-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-pink-lightest flex items-center justify-center text-2xl mr-4">
                        📱
                      </div>
                      <div>
                        <h4 className="font-medium">Telegram</h4>
                        <p className="text-gray-600">milana_design</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-pink-lightest flex items-center justify-center text-2xl mr-4">
                        📧
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-600">hello@milana-design.ru</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-pink-lightest flex items-center justify-center text-2xl mr-4">
                        🕒
                      </div>
                      <div>
                        <h4 className="font-medium">Часы работы</h4>
                        <p className="text-gray-600">Пн-Пт: 10:00 - 19:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <Card className="border-none shadow-softer rounded-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Напишите мне</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                        Ваше имя *
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Введите ваше имя" 
                        required 
                        className="border-pink-lighter focus-visible:ring-pink-light rounded-lg py-6"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                        Email *
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Введите ваш email" 
                        required 
                        className="border-pink-lighter focus-visible:ring-pink-light rounded-lg py-6"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground/80">
                      Тема сообщения *
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Тема вашего сообщения" 
                      required 
                      className="border-pink-lighter focus-visible:ring-pink-light rounded-lg py-6"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                      Сообщение *
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о вашем проекте..." 
                      className="min-h-[180px] border-pink-lighter focus-visible:ring-pink-light rounded-lg"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-pink-DEFAULT to-pink-medium hover:from-pink-medium hover:to-pink-dark text-foreground rounded-lg py-6"
                  >
                    Отправить сообщение
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500 mt-4">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
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
