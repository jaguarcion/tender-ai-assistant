import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Search, ShieldCheck, Target } from "lucide-react"

async function getDashboardStats() {
  const res = await fetch('http://localhost:4000/api/dashboard/stats', { cache: 'no-store' });
  if (!res.ok) return { newTenders: 0, activeProfiles: 0, aiAnalyzed: 0, savedTime: 0 };
  return res.json();
}

async function getRecentTenders() {
  const res = await fetch('http://localhost:4000/api/tenders', { cache: 'no-store' });
  if (!res.ok) return { items: [] };
  const data = await res.json();
  return data.items.slice(0, 5); // Return top 5
}

export default async function DashboardPage() {
  const stats = await getDashboardStats();
  const recentTenders = await getRecentTenders();

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Дашборд</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Новые закупки</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{stats.newTenders}</div>
            <p className="text-xs text-muted-foreground">за последние 24 часа</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Активные профили</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeProfiles}</div>
            <p className="text-xs text-muted-foreground">работают круглосуточно</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI проанализировано</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.aiAnalyzed}</div>
            <p className="text-xs text-muted-foreground">документов за месяц</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Сэкономлено времени</CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">~{stats.savedTime} ч.</div>
            <p className="text-xs text-muted-foreground">благодаря выжимкам</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Недавние подходящие тендеры</CardTitle>
            <CardDescription>Закупки с наивысшим AI-рейтингом за сегодня.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentTenders.length === 0 ? (
                <p className="text-muted-foreground text-sm">Пока нет новых подходящих тендеров.</p>
              ) : (
                recentTenders.map((match: any) => (
                  <div key={match.id} className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{match.tender.title}</p>
                      <p className="text-sm text-muted-foreground">{match.tender.customerName} • {match.tender.price?.toLocaleString()} ₽</p>
                    </div>
                    <div className="ml-auto font-medium text-green-600">
                      Рейтинг: {match.score}%
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Статус системы</CardTitle>
            <CardDescription>Парсеры и Telegram-бот.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                <span className="text-sm">ЕИС Закупки (Синхронизировано)</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                <span className="text-sm">B2B Center (Синхронизировано)</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                <span className="text-sm">Telegram Бот (Онлайн)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
