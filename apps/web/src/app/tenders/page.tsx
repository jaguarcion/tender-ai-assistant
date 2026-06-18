import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

async function getTenders() {
  const res = await fetch('http://localhost:4000/api/tenders', { cache: 'no-store' });
  if (!res.ok) return { items: [] };
  return res.json();
}

export default async function TendersPage() {
  const { items } = await getTenders();

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Закупки</h2>
        <div className="flex items-center space-x-2">
          <Button>Синхронизировать</Button>
        </div>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[400px]">Название / Заказчик</TableHead>
              <TableHead>Сумма</TableHead>
              <TableHead>AI Рейтинг</TableHead>
              <TableHead>Дедлайн</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">Нет данных</TableCell>
              </TableRow>
            ) : (
              items.map((match: any) => (
                <TableRow key={match.id}>
                  <TableCell className="font-medium">
                    <div className="line-clamp-2" title={match.tender.title}>{match.tender.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{match.tender.customerName}</div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">{match.tender.price?.toLocaleString()} ₽</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className={`w-2 h-2 rounded-full mr-2 ${match.score > 85 ? 'bg-green-500' : match.score > 70 ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
                      {match.score}%
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {new Date(match.tender.deadlineDate).toLocaleDateString('ru-RU')}
                  </TableCell>
                  <TableCell>
                    {match.status === 'new' && <Badge variant="default" className="bg-green-500 hover:bg-green-600">Новое</Badge>}
                    {match.status === 'viewed' && <Badge variant="secondary">Просмотрено</Badge>}
                    {match.status === 'favorite' && <Badge variant="default" className="bg-yellow-500 hover:bg-yellow-600">Избранное</Badge>}
                    {match.status === 'hidden' && <Badge variant="outline">Скрыто</Badge>}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">Подробнее</Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
