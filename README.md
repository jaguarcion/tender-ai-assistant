# Тендерный AI-ассистент

Сервис для автоматического поиска, фильтрации, анализа и отправки пользователям подходящих тендеров и закупок.

## Архитектура
Проект построен как монорепозиторий (Turborepo + pnpm):
- `apps/web`: Next.js интерфейс пользователя и администратора.
- `apps/api`: REST API (Node.js/Fastify/NestJS).
- `apps/bot`: Telegram-бот (Telegraf).
- `apps/worker`: Фоновые задачи, очереди BullMQ (поиск, анализ, рассылка).
- `packages/database`: Схема Prisma и миграции.
- `packages/shared`: Общие типы и утилиты.
- `packages/ai`: Логика AI-анализа.
- `packages/tender-sources`: Интеграция с источниками закупок.
- `packages/config`: Общие настройки и конфиги (eslint, tsconfig).

## Требования
- Node.js >= 18
- pnpm >= 9
- Docker & Docker Compose

## Как запустить локально

1. Установите зависимости:
```bash
pnpm install
```

2. Запустите базы данных:
```bash
docker compose up -d
```

3. Скопируйте `.env.example` в `.env` и настройте переменные:
```bash
cp .env.example .env
```

4. Запустите миграции Prisma:
```bash
pnpm --filter database prisma db push
```
*(Или `prisma migrate dev`, когда миграции будут готовы)*

5. Запустите все сервисы:
```bash
pnpm dev
```
