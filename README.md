# Сайт репетитора по математике - Никитина София Дмитриевна

Современный и стильный веб-сайт для репетитора по математике: занятия для учеников 5–9 классов и подготовка к ОГЭ.

🌐 **Live сайт:** https://same-228gzkhba51-latest.netlify.app
📦 **GitHub:** https://github.com/by22shh/math-tutor-website

## ✨ Особенности

- 🎨 Современный дизайн с градиентами и анимациями
- 📱 Адаптивный дизайн для всех устройств
- 🚀 Быстрая загрузка страниц
- 📝 Форма заявки с валидацией
- 💬 Интеграция с Telegram и WhatsApp
- ⭐ Секция с отзывами
- 💰 Прозрачное ценообразование
 - 🎓 Индивидуальные занятия для 5–9 классов
 - 🧭 Целевая подготовка к ОГЭ

## 🛠 Технологии

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Language:** TypeScript
- **Package Manager:** Bun

## 📦 Установка

1. Установите зависимости:
```bash
bun install
```

2. Создайте файл `.env.local` на основе `.env.example`:
```bash
cp .env.example .env.local
```

3. Настройте переменные окружения в `.env.local`:

### Настройка Telegram Bot

1. Создайте бота через [@BotFather](https://t.me/BotFather)
   - Отправьте команду `/newbot`
   - Выберите имя и username для бота
   - Скопируйте токен бота

2. Получите ваш Chat ID
   - Напишите боту [@userinfobot](https://t.me/userinfobot)
   - Скопируйте ваш ID

3. Добавьте в `.env.local`:
```env
TELEGRAM_BOT_TOKEN=ваш_токен_бота
TELEGRAM_CHAT_ID=ваш_chat_id
```

### Настройка WhatsApp (опционально)

Для интеграции с WhatsApp можно использовать один из сервисов:
- [Twilio](https://www.twilio.com/)
- [Green API](https://green-api.com/)
- [WhatsApp Business API](https://business.whatsapp.com/)

Добавьте в `.env.local`:
```env
WHATSAPP_PHONE=79999999999
WHATSAPP_API_KEY=ваш_api_ключ
```

## 🚀 Запуск

### Режим разработки
```bash
bun run dev
```

Сайт будет доступен по адресу [http://localhost:3000](http://localhost:3000)

### Production build
```bash
bun run build
bun run start
```

## 📝 Структура проекта

```
src/
├── app/
│   ├── api/
│   │   └── booking/
│   │       └── route.ts       # API endpoint для обработки заявок
│   ├── globals.css            # Глобальные стили
│   ├── layout.tsx             # Основной layout
│   └── page.tsx               # Главная страница
├── components/
│   ├── ui/                    # UI компоненты (shadcn)
│   ├── Hero.tsx               # Героическая секция
│   ├── About.tsx              # О репетиторе
│   ├── Benefits.tsx           # Преимущества
│   ├── Pricing.tsx            # Цены
│   ├── BookingForm.tsx        # Форма заявки
│   ├── Testimonials.tsx       # Отзывы
│   └── Contact.tsx            # Контакты
└── lib/
    └── utils.ts               # Утилиты
```

## 🎨 Кастомизация

### Изменение цветовой схемы
Отредактируйте файл `src/app/globals.css` для изменения цветовой палитры.

### Изменение контента
- Информация о репетиторе: `src/components/About.tsx`
- Преимущества: `src/components/Benefits.tsx`
- Отзывы: `src/components/Testimonials.tsx`
- Контакты: `src/components/Contact.tsx`

### Изменение статистики
В файле `src/components/Hero.tsx` измените статистику в секции Stats.

## 📧 API Endpoints

### POST /api/booking
Обрабатывает заявки на занятия.

**Request body:**
```json
{
  "name": "Имя",
  "phone": "+7 999 999-99-99",
  "email": "email@example.com",
  "message": "Сообщение"
}
```

**Response:**
```json
{
  "message": "Заявка успешно отправлена"
}
```

При успешной отправке заявка автоматически отправляется в Telegram и WhatsApp.

## 🚀 Деплой

Сайт можно развернуть на:
- [Vercel](https://vercel.com/) (рекомендуется для Next.js)
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)

Не забудьте добавить переменные окружения в настройках хостинга!

## 📄 Лицензия

Этот проект создан для личного использования.

## 👤 Контакты

**Никитина София Дмитриевна**
- Telegram: [@sssssssssofaa](https://t.me/sssssssssofaa)
- WhatsApp: [+7 923 700-40-30](https://wa.me/79237004030)
- Телефон: +7 923 700-40-30

---

**Разработано с ❤️ для учеников 5–9 классов и подготовки к ОГЭ**
