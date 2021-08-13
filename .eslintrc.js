module.exports = {
  env: {
    browser: true,
    es6: true,
    es2017: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    // Проверяем правила хуков
    // Проверка Не вызываются ли хуки внутри циклов, условных операторов или вложенных функций.
    'react-hooks/rules-of-hooks': 'error',
    // Проверяем зависимости эффекта
    'react-hooks/exhaustive-deps': 'warn',
    // Запретить неиспользуемые переменные
    'no-unused-vars': 'off',
    // Запретить неиспользуемые переменные в typescript
    '@typescript-eslint/no-unused-vars': 'off',
    // Запрещает ненулевые утверждения с использованием!
    '@typescript-eslint/no-non-null-assertion': 'off',
    // Запрещает использование до его инициализации
    "no-use-before-define": "off",
    // Запрещает использование до его инициализации
    "@typescript-eslint/no-use-before-define": ["error"],
    // запретить объявления переменных из теневых переменных, объявленных во внешнем скоупе
    "no-shadow": ["error", { "builtinGlobals": true, "hoist": "functions", "allow": [] }],
    // требовать или запрещать точку с запятой 
    semi: 'off',
    // требовать или запрещать точку с запятой 
    '@typescript-eslint/semi': ['error'],
    // Требовать CamelCase
    camelcase: 'warn',
    // Обеспечить соблюдение соглашения в порядке импорта модулей
    'import/order': 'warn',
    // Предотвращение отсутствия проверки свойств в определении компонента React
    'react/prop-types': 'off',
    // 
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
    // Обеспечьте постоянное использование расширения файла в пути импорта
    'import/extensions': [
      'error',
      {
        ts: 'never',
        tsx: 'never',
        json: 'always',
        svg: 'never',
      },
    ],
    // экспорт по дефолту
    'import/prefer-default-export': 'off',
    // предпочтительно типизировать с помощью интерфейсов
    '@typescript-eslint/prefer-interface': 'off',
    // Запрещение или принудительное использование пробелов внутри скобок
    'array-bracket-spacing': 'warn',
    // обеспечить постоянный интервал внутри фигурных скобок
    'object-curly-spacing': 'warn',
    // Требовать явные возвращаемые типы для функций и методов класса
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Требовать явного возврата и типов аргументов в методах открытого класса экспортируемых функций и классов
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Запрещает использование @ ts- комментариев или требует описания после директивы
    '@typescript-eslint/ban-ts-comment': 'warn',
    // Запрещает использование операторов require, кроме операторов импорта.
    '@typescript-eslint/no-var-requires': 'warn',
    // Обеспечивает выполнение операторов возврата в обратных вызовах методов массива
    'array-callback-return': 'warn',
    // запретить spread props
    'react/jsx-props-no-spreading': 'off',
    // Запретить неиспользуемые выражения
    'no-unused-expressions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'global-require': 'off',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        path: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
