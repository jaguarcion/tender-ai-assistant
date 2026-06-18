import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Settings2, Trash2 } from "lucide-react"

async function getProfiles() {
  const res = await fetch('http://localhost:4000/api/search-profiles', { cache: 'no-store' });
  if (!res.ok) return { items: [] };
  return res.json();
}

export default async function ProfilesPage() {
  const { items } = await getProfiles();

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Профили поиска</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Новый профиль
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.length === 0 ? (
          <div className="col-span-3 text-center py-10 text-muted-foreground border rounded-lg bg-card">
            У вас пока нет профилей поиска. Создайте первый, чтобы AI начал искать тендеры.
          </div>
        ) : (
          items.map((profile: any) => (
            <Card key={profile.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{profile.name}</CardTitle>
                  <Badge variant={profile.isActive ? "default" : "secondary"}>
                    {profile.isActive ? "Активен" : "Пауза"}
                  </Badge>
                </div>
                <CardDescription>
                  Создан: {new Date(profile.createdAt).toLocaleDateString('ru-RU')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Ключевые слова:</h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.keywords.map((word: string, i: number) => (
                      <Badge key={i} variant="outline">{word}</Badge>
                    ))}
                  </div>
                </div>
                {profile.regions.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Регионы:</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.regions.map((reg: string, i: number) => (
                        <Badge key={i} variant="outline" className="bg-blue-500/10 text-blue-600">{reg}</Badge>
                      ))}
                    </div>
                  </div>
                )}
                <div className="text-sm">
                  <span className="font-medium">Сумма от: </span>
                  {profile.minPrice ? `${profile.minPrice.toLocaleString()} ₽` : 'Любая'}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <Button variant="outline" size="sm">
                  <Settings2 className="mr-2 h-4 w-4" /> Настроить
                </Button>
                <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
