import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,      // Глобальні змінні для браузера
        module: "readonly",      // Глобальні змінні для Node.js
        require: "readonly",     // Глобальні змінні для Node.js
      },
      parserOptions: {
        ecmaVersion: 12,  // Версія ECMAScript
      },
      ecmaFeatures: {
        jsx: true,  // Дозволяє JSX у файлах
      }
    },
    plugins: {
      "eslint-plugin-react": pluginReact,
    },
    // Додаємо конфігурації без використання "extends"
    ...pluginJs.configs.recommended,
    ...pluginReact.configs.flat.recommended,
    rules: {
      "react/prop-types": "off",  // Вимкнення PropTypes
    }
  }
];