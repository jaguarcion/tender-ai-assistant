import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gradient-to-b from-background to-gray-50 dark:to-gray-900">
      <main className="flex flex-col items-center max-w-3xl gap-8">
        <h1 className="text-5xl font-bold tracking-tight text-primary">Тендерный AI-ассистент</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Находите подходящие закупки быстрее. AI-ассистент ищет тендеры под ваш бизнес, 
          фильтрует нерелевантные и присылает в Telegram только самое важное.
        </p>
        
        <div className="flex gap-4 mt-4">
          <Link 
            href="/register" 
            className="px-6 py-3 font-semibold text-white transition-colors rounded-lg bg-primary hover:bg-blue-600"
          >
            Попробовать бесплатно
          </Link>
          <Link 
            href="/login" 
            className="px-6 py-3 font-semibold text-gray-700 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
          >
            Войти
          </Link>
        </div>

        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 max-w-xl text-left w-full">
          <h2 className="font-semibold text-lg mb-2">🟢 Подходящая закупка (Пример)</h2>
          <p className="text-sm text-gray-500 mb-4">Название: Поставка лицензий Microsoft Office<br/>Сумма: 485 000 ₽</p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-sm border border-gray-100 dark:border-gray-700">
            <span className="font-semibold text-primary">AI-анализ:</span> Нужно поставить лицензии Microsoft Office для учреждения. Требуется подтвердить соответствие ТЗ и сроки поставки.
            <br/><br/>
            <span className="font-semibold text-green-600">Рекомендация:</span> Стоит рассмотреть участие.
          </div>
        </div>
      </main>
    </div>
  );
}
