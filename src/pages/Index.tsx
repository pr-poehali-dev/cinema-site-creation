import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold">FILM PRODUCTION COMPANY</div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#films" className="text-sm font-medium hover:text-primary transition-colors">Films</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About Us</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          <Icon name="Search" size={20} className="md:hidden" />
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[80vh] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            FILM PRODUCTION<br />COMPANY
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto animate-fade-in">
            Создаем кинематографические шедевры. От концепции до премьеры — полный цикл производства фильмов.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 animate-scale-in">
            View Project
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Полный спектр услуг кинопроизводства от идеи до готового фильма
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-border rounded-lg group-hover:bg-accent transition-colors">
                <Icon name="Camera" size={24} />
              </div>
              <h3 className="font-medium mb-2">Съемка</h3>
              <p className="text-sm text-muted-foreground">Профессиональная киносъемка</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-border rounded-lg group-hover:bg-accent transition-colors">
                <Icon name="Film" size={24} />
              </div>
              <h3 className="font-medium mb-2">Монтаж</h3>
              <p className="text-sm text-muted-foreground">Постпродакшн и монтаж</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-border rounded-lg group-hover:bg-accent transition-colors">
                <Icon name="Users" size={24} />
              </div>
              <h3 className="font-medium mb-2">Режиссура</h3>
              <p className="text-sm text-muted-foreground">Творческое руководство</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-border rounded-lg group-hover:bg-accent transition-colors">
                <Icon name="Play" size={24} />
              </div>
              <h3 className="font-medium mb-2">Продакшн</h3>
              <p className="text-sm text-muted-foreground">Организация производства</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="films" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Наши последние работы и проекты
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Featured Project */}
            <Card className="md:col-span-2 lg:col-span-2 bg-black text-white overflow-hidden group cursor-pointer">
              <CardContent className="p-0 relative min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="relative z-20 text-center p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">FILM PRODUCTION<br />COMPANY</h3>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Secondary Project */}
            <Card className="overflow-hidden group cursor-pointer">
              <div className="aspect-video relative">
                <img 
                  src="/img/b84e6fa3-a717-486e-8b07-8f58d3ee370f.jpg" 
                  alt="Film Project" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Кинематографический проект</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Профессиональная съемка с использованием современного оборудования
                </p>
                <Button variant="outline" size="sm" className="bg-black text-white border-black hover:bg-gray-800">
                  View Project
                </Button>
              </CardContent>
            </Card>

            {/* Additional Projects */}
            <Card className="overflow-hidden group cursor-pointer">
              <div className="aspect-video relative">
                <img 
                  src="/img/0a5be7b1-0bab-4a8e-a990-bf09306219b0.jpg" 
                  alt="Director Project" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Режиссерская работа</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Творческое руководство съемочным процессом
                </p>
                <Button variant="outline" size="sm" className="bg-black text-white border-black hover:bg-gray-800">
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group cursor-pointer">
              <div className="aspect-video relative">
                <img 
                  src="/img/36902313-6625-4a07-b13d-79451e8be325.jpg" 
                  alt="Premiere Event" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Премьерные события</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Организация и проведение кинопремьер
                </p>
                <Button variant="outline" size="sm" className="bg-black text-white border-black hover:bg-gray-800">
                  View Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании</h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Мы — команда профессионалов, создающих качественный киноконтент. 
                  Наш опыт охватывает все этапы кинопроизводства.
                </p>
                <p className="text-muted-foreground mb-8">
                  От разработки концепции до финальной премьеры — мы обеспечиваем 
                  полный цикл производства с вниманием к каждой детали.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                    <span>Более 50 завершенных проектов</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                    <span>Команда из 15+ специалистов</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                    <span>Современное техническое оснащение</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <Icon name="Play" size={48} className="text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Контакты</h2>
            <p className="text-gray-300 mb-12 text-lg">
              Готовы обсудить ваш проект? Свяжитесь с нами
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={24} />
                </div>
                <h3 className="font-medium mb-2">Телефон</h3>
                <p className="text-gray-300">+7 (495) 123-45-67</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} />
                </div>
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-gray-300">info@filmcompany.ru</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={24} />
                </div>
                <h3 className="font-medium mb-2">Адрес</h3>
                <p className="text-gray-300">Москва, ул. Примерная, 123</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Обсудить проект
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Film Production Company. Все права защищены.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}