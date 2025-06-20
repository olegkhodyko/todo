# Архитектура Todo App

## Структура проекта

```
src/
├── api/           # API клиент и конфигурация
├── app/           # Корневой компонент приложения
├── config/        # Конфигурация приложения
├── navigation/    # Навигация
├── screens/       # Экраны приложения
│   └── Home/      # Главный экран
│       ├── components/  # Компоненты экрана
│       ├── hooks/       # Кастомные хуки
│       ├── modules/     # Модули экрана
│       └── store/       # Zustand stores
├── shared/        # Общие компоненты и типы
│   ├── constants/ # Константы
│   ├── layout/    # Компоненты макета
│   ├── types/     # TypeScript типы
│   └── ui/        # UI компоненты
├── styles/        # Глобальные стили
└── utils/         # Утилиты
```

## Основные принципы

### 1. Разделение ответственности

- **taskFormStore**: Управление формой задачи
- **taskFilterStore**: Управление фильтрацией
- **useTasks**: Логика работы с API

### 2. Типизация

- Строгая типизация всех компонентов и функций
- Использование TypeScript для предотвращения ошибок

### 3. Переиспользование

- Утилиты для валидации, форматирования и работы с массивами
- Константы для избежания магических строк
- Общие UI компоненты

### 4. Производительность

- Мемоизация компонентов с React.memo
- useCallback для функций
- useMemo для вычислений

## Store Architecture

### taskFormStore

```typescript
interface TaskFormState {
  title: string;
  description: string;
  important: boolean;
  editingTask: Task | null;
  // ... методы
}
```

### taskFilterStore

```typescript
interface TaskFilterState {
  filterType: 'all' | 'important';
  setFilterType: (type: 'all' | 'important') => void;
}
```

## Утилиты

### Валидация

- `validateTaskTitle()`: Валидация заголовка задачи
- `validateTaskDescription()`: Валидация описания
- `validateTask()`: Комплексная валидация

### Форматирование

- `formatDate()`: Форматирование даты
- `formatDateTime()`: Форматирование даты и времени
- `truncateText()`: Обрезка текста
- `capitalizeFirst()`: Капитализация первой буквы

### Работа с массивами

- `filterTasks()`: Фильтрация задач
- `sortTasks()`: Сортировка задач
- `groupTasksByStatus()`: Группировка по статусу
- `getTaskStats()`: Статистика задач

## Константы

### API Endpoints

```typescript
export const API_ENDPOINTS = {
  TASKS: '/',
  TASK_DONE: (id: string) => `/${id}/done`,
};
```

### Сообщения

```typescript
export const VALIDATION_MESSAGES = {
  TASK_TITLE_REQUIRED: 'Task name cannot be empty',
  VALIDATION_ERROR: 'Validation Error',
};
```

## Рекомендации по разработке

1. **Новые компоненты**: Создавайте в соответствующей папке с индексным файлом
2. **Типизация**: Всегда добавляйте TypeScript типы
3. **Тестирование**: Пишите тесты для критической бизнес-логики
4. **Документация**: Обновляйте документацию при изменении архитектуры
5. **Константы**: Используйте константы вместо магических строк
6. **Утилиты**: Создавайте переиспользуемые утилиты
