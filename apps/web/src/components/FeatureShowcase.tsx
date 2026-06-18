"use client";

import { useEffect, useRef, useState } from "react";
import { Search, BarChart3, Settings, Bell, UserRound, Calendar, Folder, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Calculate which section we are looking at based on scroll
      // There are 3 sections, each takes about 100vh of scrolling space.
      // We start at top = 0.
      
      // Simplest way: use a set of refs for the text items
      const items = containerRef.current.querySelectorAll('.feature-item');
      let currentActive = 0;
      
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        // If the item's top is past the middle of the screen
        if (rect.top < windowHeight * 0.6) {
          currentActive = index;
        }
      });
      
      setActiveIndex(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col lg:flex-row gap-16 items-start">
      
      {/* LEFT: SCROLLABLE TEXT */}
      <div className="w-full lg:w-5/12 pb-[50vh]">
        <div className="feature-item min-h-[70vh] flex flex-col justify-center relative pl-8 before:absolute before:left-0 before:top-1/4 before:bottom-1/4 before:w-1 before:bg-primary/20 before:rounded-full">
          <div className={`absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-full transition-opacity duration-500 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}></div>
          <h3 className={`text-3xl font-bold mb-4 flex items-center gap-3 transition-colors duration-500 ${activeIndex === 0 ? 'text-primary' : 'text-foreground/50'}`}>
            <Search className="w-8 h-8" />
            Умный поиск
          </h3>
          <p className={`text-lg leading-relaxed transition-colors duration-500 ${activeIndex === 0 ? 'text-muted-foreground' : 'text-muted-foreground/50'}`}>
            Забудьте о необходимости каждый день вбивать десятки ключевых слов. Создайте профиль один раз, и наши алгоритмы будут автоматически находить релевантные закупки, отсеивая мусор с помощью минус-слов и фильтров по суммам и регионам.
          </p>
        </div>

        <div className="feature-item min-h-[70vh] flex flex-col justify-center relative pl-8 before:absolute before:left-0 before:top-1/4 before:bottom-1/4 before:w-1 before:bg-primary/20 before:rounded-full">
          <div className={`absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-full transition-opacity duration-500 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'}`}></div>
          <h3 className={`text-3xl font-bold mb-4 flex items-center gap-3 transition-colors duration-500 ${activeIndex === 1 ? 'text-primary' : 'text-foreground/50'}`}>
            <BarChart3 className="w-8 h-8" />
            AI-Аналитика
          </h3>
          <p className={`text-lg leading-relaxed transition-colors duration-500 ${activeIndex === 1 ? 'text-muted-foreground' : 'text-muted-foreground/50'}`}>
            Больше не нужно скачивать архивы с документацией на 100 страниц, чтобы понять суть тендера. Нейросеть проанализирует ТЗ, проект контракта и выделит самое важное: жесткие штрафы, неадекватные сроки, требования к опыту.
          </p>
        </div>

        <div className="feature-item min-h-[70vh] flex flex-col justify-center relative pl-8 before:absolute before:left-0 before:top-1/4 before:bottom-1/4 before:w-1 before:bg-primary/20 before:rounded-full">
          <div className={`absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-full transition-opacity duration-500 ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'}`}></div>
          <h3 className={`text-3xl font-bold mb-4 flex items-center gap-3 transition-colors duration-500 ${activeIndex === 2 ? 'text-primary' : 'text-foreground/50'}`}>
            <Settings className="w-8 h-8" />
            Система управления
          </h3>
          <p className={`text-lg leading-relaxed transition-colors duration-500 ${activeIndex === 2 ? 'text-muted-foreground' : 'text-muted-foreground/50'}`}>
            Ведите воронку продаж прямо в интерфейсе Tender AI. Ставьте метки "Участвуем", "Отказ", "На просчет". Все данные синхронизированы: то, что вы пометили в Telegram-боте, сразу отобразится на дашборде.
          </p>
        </div>
      </div>

      {/* RIGHT: STICKY MOCKUP */}
      <div className="w-full lg:w-7/12 sticky top-32 h-[600px] mb-24 rounded-2xl border border-border bg-background shadow-2xl overflow-hidden flex text-sm transition-all duration-700">
        
        {/* Mockup Sidebar */}
        <div className="w-64 border-r border-border bg-muted/10 p-4 hidden md:flex flex-col gap-6 transition-colors duration-500">
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">Tender AI</span>
            <div className="relative">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-background"></span>
            </div>
          </div>

          <div className={`space-y-1 transition-all duration-500 ${activeIndex === 0 ? 'opacity-100 translate-x-0' : 'opacity-50 -translate-x-2'}`}>
            <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Ключи поиска</div>
            <div className="flex justify-between items-center py-1.5 px-2 rounded-md hover:bg-muted cursor-pointer font-medium text-primary bg-primary/5">
              <span>IT-оборудование</span>
              <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">34</span>
            </div>
            <div className="flex justify-between items-center py-1.5 px-2 rounded-md hover:bg-muted cursor-pointer text-muted-foreground">
              <span>ПО и Лицензии</span>
              <span className="bg-muted text-foreground text-xs px-2 py-0.5 rounded-full">12</span>
            </div>
            <div className="flex justify-between items-center py-1.5 px-2 rounded-md hover:bg-muted cursor-pointer text-muted-foreground">
              <span>Разработка</span>
              <span className="bg-muted text-foreground text-xs px-2 py-0.5 rounded-full">8</span>
            </div>
          </div>

          <div className={`space-y-1 transition-all duration-500 ${activeIndex === 2 ? 'opacity-100 translate-x-0' : 'opacity-50 -translate-x-2'}`}>
            <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Метки</div>
            <div className={`flex items-center gap-2 py-1.5 px-2 rounded-md ${activeIndex === 2 ? 'bg-green-500/10 text-green-600 font-medium' : 'hover:bg-muted cursor-pointer'}`}>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <span>Участвуем</span>
            </div>
            <div className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-muted cursor-pointer">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
              <span>Юристу</span>
            </div>
            <div className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-muted cursor-pointer">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
              <span>Отказ</span>
            </div>
          </div>
        </div>

        {/* Mockup Main Content */}
        <div className="flex-1 flex flex-col bg-background relative">
          <div className="h-14 border-b border-border flex items-center px-4 justify-between bg-muted/5">
            <div className="relative w-64">
              <Search className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${activeIndex === 0 ? 'text-primary' : 'text-muted-foreground'}`} />
              <input type="text" placeholder="Поиск по закупкам..." className={`w-full pl-9 pr-4 py-1.5 text-sm bg-background border transition-colors rounded-md outline-none ${activeIndex === 0 ? 'border-primary ring-1 ring-primary' : 'border-border'}`} />
            </div>
          </div>

          <div className="flex-1 p-4 overflow-hidden relative">
            
            {/* List View (always visible but shifts) */}
            <div className={`space-y-3 transition-transform duration-700 ease-out ${activeIndex === 1 ? '-translate-x-full opacity-0 absolute w-full' : 'translate-x-0 opacity-100'}`}>
              <div className={`border rounded-lg p-4 cursor-pointer transition-colors relative overflow-hidden ${activeIndex === 2 ? 'border-green-500/50 bg-green-500/5' : 'border-primary/30 bg-primary/5'}`}>
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${activeIndex === 2 ? 'bg-green-500' : 'bg-primary'}`}></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Поставка серверного оборудования и СХД</div>
                    <div className="font-semibold text-base">2 500 000 ₽</div>
                  </div>
                  {activeIndex === 2 && (
                    <div className="flex items-center gap-2 text-xs">
                      <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded">Участвуем</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-3">
                  <span className="flex items-center gap-1"><UserRound className="w-3 h-3" /> ФНС России</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Осталось 4 дня</span>
                </div>
              </div>

              <div className="border border-border bg-card rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Оказание услуг по технической поддержке ПО</div>
                    <div className="font-semibold text-base">850 000 ₽</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-3">
                  <span className="flex items-center gap-1"><UserRound className="w-3 h-3" /> ГУП Водоканал</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Осталось 12 дней</span>
                </div>
              </div>
            </div>

            {/* AI Detail Overlay (Visible mainly on index 1) */}
            <div className={`absolute inset-0 bg-background border-l border-border shadow-2xl p-6 transition-transform duration-700 ease-out z-10 ${activeIndex === 1 ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <span className="font-medium text-primary">AI-Анализ завершен</span>
              </div>
              
              <h4 className="font-bold text-lg leading-tight mb-6">
                Поставка серверного оборудования и СХД для нужд ведомства
              </h4>

              <div className="space-y-6 text-sm">
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-2 font-semibold text-primary mb-3">
                    <BarChart3 className="w-5 h-5" />
                    Выжимка из документации (74 стр.)
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Заказчик надежный: выплаты без задержек по 98% контрактов.</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold text-white mt-0.5 shrink-0">!</div>
                      <span><strong>Риск:</strong> Жесткие сроки поставки — 10 дней с момента подписания.</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Требуется предоставление аналогичного контракта по 44-ФЗ за последний год.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-border space-y-3">
                  <div className="text-muted-foreground font-medium mb-2">Исходные документы</div>
                  <div className="flex items-center gap-3 p-3 border border-border rounded-lg bg-card">
                    <Folder className="w-5 h-5 text-blue-500" />
                    <span className="truncate font-medium">Техническое_задание_финал.docx</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 border border-border rounded-lg bg-card">
                    <Folder className="w-5 h-5 text-blue-500" />
                    <span className="truncate font-medium">Проект_контракта_сервер.pdf</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
