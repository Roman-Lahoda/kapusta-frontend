export const Month = {
  1: 'ЯНВАРЬ',
  2: 'ФЕВРАЛЬ',
  3: 'МАРТ',
  4: 'АПРЕЛЬ',
  5: 'МАЙ',
  6: 'ИЮНЬ',
  7: 'ИЮЛЬ',
  8: 'АВГУСТ',
  9: 'СЕНТЯБРЬ',
  10: 'ОКТЯБРЬ',
  11: 'НОЯБРЬ',
  12: 'ДЕКАБРЬ',
};

export const EXPENSES = {
  category: [
    { value: 'transport', label: 'Транспорт' },
    { value: 'food', label: 'Продукты' },
    { value: 'health', label: 'Здоровье' },
    { value: 'alcohol', label: 'Алкоголь' },
    { value: 'entertaiment', label: 'Развлечение' },
    { value: 'housing', label: 'Все для дома' },
    { value: 'technics', label: 'Техника' },
    { value: 'communal', label: 'Комуналка, Связь' },
    { value: 'sport', label: 'Спорт, Хобби' },
    { value: 'education', label: 'Образование' },
    { value: 'other', label: 'Прочее' },
  ],

  title: 'Категория товара',
  description: 'Описание товара',
  type: 'expense',
};



export const INCOMES = {
  category: [
    { value: 'salary', label: 'ЗП' },
    { value: 'additionalincome', label: 'Доп. доход' },
  ],

  title: 'Категория дохода',
  description: 'Описание дохода',
  type: 'income',
};
